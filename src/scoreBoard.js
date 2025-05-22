import React, { useState } from "react";

export function Scoreboard(props) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "#f6f6f6",
        padding: "40px",
      }}
    >
      <button
        style={{
          position: "fixed",
          top: 10,
          right: 10,
          background: "none",
          padding: "10px 15px",
          fontWeight: "bold",
          fontSize: "2rem",
          color: "black",
          border: "none",
        }}
        onClick={() => props.showScoreBoard(false)}
      >
        X
      </button>
      <h1>Scoreboard</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignContent: "space-around",
          flexWrap: "wrap",
          padding: "20px 60px",
          color: "#444444",
        }}
      >
        {props.results.map((result) => {
          return (
            <div
              style={{
                margin: "20px",
                background: "#c6c6c6",
                padding: "0 40px",
                minWidth: "200px",
              }}
            >
              <h1>Team {result.team}</h1>
              <h3>Punkte: {result.points}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
