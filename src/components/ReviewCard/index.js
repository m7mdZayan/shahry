import { Rate } from "antd";
import { useState } from "react";
import Comment from "../Comment";
import AddComment from "../AddComment";

const ReviewCard = ({ review, reviewsArray }) => {
  const [showCommentInput, setShowCommentInput] = useState(false);

  return (
    <div className="card">
      <img
        className="card__avatar"
        src={review.imgSrc}
        alt={`${review.userName} avatar`}
      />
      <p className="card__name">{review.userName}</p>
      <span className="card__date">{review.date}</span>
      <h3 className="card__heading">{review.title}</h3>
      <Rate disabled defaultValue={review.rateValue} />
      <p className="card__text">{review.reviewText}</p>
      {review.comments?.map((comment) => (
        <Comment
          key={comment.id}
          text={comment.text}
          accountImg={comment.imgSrc}
        />
      ))}
      {!showCommentInput && (
        <button
          onClick={() => setShowCommentInput(true)}
          className="btn btn-primary"
        >
          add comment
        </button>
      )}

      {showCommentInput && (
        <AddComment
          setShowCommentInput={setShowCommentInput}
          reviewsArray={reviewsArray}
          review={review}
        />
      )}
    </div>
  );
};

export default ReviewCard;
