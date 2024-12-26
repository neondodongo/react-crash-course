import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";
import Modal from "./Modal";

const PostList = ({ isPosting, onStopPosting }) => {
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
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Brittany" body="Weeeeeee" />
      </ul>
    </>
  );
};

export default PostList;
