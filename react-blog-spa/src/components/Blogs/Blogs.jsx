import { useEffect, useState } from "react";
import "./Blogs.css";
import Blog from "../Blog/Blog";
import Sidebar from "../Sidebar/Sidebar";

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="blogs">
      <div className="posts">
        {posts.map((post) => (
          <Blog key={post.id} post={post}></Blog>
        ))}
      </div>
      <Sidebar></Sidebar>
    </div>
  );
};

export default Blogs;
