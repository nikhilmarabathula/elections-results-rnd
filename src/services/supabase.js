import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tklutkbjouappostsxqy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrbHV0a2Jqb3VhcHBvc3RzeHF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyOTI3NjcsImV4cCI6MjAyNDg2ODc2N30.I9evBznTH4-Wpm07nF8D9AGIExYEm_dFIbhJslPAoFM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
