import { supabase } from "../lib/supabaseClient";

export const getUser = async () => {
  const { data, error, status } = await supabase
    .from('Users')
    .select('*')

    console.log({status, error})
    
    if (error) {
      res.status(status).json({error});
    }
  return {data, error, status}
};
