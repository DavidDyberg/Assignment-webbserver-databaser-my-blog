import BlogEditor from "@/components/blog-editor";
import { createSlug } from "@/utils/createSlug";
import { getPost, addPost } from "../../api-routes/posts";
import useSWRMutation from "swr/mutation";
import { cacheKey } from "../blog";
import { useRouter } from "next/router";
import { useUser } from "@supabase/auth-helpers-react";

export default function CreatePost() {
  
  const router = useRouter();
  const user = useUser();
  const { trigger: createTrigger } = useSWRMutation(cacheKey, addPost);

  const handleOnSubmit = async ({ editorContent, titleInput, image,  }) => {
    const slug = createSlug(titleInput);
    console.log({ editorContent, titleInput, image, slug });

    const newPost = {
      title:titleInput,
      body:editorContent,
        slug,
        user_id: user.id,
        image,
      }

    const { error, status} = await createTrigger(newPost)

    router.push(`/blog/${slug}`)
  };

  return (
    <BlogEditor
      heading="Create post"
      onSubmit={handleOnSubmit}
      buttonText="Upload post"
    />
  );
}
