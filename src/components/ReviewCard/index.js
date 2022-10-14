import { Rate } from "antd";

const ReviewCard = ({ userName, date, title, reviewText, rateValue , imgSrc}) => {
  return (
    <div className="card">
      <img className="card__avatar" src={imgSrc} alt={`${userName} avatar`} />
      <p className="card__name">{userName}</p>
      <span className="card__date">{date}</span>
      <h3 className="card__heading">{title}</h3>
      <Rate disabled defaultValue={rateValue} />
      <p className="card__text">{reviewText}</p>
      <button className="btn btn-primary">add comment</button>
    </div>
  );
};

export default ReviewCard;
