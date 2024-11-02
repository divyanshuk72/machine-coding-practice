import { useNavigate } from "react-router-dom";
import Right from "../../assets/RightArrow.svg";
import Left from "../../assets/LeftArrow.svg";

const data = [
  {
    name: "One",
    id: 1,
    checked: false,
  },
  {
    name: "Two",
    id: 2,
    checked: false,
  },
  {
    name: "Three",
    id: 3,
    checked: false,
  },
  {
    name: "Four",
    id: 4,
    checked: false,
  },
  {
    name: "Five",
    id: 5,
    checked: false,
  },
];

const ListTransfer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-12 text-white mt-[50px]">
        <h1 className="text-4xl">List Transfer</h1>
        <div className="flex justify-center items-center gap-8">
          <div className="bg-customRed w-[200px] h-[400px] rounded-md p-4">
            List 1
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <button className="rounded-[50%] bg-customRed p-2 w-10 hover:bg-red-400">
              <img src={Right} alt="right" />
            </button>
            <button className="rounded-[50%] bg-customRed p-2 w-10 hover:bg-red-400">
              <img src={Left} alt="left" />
            </button>
          </div>
          <div className="bg-customRed w-[200px] h-[400px] rounded-md p-4">
            List 1
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
