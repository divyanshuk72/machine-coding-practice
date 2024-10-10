import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { DataList } from "../constants/DataList";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container">
        <div className="header">
          <h1>React Practice Problems</h1>
        </div>
        <ul className="list">
          {DataList.map((data, index) => {
            return (
              <li
                key={index}
                className="list-item"
                onClick={() => {
                  navigate(data.route);
                }}
              >
                {data.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
