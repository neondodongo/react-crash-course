import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";
import Modal from "./Modal";
import { v4 as uuidv4 } from "uuid";

const PostList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  function generatePostKey() {
    return uuidv4();
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
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
