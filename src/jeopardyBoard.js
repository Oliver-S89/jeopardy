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
          top: 10,
          left: 20,
          background: "#595959",
          padding: "20px",
          opacity: 0.7,
          fontWeight: "bold",
          color: "white",
        }}
      >
        Es ist Team {props.currentTeam ? props.currentTeam : 1} an der Reihe
      </div>
    </div>
  );
}
