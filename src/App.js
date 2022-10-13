import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ReviewContainer from "./containers/ReviewsContainer";
const accountImg = "https://randomuser.me/api/portraits/men/3.jpg";

function App() {
  return (
    <div className="wrapper">
      <Navbar userName="Mohamed Zayan" accountImg={accountImg} />
      <Header />
      <ReviewContainer />
    </div>
  );
}

export default App;
