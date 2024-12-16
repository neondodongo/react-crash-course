import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";

const PostList = () => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Brittany" body="Weeeeeee" />
      </ul>
    </>
  );
};

export default PostList;
