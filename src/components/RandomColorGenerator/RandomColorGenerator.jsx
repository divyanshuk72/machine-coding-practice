import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RandomColorGenerator = () => {
  const [hexColorCode, setHexColorCode] = useState("#000000");

  const handleHexColorGeneration = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setHexColorCode(color);
  };

  const handleRgbColorGeneration = () => {
    let color = "rgb";
    let num1 = Math.floor(Math.random() * 255);
    let num2 = Math.floor(Math.random() * 255);
    let num3 = Math.floor(Math.random() * 255);
    color = color + "(" + num1 + "," + num2 + "," + num3 + ")";
    setHexColorCode(color);
  };

  const navigate = useNavigate();

  return (
    <div className="text-center my-20 flex flex-col items-center gap-10">
      <h1 className="text-white text-3xl">Random Color Generator</h1>
      <div className="flex gap-5">
        <button
          className="px-4 py-2 bg-customRed rounded-lg text-white text-base cursor-pointer"
          onClick={handleHexColorGeneration}
        >
          Generate Hex Color
        </button>
        <button
          className="px-4 py-2 bg-customRed rounded-lg text-white text-base cursor-pointer"
          onClick={handleRgbColorGeneration}
        >
          Generate RGB Color
        </button>
      </div>

      <div
        className="w-[50vw] h-[50vh] rounded-lg flex justify-center items-center border border-white"
        style={{ backgroundColor: hexColorCode }}
      >
        <span
          className="text-white text-2xl"
          style={{ backgroundColor: hexColorCode }}
        >
          Color Code - {hexColorCode}
        </span>
      </div>

      <button
        className="px-4 py-2 bg-customRed rounded-lg text-white text-base cursor-pointer"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
};

export default RandomColorGenerator;
