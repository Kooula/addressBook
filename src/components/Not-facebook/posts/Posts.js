import React from "react";
import Post from "./Post";
import "./Posts.css";
import NewPost from "../new-post/NewPost";

const Posts = ({ displayedPosts }) => {
  return (
    <div className="posts">
      <NewPost/>
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
