import React from "react";

export function QuestionWrapper(props) {
  return (
    <div
      style={{
        position: "fixed",
        top: "40px",
        left: "40px",
        right: "40px",
        bottom: "40px",
        background: "darkblue",
      }}
    >
      <h1>
        {props?.categoryItem
          ? props.categoryItem.question
          : "Keine Frage definiert"}
      </h1>

      <button onClick={() => props.setSelectedCategoryItem(null)}>
        Schließen
      </button>
    </div>
  );
}
