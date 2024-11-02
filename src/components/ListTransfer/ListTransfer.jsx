import { useNavigate } from "react-router-dom";
import Right from "../../assets/RightArrow.svg";
import Left from "../../assets/LeftArrow.svg";
import { useState } from "react";

const data = [
  {
    name: "1",
    id: 1,
    checked: false,
  },
  {
    name: "2",
    id: 2,
    checked: false,
  },
  {
    name: "3",
    id: 3,
    checked: false,
  },
  {
    name: "4",
    id: 4,
    checked: false,
  },
  {
    name: "5",
    id: 5,
    checked: false,
  },
];

const ListTransfer = () => {
  const navigate = useNavigate();

  const [firstList, setFirstList] = useState(data);
  const [secondList, setSecondList] = useState([]);

  const handleFirstListChange = () => {};

  const handleSecondListChange = () => {};

  const handleMoveRight = () => {};

  const handleMoveLeft = () => {};

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-12 text-white mt-[50px]">
        <h1 className="text-4xl">List Transfer</h1>
        <div className="flex justify-center items-center gap-8">
          <div className="bg-customRed w-[200px] h-[400px] rounded-md p-4 flex flex-col justify-evenly items-center gap-1">
            {firstList.map((item) => {
              return (
                <div key={item.id} className="flex gap-6">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={handleFirstListChange}
                  />
                  <label className="text-xl">{item.name}</label>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <button
              onClick={handleMoveRight}
              className="rounded-[50%] bg-customRed p-2 w-10 hover:bg-red-400"
            >
              <img src={Right} alt="right" />
            </button>
            <button
              onClick={handleMoveLeft}
              className="rounded-[50%] bg-customRed p-2 w-10 hover:bg-red-400"
            >
              <img src={Left} alt="left" />
            </button>
          </div>
          <div className="bg-customRed w-[200px] h-[400px] rounded-md p-4 flex flex-col justify-evenly items-center gap-1">
            {secondList.map((item) => {
              return (
                <div key={item.id} className="flex gap-6">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={handleSecondListChange}
                  />
                  <label className="text-xl">{item.name}</label>
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="p-2 bg-customRed border-none rounded-lg text-white text-lg cursor-pointer my-5 mx-5"
        >
          Back
        </button>
      </div>
    </>
  );
};

export default ListTransfer;
