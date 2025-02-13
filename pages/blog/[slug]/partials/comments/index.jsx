import styles from "./comments.module.css";
import Comment from "../comment";
import {getComments} from "../../../../../api-routes/comments"
import useSWR from "swr"


export const commentsCacheKey = "/comments"


export default function Comments({ postId }) {
  /* 
  Here is a good place to fetch the comments from the database that has a 
  foreign key relation to the post.
  */
  const {data: {data = [] } = {}, error,} = useSWR(postId ? commentsCacheKey: null, () => getComments(postId));

  return (
    <div className={styles.container}>
      <h2>Comments</h2>
      {data.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
}
