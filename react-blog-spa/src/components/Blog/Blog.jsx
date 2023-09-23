import "./Blog.css";

const Blog = (props) => {
  const { blogThumb, authorThumb, authorName, publishedDate, title } =
    props.post;
  console.log(props.post);
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
          <p>05 min read</p>
        </div>
      </div>
      <h2>{title}</h2>
      <button className="btn">Mark as read</button>
    </div>
  );
};

export default Blog;
