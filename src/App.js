// @ts-ignore
import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { LandingPage } from "./landing";
import { QuestionWrapper } from "./questionWrapper";

// @ts-ignore
import data from "./data/game-data.json";
import { JeopardyBoard } from "./jeopardyBoard";

function App() {
  // console.log("BASE DATA", data.gameData);
  const [hasStarted, setHasStarted] = useState(false);
  const [teams, setTeams] = useState([]);
  const [teamCount, setTeamCount] = useState(0);
  const [currentTeam, setCurrentTeam] = useState(0);

  const [selectedCategoryItem, setSelectedCategoryItem] = useState(null);

  const [prepairedData, setPrepairedData] = useState(() => {
    return data.gameData.map((category, categoryIndex) => {
      const questions = category.questionset.map((question, questionIndex) => {
        return {
          ...question,
          ...{
            answeredBy: null,
            answeredCorretly: null,
            categoryIndex: categoryIndex,
            questionIndex: questionIndex,
          },
        };
      });
      return [...questions, { category: category.category }];
    });
  });

  useEffect(() => {
    // console.log("PREPAIRED DATA", prepairedData);
  }, [prepairedData]);

  const storeNumberOfTeams = (number) => {
    setCurrentTeam(Math.floor(Math.random() * number) + 1);
    setTeamCount(number);
    setTeams(number);
  };

  const finishRound = (correct, questionItem) => {
    console.log(questionItem.categoryIndex);
    const nextTeam = currentTeam + 1 > teamCount ? 1 : currentTeam + 1;
    const updatedPrepairedData = (prepairedData[questionItem.categoryIndex][
      questionItem.questionIndex
    ].answeredCorretly = correct);

    console.log(
      "#####",
      correct,
      questionItem.categoryIndex,
      questionItem.questionIndex,
      updatedPrepairedData,
      prepairedData
    );
    setCurrentTeam(nextTeam);
  };

  return (
    <div className="App">
      {!hasStarted ? (
        <>
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <h1>Hallo Welt</h1> */}
          <LandingPage
            storeNumberOfTeams={storeNumberOfTeams}
            startGame={setHasStarted}
          />
        </>
      ) : (
        <>
          <div>
            <JeopardyBoard
              gameData={prepairedData}
              setSelectedCategoryItem={setSelectedCategoryItem}
              currentTeam={currentTeam}
            />
          </div>
          {selectedCategoryItem && (
            <QuestionWrapper
              categoryItem={selectedCategoryItem}
              setSelectedCategoryItem={setSelectedCategoryItem}
              finishRound={finishRound}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
