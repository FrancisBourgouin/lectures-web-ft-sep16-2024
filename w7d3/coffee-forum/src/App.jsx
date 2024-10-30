import "./App.scss";
import Header from "./components/Header";
import ForumPost from "./components/ForumPost";

import { usersObj } from "./data/userData";
import { forumPost as originalForumPost } from "./data/postData";
import { useState } from "react";
import { updateReplyLike, addReplyToPost } from "./helpers/forumHelpers";

function App() {
  const users = usersObj;
  const amountOfUsers = Object.values(users).length;

  const [forumPostData, setForumPostData] = useState(originalForumPost);

  const addReply = (reply) => {
    const newForumPostData = addReplyToPost(forumPostData, reply);
    setForumPostData(newForumPostData);
  };

  const upvote = (replyId) => {
    const newForumPostData = updateReplyLike(forumPostData, replyId, true);
    setForumPostData(newForumPostData);
  };

  const downvote = (replyId) => {
    const newForumPostData = updateReplyLike(forumPostData, replyId, false);
    setForumPostData(newForumPostData);
  };
  return (
    <>
      <Header amountOfUsers={amountOfUsers} />
      <ForumPost
        forumPostData={forumPostData}
        users={users}
        addReply={addReply}
        upvote={upvote}
        downvote={downvote}
      />
    </>
  );
}

export default App;
