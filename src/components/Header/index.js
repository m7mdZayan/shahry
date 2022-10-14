import { useState } from "react";
import ReviewModal from "../ReviewModal";

const Header = () => {
  const [reviewModalIsOpen, setreviewModalIsOpen] = useState(false);

  function openModal() {
    setreviewModalIsOpen(true);
  }

  function closeModal() {
    setreviewModalIsOpen(false);
  }

  return (
    <header>
      <div className="header__content">
        <h1 className="header__content--text">
          what our users say about shahry ?
        </h1>
        <button onClick={openModal} className="btn btn-secondary">
          add a review
        </button>
      </div>

      <ReviewModal isOpen={reviewModalIsOpen} onRequestClose={closeModal} />
    </header>
  );
};

export default Header;
