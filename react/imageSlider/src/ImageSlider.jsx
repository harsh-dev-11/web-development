import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "./image-slider.css";

function ImageSlider({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(3);

  function handleDecreasedIndex() {
    if (imageIndex === 0) {
      setImageIndex(imageUrls.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  }

  function handleIncreasedIndex() {
    if (imageIndex === imageUrls.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {imageUrls.map((url) => (
          <img
            key={url}
            src={url}
            alt=""
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        className="img-slider-btn"
        onClick={handleDecreasedIndex}
        style={{ left: "0" }}
      >
        <ArrowBigLeft />
      </button>
      <button
        className="img-slider-btn"
        onClick={handleIncreasedIndex}
        style={{ right: "0" }}
      >
        <ArrowBigRight />
      </button>
    </>
  );
}

export default ImageSlider;
