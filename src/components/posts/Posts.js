import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = ({ posts}) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          post={post}
          key={post.id}
          name={post.user[0].name}
          comments={post.comments}
        />
      ))}
    </div>
  );
};

export default Posts;
