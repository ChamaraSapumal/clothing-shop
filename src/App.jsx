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
        <QuickAssist></QuickAssist>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
