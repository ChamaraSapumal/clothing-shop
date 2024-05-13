import AboutUs from "./components/AboutUs.jsx";
import Carousel from "./components/Carousel.jsx";
import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";
import QuickAssist from "./components/QuickAssist.jsx";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Carousel></Carousel>

        <AboutUs></AboutUs>
        <QuickAssist></QuickAssist>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
