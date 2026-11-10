import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostCard from "./components/PostCard";
import CreatePost from "./CreatePost"; 


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Getting Started with React", excerpt: "Components are just functions that return markup.", author: "Alex", likes: 0 },
    { id: 2, title: "My First Deployment", excerpt: "I deployed my site and it was live on the internet.", author: "Sam", likes: 0 },
  ]);

  const handleLike = (id) => {
    setPosts(prev => prev.map(post =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };
    const handleAddPost = (newPost) => {
    setPosts(prev => [newPost, ...prev]);
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        <h2>Latest Posts</h2>
       <CreatePost onAddPost={handleAddPost} /> 
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            onLike={() => handleLike(post.id)}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;