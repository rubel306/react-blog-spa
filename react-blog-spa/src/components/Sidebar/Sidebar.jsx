import "./Sidebar.css";
const Sidebar = (props) => {
  const bookMarkedTitle = props.bookMarkedTitle;

  return (
    <div className="sidebar">
      <div className="total-time-spend">
        <p>Spent time on Read: {props.spendTime}</p>
      </div>
      <div className="bookmarked-area">
        <h5>Bookmarked Blogs : {props.bookMarkCount}</h5>

        {bookMarkedTitle.map((title) => (
          <div key={Math.random()} className="single-bookmarked">
            <p>{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
