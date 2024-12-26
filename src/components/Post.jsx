import { Link } from "react-router-dom";
import styles from "./Post.module.css";

function Post({ id, author, body }) {
  const uri = `/post/${id}`;
  return (
    <li className={styles.post}>
      <Link to={uri}>
        <p className={styles.author}>{author}</p>
        <p className={styles.text}>{body}</p>
      </Link>
    </li>
  );
}

export default Post;
