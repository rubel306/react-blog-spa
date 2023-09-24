import { useEffect, useState } from "react";
import "./Blogs.css";
import Blog from "../Blog/Blog";
import Sidebar from "../Sidebar/Sidebar";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [spendTime, setSpendTime] = useState(0);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  const clickToAddMin = (timeNeed) => {
    setSpendTime(spendTime + timeNeed);
  };
  return (
    <div className="blogs">
      <div className="posts">
        {posts.map((post) => (
          <Blog key={post.id} clickToAddMin={clickToAddMin} post={post}></Blog>
        ))}
      </div>
      <Sidebar spendTime={spendTime}></Sidebar>
    </div>
  );
};

export default Blogs;
