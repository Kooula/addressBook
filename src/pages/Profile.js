import React from "react";
import { useParams } from "react-router-dom";
import { usePostData } from "../context/PostsConext";
import Post from "../components/Not-facebook/posts/Post";
import Posts from "../components/Not-facebook/posts/Posts";
import PostsNavbar from "../components/Navbar/PostsNavbar";
import SideBar from "../components/Not-facebook/side-bar-posts/SideBar";
import ProfileInfo from "../components/Not-facebook/profile-info/ProfileInfo";

const Profile = () => {
  const { getUserPosts, getUserById } = usePostData();
  const params = useParams();
  const userId = params.id;
  const displayedUserPosts = getUserPosts(userId);
  const displayedUser = getUserById(userId);

  return (
    <div>
      <PostsNavbar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ flex: 8 }}>
          <ProfileInfo displayedUser={displayedUser} />
          <span>User Posts</span>
          <Posts displayedPosts={displayedUserPosts}>
            {displayedUserPosts.map((post) => {
              <Post post={post} key={post.id} />;
            })}
          </Posts>
        </div>
      </div>
    </div>
  );
};
export default Profile;
