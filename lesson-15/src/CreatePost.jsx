import { useState } from "react";

function CreatePost({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !text) return;

    onAddPost({
      id: Date.now(),
      title: title,
      excerpt: text,
      author: "You",
      likes: 0,
    });

    setTitle("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>Add New Post</h3>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", margin: "5px", width: "90%" }}
      />
      <input
        placeholder="Write something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ display: "block", margin: "5px", width: "90%" }}
      />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default CreatePost;