import { useState } from "react";

function usePostActions(initialShowComments, initialCommentsNumber) {
  const [like, setLike] = useState(false);
  const [commentsState, setCommentsState] = useState({
    showComments: initialShowComments,
    commentsNumber: initialCommentsNumber,
  });
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLikeClick = () => {
    setLike(!like);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOpenComments = () => {
    setCommentsState((prev) => ({
      ...prev,
      showComments: !prev.showComments,
    }));
  };

  const loadMoreComments = () => {
    setCommentsState((prev) => ({
      ...prev,
      commentsNumber: prev.commentsNumber + 2,
    }));
  };

  return {
    like,
    showComments: commentsState.showComments,
    visibleComments: commentsState.commentsNumber,
    handleLikeClick,
    handleOpenComments,
    loadMoreComments,
    toggleDropdown,
    showDropdown,
  };
}

export default usePostActions;
