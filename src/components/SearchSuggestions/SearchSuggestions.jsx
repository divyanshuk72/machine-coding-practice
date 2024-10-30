import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchSuggestions = () => {
  const API_URL = "https://dummyjson.com/users";

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setUsers(data.users.map((item) => item.firstName));
      setLoading(false);
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 0) {
      const filteredData = users.filter((item) =>
        item.toLowerCase().includes(query)
      );
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    fetchUsers(API_URL);
  }, []);

  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="text-white text-center my-5 text-xl">Loading data...</div>
    );
  }

  if (errorMsg) {
    return (
      <div className="text-red-500 text-center my-5 text-xl">{errorMsg}</div>
    );
  }

  return (
    <div className="flex flex-col items-center m-[50px] gap-[20px]">
      <h1 className="text-white text-4xl mb-6">Search Suggestions</h1>
      <div className="flex flex-col items-center w-1/2">
        <div className="flex justify-center items-center gap-4">
          <input
            className="p-2 m-2 w-full text-black rounded-md border border-gray-300 focus:border-blue-500 outline-none"
            type="text"
            value={searchParam}
            onChange={handleChange}
            placeholder="Enter username..."
          />
          <button className="m-2 p-2 bg-customRed text-white rounded-md">
            Search
          </button>
        </div>

        {showDropdown && (
          <ul className="bg-gray-800 w-[300px] mt-2 rounded-md shadow-lg max-h-48 overflow-y-auto">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setShowDropdown(false);
                    setSearchParam(user);
                    setFilteredUsers([]);
                  }}
                  className="p-2 text-white hover:bg-blue-600 cursor-pointer"
                >
                  {user}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-300 text-center">
                No results found.
              </li>
            )}
          </ul>
        )}
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
  );
};

export default SearchSuggestions;
