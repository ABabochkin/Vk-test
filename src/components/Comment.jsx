import React from "react";

export const Comment = (props) => {
  const { comment, handleCommentChange } = props;
  return (
    <>
      <label htmlFor="comment">Комментарий:</label>
      <textarea
        className="st"
        onChange={handleCommentChange}
        value={comment}
        placeholder="Оставьте комментарий..."
      ></textarea>
    </>
  );
};
