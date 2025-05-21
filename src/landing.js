import React, { useState } from "react";

export function LandingPage(props) {
  // console.log(props);
  const [numberSubmitted, setNumberSubmitted] = useState(false);
  const [numberOfTeams, setNumberOfTeams] = useState(0);

  const submitNumberOfTeams = (number) => {
    props.storeNumberOfTeams(number);
  };

  console.log("READY TO START", props.readyToStart);

  return (
    <>
      {!props.readyToStart ? (
        <>
          <h1>Wieviele Teams gibt es</h1>
          <input
            type="text"
            onChange={(e) => setNumberOfTeams(Number(e.target.value))}
            placeholder="Wähle ein Zahl zwischen 1 und 8."
            style={{ minWidth: "220px" }}
          />
          <button onClick={(e) => submitNumberOfTeams(numberOfTeams)}>
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
