import { createContext, useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = useCallback(async () => {
    try {
      const [users, postsValue, comments] = await Promise.all([
        axios.get("https://jsonplaceholder.typicode.com/users"),
        axios.get("https://jsonplaceholder.typicode.com/posts"),
        axios.get("https://jsonplaceholder.typicode.com/comments"),
      ]);

      const usersData = users.data.map((user) => ({
        ...user,
        online: user.id % 2 === 0,
      }));
      const postsData = postsValue.data;
      const commentsData = comments.data;

      const lookUpUser = usersData.reduce((acc, user) => {
        acc[user.id] = acc[user.id] ? [...acc[user.id], user] : [user];
        return acc;
      }, {});

      const lookUpComments = commentsData.reduce((acc, comment) => {
        const postId = comment.postId;
        acc[postId] = acc[postId] ? [...acc[postId], comment] : [comment];
        return acc;
      }, {});

      const lookUpPosts = postsData.map((post) => ({
        ...post,
        user: lookUpUser[post.userId],
        comments: lookUpComments[post.id] || [],
      }));
      setPosts(lookUpPosts);
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchPosts().then(() => {
      setLoading(false);
    });
    setDisplayedPosts(getRandomPosts(5))
  }, [loading, fetchPosts]);


  const getRandomPosts = (count) => {
    const allPosts = [...posts];
    const randomPosts = [];

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
    setDisplayedPosts((prevPosts) => [...prevPosts, ...getRandomPosts(5)]);
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
    return posts.find((post) => post.id === parseInt(postId, 10));
  };

  const getUserPosts = (userId) => {
    return posts.filter((post) => post.userId === parseInt(userId, 10));
  };

  const getUserById = (userId) => {
    return users.find((user) => user.id === parseInt(userId, 10));
  };

  const value = {
    displayedPosts,
    loadMore,
    fetchPosts,
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
