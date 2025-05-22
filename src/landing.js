import React, { useState } from "react";

export function LandingPage(props) {
  // console.log(props);
  const [numberSubmitted, setNumberSubmitted] = useState(false);
  const [numberOfTeams, setNumberOfTeams] = useState(0);
  const [initialSeconds, setInitialSeconds] = useState(45);

  const submitNumberOfTeams = (number) => {
    setNumberSubmitted(true);
    props.storeNumberOfTeams(number);
  };

  return (
    <>
      {!props.readyToStart ? (
        <>
          <h1>Wieviele Teams gibt es</h1>
          <input
            type="text"
            onChange={(e) => setNumberOfTeams(Number(e.target.value))}
            placeholder="Wähle ein Zahl zwischen 1 und 8."
            style={{
              minWidth: "220px",
              height: "30px",
              lineHeight: "30px",
              border: "1px solid",
              color: "#333",
              fontWeight: "bold",
              paddingLeft: "10px",
              marginRight: "10px",
              borderColor: numberSubmitted ? "#6add6a" : "#333",
            }}
          />
          <button
            onClick={(e) => submitNumberOfTeams(numberOfTeams)}
            style={{
              minWidth: "140px",
              height: "34px",
              lineHeight: "34px",
              border: "none",
              color: "#333",
              fontSize: "0.9rem",
              letterSpacing: "0.1rem",
              fontWeight: "bold",
              background: numberSubmitted ? "#6add6a" : "#a7a7a7",
              verticalAlign: "bottom",
            }}
          >
            Bestätigen
          </button>
          <h1>Wie lange ist die Antwortzeit</h1>
          <input
            type="text"
            onChange={(e) => setInitialSeconds(Number(e.target.value))}
            placeholder="Bitte in Sekunden angeben."
            style={{
              minWidth: "220px",
              height: "30px",
              lineHeight: "30px",
              border: "1px solid",
              color: "#333",
              fontWeight: "bold",
              paddingLeft: "10px",
              marginRight: "10px",
              borderColor:
                props.initialSecondsForTimer > 0 ? "#6add6a" : "#333",
            }}
          />
          <button
            onClick={(e) => props.setInitialSecondsForTimer(initialSeconds)}
            style={{
              minWidth: "140px",
              height: "34px",
              lineHeight: "34px",
              border: "none",
              color: "#333",
              fontSize: "0.9rem",
              letterSpacing: "0.1rem",
              fontWeight: "bold",
              background:
                props.initialSecondsForTimer > 0 ? "#6add6a" : "#a7a7a7",
              verticalAlign: "bottom",
            }}
          >
            Bestätigen
          </button>
        </>
      ) : (
        <button
          onClick={() => props.startGame(true)}
          style={{
            position: "fixed",
            left: "50%",
            top: "50%",
            width: "240px",
            height: "120px",
            background: "#1E3A8A",
            borderRadius: "24px",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontWeight: "normal",
            fontSize: "2rem",
            border: "none",
          }}
        >
          Los Gehts
        </button>
      )}
    </>
  );
}
