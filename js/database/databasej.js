import { createClient } from '@supabase/supabase-js'

const SUPABASE_KEY = 's10L6kruJIHfguRP'
const SUPABASE_REF = 'igoyfsrthdefyrctcyty'

const supabaseUrl = `https://${SUPABASE_REF}.supabase.co`;
const supabaseKey = SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const { data, error } = await supabase
    .from('countries')
    .select();

console.log("🚀 ~ data:", data);