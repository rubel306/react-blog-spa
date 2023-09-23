import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="total-time-spend">
        <p>Spent time on Read: 0</p>
      </div>
      <div className="bookmarked-area">
        <h5>Bookmarked Blogs : 8</h5>
        <div className="single-bookmarked">
          <p>Master Microsoft Power Platform and Become an In-Demand!</p>
        </div>
        <div className="single-bookmarked">
          <p>Master Microsoft Power Platform and Become an In-Demand!</p>
        </div>
        <div className="single-bookmarked">
          <p>Master Microsoft Power Platform and Become an In-Demand!</p>
        </div>
        <div className="single-bookmarked">
          <p>Master Microsoft Power Platform and Become an In-Demand!</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
