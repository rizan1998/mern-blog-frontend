import React, { useState } from "react";

const CommentForm = () => {
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <textarea className="w-full focus:outline-none" rows="5" placeholder="Leave your comment here..." value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit"></button>
      </div>
    </form>
  );
};

export default CommentForm;
