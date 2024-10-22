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
    <div style={styles.container}>
      <h1 style={styles.header}>Filter</h1>
      <div style={styles.filterContainer}>
        <label style={styles.label}>
          <input
            type="checkbox"
            name="generated"
            checked={filters.generated}
            onChange={handleCheckboxChange}
          />
          Generated
        </label>
        <label style={styles.label}>
          <input
            type="checkbox"
            name="augmented"
            checked={filters.augmented}
            onChange={handleCheckboxChange}
          />
          Augmented
        </label>
        <label style={styles.label}>
          <input
            type="checkbox"
            name="verified"
            checked={filters.verified}
            onChange={handleCheckboxChange}
          />
          Verified
        </label>
        <label style={styles.label}>
          <input
            type="checkbox"
            name="notVerified"
            checked={filters.notVerified}
            onChange={handleCheckboxChange}
          />
          Not Verified
        </label>
      </div>

      <div style={styles.cardContainer}>
        {filteredResponses.length > 0 ? (
          filteredResponses.map((response) => (
            <div key={response._id} style={styles.card}>
              <h2 style={styles.question}>{response.question}</h2>
              <h2 style={styles.question}>{response.source}</h2>
              <h2 style={styles.question}>
                {response.is_verified ? "True" : "False"}
              </h2>
            </div>
          ))
        ) : (
          <p style={{ color: "white" }}>
            No results match your filter criteria.
          </p>
        )}
      </div>
      <button
        style={{
          padding: "10px",
          margin: "30px",
          backgroundColor: "#cc4141",
          border: "none",
          borderRadius: "10px",
          color: "white",
          fontSize: "16px",
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

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  header: {
    fontSize: "2em",
    color: "white",
  },
  filterContainer: {
    margin: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    color: "white",
  },
  label: {
    display: "flex",
    gap: "10px",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    backgroundColor: "#cc4141",
    borderRadius: "8px",
    padding: "20px",
    width: "300px",
    textAlign: "center",
  },
  question: {
    fontSize: "1.2em",
    margin: "0 0 10px 0",
    color: "white",
    backgroundColor: "#cc4141",
  },
};

export default Filter;
