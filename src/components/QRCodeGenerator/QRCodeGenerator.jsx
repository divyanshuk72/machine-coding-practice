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
    <div className="text-center my-12 flex flex-col justify-center items-center gap-8">
      <h1 className="text-white my-8 text-4xl">QR Code Generator</h1>
      <div className="flex flex-col justify-center items-center gap-2">
        <input
          className="p-2 bg-white border-none rounded-lg min-w-[250px]"
          type="text"
          name="qr-code"
          placeholder="Enter your value..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          className="p-2 bg-customRed border-none rounded-lg text-white text-lg cursor-pointer my-5"
          onClick={generateQrCode}
        >
          Generate
        </button>
      </div>

      {show && (
        <div className="w-72 h-72 border border-white rounded-lg bg-white flex justify-center items-center">
          <QRCode id="qr-code-value" value={qrCode} />
        </div>
      )}

      <button
        className="p-2 bg-customRed border-none rounded-lg text-white text-lg cursor-pointer my-5"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>
    </div>
  );
};

export default QRCodeGenerator;
