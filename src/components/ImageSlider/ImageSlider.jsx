import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Circle from "../../assets/Circle.svg";
import FilledCircle from "../../assets/FilledCircle.svg";

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
    return <div>Error Occurred - {error}</div>;
  }

  return (
    <>
      <div className="text-center flex flex-col justify-center items-center gap-4">
        <h1 className="text-white my-12 text-4xl">Image Slider</h1>
        <div className="flex justify-center items-center gap-5">
          <button
            className={`px-4 py-2 text-white bg-customRed rounded-lg text-lg cursor-${
              currentIndex === 0 ? "not-allowed" : "pointer"
            }`}
            onClick={handleBackButton}
            disabled={currentIndex === 0}
          >
            {"<"}
          </button>
          <div className="border border-white rounded-lg overflow-hidden w-500 h-auto">
            {imagesData.length > 0 ? (
              <img src={currentImage} alt="image" width={500} />
            ) : (
              <h3 className="text-white">Loading...</h3>
            )}
          </div>
          <button
            className={`px-4 py-2 text-white bg-customRed rounded-lg text-lg cursor-${
              currentIndex === imagesData.length - 1 ? "not-allowed" : "pointer"
            }`}
            onClick={handleNextButton}
            disabled={currentIndex === imagesData.length - 1}
          >
            {">"}
          </button>
        </div>
        <div className="my-2 flex gap-1">
          {imagesData.map((_, index) => (
            <img
              key={index}
              src={
                currentImage && currentIndex === index ? FilledCircle : Circle
              }
              alt="circle"
              width={20}
            />
          ))}
        </div>
        <button
          className="px-4 py-2 mt-8 bg-customRed rounded-lg text-white text-base cursor-pointer"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default ImageSlider;
