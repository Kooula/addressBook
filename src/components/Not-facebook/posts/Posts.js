import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = ({ displayedPosts }) => {
  return (
    <div className="posts">
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
