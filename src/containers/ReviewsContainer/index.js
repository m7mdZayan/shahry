import { useState } from "react";
import ReviewCard from "../../components/ReviewCard";
import { reviews } from "../../constants/reviews";

const ReviewContainer = () => {
  const [reviewsArray, setReviewsArray] = useState(reviews);

  return (
    <div className="reviews-container">
      {reviewsArray.map((review) => (
        <ReviewCard
          key={review.date}
          userName={review.userName}
          date={review.date}
          title={review.title}
          rateValue={review.rateValue}
          reviewText={review.reviewText}
          imgSrc={review.imgSrc}
        />
      ))}
    </div>
  );
};

export default ReviewContainer;
