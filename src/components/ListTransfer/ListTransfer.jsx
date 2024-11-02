import { useNavigate } from "react-router-dom";
import Right from "../../assets/RightArrow.svg";
import Left from "../../assets/LeftArrow.svg";
import { useState } from "react";

const data = [
  { name: "First", id: 1, checked: false },
  { name: "Second", id: 2, checked: false },
  { name: "Third", id: 3, checked: false },
  { name: "Fourth", id: 4, checked: false },
  { name: "Fifth", id: 5, checked: false },
];

const ListTransfer = () => {
  const navigate = useNavigate();
  const [firstList, setFirstList] = useState(data);
  const [secondList, setSecondList] = useState([]);

  const handleFirstListChange = (id) => {
    setFirstList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleSecondListChange = (id) => {
    setSecondList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleMoveRight = () => {
    const selectedItems = firstList.filter((item) => item.checked);
    const remainingItems = firstList.filter((item) => !item.checked);

    setFirstList(remainingItems);
    setSecondList((prevList) =>
      [...prevList, ...selectedItems].map((item) => ({
        ...item,
        checked: false,
      }))
    );
  };

  const handleMoveLeft = () => {
    const selectedItems = secondList.filter((item) => item.checked);
    const remainingItems = secondList.filter((item) => !item.checked);

    setSecondList(remainingItems);
    setFirstList((prevList) =>
      [...prevList, ...selectedItems].map((item) => ({
        ...item,
        checked: false,
      }))
    );
  };

  return (
    <div className="flex flex-col justify-center items-center gap-12 text-white mt-[50px]">
      <h1 className="text-4xl mb-5">List Transfer</h1>
      <div className="flex justify-center items-center gap-10">
        {/* First List */}
        <div className="bg-customRed w-[220px] h-[420px] rounded-lg shadow-lg p-5 flex flex-col justify-evenly items-center gap-3">
          {firstList.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-2 w-full rounded-md hover:bg-red-400 transition-colors"
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleFirstListChange(item.id)}
                className="h-5 w-5 cursor-pointer accent-red-100"
              />
              <label className="text-lg font-medium">{item.name}</label>
            </div>
          ))}
        </div>

        {/* Control Buttons */}
        <div className="flex flex-col justify-center items-center gap-3">
          <button
            onClick={handleMoveRight}
            className="rounded-full bg-customRed p-3 w-12 h-12 flex items-center justify-center shadow-lg transition-transform hover:bg-red-400 active:scale-90"
          >
            <img src={Right} alt="Move right" />
          </button>
          <button
            onClick={handleMoveLeft}
            className="rounded-full bg-customRed p-3 w-12 h-12 flex items-center justify-center shadow-lg transition-transform hover:bg-red-400 active:scale-90"
          >
            <img src={Left} alt="Move left" />
          </button>
        </div>

        {/* Second List */}
        <div className="bg-customRed w-[220px] h-[420px] rounded-lg shadow-lg p-5 flex flex-col justify-evenly items-center gap-3">
          {secondList.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-2 w-full rounded-md hover:bg-red-400 transition-colors"
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleSecondListChange(item.id)}
                className="h-5 w-5 cursor-pointer accent-red-100"
              />
              <label className="text-lg font-medium">{item.name}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="p-2 bg-customRed hover:bg-red-400 border-none rounded-lg text-white text-lg cursor-pointer my-5 mx-5"
      >
        Back
      </button>
    </div>
  );
};

export default ListTransfer;
