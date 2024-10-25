import { useNavigate } from "react-router-dom";
import { DataList } from "../../constants/DataList";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center m-14">
        <div className="m-14 text-white">
          <h1 className="text-4xl">React Practice Problems</h1>
        </div>
        <ul className="flex flex-wrap gap-10 justify-around items-center">
          {DataList.map((data, index) => {
            return (
              <li
                key={index}
                className="list-none cursor-pointer text-white rounded-xl p-3 text-xl min-w-[180px] bg-customRed"
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
