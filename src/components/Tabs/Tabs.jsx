import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="text-center m-[50px]">
        <h1 className="text-white m-[30px] text-4xl">Tabs</h1>
        <div className="flex justify-center items-center gap-[2px]">
          <button
            className={`${
              activeTab === 1 ? "bg-red-400" : "bg-customRed"
            } p-[10px] rounded-sm hover:bg-red-400`}
            onClick={() => {
              handleTab(1);
            }}
          >
            Tab 1
          </button>
          <button
            className={`${
              activeTab === 2 ? "bg-red-400" : "bg-customRed"
            } p-[10px] rounded-sm hover:bg-red-400`}
            onClick={() => {
              handleTab(2);
            }}
          >
            Tab 2
          </button>
          <button
            className={`${
              activeTab === 3 ? "bg-red-400" : "bg-customRed"
            } p-[10px] rounded-sm hover:bg-red-400`}
            onClick={() => {
              handleTab(3);
            }}
          >
            Tab 3
          </button>
        </div>
        <div className="text-white text-2xl m-[30px]">
          This is tab {activeTab}
        </div>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="p-2 bg-red-500 border-none rounded-lg text-white text-lg cursor-pointer my-5 mx-5"
        >
          Back
        </button>
      </div>
    </>
  );
};

export default Tabs;
