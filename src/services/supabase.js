import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wuhrnmymwgrxndiziuei.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1aHJubXltd2dyeG5kaXppdWVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwMzI3NTEsImV4cCI6MjAyNDYwODc1MX0.yo0QuDHQErLJmAhzDp8aIhY5ZQJSXP2d_60Mk4AJ9mI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
