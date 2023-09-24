import "./Blog.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Blog = (props) => {
  const { blogThumb, authorThumb, authorName, publishedDate, title, timeNeed } =
    props.post;
  const clickToAddMin = props.clickToAddMin;
  const countBookMark = props.countBookMark;
  const notify = () => toast("Thanks For Read !!");
  return (
    <div className="single-post">
      <img className="blog-thumb" src={blogThumb} alt="" />
      <div className="blog-info">
        <div className="blog-author">
          <div className="blog-author-img">
            <img src={authorThumb} alt="" />
          </div>
          <div className="blog-author-info">
            <h5>{authorName}</h5>
            <p>{publishedDate}</p>
          </div>
        </div>
        <div className="time-need">
          <p>{timeNeed} min read</p>
          <button onClick={() => countBookMark(title)} className="book-btn">
            Bookmarked
          </button>
        </div>
      </div>
      <h2>{title}</h2>
      <button className="btn" onClick={() => clickToAddMin(timeNeed)}>
        Mark as read
      </button>

      <button className="btn" onClick={notify}>
        Notify !
      </button>
      <ToastContainer />
    </div>
  );
};

export default Blog;
