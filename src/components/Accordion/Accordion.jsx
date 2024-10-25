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
      <div className="text-center my-20 flex flex-col items-center gap-12">
        <h1 className="text-white text-3xl">Accordion</h1>
        <button
          className="px-4 py-2 bg-customRed rounded-lg text-white text-base cursor-pointer"
          onClick={() => setIsMultiple(!isMultiple)}
        >
          {isMultiple
            ? "Disable Multiple Selection"
            : "Enable Multiple Selection"}
        </button>

        <div className="flex flex-col items-center gap-10">
          {AccordionList?.map((item, index) => {
            const isOpen = openAccordions.includes(index);

            return (
              <div key={index} className="w-full max-w-[50vw]">
                <div
                  className={`text-white bg-customRed flex justify-between px-5 py-4 rounded-t-lg transition-all duration-200 ease-out ${
                    isOpen ? "rounded-t-lg" : "rounded-lg"
                  }`}
                >
                  <span className="text-lg">{item.title}</span>
                  <span
                    className="cursor-pointer text-lg"
                    onClick={() => handleAccordionClick(index)}
                  >
                    {isOpen ? "-" : "+"}
                  </span>
                </div>
                <div
                  className={`text-white bg-customRed overflow-hidden transition-all duration-200 ease-out ${
                    isOpen ? "px-5 py-4 rounded-b-lg" : "h-0 px-5 py-0"
                  }`}
                >
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="px-4 py-2 bg-customRed rounded-lg text-white text-lg cursor-pointer mt-5"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default Accordion;
