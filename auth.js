// =====================================================
// DREAM LAND MOTEL SYSTEM
// AUTHENTICATION & PAGE PROTECTION
// =====================================================

(function () {
"use strict";

// -------------------------------------------------  
// Configuration  
// -------------------------------------------------  

const LOGIN_PAGE = "index.html";  
const DASHBOARD_PAGE = "dashboard.html";  
const PROFILE_STORAGE_KEY = "dreamland_profile";  

// -------------------------------------------------  
// Internal helpers  
// -------------------------------------------------  

function isLoginPage() {  
    const file = window.location.pathname.split("/").pop();  
    return !file || file === LOGIN_PAGE;  
}  

function redirectToLogin() {  
    if (!isLoginPage()) {  
        window.location.replace(LOGIN_PAGE);  
    }  
}  

function saveProfile(profile) {  
    const safeProfile = {  
        id: profile.id,  
        username: profile.username || null,  
        full_name: profile.full_name || null,  
        role: profile.role || null,  
        branch_id: profile.branch_id || null,  
        active: profile.active === true  
    };  

    sessionStorage.setItem(  
        PROFILE_STORAGE_KEY,  
        JSON.stringify(safeProfile)  
    );  

    return safeProfile;  
}  

function clearStoredProfile() {  
    sessionStorage.removeItem(PROFILE_STORAGE_KEY);  
}  

function getStoredProfile() {  
    try {  
        const raw = sessionStorage.getItem(PROFILE_STORAGE_KEY);  

        if (!raw) {  
            return null;  
        }  

        return JSON.parse(raw);  
    } catch (error) {  
        console.error("Invalid stored profile:", error);  
        clearStoredProfile();  
        return null;  
    }  
}  

function normalizeRole(role) {  
    return String(role || "").trim().toLowerCase();  
}  

function isValidRole(role) {  
    return ["admin", "manager", "cashier"].includes(  
        normalizeRole(role)  
    );  
}  

// -------------------------------------------------  
// Load authenticated user + profile  
// -------------------------------------------------  

async function getAuthenticatedProfile() {  
    try {  
        // IMPORTANT:  
        // getUser() verifies the current user against  
        // the Supabase Auth server.  
        const {  
            data: { user },  
            error: userError  
        } = await db.auth.getUser();  

        if (userError) {  
            console.error("Auth user error:", userError);  
            return {  
                user: null,  
                profile: null,  
                error: userError  
            };  
        }  

        if (!user) {  
            return {  
                user: null,  
                profile: null,  
                error: null  
            };  
        }  

        // Profile belongs to the authenticated user.  
        const {  
            data: profile,  
            error: profileError  
        } = await db  
            .from("profiles")  
            .select(  
                "id, username, full_name, role, branch_id, active"  
            )  
            .eq("id", user.id)  
            .single();  

        if (profileError) {  
            console.error(  
                "Profile loading error:",  
                profileError  
            );  

            return {  
                user,  
                profile: null,  
                error: profileError  
            };  
        }  

        // -------------------------------------------------  
        // Security checks  
        // -------------------------------------------------  

        if (!profile) {  
            return {  
                user,  
                profile: null,  
                error: new Error("Profile not found.")  
            };  
        }  

        if (profile.id !== user.id) {  
            return {  
                user,  
                profile: null,  
                error: new Error(  
                    "Authenticated user and profile do not match."  
                )  
            };  
        }  

        if (profile.active !== true) {  
            return {  
                user,  
                profile: null,  
                error: new Error(  
                    "This account is inactive."  
                )  
            };  
        }  

        if (!isValidRole(profile.role)) {  
            return {  
                user,  
                profile: null,  
                error: new Error(  
                    "This account has an invalid role."  
                )  
            };  
        }  

        const safeProfile = saveProfile(profile);  

        return {  
            user,  
            profile: safeProfile,  
            error: null  
        };  

    } catch (error) {  
        console.error(  
            "Unexpected authentication error:",  
            error  
        );  

        return {  
            user: null,  
            profile: null,  
            error  
        };  
    }  
}  

// -------------------------------------------------  
// Require authentication  
// -------------------------------------------------  

async function requireAuth(options = {}) {  
    const redirectIfUnauthenticated =  
        options.redirectIfUnauthenticated !== false;  

    const result = await getAuthenticatedProfile();  

    if (!result.user || !result.profile) {  

        clearStoredProfile();  

        if (redirectIfUnauthenticated) {  
            redirectToLogin();  
        }  

        return null;  
    }  

    return result;  
}  

// -------------------------------------------------  
// Login-page protection  
// -------------------------------------------------  

async function redirectAuthenticatedUser() {  
    if (!isLoginPage()) {  
        return;  
    }  

    try {  
        const {  
            data: { user }  
        } = await db.auth.getUser();  

        if (user) {  
            const result = await getAuthenticatedProfile();  

            if (result.profile) {  
                window.location.replace(DASHBOARD_PAGE);  
            } else {  
                await signOut();  
            }  
        }  

    } catch (error) {  
        console.error(  
            "Login-page auth check failed:",  
            error  
        );  
    }  
}  

// -------------------------------------------------  
// Logout  
// -------------------------------------------------  

async function signOut() {  
    try {  
        const { error } = await db.auth.signOut({  
            scope: "local"  
        });  

        if (error) {  
            console.error("Logout error:", error);  
        }  

    } catch (error) {  
        console.error(  
            "Unexpected logout error:",  
            error  
        );  
    } finally {  
        clearStoredProfile();  

        window.location.replace(LOGIN_PAGE);  
    }  
}  

// -------------------------------------------------  
// Role helpers  
// -------------------------------------------------  

function hasRole(profile, role) {  
    if (!profile) {  
        return false;  
    }  

    return normalizeRole(profile.role) ===  
        normalizeRole(role);  
}  

function isAdmin(profile) {  
    return hasRole(profile, "admin");  
}  

function isManager(profile) {  
    return hasRole(profile, "manager");  
}  

function isCashier(profile) {  
    return hasRole(profile, "cashier");  
}  

// -------------------------------------------------  
// Branch permission  
// -------------------------------------------------  

function canAccessBranch(profile, branchId) {  
    if (!profile || !branchId) {  
        return false;  
    }  

    // Admin can access every branch.  
    if (isAdmin(profile)) {  
        return true;  
    }  

    // Manager/Cashier can only access their own branch.  
    if (  
        (isManager(profile) || isCashier(profile)) &&  
        profile.branch_id === branchId  
    ) {  
        return true;  
    }  

    return false;  
}  

// -------------------------------------------------  
// UI access message  
// -------------------------------------------------  

function showAccessRestricted(message) {  
    const defaultMessage =  
        "Access Restricted — Ntabwo wemerewe gukora iki gikorwa kuri iyi account.";  

    const text = message || defaultMessage;  

    alert(text);  

    return false;  
}  

// -------------------------------------------------  
// Require role  
// -------------------------------------------------  

function requireRole(profile, allowedRoles) {  
    if (!profile) {  
        showAccessRestricted();  
        return false;  
    }  

    const roles = Array.isArray(allowedRoles)  
        ? allowedRoles  
        : [allowedRoles];  

    const currentRole = normalizeRole(profile.role);  

    const allowed = roles.some(function (role) {  
        return normalizeRole(role) === currentRole;  
    });  

    if (!allowed) {  
        showAccessRestricted(  
            "Access Restricted — Ntabwo ufite uburenganzira bwo gukora iki gikorwa."  
        );  

        return false;  
    }  

    return true;  
}  

// -------------------------------------------------  
// Public API  
// -------------------------------------------------  

window.DreamLandAuth = {  
    requireAuth,  
    getAuthenticatedProfile,  
    redirectAuthenticatedUser,  
    signOut,  

    getStoredProfile,  
    clearStoredProfile,  

    hasRole,  
    isAdmin,  
    isManager,  
    isCashier,  

    canAccessBranch,  
    requireRole,  
    showAccessRestricted  
};  

// -------------------------------------------------  
// Automatic login-page check  
// -------------------------------------------------  

document.addEventListener("DOMContentLoaded", function () {  
    redirectAuthenticatedUser();  
});

})();