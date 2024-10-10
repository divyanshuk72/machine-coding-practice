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
    <div style={{ textAlign: "center", margin: "32px" }}>
      <h1 style={{ color: "white", margin: "40px" }}>Ticket Booking System</h1>
      <h3 style={{ color: "white", margin: "36px" }}>Select your seats</h3>
      <h4 style={{ color: "white", margin: "18px" }}>VIP Section - </h4>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {vipSeats.map((row, index1) => {
          return (
            <div style={{ display: "flex", gap: "10px" }} key={index1}>
              {row.map((seat, index2) => {
                return (
                  <p
                    style={{
                      padding: "5px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      textAlign: "center",
                      minWidth: "40px",
                      cursor: selectedSeats.includes(seat)
                        ? "not-allowed"
                        : "pointer",
                      backgroundColor: selectedSeats.includes(seat)
                        ? "darkseagreen"
                        : "white",
                    }}
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
                );
              })}
            </div>
          );
        })}
      </div>
      <h4 style={{ color: "white", margin: "18px" }}>General Section - </h4>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {generalSeats.map((row, index1) => {
          return (
            <div style={{ display: "flex", gap: "10px" }} key={index1}>
              {row.map((seat, index2) => {
                return (
                  <p
                    style={{
                      padding: "5px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      textAlign: "center",
                      minWidth: "40px",
                      cursor: selectedSeats.includes(seat)
                        ? "not-allowed"
                        : "pointer",
                      backgroundColor: selectedSeats.includes(seat)
                        ? "darkseagreen"
                        : "white",
                    }}
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
                );
              })}
            </div>
          );
        })}
      </div>
      <h4 style={{ color: "white", margin: "18px" }}>Economy Section - </h4>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {economySeats.map((row, index1) => {
          return (
            <div style={{ display: "flex", gap: "10px" }} key={index1}>
              {row.map((seat, index2) => {
                return (
                  <p
                    style={{
                      padding: "5px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      textAlign: "center",
                      minWidth: "40px",
                      cursor: selectedSeats.includes(seat)
                        ? "not-allowed"
                        : "pointer",
                      backgroundColor: selectedSeats.includes(seat)
                        ? "darkseagreen"
                        : "white",
                    }}
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
                );
              })}
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
          alert(`Tickets Booked -\nSeat No.s - ${selectedSeats}`);
          setSelectedSeats([]);
        }}
      >
        Book Tickets
      </button>
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

export default TicketBookingSystem;
