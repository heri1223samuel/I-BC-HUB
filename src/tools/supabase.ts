import { createClient } from "@supabase/supabase-js";

import type { Database } from "../types/database.types";

// const projectURL = import.meta.env.PROJECT_URL
const projectURL = import.meta.env.VITE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_PROJECT_KEY;

const supabase = createClient<Database>(projectURL, supabaseKey);

export default supabase;
