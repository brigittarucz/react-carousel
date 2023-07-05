import Carousel from "./components/carousel/Carousel";
import "./assets/stylesheets/main.css";
import Controls from "./components/controls/Controls";

function App() {
  return (
    <div className="carousel-react-container-app">
      <Controls />
      <Carousel />
    </div>
  );
}

export default App;
