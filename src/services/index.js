import supabase from './supabase'

const getBakeries = async () => {
  const { data: bakeries, error } = await supabase.from('bakeries').select('*')

  return [bakeries, error]
}

export { getBakeries }
