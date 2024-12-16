import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";

function PostList() {
  return (
    <>
      <NewPost />
      <ul className={styles.posts}>
        <Post author="Will" body="React is OK." />
        <Post author="Brittany" body="Weeeeeee" />
      </ul>
    </>
  );
}

export default PostList;
