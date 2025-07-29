import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jlqjnhfoztzjltoifsdt.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpscWpuaGZvenR6amx0b2lmc2R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3OTg2ODksImV4cCI6MjA2OTM3NDY4OX0.STMRxeVldjb4kLhkHKi9E3OJlnCL1jSwpOL5W1tOIYM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
