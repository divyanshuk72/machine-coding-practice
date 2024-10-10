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
    <div
      style={{
        textAlign: "center",
        margin: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "white", margin: "40px" }}>Traffic Light</h1>
      <h5 style={{ color: "white", marginBottom: "20px", fontStyle: "italic" }}>
        (Default delay - 5s each)
      </h5>

      <div
        style={{
          maxWidth: "75px",
          height: "auto",
          border: "1px solid white",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: "10px",
          gap: "10px",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "1px solid white",
            borderRadius: "50%",
            backgroundColor: "red",
            opacity: `${activeLight === "red" ? 1 : 0.2}`,
          }}
        ></div>
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "1px solid white",
            borderRadius: "50%",
            backgroundColor: "yellow",
            opacity: `${activeLight === "yellow" ? 1 : 0.2}`,
          }}
        ></div>
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "1px solid white",
            borderRadius: "50%",
            backgroundColor: "green",
            opacity: `${activeLight === "green" ? 1 : 0.2}`,
          }}
        ></div>
      </div>
      <div
        style={{
          color: "white",
          margin: "20px",
          width: "130px",
          height: "auto",
          padding: "10px",
          border: "1px solid white",
          borderRadius: "10px",
        }}
      >
        <div>Time Passed</div>
        <div>{timePassed}</div>
      </div>

      <div
        style={{
          margin: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "18px",
          }}
        >
          Change starting light
        </p>
        <select
          name="startLight"
          id="startLight"
          style={{
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "white",
            cursor: "pointer",
          }}
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
  );
};

export default TrafficLight;
