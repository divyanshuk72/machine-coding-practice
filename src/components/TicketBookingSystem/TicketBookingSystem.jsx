import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TicketBookingSystem = () => {
  const vipSeats = [
    ["A1", "A2", "A3", "A4", "A5"],
    ["B1", "B2", "B3", "B4", "B5"],
    ["C1", "C2", "C3", "C4", "C5"],
    ["D1", "D2", "D3", "D4", "D5"],
    ["E1", "E2", "E3", "E4", "E5"],
  ];

  const generalSeats = [
    ["F1", "F2", "F3", "F4", "F5", "F6"],
    ["G1", "G2", "G3", "G4", "G5", "G6"],
    ["H1", "H2", "H3", "H4", "H5", "H6"],
    ["I1", "I2", "I3", "I4", "I5", "I6"],
    ["J1", "J2", "J3", "J4", "J5", "J6"],
    ["K1", "K2", "K3", "K4", "K5", "K6"],
  ];

  const economySeats = [
    ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8"],
    ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8"],
    ["N1", "N2", "N3", "N4", "N5", "N6", "N7", "N8"],
    ["O1", "O2", "O3", "O4", "O5", "O6", "O7", "O8"],
    ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8"],
    ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8"],
    ["R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8"],
    ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"],
  ];

  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    if (selectedSeats.length > 5) {
      alert("Max limit reached");
    }
  }, [selectedSeats]);

  const navigate = useNavigate();

  return (
    <div className="text-center my-8">
      <h1 className="text-white my-10 text-3xl">Ticket Booking System</h1>
      <h3 className="text-white my-9 text-xl">Select your seats</h3>

      <h4 className="text-white my-4 text-lg">VIP Section</h4>
      <div className="flex flex-col gap-3 items-center">
        {vipSeats.map((row, index1) => (
          <div className="flex gap-3" key={index1}>
            {row.map((seat, index2) => (
              <p
                className={`px-1 py-1 border rounded-md text-center min-w-[40px] cursor-pointer ${
                  selectedSeats.includes(seat)
                    ? "bg-green-500 cursor-not-allowed"
                    : "bg-white"
                }`}
                key={`${index1}-${index2}`}
                onClick={() => {
                  setSelectedSeats((prevSeats) => {
                    if (prevSeats.length < 5) {
                      return [...prevSeats, seat];
                    } else {
                      alert("Max limit reached");
                      return prevSeats;
                    }
                  });
                }}
              >
                {seat}
              </p>
            ))}
          </div>
        ))}
      </div>

      <h4 className="text-white my-4 text-lg">General Section</h4>
      <div className="flex flex-col gap-3 items-center">
        {generalSeats.map((row, index1) => (
          <div className="flex gap-3" key={index1}>
            {row.map((seat, index2) => (
              <p
                className={`px-1 py-1 border rounded-md text-center min-w-[40px] cursor-pointer ${
                  selectedSeats.includes(seat)
                    ? "bg-green-500 cursor-not-allowed"
                    : "bg-white"
                }`}
                key={`${index1}-${index2}`}
                onClick={() => {
                  setSelectedSeats((prevSeats) => {
                    if (prevSeats.length < 5) {
                      return [...prevSeats, seat];
                    } else {
                      alert("Max limit reached");
                      return prevSeats;
                    }
                  });
                }}
              >
                {seat}
              </p>
            ))}
          </div>
        ))}
      </div>

      <h4 className="text-white my-4 text-lg">Economy Section</h4>
      <div className="flex flex-col gap-3 items-center">
        {economySeats.map((row, index1) => (
          <div className="flex gap-3" key={index1}>
            {row.map((seat, index2) => (
              <p
                className={`px-1 py-1 border rounded-md text-center min-w-[40px] cursor-pointer ${
                  selectedSeats.includes(seat)
                    ? "bg-green-500 cursor-not-allowed"
                    : "bg-white"
                }`}
                key={`${index1}-${index2}`}
                onClick={() => {
                  setSelectedSeats((prevSeats) => {
                    if (prevSeats.length < 5) {
                      return [...prevSeats, seat];
                    } else {
                      alert("Max limit reached");
                      return prevSeats;
                    }
                  });
                }}
              >
                {seat}
              </p>
            ))}
          </div>
        ))}
      </div>

      <button
        className="px-4 py-2 bg-customRed rounded-lg mx-5 my-10 text-white text-lg cursor-pointer"
        onClick={() => {
          alert(`Tickets Booked -\nSeat No.s - ${selectedSeats}`);
          setSelectedSeats([]);
        }}
      >
        Book Tickets
      </button>
      <button
        className="px-4 py-2 bg-customRed rounded-lg mx-5 my-10 text-white text-lg cursor-pointer"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
};

export default TicketBookingSystem;
