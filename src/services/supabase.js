import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://llljmilpvaqizsxmcrpj.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsbGptaWxwdmFxaXpzeG1jcnBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDk2MzQxOTYsImV4cCI6MTk2NTIxMDE5Nn0.dl20h3sreexh3kTX0kEX9Rb42nY6j_S3K_3UDsiCeNU'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
