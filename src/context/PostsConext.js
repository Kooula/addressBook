import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import mergePostData from "../components/common/helpers/mergePostData";

const PostContext = createContext(); 

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const [users, postsValue, comments] = await Promise.all([
        axios.get("https://jsonplaceholder.typicode.com/users"),
        axios.get("https://jsonplaceholder.typicode.com/posts"),
        axios.get("https://jsonplaceholder.typicode.com/comments"),
      ]);
      const [usersData, postsData, commentsData] = [
        users.data,
        postsValue.data,
        comments.data,
      ];
      updateAllState(usersData, commentsData, postsData)
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const updateAllState = (usersData, commentsData, postsData) => {
    const onlineUsers = usersData.map((user) => ({
      ...user,
      online: user.id % 2 === 0,
    }));
    const mergedData = mergePostData(usersData, commentsData, postsData)
      setUsers(onlineUsers);
      setPosts(mergedData);
      setDisplayedPosts(getRandomPosts(5, mergedData));
  };

  const getRandomPosts = (count, posts) => {
    const allPosts = [...posts];
    const randomPosts = []

    while (randomPosts.length < count && allPosts.length > 0) {
      const randomIndex = Math.floor(Math.random() * allPosts.length);
      const randomPost = allPosts.splice(randomIndex, 1)[0];
      randomPosts.push(randomPost);
    }
    return randomPosts;
  };

  const removePost = (id) => {
    setDisplayedPosts((prevPosts) => {
      return prevPosts.filter((post) => post.id !== id);
    });
  };

  const addNewPost = (post) => {
    setDisplayedPosts((prevPosts) => [post, ...prevPosts]);
  };

  const loadMore = () => {
    const nextPage = currentPage + 1;
    setDisplayedPosts((prevPosts) => [...prevPosts, ...getRandomPosts(5, posts)]);
    setCurrentPage(nextPage);
  };

  const addCommentToPost = (postId, newComment) => {
    setDisplayedPosts((prevPosts) => {
      return prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [newComment, ...post.comments] }
          : post
      );
    });
  };

  const findPostById = (postId) => {
    return posts.find((post) => post.id === parseInt(postId));
  };

  const getUserPosts = (userId) => {
    return posts.filter((post) => post.userId === parseInt(userId));
  };

  const getUserById = (userId) => {
    return users.find((user) => user.id === parseInt(userId));
  };

  const value = {
    displayedPosts,
    loadMore,
    findPostById,
    getRandomPosts,
    setDisplayedPosts,
    users,
    getUserPosts,
    removePost,
    getUserById,
    addNewPost,
    loading,
    addCommentToPost,
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
