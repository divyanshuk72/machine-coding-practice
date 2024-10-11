import { useState } from "react";

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

  return (
    <>
      <div
        style={{
          textAlign: "center",
          margin: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <h1 style={{ color: "white" }}>Random Color Generator</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <button
            style={{
              padding: "10px",
              backgroundColor: "#cc4141",
              border: "none",
              borderRadius: "10px",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={handleHexColorGeneration}
          >
            Generate Hex Color
          </button>
          <button
            style={{
              padding: "10px",
              backgroundColor: "#cc4141",
              border: "none",
              borderRadius: "10px",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={handleRgbColorGeneration}
          >
            Generate RGB Color
          </button>
        </div>

        <div
          style={{
            width: "50vw",
            height: "50vh",
            backgroundColor: hexColorCode,
            border: "1px solid white",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: "32px",
              backgroundColor: hexColorCode,
            }}
          >
            Color Code - {hexColorCode}
          </span>
        </div>
      </div>
    </>
  );
};

export default RandomColorGenerator;
