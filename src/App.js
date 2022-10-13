import Navbar from "./components/Navbar";
import Header from "./components/Header";

const accountImg = "https://randomuser.me/api/portraits/men/3.jpg";

function App() {
  return (
    <div className="wrapper">
      <Navbar userName="Mohamed Zayan" accountImg={accountImg} />
      <Header />
    </div>
  );
}

export default App;
