import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="container">
        <div className="user">
          <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg" />
          <span>Ivan Ivanić</span>
        </div>
        <div className="icons">
          <img src="https://static.vecteezy.com/system/resources/previews/000/567/055/non_2x/person-icon-vector.jpg" />
          <span>Friends</span>
        </div>
        <div className="icons">
          <img src="https://t3.ftcdn.net/jpg/01/71/13/24/360_F_171132485_PB29voj73VqPaqLh9GHYBw4XoG7llBB1.jpg" />
          <span>Marketplace</span>
        </div>
      </div>
      <hr />
      <div className="container">
        <span>Online friends</span>
        <div className="user">
          <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg" />
          <span>Ivan Ivanić</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
