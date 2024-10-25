import Star from "../../assets/star.svg";
import FilledStar from "../../assets/filledStar.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Ratings = ({ numberOfStars = 5 }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(0);

  const handleMouseEnter = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  const handleMouseClick = (index) => {
    setRating(index);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="text-center">
        <h1 className="text-white my-12 text-4xl">Ratings</h1>
        <div className="flex justify-center items-center gap-2">
          {[...Array(numberOfStars)].map((_, index) => {
            index += 1;
            return (
              <div key={index}>
                {!(index <= (hover || rating)) ? (
                  <img
                    src={Star}
                    alt="star"
                    className="cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    onClick={() => handleMouseClick(index)}
                  />
                ) : (
                  <img
                    src={FilledStar}
                    alt="Filled star"
                    className="cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    onClick={() => handleMouseClick(index)}
                  />
                )}
              </div>
            );
          })}
        </div>
        {rating && (
          <h3 className="text-white my-12">You have rated {rating} stars</h3>
        )}
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

export default Ratings;
