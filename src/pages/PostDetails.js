import React from "react";
import { useParams } from "react-router-dom";
import { usePostData } from "../context/PostsConext";
import Post from "../components/Not-facebook/posts/Post";
import SideBar from "../components/Not-facebook//side-bar-posts/SideBar";
import PostsNavbar from "../components/Navbar/PostsNavbar";

const PostDetails = () => {
  let params = useParams();
  const { findPostById } = usePostData();
  const id = params.id;
  const displayedPost = findPostById(id);

  return (
    <div>
      <PostsNavbar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ flex: 8 }}>
          <Post
            post={displayedPost}
            key={id}
            user={displayedPost.user}
            initialShowComments={true}
            initialCommentsNumber={5}
          />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
