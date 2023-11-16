import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPosts = async (page, limit) => {
    try {
      const userResponse = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = userResponse.data;

      const postResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
      );
      const postsValue = postResponse.data;

      const commentResponse = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const comments = commentResponse.data;

      const lookUpUser = users.reduce((acc, user) => {
        acc[user.id] = acc[user.id] ? [...acc[user.id], user] : [user];
        return acc;
      }, {});

      const lookUpComments = comments.reduce((acc, comment) => {
        const postId = comment.postId;
        acc[postId] = acc[postId] ? [...acc[postId], comment] : [comment];
        return acc;
      }, {});

      const lookUpPosts = postsValue.map((post) => ({
        ...post,
        user: lookUpUser[post.userId],
        comments: lookUpComments[post.id] || [],
      }));

      setPosts((prevPosts) => [
        ...prevPosts,
        ...lookUpPosts.filter(
          (newPost) => !prevPosts.some((prevPost) => prevPost.id === newPost.id)
        ),
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };

  useEffect(() => {
    fetchPosts(currentPage, 5);
    console.log(posts);
  }, [currentPage]);

  const value = {
    posts,
    handleLoadMore,
    currentPage,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

const usePostData = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostData must be used within PostProvider");
  }
  return context;
};

export { PostProvider, usePostData };
