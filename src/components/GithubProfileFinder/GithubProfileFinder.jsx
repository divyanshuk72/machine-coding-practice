import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserCard from "./UserCard";

const GithubProfileFinder = () => {
  const API_URL = "https://api.github.com/users";
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  const fetchUser = async (username) => {
    try {
      setLoading(true);
      let response = await fetch(API_URL + `/${username}`);
      let data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = () => {
    fetchUser(username);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const navigate = useNavigate();

  if (errorMsg.length > 0)
    return <div className="text-center text-white m-[20px]">{errorMsg}</div>;

  return (
    <>
      <div className="text-center m-[50px] flex flex-col justify-center items-center gap-[20px]">
        <h1 className="text-white text-4xl m-[30px]">GitHub Profile Finder</h1>
        <div className="flex justify-center items-center gap-[10px]">
          <input
            type="text"
            value={username}
            placeholder="Enter username..."
            onChange={(e) => {
              handleUsername(e);
            }}
            className="p-2 rounded-md"
          />
          <button
            onClick={handleSearch}
            className="p-2 bg-customRed border-none rounded-lg text-white text-lg cursor-pointer my-5 mx-5"
          >
            Search
          </button>
        </div>
        {!loading && "name" in userData ? (
          <UserCard userData={userData} />
        ) : !loading && !("name" in userData) ? (
          <div className="text-center text-white m-[20px]">
            Enter username to search
          </div>
        ) : (
          <div className="text-center text-white m-[20px]">
            Loading data....
          </div>
        )}
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

export default GithubProfileFinder;
