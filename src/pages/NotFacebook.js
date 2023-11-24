import React, { useEffect, useState } from "react";
import PostsNavbar from "../components/Navbar/PostsNavbar";
import SideBar from "../components/Not-facebook/side-bar-posts/SideBar";
import Posts from "../components/Not-facebook//posts/Posts";
import { usePostData } from "../context/PostsConext";

const NotFacebook = () => {
  const {
    loadMore,
    fetchPosts,
    displayedPosts,
    getRandomPosts,
    setDisplayedPosts,
  } = usePostData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts().then(() => {
      setLoading(false);
    });
    setDisplayedPosts(getRandomPosts(5));
  }, [loading]);

  return (
    <div>
      <PostsNavbar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ flex: 8 }}>
          {loading ? (
            <p>Loading posts...</p>
          ) : (
            <Posts displayedPosts={displayedPosts} />
          )}
        </div>
      </div>
      <div style={{ textAlign: "center" }} onClick={loadMore}>
        View more posts
      </div>
    </div>
  );
};

export default NotFacebook;
