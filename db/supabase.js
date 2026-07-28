import dotenv from "dotenv/config"
import {createClient} from "@supabase/supabase-js" 


const client = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY)

export {client}