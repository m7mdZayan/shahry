import { Modal, Rate } from "antd";
import { useState } from "react";
import { getDateNow } from "../../util/functions";

const ReviewModal = ({ isOpen, onRequestClose, setReviewsArray }) => {
  const [ratevalue, setRateValue] = useState(0);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewDetails, setReviewDetails] = useState("");

  const resetInputValues = () => {
    setRateValue(0);
    setReviewDetails("");
    setReviewTitle("");
  };

  const addReviewHandler = () => {
    const newReview = {
      imgSrc: "https://randomuser.me/api/portraits/men/33.jpg",
      userName: "Mohamed Zayan",
      date: getDateNow(),
      title: reviewTitle,
      rateValue: ratevalue,
      reviewText: reviewDetails,
    };
    setReviewsArray((d) => [newReview, ...d]);
    resetInputValues();
    onRequestClose();
  };

  return (
    <Modal
      title="add a review"
      open={isOpen}
      onOk={onRequestClose}
      onCancel={onRequestClose}
      width={800}
      footer={[
        <button onClick={addReviewHandler} className="btn btn-primary btn-sm">
          add review
        </button>,
      ]}
    >
      <div className="modal__input">
        <label>rating</label>
        <Rate onChange={setRateValue} value={ratevalue} />
      </div>
      <div className="modal__input">
        <label htmlFor="review-title">review title</label>
        <input
          type="text"
          id="review-title"
          onChange={(e) => setReviewTitle(e.target.value)}
          value={reviewTitle}
        />
      </div>
      <div className="modal__input">
        <label htmlFor="review-details">review details</label>
        <textarea
          id="review-details"
          onChange={(e) => setReviewDetails(e.target.value)}
          value={reviewDetails}
        ></textarea>
      </div>
    </Modal>
  );
};

export default ReviewModal;
