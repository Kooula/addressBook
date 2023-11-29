import React from "react";
import "./NewPost.css";
import { usePostData } from "../../../context/PostsConext";

const NewPost = ({ formData, onInputChange, formReset }) => {
  const { addNewPost } = usePostData();

  const onPostSubmit = (e) => {
    e.preventDefault();
    const tempPost = {
      ...formData,
      comments: [],
      user: [{ name: "Ivan Ivanic" }],
      id: Math.random() * 1000,
    };
    addNewPost(tempPost);
    formReset()
  };

  return (
    <div className="newPost">
      <form className="newPostForm">
        <div className="newPostUser">
          <h3>Share something</h3>
        </div>
        <div className="newPostInfo">
          <div className="newPostInput">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="newUserInfo">
          <div className="newPostTextarea">
            <textarea
              placeholder="Body"
              name="body"
              value={formData.body}
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="newPostActions">
          <button onClick={onPostSubmit} className="action-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
