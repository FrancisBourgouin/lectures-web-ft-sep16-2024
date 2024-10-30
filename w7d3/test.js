const forumPostData = {
  authorId: "5", // Author ID between 1 and 6
  id: "3", // Unique post ID
  title: "Coffee Recommendations",
  question:
    "I'm a coffee enthusiast, and I'm always looking for new coffee experiences. Can you recommend any unique coffee shops or hidden gems in our city? I appreciate your suggestions!",
  likes: 0, // Always 0 likes
  replies: [
    {
      id: "1", // Unique reply ID
      authorId: "2", // Author ID between 1 and 6
      content:
        "You should check out Brew Haven on 5th Avenue. They have a great selection of artisanal coffees!",
      likes: 0, // Always 0 likes
    },
    {
      id: "2", // Unique reply ID
      authorId: "4", // Author ID between 1 and 6
      content:
        "Cafe L'Amour in the old town district is a cozy spot with a unique atmosphere. You'll love it!",
      likes: 0, // Always 0 likes
    },
  ],
};


const addReplyToPost = (forumPost, newReplyContent) => {
  const updatedPost = { ...forumPost };
  const updatedReplies = [...forumPost.replies];

  const newReply = {
    id: updatedReplies.length + 1,
    content: newReplyContent,
    likes: 0,
    authorId: Math.floor(Math.random() * 6) + 1,
  };

  updatedReplies.push(newReply);

  updatedPost.replies = updatedReplies;

  return updatedPost;
};

const newPostData = addReplyToPost(forumPostData, "AHHHH YEAH! KOOLAID MAN!")


console.log(newPostData)
console.log(forumPostData)