import { useRouter } from "next/router";
import useSWR from "swr";
import { getPosts } from "../api-routes/posts";

function SearchPage() {
  const router = useRouter();
  const { q } = router.query;

  const { data: posts, error } = useSWR(`/search?q=${q}`, () =>
    getPosts({ searchQuery: q })
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Search Results for {q}</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          {/* Render other post details */}
        </div>
      ))}
    </div>
  );
}

export default SearchPage;
