import { useState } from "react";
import { responses } from "../../constants/FilterData";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const [filters, setFilters] = useState({
    generated: false,
    augmented: false,
    verified: false,
    notVerified: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const filteredResponses = responses.filter((response) => {
    const { generated, augmented, verified, notVerified } = filters;

    if (generated && response.source !== "Generated") return false;
    if (augmented && response.source !== "Augmented") return false;
    if (verified && !response.is_verified) return false;
    if (notVerified && response.is_verified) return false;

    return true;
  });

  const navigate = useNavigate();

  return (
    <div className="p-5 text-center font-sans">
      <h1 className="text-4xl text-white">Filter</h1>
      <div className="my-5 flex justify-center gap-10 text-white">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="generated"
            checked={filters.generated}
            onChange={handleCheckboxChange}
            className="cursor-pointer"
          />
          Generated
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="augmented"
            checked={filters.augmented}
            onChange={handleCheckboxChange}
            className="cursor-pointer"
          />
          Augmented
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="verified"
            checked={filters.verified}
            onChange={handleCheckboxChange}
            className="cursor-pointer"
          />
          Verified
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="notVerified"
            checked={filters.notVerified}
            onChange={handleCheckboxChange}
            className="cursor-pointer"
          />
          Not Verified
        </label>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {filteredResponses.length > 0 ? (
          filteredResponses.map((response) => (
            <div
              key={response._id}
              className="bg-customRed rounded-md p-5 w-72 text-white text-center"
            >
              <h2 className="text-lg mb-2">{response.question}</h2>
              <h2 className="text-lg mb-2">{response.source}</h2>
              <h2 className="text-lg mb-2">
                {response.is_verified ? "True" : "False"}
              </h2>
            </div>
          ))
        ) : (
          <p className="text-white">No results match your filter criteria.</p>
        )}
      </div>
      <button
        className="px-4 py-2 mt-10 bg-customRed rounded-lg text-white text-base cursor-pointer"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
};

export default Filter;
