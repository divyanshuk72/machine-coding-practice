import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Circle from "../assets/Circle.svg";
import FilledCircle from "../assets/FilledCircle.svg";

const ImageSlider = () => {
  const API_URL = "https://picsum.photos/v2/list?page=1&limit=10";

  const [imagesData, setImagesData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState("");
  const [error, setError] = useState(null);

  const fetchImages = async () => {
    try {
      const data = await fetch(API_URL);
      const response = await data.json();
      setImagesData(response);
      setCurrentImage(response[0]?.download_url);
    } catch (e) {
      console.error(e.message);
      setError(e.message);
    }
  };

  const handleBackButton = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setCurrentImage(imagesData[newIndex]?.download_url);
    }
  };

  const handleNextButton = () => {
    if (currentIndex < imagesData.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setCurrentImage(imagesData[newIndex]?.download_url);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const navigate = useNavigate();

  if (error !== null) {
    return <div>Error Occured - {error}</div>;
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "white", margin: "50px" }}>Image Slider</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <button
            style={{
              padding: "10px",
              color: "white",
              backgroundColor: "#cc4141",
              border: "none",
              borderRadius: "10px",
              fontSize: "20px",
              cursor: currentIndex === 0 ? "not-allowed" : "pointer",
            }}
            onClick={handleBackButton}
          >
            {"<"}
          </button>
          <div
            style={{
              width: "500px",
              height: "auto",
              border: "1px solid white",
              borderRadius: "10px",
              objectFit: "cover",
              overflow: "hidden",
            }}
          >
            {imagesData.length > 0 ? (
              <img src={currentImage} alt="image" width={500} />
            ) : (
              <h3 style={{ color: "white" }}>Loading...</h3>
            )}
          </div>
          <button
            style={{
              padding: "10px",
              color: "white",
              backgroundColor: "#cc4141",
              border: "none",
              borderRadius: "10px",
              fontSize: "20px",
              cursor:
                currentIndex === imagesData.length - 1
                  ? "not-allowed"
                  : "pointer",
            }}
            onClick={handleNextButton}
          >
            {">"}
          </button>
        </div>
        <div style={{ margin: "10px" }}>
          {imagesData.map((_, index) => {
            return currentImage && currentIndex === index ? (
              <img key={index} src={FilledCircle} alt="circle" width={20} />
            ) : (
              <img key={index} src={Circle} alt="circle" width={20} />
            );
          })}
        </div>
        <button
          style={{
            padding: "10px",
            margin: "30px",
            backgroundColor: "#cc4141",
            border: "none",
            borderRadius: "10px",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default ImageSlider;
