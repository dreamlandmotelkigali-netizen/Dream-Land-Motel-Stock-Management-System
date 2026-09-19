// =====================================================
// DREAM LAND MOTEL SYSTEM
// SUPABASE DATABASE CONNECTION
// =====================================================
const SUPABASE_URL = "https://zqaxfbnwikundlzxrwly.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_IbxPG9SorlFc1UyqJArpRQ_EMjFdtN8";

const db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
console.log("SUPABASE CONNECTED:", SUPABASE_URL);