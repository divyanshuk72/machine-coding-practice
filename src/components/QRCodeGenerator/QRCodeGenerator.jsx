import { useState } from "react";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";

const QRCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [show, setShow] = useState(false);

  const generateQrCode = () => {
    setQrCode(value);
    setValue("");
    setShow(true);
  };

  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          textAlign: "center",
          margin: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <h1 style={{ color: "white", margin: "30px" }}>QR Code Generator</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <input
            style={{
              padding: "10px",
              backgroundColor: "white",
              border: "none",
              borderRadius: "10px",
              minWidth: "250px",
            }}
            type="text"
            name="qr-code"
            placeholder="Enter your value..."
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            style={{
              padding: "10px",
              backgroundColor: "#cc4141",
              border: "none",
              borderRadius: "10px",
              margin: "20px",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
            }}
            onClick={generateQrCode}
          >
            Generate
          </button>
        </div>

        {show && (
          <div
            style={{
              width: "300px",
              height: "300px",
              border: "1px solid white",
              borderRadius: "10px",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <QRCode id="qr-code-value" value={qrCode} />
          </div>
        )}

        <button
          style={{
            padding: "10px",
            backgroundColor: "#cc4141",
            border: "none",
            borderRadius: "10px",
            margin: "20px",
            color: "white",
            fontSize: "18px",
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

export default QRCodeGenerator;
