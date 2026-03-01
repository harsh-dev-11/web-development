import car1 from "./imgs/car-1.jpg";
import car2 from "./imgs/car-2.jpg";
import car3 from "./imgs/car-3.png";
import car4 from "./imgs/car-4.jpeg";
import ImageSlider from "./ImageSlider";

const IMAGES = [car1, car2, car3, car4];

function App() {
  return (
    <div
      style={{
        width: "90%",
        maxWidth: "1200px",
        height: "600px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <ImageSlider imageUrls={IMAGES} />
    </div>
  );
}

export default App;
