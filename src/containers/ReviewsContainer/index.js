import ReviewCard from "../../components/ReviewCard";

const ReviewContainer = ({ reviewsArray }) => {
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
