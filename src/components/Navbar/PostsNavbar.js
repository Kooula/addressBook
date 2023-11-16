import React from "react";
import "./PostsNavbar.css";
import { Link } from "react-router-dom";

const PostsNavbar = () => {
  return (
    <div className="postsNavbar">
      <div className="left">
        <Link to="/posts" style={{ textDecoration: "none" }}>
          <span className="logo">NotFacebook</span>
        </Link>
        <input type="text" placeholder="search for someone..."></input>
      </div>
      <div className="right">
        <div className="user">
          <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg" />
          <span>Ivan Ivanić</span>
        </div>
      </div>
    </div>
  );
};

export default PostsNavbar;
