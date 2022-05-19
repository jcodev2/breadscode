import supabase from './supabase'

const getBakeries = async () => {
  const { data: bakeries, error } = await supabase.from('bakeries').select('*')

  return [bakeries, error]
}

const getBreads = async () => {
  const { data: breads, error } = await supabase.from('breads').select('*')

  return [breads, error]
}

export { getBakeries, getBreads }
