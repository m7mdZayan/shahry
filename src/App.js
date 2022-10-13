import Navbar from "./components/Navbar";


const accountImg = "https://randomuser.me/api/portraits/men/3.jpg"


function App() {
  return (
    <Navbar userName="Mohamed Zayan" accountImg={accountImg} />
  );
}

export default App;
