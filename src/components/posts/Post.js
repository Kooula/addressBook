import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import Comments from "../comments/Comments";

const Post = ({ post, name}) => {
  const [like, setLike] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleLikeClick = () => {
    setLike(!like);
  };

  const handleCommentClick = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="post">
      <div className="postsContainer">
        <div className="postUser">
          <div className="userInfo">
            <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg" />
            <div className="details">
              {post.id}
              <Link
                to={`profile/${post.user[0].id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{name}</span>
              </Link>
            </div>
          </div>
          <div className="actions">
            <button className="menuOptions">...</button>
          </div>
        </div>
        <div className="content">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
        <div className="action-buttons">
          {like ? (
            <button
              className="action-button"
              onClick={handleLikeClick}
              style={{ backgroundColor: "red" }}
            >
              liked
            </button>
          ) : (
            <button className="action-button" onClick={handleLikeClick}>
              like
            </button>
          )}
          <button className="action-button" onClick={handleCommentClick}>
            comment
          </button>
          <button className="action-button">share</button>
        </div>
      </div>
      {showComments && (
        <div className="comments-container">
          <input placeholder="Write a comment"></input>
          {post.comments.map((comment) => (
            <Comments
              body={comment.body}
              email={comment.email}
              key={comment.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
