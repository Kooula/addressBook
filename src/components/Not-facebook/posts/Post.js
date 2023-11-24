import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Post.css";
import Comments from "../comments/Comments";
import usePostActions from "../../../hooks/usePostActions";
import { usePostData } from "../../../context/PostsConext";

const Post = ({ post, initialShowComments, initialCommentsNumber }) => {
  const {
    like,
    handleLikeClick,
    showComments,
    visibleComments,
    handleOpenComments,
    loadMoreComments,
    toggleDropdown,
    showDropdown,
  } = usePostActions(initialShowComments, initialCommentsNumber);

  const {removePost} = usePostData()
  const navigate = useNavigate();

  const handleMoreComments = () => {
    loadMoreComments();
    if (visibleComments >= 4) {
      navigate(`post/${post.id}`);
    }
  };

  return (
    <div className="post">
      <div className="postsContainer">
        <div className="postUser">
          <div className="userInfo">
            <Link
              to={`profile/${post.user[0].id}`}
              style={{ textDecoration: "none", display: "flex", color: "black" }}
              replace
            >
              <img
                src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
                alt="User"
                className="userImage"
              />
              <div className="details">{post.user[0].name}</div>
            </Link>
          </div>
          <div className="actions">
            <button onClick={toggleDropdown} className="menuOptions">...</button>
            {showDropdown && (
        <div className="dropdown-content">
          <div className="dropdown-item">
            Report post
          </div>
          <div className="dropdown-item" onClick={() => removePost(post.id)}>
            Delete post
          </div>
          <div className="dropdown-item">
            Save post
          </div>
        </div>
      )}
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
          <button
            className="action-button"
            onClick={() => handleOpenComments()}
          >
            {showComments ? "hide" : "comment"}
          </button>
          <button className="action-button">share</button>
        </div>
      </div>
      {showComments && (
        <div className="comments-container">
          <input placeholder="Write a comment"></input>
          {post.comments.slice(0, visibleComments).map((comment) => (
            <Comments
              body={comment.body}
              email={comment.email}
              key={comment.id}
            />
          ))}
          {visibleComments < 5 && (
            <div
              style={{ textAlign: "center" }}
              onClick={() => handleMoreComments()}
            >
              Load More Comments
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Post;