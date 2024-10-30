import { useState } from "react";

export default function ReplyForm(props) {
  const { onSubmit } = props;

  const [replyInput, setReplyInput] = useState("");

  const handleChange = (event) => {
    setReplyInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(replyInput)

    setReplyInput("")
  };

  return (
    <form className="ReplyForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your reply!"
        onChange={handleChange}
        value={replyInput}
      />
      <button>Add</button>
    </form>
  );
}
