import { Modal, Rate } from "antd";

const ReviewModal = ({ isOpen, onRequestClose, handleOk }) => {
  return (
    <Modal
      title="add a review"
      open={isOpen}
      onOk={onRequestClose}
      onCancel={onRequestClose}
      width={800}
      footer={[
        <button onClick={handleOk} className="btn btn-primary btn-sm">
          add review
        </button>,
      ]}
    >
      <div className="modal__input">
        <label>rating</label>
        <Rate />
      </div>
      <div className="modal__input">
        <label htmlFor="review-title">review title</label>
        <input type="text" id="review-title" />
      </div>
      <div className="modal__input">
        <label htmlFor="review-details">review details</label>
        <textarea id="review-details"></textarea>
      </div>
    </Modal>
  );
};

export default ReviewModal;
