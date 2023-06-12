import { supabase } from "../lib/supabaseClient";

export const getPosts = async () => {
   const { data, error, status } = await supabase
   .from("posts")
   .select();
   return { data, error, status };
};


export const getPost = async ({slug}) => {
  const { data, error, status } = await supabase
  .from("posts")
  .select()
  .single()
  .eq('slug', slug)
  console.log(data)
   return { data, error, status };
}

export const addPost = async (_,{arg: newPost}) => {
  //Handle add post here
  const { data, error, status } = await supabase
    .from('posts')
    .insert(newPost)
    .single()
    .select()
    return {data, error, status}
};

export const removePost = async (_, { arg: id }) => {
  const { data, error, status } = await supabase
   .from("posts")
   .delete()
   .eq('id', id)
   return {data, error, status };
 
};

export const editPost = async (_, {arg: { title, body, slug, id}}) => {
  //Handle edit post here
  const {data, error, status} = await supabase
  .from('posts')
  .update({title, body, slug})
  .eq('id', id)
  .single()

  return {data, error, status };
};
