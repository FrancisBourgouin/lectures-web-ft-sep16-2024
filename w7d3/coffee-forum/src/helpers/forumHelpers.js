export const addReplyToPost = (forumPost, newReplyContent) => {
  const updatedPost = { ...forumPost };
  const updatedReplies = [...forumPost.replies];

  const newReply = {
    id: String(updatedReplies.length + 1),
    content: newReplyContent,
    likes: 0,
    authorId: Math.floor(Math.random() * 6) + 1,
  };

  updatedReplies.push(newReply);

  updatedPost.replies = updatedReplies;

  return updatedPost;
};

export const addReplyToPostButMagic = (forumPost, newReplyContent) => {

  const newReply = {
    id: String(forumPost.replies.length + 1),
    content: newReplyContent,
    likes: 0,
    authorId: Math.floor(Math.random() * 6) + 1,
  };
  const updatedReplies = [...forumPost.replies, newReply]

  const updatedPost = {...forumPost, replies:updatedReplies}


  return updatedPost;
};

export const updateReplyLike = (forumPost, replyId, isUpvote) => {
  const updatedPost = { ...forumPost };
  const updatedReplies = [...forumPost.replies];

  const updatedReplyIndex = updatedReplies.findIndex((reply) => reply.id === String(replyId));
  const updatedReply = updatedReplies[updatedReplyIndex];

  updatedReply.likes += isUpvote ? 1 : -1;

  updatedReplies[updatedReplyIndex] = updatedReply;
  updatedPost.replies = updatedReplies;

  return updatedPost;
};
