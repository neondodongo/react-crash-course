import styles from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";

const NewPost = () => {
  return (
    <Modal>
      <Form method="post" className={styles.form}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p className={styles.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
};

export default NewPost;

// By using the react-router-dom action, this function will be invoked and passed the data from the form
export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // { body: "...", author: "..." }
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // leverage react router to load a new route
  return redirect("/");
}
