import ReplyListItem from "./ReplyListItem";

export default function ReplyList(props) {
  const { replies, users, upvote, downvote } = props;

  const parsedReplies = replies.map((reply) => (
    <ReplyListItem
      key={reply.id}
      {...reply}
      user={users[reply.authorId]}
      upvote={upvote}
      downvote={() => downvote(reply.id)}
    />
  ));

  return <section className="ReplyList">{parsedReplies}</section>;
}
