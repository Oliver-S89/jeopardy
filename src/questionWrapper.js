import React, { useState } from "react";

export function QuestionWrapper(props) {
  // console.log(props);
  const [answerOpened, setAnswerOpened] = useState(false);
  const questionItem = props.categoryItem;
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
          background: "black",
          opacity: 0.95,
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          top: "40px",
          left: "40px",
          right: "40px",
          bottom: "40px",
          background: "#123321",
          border: "solid 2px lightgrey",
          borderRadius: "24px",
        }}
      >
        <h1>
          {props?.categoryItem
            ? props.categoryItem.question
            : "Keine Frage definiert"}
        </h1>
        <h2>Antwort: {props?.categoryItem?.answer}</h2>
        {!answerOpened ? (
          <button onClick={() => setAnswerOpened(true)}>Lösung anzeigen</button>
        ) : (
          <>
            <button onClick={() => props.finishRound(true, questionItem)}>
              Richtig
            </button>
            <button onClick={() => props.finishRound(false, questionItem)}>
              Falsch
            </button>
            <button onClick={() => props.setSelectedCategoryItem(null)}>
              Schließen
            </button>
          </>
        )}
      </div>
    </>
  );
}
