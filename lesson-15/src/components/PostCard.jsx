function PostCard({ post, onLike }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <p>By {post.author}</p>
      <button onClick={onLike}>❤️ {post.likes}</button>
    </div>
  );
}

export default PostCard;