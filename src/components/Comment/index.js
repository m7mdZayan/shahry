const Comment = ({ text, accountImg }) => {
  return (
    <>
      <div className="arrow-up"></div>
      <div className="comment">
        <p>{text}</p>
        <img src={accountImg} alt="account avatar" />
      </div>
    </>
  );
};

export default Comment;
