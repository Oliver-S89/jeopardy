import React, { useState } from "react";
import CountdownTimer from "./CountdownTimer";

export function QuestionWrapper(props) {
  // console.log(props);
  const [answerOpened, setAnswerOpened] = useState(false);
  const questionItem = props.categoryItem;
  const initialSeconds = props.initialSecondsForTimer || 30;
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
          background: "#1E3A8A",
          border: "solid 2px lightgrey",
          borderRadius: "24px",
          padding: "40px",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <h1
            style={{ padding: "100px 140px", fontWeight: "normal" }}
            dangerouslySetInnerHTML={{
              __html: props?.categoryItem
                ? props.categoryItem.question
                : "Keine Frage definiert",
            }}
          />
          {!answerOpened ? (
            <button
              style={{
                background: "white",
                border: "none",
                fontSize: "1.5rem",
                fontWeight: "bold",
                padding: "14px 24px",
                color: "#1E3A8A",
                borderRadius: "24px",
                marginTop: "40px",
              }}
              onClick={() => setAnswerOpened(true)}
            >
              Lösung anzeigen
            </button>
          ) : (
            <>
              <h2 style={{ padding: "0 80px", marginTop: 80 }}>
                Antwort: {props?.categoryItem?.answer}
              </h2>
              <div
                style={{
                  position: "fixed",
                  bottom: "100px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <button
                  style={{
                    background: "white",
                    border: "none",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    padding: "14px 24px",
                    color: "#1E3A8A",
                    borderRadius: "24px",
                    marginRight: "20px",
                  }}
                  onClick={() => props.finishRound(true, questionItem)}
                >
                  Richtig
                </button>
                <button
                  style={{
                    background: "white",
                    border: "none",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    padding: "14px 24px",
                    color: "#1E3A8A",
                    borderRadius: "24px",
                  }}
                  onClick={() => props.finishRound(false, questionItem)}
                >
                  Falsch
                </button>
              </div>
            </>
          )}
          <button
            style={{
              position: "fixed",
              right: "60px",
              top: "60px",
              background: "none",
              fontSize: "2rem",
              border: "none",
              color: "white",
              fontWeight: "bold",
            }}
            onClick={() => props.setSelectedCategoryItem(null)}
          >
            X
          </button>
          <div
            style={{
              position: "fixed",
              left: "60px",
              top: "60px",
              background: "none",
              fontSize: "1.5rem",
              border: "none",
              color: "white",
              opacity: 0.5,
            }}
            onClick={() => props.setSelectedCategoryItem(null)}
          >
            Team {props.currentTeam}
          </div>
          <div
            style={{
              position: "fixed",
              right: "60px",
              bottom: "60px",
              background: "none",
              fontSize: "1.5rem",
              border: "none",
              color: "white",
              opacity: 0.8,
            }}
          >
            <CountdownTimer
              initialSeconds={initialSeconds}
              onComplete={() => alert("Zeit ist abgelaufen!")}
              answerOpened={answerOpened}
            />
          </div>
        </div>
      </div>
    </>
  );
}
