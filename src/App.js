import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ReviewContainer from "./containers/ReviewsContainer";
import { reviews } from "./constants/reviews";
import { useState } from "react";

const accountImg = "https://randomuser.me/api/portraits/men/3.jpg";

function App() {
  const [reviewsArray, setReviewsArray] = useState(reviews);

  return (
    <div className="wrapper">
      <Navbar userName="Mohamed Zayan" accountImg={accountImg} />
      <Header setReviewsArray={setReviewsArray} />
      <ReviewContainer reviewsArray={reviewsArray} />
    </div>
  );
}

export default App;
