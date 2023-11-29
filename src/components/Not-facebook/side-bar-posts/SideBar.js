import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { usePostData } from "../../../context/PostsConext";

const SideBar = () => {
  const { users } = usePostData();

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
      <div className="container-online">
        <span>Online friends</span>
        {users.map((user) =>
          user.online ? (
            <div className="users" key={user.id}>
              <Link
                to={`/posts/profile/${user.id}`}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  color: "black",
                }}
                replace
              >
                <img
                  src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
                  alt={user.name}
                />
                <span>{user.name}</span>
              </Link>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default SideBar;
