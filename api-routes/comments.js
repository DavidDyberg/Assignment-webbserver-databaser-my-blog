import { supabase } from "../lib/supabaseClient";

export const getComments = async (postId) => {
  const { data, error, status } = await supabase
  .from('comments')
  .select()
  .eq("post_id", postId)
   return { data, error, status};
};

export const addComment = async (_,{arg: newComment}) => {
  const { data, error, status } = await supabase
  .from('comments')
  .insert(newComment)
  .eq("post_id", newComment.postId)
  .single()
  .select()
   return { data, error, status};
};

export const removeComment = async (_, { arg: post_id }) => {
  const {data, error, status} = await supabase
  .from('comments')
  .delete()
  .eq('id', post_id)
  return {data, error, status}
};