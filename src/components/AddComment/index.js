import { useState } from "react";

const AddComment = ({ setShowCommentInput, reviewsArray, review }) => {
  const addCommentHandler = () => {
    const id = review.id;

    const reviewToAddCommentIn = reviewsArray.filter(
      (review) => review.id === id
    )[0];

    reviewToAddCommentIn.comments = [
      ...reviewToAddCommentIn.comments,
      {
        id: reviewToAddCommentIn.comments.length,
        text: comment,
        imgSrc: "	https://randomuser.me/api/portraits/men/3.jpg",
      },
    ];
    setShowCommentInput(false);
  };

  const [comment, setComment] = useState("");

  return (
    <div className="add-comment">
      <textarea
        className="comment-input"
        type="text"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      <button onClick={addCommentHandler} className="btn btn-primary btn-sm">
        add
      </button>
    </div>
  );
};

export default AddComment;
