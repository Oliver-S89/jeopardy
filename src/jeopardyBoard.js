import React from "react";
import { CategoryColumn } from "./categoryColumn";

export function JeopardyBoard(props) {
  console.log("Game-Date", props);
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {props.gameData.map((columnItem) => {
        return (
          <CategoryColumn
            item={columnItem}
            setSelectedCategoryItem={props.setSelectedCategoryItem}
          />
        );
      })}
    </div>
  );
}
