import ReplyList from "./ReplyList";
import ReplyForm from "./ReplyForm";

export default function ForumPost(props) {
  const { forumPostData, users, upvote, downvote, addReply } = props;

  const postUser = users[forumPostData.authorId];

  return (
    <div className="ForumPost">
      <header>
        <h1>{forumPostData.question}</h1>
        <h2>
          <img src={postUser.profile_url} alt="" />
          <span>{postUser.username}</span>
        </h2>
      </header>
      <ReplyList
        replies={forumPostData.replies}
        users={users}
        upvote={upvote}
        downvote={downvote}
      />
      <ReplyForm onSubmit={addReply} />
    </div>
  );
}
