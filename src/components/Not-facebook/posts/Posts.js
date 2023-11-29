import React from "react";
import Post from "./Post";
import "./Posts.css";
import NewPost from "../new-post/NewPost";
import useForm from "../../../hooks/useForm";
import { INIT_STATE_POST } from "../../../constants/InitialState";

const Posts = ({ displayedPosts }) => {
  const { formData, onInputChange, formReset } = useForm(INIT_STATE_POST);


  return (
    <div className="posts">
      <NewPost
        formData={formData}
        onInputChange={onInputChange}
        formReset={formReset}
      />
      {displayedPosts.map((post) => (
        <Post
          post={post}
          key={post.id}
          name={post.user[0].name}
          comments={post.comments}
          initialShowComments={false}
          initialCommentsNumber={2}
        />
      ))}
    </div>
  );
};

export default Posts;
