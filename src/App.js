import Banner from "./components/banner/Banner";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import "./styles/index.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Banner />
      <Navigation />
      <Body />
    </div>
  );
}

export default App;
