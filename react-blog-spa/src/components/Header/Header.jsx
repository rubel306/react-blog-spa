import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h2>Knowledge Cafe</h2>
      </div>
      <div className="user-area">
        <img
          src="https://images.pexels.com/photos/1624956/pexels-photo-1624956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1260&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
