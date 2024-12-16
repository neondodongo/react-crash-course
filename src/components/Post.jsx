import "./Post.css";

function Post({ author, body }) {
  return (
    <div className="post">
      <p>{author}</p>
      <p>{body}</p>
    </div>
  );
}

export default Post;
