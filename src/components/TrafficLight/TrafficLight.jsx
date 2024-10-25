import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TrafficLight = () => {
  const [trafficLight, setTrafficLight] = useState({
    red: {
      time: 5,
      next: "yellow",
    },
    yellow: {
      time: 5,
      next: "green",
    },
    green: {
      time: 5,
      next: "red",
    },
  });

  const [activeLight, setActiveLight] = useState("red");
  const [timePassed, setTimePassed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimePassed((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [activeLight, trafficLight]);

  useEffect(() => {
    if (timePassed >= trafficLight[activeLight].time) {
      setTimePassed(0);
      setActiveLight(trafficLight[activeLight].next);
    }
  }, [timePassed]);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center my-8 gap-5">
      <h1 className="text-white text-3xl my-8">Traffic Light</h1>
      <h5 className="text-white mb-5 italic">(Default delay - 5s each)</h5>

      <div className="max-w-[75px] border border-white rounded-lg flex flex-col justify-around p-2 gap-2">
        <div
          className={`w-[50px] h-[50px] border border-white rounded-full bg-red-500 transition-opacity duration-300 ${
            activeLight === "red" ? "opacity-100" : "opacity-20"
          }`}
        ></div>
        <div
          className={`w-[50px] h-[50px] border border-white rounded-full bg-yellow-400 transition-opacity duration-300 ${
            activeLight === "yellow" ? "opacity-100" : "opacity-20"
          }`}
        ></div>
        <div
          className={`w-[50px] h-[50px] border border-white rounded-full bg-green-500 transition-opacity duration-300 ${
            activeLight === "green" ? "opacity-100" : "opacity-20"
          }`}
        ></div>
      </div>
      <div className="text-white mt-5 w-[130px] border border-white rounded-lg p-2">
        <div>Time Passed</div>
        <div>{timePassed}</div>
      </div>

      <div className="flex justify-center items-center gap-5 mt-5">
        <p className="text-white text-lg">Change starting light</p>
        <select
          name="startLight"
          id="startLight"
          className="px-4 py-2 rounded-lg bg-white cursor-pointer"
          onChange={(e) => {
            setActiveLight(e.target.value);
            setTimePassed(0);
          }}
        >
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
        </select>
      </div>
      <button
        className="px-4 py-2 bg-customRed rounded-lg mt-5 text-white text-lg cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>
    </div>
  );
};

export default TrafficLight;
