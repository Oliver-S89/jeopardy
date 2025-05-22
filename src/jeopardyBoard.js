import React from "react";
import { CategoryColumn } from "./categoryColumn";

export function JeopardyBoard(props) {
  return (
    <div
      style={{
        display: "flex",
        height: `calc(100vh - 120px)`,
        padding: "60px",
        background: "#0A1F44",
      }}
    >
      {props.gameData.map((columnItem, index) => {
        return (
          <>
            <CategoryColumn
              key={index + Date.now()}
              item={columnItem}
              setSelectedCategoryItem={props.setSelectedCategoryItem}
            />
          </>
        );
      })}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: "20px",
          opacity: 0.7,
          fontWeight: "bold",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            background: "#595959",
            padding: "20px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Es ist Team {props.currentTeam ? props.currentTeam : 1} an der Reihe
        </div>
        <h1 style={{ margin: 0, padding: 0, color: "white" }}>
          School of Rock and Pop
        </h1>
        <div>
          <button
            style={{
              padding: "20px",
              background: "#595959",
              border: "none",
              fontWeight: "bold",
              fontSize: "1.05rem",
              borderRadius: "24px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => props.showScoreBoard(true)}
          >
            Scoreboard anzeigen
          </button>
        </div>
      </div>
    </div>
  );
}
