import { useState } from "react";
import { AccordionList } from "../../constants/AccordionList";
import { useNavigate } from "react-router-dom";

const Accordion = () => {
  const [openAccordions, setOpenAccordions] = useState([]);
  const [isMultiple, setIsMultiple] = useState(false);
  const navigate = useNavigate();

  const handleAccordionClick = (index) => {
    if (isMultiple) {
      setOpenAccordions((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenAccordions((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          margin: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <h1 style={{ color: "white" }}>Accordion</h1>
        <button
          style={{
            padding: "10px",
            backgroundColor: "#cc4141",
            border: "none",
            borderRadius: "10px",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={() => setIsMultiple(!isMultiple)}
        >
          {isMultiple
            ? "Disable Multiple Selection"
            : "Enable Multiple Selection"}
        </button>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "40px",
          }}
        >
          {AccordionList?.map((item, index) => {
            const isOpen = openAccordions.includes(index);

            return (
              <div key={index}>
                <div
                  style={{
                    minWidth: "50vw",
                    height: "auto",
                    color: "white",
                    backgroundColor: "#cc4141",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "20px",
                    borderRadius: isOpen ? "10px 10px 0 0" : "10px",
                    transition: "all 0.2s ease-out",
                  }}
                >
                  <span
                    style={{ backgroundColor: "#cc4141", fontSize: "20px" }}
                  >
                    {item.title}
                  </span>
                  <span
                    style={{
                      backgroundColor: "#cc4141",
                      cursor: "pointer",
                      fontSize: "20px",
                    }}
                    onClick={() => handleAccordionClick(index)}
                  >
                    {isOpen ? "-" : "+"}
                  </span>
                </div>
                <div
                  style={{
                    width: "50vw",
                    height: isOpen ? "auto" : "0",
                    color: "white",
                    backgroundColor: "#cc4141",
                    padding: isOpen ? "20px" : "0 20px",
                    borderRadius: isOpen ? "0 0 10px 10px" : "10px",
                    whiteSpace: "wrap",
                    overflow: "hidden",
                    transition: "all 0.2s ease-out",
                  }}
                >
                  {item.description}
                </div>
              </div>
            );
          })}
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
    </>
  );
};

export default Accordion;
