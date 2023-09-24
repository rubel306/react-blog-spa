import { useEffect, useState } from "react";
import "./Blogs.css";
import Blog from "../Blog/Blog";
import Sidebar from "../Sidebar/Sidebar";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [spendTime, setSpendTime] = useState(0);
  const [bookMarkCount, setBookMarkCount] = useState(0);
  const [bookMarkedTitle, setBookMarkedTitle] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  const clickToAddMin = (timeNeed) => {
    setSpendTime(spendTime + timeNeed);
  };

  //click event for count book mark posts
  const countBookMark = (postTitle) => {
    setBookMarkCount(bookMarkCount + 1);
    let newTitleList = [postTitle, ...bookMarkedTitle];
    setBookMarkedTitle(newTitleList);
  };
  return (
    <div className="blogs">
      <div className="posts">
        {posts.map((post) => (
          <Blog
            countBookMark={countBookMark}
            key={post.id}
            clickToAddMin={clickToAddMin}
            post={post}
          ></Blog>
        ))}
      </div>
      <Sidebar
        bookMarkedTitle={bookMarkedTitle}
        bookMarkCount={bookMarkCount}
        spendTime={spendTime}
      ></Sidebar>
    </div>
  );
};

export default Blogs;
