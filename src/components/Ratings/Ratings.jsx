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
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "white", margin: "50px" }}>Ratings</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          {[...Array(numberOfStars)].map((_, index) => {
            index += 1;
            return (
              <div key={index}>
                {!(index <= (hover || rating)) ? (
                  <img
                    src={Star}
                    alt="star"
                    onMouseEnter={() => {
                      handleMouseEnter(index);
                    }}
                    onMouseLeave={() => {
                      handleMouseLeave(index);
                    }}
                    onClick={() => {
                      handleMouseClick(index);
                    }}
                  />
                ) : (
                  <img
                    src={FilledStar}
                    alt="Filled star"
                    onMouseEnter={() => {
                      handleMouseEnter(index);
                    }}
                    onMouseLeave={() => {
                      handleMouseLeave(index);
                    }}
                    onClick={() => {
                      handleMouseClick(index);
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
        {rating && (
          <h3 style={{ color: "white", margin: "50px" }}>
            You have rated {rating} stars
          </h3>
        )}
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

export default Ratings;
