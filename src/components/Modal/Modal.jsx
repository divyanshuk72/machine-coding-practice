import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="text-center m-[50px] flex flex-col justify-center items-center gap-[20px]">
        <h1 className="text-4xl text-white m-[30px]">Modal</h1>
        <button
          onClick={handleOpen}
          className="p-2 bg-red-500 border-none rounded-lg text-white text-lg cursor-pointer my-5 mx-5"
        >
          Open Modal
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="p-2 bg-red-500 border-none rounded-lg text-white text-lg cursor-pointer my-5 mx-5"
        >
          Back
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-5 border-2 border-black rounded-lg shadow-lg w-[660px]">
              <h3 className="text-3xl m-[30px]">Modal</h3>
              <button
                onClick={handleClose}
                className="p-2 bg-red-500 border-none rounded-lg text-white text-sm cursor-pointer my-5 mx-5"
              >
                Close Modal
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
