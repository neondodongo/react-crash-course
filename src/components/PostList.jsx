import Post from "./Post";
import styles from "./PostList.module.css";
import { v4 as uuidv4 } from "uuid";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const posts = useLoaderData();

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  function generatePostKey() {
    return uuidv4();
  }

  return (
    <>
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => {
            return (
              <Post
                key={generatePostKey()}
                author={post.author}
                body={post.body}
              />
            );
          })}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostList;
