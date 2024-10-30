export default function ReplyListItem(props) {
  const { content, likes, user, upvote, id, downvote } = props;

  return (
    <article className="ReplyListItem">
      <img src={user.profile_url} alt="" />
      <span>{user.username}</span>
      <p>{content}</p>
      <div>
        <i onClick={() => upvote(id)}>⬆️</i>
        <span>{likes} likes</span>
        <i onClick={downvote}>⬇️</i>
      </div>
    </article>
  );
}
