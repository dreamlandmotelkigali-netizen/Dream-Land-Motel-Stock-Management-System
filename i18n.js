/* =========================================================
   DREAM LAND MOTEL SYSTEM
   i18n.js
   English ↔ Kinyarwanda
   Shared Language System
   ========================================================= */

(function () {
    "use strict";

    // =========================================================
    // TRANSLATIONS
    // =========================================================

    const translations = {

        // =====================================================
        // ENGLISH
        // =====================================================

        en: {

            // -------------------------------------------------
            // GENERAL
            // -------------------------------------------------

            appName: "Dream Land Motel System",
            dashboard: "Dashboard",
            home: "Home",
            login: "Login",
            logout: "Logout",
            save: "Save",
            cancel: "Cancel",
            close: "Close",
            edit: "Edit",
            delete: "Delete",
            search: "Search",
            filter: "Filter",
            refresh: "Refresh",
            loading: "Loading...",
            noData: "No data found",
            actions: "Actions",
            status: "Status",
            date: "Date",
            total: "Total",
            amount: "Amount",
            quantity: "Quantity",
            price: "Price",
            name: "Name",
            category: "Category",
            unit: "Unit",
            branch: "Branch",
            combined: "Combined",
            today: "Today",
            thisMonth: "This Month",
            customDate: "Custom Date",
            from: "From",
            to: "To",
            apply: "Apply",
            reset: "Reset",

            // -------------------------------------------------
            // NAVIGATION
            // -------------------------------------------------

            products: "Products",
            stockIn: "Stock In",
            issueToServer: "Issue to Server",
            returnStock: "Return Stock",
            waste: "Waste",
            newSale: "New Sale",
            debts: "Debts",
            expenses: "Expenses",
            reports: "Reports",
            operatingPurchases: "Operating Purchases",
            profits: "Profits",

            // -------------------------------------------------
            // PRODUCTS
            // -------------------------------------------------

            product: "Product",
            productsList: "Products List",
            addProduct: "Add Product",
            productName: "Product Name",
            sellingPrice: "Selling Price",
            purchasePrice: "Purchase Price",
            minimumStock: "Minimum Stock",
            stockQuantity: "Stock Quantity",
            barcode: "Barcode",
            active: "Active",
            inactive: "Inactive",

            // -------------------------------------------------
            // STOCK
            // -------------------------------------------------

            stock: "Stock",

            stockInTitle: "Stock In",

            stockInDescription:
                "Products purchased and added to stock",

            issueTitle: "Issue to Server",

            issueDescription:
                "Products leaving stock to be used by the server",

            returnTitle: "Return Stock",

            returnDescription:
                "Products returned by the server",

            wasteTitle: "Waste",

            wasteDescription:
                "Products damaged or no longer allowed to be sold",

            currentStock: "Current Stock",

            lowStock: "Low Stock",

            stockMovement: "Stock Movement",

            // -------------------------------------------------
            // DEBTS
            // -------------------------------------------------

            debtsTitle: "Debts",

            supplierDebt: "Supplier Debt",

            supplierDebtDescription:
                "Money that we still owe the supplier",

            customerDebt: "Customer Debt",

            customerDebtDescription:
                "Money that the customer has not yet paid",

            debtAmount: "Debt Amount",

            paidAmount: "Paid Amount",

            remainingAmount: "Remaining Amount",

            paymentStatus: "Payment Status",

            paid: "Paid",

            partial: "Partial",

            credit: "Credit",

            // -------------------------------------------------
            // SALES
            // -------------------------------------------------

            sales: "Sales",

            newSaleTitle: "New Sale",

            saleNumber: "Sale Number",

            customerName: "Customer Name",

            server: "Server",

            paymentMethod: "Payment Method",

            cash: "Cash",

            mobileMoney: "Mobile Money",

            card: "Card",

            bank: "Bank",

            addToCart: "Add to Cart",

            cart: "Cart",

            checkout: "Checkout",

            completeSale: "Complete Sale",

            saleCompleted:
                "Sale completed successfully",

            noItems: "No items added",

            // -------------------------------------------------
            // EXPENSES
            // -------------------------------------------------

            expensesTitle: "Expenses",

            addExpense: "Add Expense",

            expenseCategory: "Expense Category",

            description: "Description",

            paidTo: "Paid To",

            expenseDate: "Expense Date",

            // -------------------------------------------------
            // OPERATING PURCHASES
            // -------------------------------------------------

            operatingPurchasesTitle:
                "Operating Purchases",

            operatingPurchaseDescription:
                "Purchases used to operate the business and not treated as inventory",

            itemName: "Item Name",

            supplierName: "Supplier Name",

            purchaseDate: "Purchase Date",

            unitPrice: "Unit Price",

            // -------------------------------------------------
            // PROFITS
            // -------------------------------------------------

            profitsTitle: "Profits",

            profitsDescription:
                "Sales, cost of goods sold and operating costs",

            totalSales: "Total Sales",

            costOfGoodsSold:
                "Cost of Goods Sold",

            grossProfit: "Gross Profit",

            operatingExpenses: "Expenses",

            netProfit: "Net Profit",

            netProfitMargin:
                "Net Profit Margin",

            productProfitability:
                "Product Profitability",

            salesProfitDetail:
                "Sales Profit Detail",

            salesAmount:
                "Sales Amount",

            costAmount:
                "Cost Amount",

            grossProfitAmount:
                "Gross Profit",

            unitCost:
                "Unit Cost",

            profit:
                "Profit",

            margin:
                "Margin",

            // -------------------------------------------------
            // REPORTS
            // -------------------------------------------------

            reportsTitle: "Reports",

            financialOverview:
                "Financial Overview",

            salesReport:
                "Sales Report",

            stockReport:
                "Stock Report",

            debtReport:
                "Debt Report",

            expenseReport:
                "Expense Report",

            branchPerformance:
                "Branch Performance",

            // -------------------------------------------------
            // AUTHENTICATION
            // -------------------------------------------------

            username: "Username",

            password: "Password",

            forgotPassword:
                "Forgot Password?",

            resetPassword:
                "Reset Password",

            newPassword:
                "New Password",

            confirmPassword:
                "Confirm Password",

            signIn:
                "Sign In",

            signingIn:
                "Signing in...",

            invalidLogin:
                "Invalid username or password",

            accessRestricted:
                "Access Restricted",

            notAuthorized:
                "You are not authorized to access this section.",

            sessionExpired:
                "Your session has expired. Please login again.",

            accountInactive:
                "Your account is inactive. Please contact an administrator.",

            // -------------------------------------------------
            // PASSWORD RECOVERY
            // -------------------------------------------------

            securePasswordRecovery:
                "Secure Password Recovery",

            resetYourPassword:
                "Reset your password",

            recoveryCode:
                "Recovery Code",

            enterUsername:
                "Enter your username",

            enterRecoveryCode:
                "Enter your recovery code",

            recoveryHint:
                "Enter the one-time recovery code provided by the system administrator. The code expires after 15 minutes and can only be used once.",

            continue:
                "Continue",

            verifying:
                "Verifying...",

            backToLogin:
                "← Back to Login",

            passwordRecoveryFailed:
                "Recovery failed. Please check your username and recovery code.",

            passwordRecoverySuccess:
                "Code verified. Redirecting you to set a new password...",

            passwordRecoveryInvalid:
                "This password recovery session is not valid or has expired. Please request a new recovery code.",

            passwordTooShort:
                "Password must contain at least 8 characters.",

            passwordMismatch:
                "The passwords do not match.",

            passwordUpdated:
                "Password updated successfully. You can now login with your new password.",

            passwordUpdateFailed:
                "We could not update your password. Please request a new recovery code and try again.",

            passwordSameAsOld:
                "Your new password must be different from the old password.",

            passwordRules:
                "Use at least 8 characters.",

            updating:
                "UPDATING...",

            show:
                "Show",

            hide:
                "Hide",

            // -------------------------------------------------
            // ROLES
            // -------------------------------------------------

            admin: "Admin",

            manager: "Manager",

            cashier: "Cashier",

            // -------------------------------------------------
            // BRANCHES
            // -------------------------------------------------

            kabuga: "Kabuga",

            bisenga: "Bisenga",

            // -------------------------------------------------
            // MESSAGES
            // -------------------------------------------------

            success: "Success",

            error: "Error",

            warning: "Warning",

            information: "Information",

            savedSuccessfully:
                "Saved successfully",

            deletedSuccessfully:
                "Deleted successfully",

            somethingWentWrong:
                "Something went wrong. Please try again.",

            requiredField:
                "This field is required.",

            invalidAmount:
                "Please enter a valid amount.",

            invalidQuantity:
                "Please enter a valid quantity.",

            // -------------------------------------------------
            // FOOTER
            // -------------------------------------------------

            footer:
                "Dream Land Motel System 2026"
        },


        // =====================================================
        // KINYARWANDA
        // =====================================================

        rw: {

            // -------------------------------------------------
            // GENERAL
            // -------------------------------------------------

            appName:
                "Sisitemu ya Dream Land Motel",

            dashboard:
                "Ahabanza",

            home:
                "Ahabanza",

            login:
                "Kwinjira",

            logout:
                "Gusohoka",

            save:
                "Kubika",

            cancel:
                "Kureka",

            close:
                "Gufunga",

            edit:
                "Guhindura",

            delete:
                "Gusiba",

            search:
                "Shakisha",

            filter:
                "Shungura",

            refresh:
                "Kongera Gutangiza",

            loading:
                "Birimo gutegurwa...",

            noData:
                "Nta makuru ahari",

            actions:
                "Ibikorwa",

            status:
                "Imiterere",

            date:
                "Itariki",

            total:
                "Igiteranyo",

            amount:
                "Amafaranga",

            quantity:
                "Umubare",

            price:
                "Igiciro",

            name:
                "Izina",

            category:
                "Icyiciro",

            unit:
                "Igipimo",

            branch:
                "Ishami",

            combined:
                "Amashami Yombi",

            today:
                "Uyu Munsi",

            thisMonth:
                "Uku Kwezi",

            customDate:
                "Itariki Wihitiyemo",

            from:
                "Kuva",

            to:
                "Kugeza",

            apply:
                "Shyira mu bikorwa",

            reset:
                "Ongera utangire",

            // -------------------------------------------------
            // NAVIGATION
            // -------------------------------------------------

            products:
                "Ibicuruzwa",

            stockIn:
                "Kwinjiza Stock",

            issueToServer:
                "Guha Server Ibicuruzwa",

            returnStock:
                "Kugarura Stock",

            waste:
                "Ibicuruzwa Byangiritse",

            newSale:
                "Kugurisha",

            debts:
                "Imyenda",

            expenses:
                "Amafaranga Akoreshwa",

            reports:
                "Raporo",

            operatingPurchases:
                "Ibyaguzwe mu Mikorere",

            profits:
                "Inyungu",

            // -------------------------------------------------
            // PRODUCTS
            // -------------------------------------------------

            product:
                "Igicuruzwa",

            productsList:
                "Urutonde rw'Ibicuruzwa",

            addProduct:
                "Kongeramo Igicuruzwa",

            productName:
                "Izina ry'Igicuruzwa",

            sellingPrice:
                "Igiciro cyo Kugurisha",

            purchasePrice:
                "Igiciro cyo Kugura",

            minimumStock:
                "Stock Ntarengwa",

            stockQuantity:
                "Umubare uri muri Stock",

            barcode:
                "Barcode",

            active:
                "Kirakora",

            inactive:
                "Ntirikora",

            // -------------------------------------------------
            // STOCK
            // -------------------------------------------------

            stock:
                "Stock",

            stockInTitle:
                "Kwinjiza Stock",

            stockInDescription:
                "Ibicuruzwa umaze kurangura ukabishyira muri stock",

            issueTitle:
                "Guha Server Ibicuruzwa",

            issueDescription:
                "Ibicuruzwa bivuye muri stock bigiye gukoreshwa na server",

            returnTitle:
                "Kugarura Stock",

            returnDescription:
                "Ibicuruzwa server agaruyemo",

            wasteTitle:
                "Ibicuruzwa Byangiritse",

            wasteDescription:
                "Ibicuruzwa byangiritse cyangwa bitakemewe kongera kugurishwa",

            currentStock:
                "Stock Ihari",

            lowStock:
                "Stock Nto",

            stockMovement:
                "Imigendekere ya Stock",

            // -------------------------------------------------
            // DEBTS
            // -------------------------------------------------

            debtsTitle:
                "Imyenda",

            supplierDebt:
                "Umwenda w'Umucuruzi",

            supplierDebtDescription:
                "Amafaranga dusigaye tubereyemo supplier",

            customerDebt:
                "Umwenda w'Umukiriya",

            customerDebtDescription:
                "Amafaranga umukiriya atarishyura",

            debtAmount:
                "Amafaranga y'Umwenda",

            paidAmount:
                "Amafaranga Yishyuwe",

            remainingAmount:
                "Amafaranga Asigaye",

            paymentStatus:
                "Uko Kwishyura Kumeze",

            paid:
                "Yishyuwe",

            partial:
                "Igice Cyishyuwe",

            credit:
                "Umwenda",

            // -------------------------------------------------
            // SALES
            // -------------------------------------------------

            sales:
                "Ubucuruzi",

            newSaleTitle:
                "Kugurisha",

            saleNumber:
                "Numero y'Ubucuruzi",

            customerName:
                "Izina ry'Umukiriya",

            server:
                "Server",

            paymentMethod:
                "Uburyo bwo Kwishyura",

            cash:
                "Cash",

            mobileMoney:
                "Mobile Money",

            card:
                "Ikarita",

            bank:
                "Banki",

            addToCart:
                "Shyira mu Gitebo",

            cart:
                "Gitebo",

            checkout:
                "Kwishyura",

            completeSale:
                "Soza Ubucuruzi",

            saleCompleted:
                "Ubucuruzi bwakozwe neza",

            noItems:
                "Nta bicuruzwa byashyizweho",

            // -------------------------------------------------
            // EXPENSES
            // -------------------------------------------------

            expensesTitle:
                "Amafaranga Akoreshwa",

            addExpense:
                "Ongeramo Amafaranga Yakoreshejwe",

            expenseCategory:
                "Icyiciro cy'Amafaranga",

            description:
                "Ibisobanuro",

            paidTo:
                "Yishyuwe Kuri",

            expenseDate:
                "Itariki Yakoreshejweho",

            // -------------------------------------------------
            // OPERATING PURCHASES
            // -------------------------------------------------

            operatingPurchasesTitle:
                "Ibyaguzwe mu Mikorere",

            operatingPurchaseDescription:
                "Ibyaguzwe mu gukoresha no gucunga ibikorwa bya business, bitari stock yo kugurisha",

            itemName:
                "Izina ry'Ikintu",

            supplierName:
                "Izina rya Supplier",

            purchaseDate:
                "Itariki yo Kugura",

            unitPrice:
                "Igiciro kuri Unit",

            // -------------------------------------------------
            // PROFITS
            // -------------------------------------------------

            profitsTitle:
                "Inyungu",

            profitsDescription:
                "Ubucuruzi, ikiguzi cy'ibicuruzwa byagurishijwe n'amafaranga akoreshwa",

            totalSales:
                "Amafaranga Yose Yagurishijwe",

            costOfGoodsSold:
                "Ikiguzi cy'Ibicuruzwa Byagurishijwe",

            grossProfit:
                "Inyungu Mbumbe",

            operatingExpenses:
                "Amafaranga Akoreshwa",

            netProfit:
                "Inyungu Nyuma y'Ibindi Byose",

            netProfitMargin:
                "Igipimo cy'Inyungu Nyuma y'Ibindi Byose",

            productProfitability:
                "Inyungu kuri Buri Gicuruzwa",

            salesProfitDetail:
                "Ibisobanuro by'Inyungu kuri Buri Bucuruzi",

            salesAmount:
                "Amafaranga Yagurishijwe",

            costAmount:
                "Ikiguzi",

            grossProfitAmount:
                "Inyungu Mbumbe",

            unitCost:
                "Ikiguzi kuri Unit",

            profit:
                "Inyungu",

            margin:
                "Igipimo cy'Inyungu",

            // -------------------------------------------------
            // REPORTS
            // -------------------------------------------------

            reportsTitle:
                "Raporo",

            financialOverview:
                "Incamake y'Amafaranga",

            salesReport:
                "Raporo y'Ubucuruzi",

            stockReport:
                "Raporo ya Stock",

            debtReport:
                "Raporo y'Imyenda",

            expenseReport:
                "Raporo y'Amafaranga Akoreshwa",

            branchPerformance:
                "Imikorere y'Amashami",

            // -------------------------------------------------
            // AUTHENTICATION
            // -------------------------------------------------

            username:
                "Username",

            password:
                "Password",

            forgotPassword:
                "Wibagiwe Password?",

            resetPassword:
                "Hindura Password",

            newPassword:
                "Password Nshya",

            confirmPassword:
                "Emeza Password",

            signIn:
                "Kwinjira",

            signingIn:
                "Birimo kwinjira...",

            invalidLogin:
                "Username cyangwa password si byo",

            accessRestricted:
                "Ntabwo Wemerewe",

            notAuthorized:
                "Ntabwo wemerewe kugera kuri iki gice.",

            sessionExpired:
                "Igihe cyo kwinjiramo cyarangiye. Ongera winjire.",

            accountInactive:
                "Konti yawe ntabwo iri gukora. Vugana n'umuyobozi.",

            // -------------------------------------------------
            // PASSWORD RECOVERY
            // -------------------------------------------------

            securePasswordRecovery:
                "Gusubizamo Ijambo ry'Ibanga mu Mutekano",

            resetYourPassword:
                "Hindura ijambo ry'ibanga",

            recoveryCode:
                "Recovery Code",

            enterUsername:
                "Andika username yawe",

            enterRecoveryCode:
                "Andika recovery code",

            recoveryHint:
                "Andika recovery code wahawe n'umuyobozi wa system. Code irangira nyuma y'iminota 15 kandi ikoreshwa inshuro imwe gusa.",

            continue:
                "Komeza",

            verifying:
                "Birimo kugenzurwa...",

            backToLogin:
                "← Subira kuri Login",

            passwordRecoveryFailed:
                "Recovery yananiwe. Reba username na recovery code.",

            passwordRecoverySuccess:
                "Code yemerewe. Turakujyana kuri page yo gushyiraho password nshya...",

            passwordRecoveryInvalid:
                "Session yo guhindura password ntabwo yemewe cyangwa yararengeje igihe. Saba recovery code nshya.",

            passwordTooShort:
                "Password igomba kugira nibura inyuguti 8.",

            passwordMismatch:
                "Password zombi ntizihura.",

            passwordUpdated:
                "Password yahinduwe neza. Ushobora noneho kwinjira ukoresheje password nshya.",

            passwordUpdateFailed:
                "Ntabwo twashoboye guhindura password. Saba recovery code nshya wongere ugerageze.",

            passwordSameAsOld:
                "Password nshya igomba kuba itandukanye n'iya kera.",

            passwordRules:
                "Koresha nibura inyuguti 8.",

            updating:
                "BIRIMO GUHINDURWA...",

            show:
                "Erekana",

            hide:
                "Hisha",

            // -------------------------------------------------
            // ROLES
            // -------------------------------------------------

            admin:
                "Admin",

            manager:
                "Manager",

            cashier:
                "Cashier",

            // -------------------------------------------------
            // BRANCHES
            // -------------------------------------------------

            kabuga:
                "Kabuga",

            bisenga:
                "Bisenga",

            // -------------------------------------------------
            // MESSAGES
            // -------------------------------------------------

            success:
                "Byagenze neza",

            error:
                "Ikosa",

            warning:
                "Iburira",

            information:
                "Amakuru",

            savedSuccessfully:
                "Byabitswe neza",

            deletedSuccessfully:
                "Byasibwe neza",

            somethingWentWrong:
                "Hari ikitagenda neza. Ongera ugerageze.",

            requiredField:
                "Iki gice kigomba kuzuzwa.",

            invalidAmount:
                "Andikamo amafaranga yemewe.",

            invalidQuantity:
                "Andikamo umubare wemewe.",

            // -------------------------------------------------
            // FOOTER
            // -------------------------------------------------

            footer:
                "Dream Land Motel System 2026"
        }
    };


    // =========================================================
    // LANGUAGE STATE
    // =========================================================

    const LANGUAGE_STORAGE_KEY =
        "dreamland_language";

    const savedLanguage =
        localStorage.getItem(
            LANGUAGE_STORAGE_KEY
        );

    let currentLanguage =
        Object.prototype.hasOwnProperty.call(
            translations,
            savedLanguage
        )
            ? savedLanguage
            : "en";


    // =========================================================
    // GET LANGUAGE
    // =========================================================

    function getLanguage() {
        return currentLanguage;
    }


    // =========================================================
    // SET LANGUAGE
    // =========================================================

    function setLanguage(language) {

        if (
            !Object.prototype.hasOwnProperty.call(
                translations,
                language
            )
        ) {
            language = "en";
        }

        if (currentLanguage === language) {
            applyTranslations();
            return;
        }

        currentLanguage = language;

        localStorage.setItem(
            LANGUAGE_STORAGE_KEY,
            currentLanguage
        );

        applyTranslations();

        document.dispatchEvent(
            new CustomEvent(
                "languageChanged",
                {
                    detail: {
                        language:
                            currentLanguage
                    }
                }
            )
        );
    }


    // =========================================================
    // TRANSLATE
    // =========================================================

    function t(key) {

        if (!key) {
            return "";
        }

        return (
            translations[currentLanguage]?.[key] ??
            translations.en?.[key] ??
            key
        );
    }


    // =========================================================
    // APPLY TRANSLATIONS
    // =========================================================

    function applyTranslations(
        root = document
    ) {

        if (!root) {
            return;
        }

        // -----------------------------------------------------
        // Normal text
        // -----------------------------------------------------

        root
            .querySelectorAll(
                "[data-i18n]"
            )
            .forEach(
                function (element) {

                    const key =
                        element.getAttribute(
                            "data-i18n"
                        );

                    element.textContent =
                        t(key);
                }
            );


        // -----------------------------------------------------
        // Placeholder
        // -----------------------------------------------------

        root
            .querySelectorAll(
                "[data-i18n-placeholder]"
            )
            .forEach(
                function (element) {

                    const key =
                        element.getAttribute(
                            "data-i18n-placeholder"
                        );

                    element.setAttribute(
                        "placeholder",
                        t(key)
                    );
                }
            );


        // -----------------------------------------------------
        // Title
        // -----------------------------------------------------

        root
            .querySelectorAll(
                "[data-i18n-title]"
            )
            .forEach(
                function (element) {

                    const key =
                        element.getAttribute(
                            "data-i18n-title"
                        );

                    element.setAttribute(
                        "title",
                        t(key)
                    );
                }
            );


        // -----------------------------------------------------
        // Input value
        // -----------------------------------------------------

        root
            .querySelectorAll(
                "[data-i18n-value]"
            )
            .forEach(
                function (element) {

                    const key =
                        element.getAttribute(
                            "data-i18n-value"
                        );

                    element.value =
                        t(key);
                }
            );


        // -----------------------------------------------------
        // HTML language attribute
        // -----------------------------------------------------

        document.documentElement.lang =
            currentLanguage === "rw"
                ? "rw"
                : "en";


        // -----------------------------------------------------
        // Language buttons
        // -----------------------------------------------------

        updateLanguageButtons();
    }


    // =========================================================
    // UPDATE LANGUAGE BUTTONS
    // =========================================================

    function updateLanguageButtons() {

        document
            .querySelectorAll(
                "[data-language]"
            )
            .forEach(
                function (button) {

                    const language =
                        button.getAttribute(
                            "data-language"
                        );

                    const active =
                        language ===
                        currentLanguage;

                    button.classList.toggle(
                        "active-language",
                        active
                    );

                    if (active) {

                        button.setAttribute(
                            "aria-current",
                            "true"
                        );

                    } else {

                        button.removeAttribute(
                            "aria-current"
                        );
                    }
                }
            );
    }


    // =========================================================
    // CREATE LANGUAGE SWITCHER
    // =========================================================

    function createLanguageSwitcher(
        container
    ) {

        if (!container) {
            return;
        }

        container.innerHTML = `
            <div class="language-switcher">

                <button
                    type="button"
                    data-language="en"
                    aria-label="English"
                >
                    English
                </button>

                <button
                    type="button"
                    data-language="rw"
                    aria-label="Kinyarwanda"
                >
                    Kinyarwanda
                </button>

            </div>
        `;

        // No local click listener here.
        // The global listener below handles all
        // [data-language] buttons.

        updateLanguageButtons();
    }


    // =========================================================
    // GLOBAL LANGUAGE CLICK HANDLER
    // =========================================================

    document.addEventListener(
        "click",
        function (event) {

            const target =
                event.target;

            if (
                !target ||
                typeof target.closest !==
                    "function"
            ) {
                return;
            }

            const button =
                target.closest(
                    "[data-language]"
                );

            if (!button) {
                return;
            }

            const language =
                button.getAttribute(
                    "data-language"
                );

            if (
                Object.prototype.hasOwnProperty.call(
                    translations,
                    language
                )
            ) {
                setLanguage(
                    language
                );
            }
        }
    );


    // =========================================================
    // DOM READY
    // =========================================================

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            applyTranslations();

        }
    );


    // =========================================================
    // PUBLIC API
    // =========================================================

    window.DreamLandI18n = {

        translations,

        getLanguage,

        setLanguage,

        t,

        applyTranslations,

        updateLanguageButtons,

        createLanguageSwitcher
    };

})();