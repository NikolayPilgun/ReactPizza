import Banner from "./components/banner/Banner";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
