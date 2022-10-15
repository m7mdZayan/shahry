import ReviewCard from "../../components/ReviewCard";

const ReviewContainer = ({ reviewsArray, setReviewsArray }) => {
  return (
    <div className="reviews-container">
      {reviewsArray.map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
          reviewsArray={reviewsArray}
          setReviewsArray={setReviewsArray}
        />
      ))}
    </div>
  );
};

export default ReviewContainer;
