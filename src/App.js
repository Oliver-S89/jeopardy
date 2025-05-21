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
  const [results, setResults] = useState([]);
  const [readyToStart, setReadyToStart] = useState(false);

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
    setResults(() => {
      const resultTable = [];
      for (let i = 0; i < number; i++) {
        const teamTable = {
          team: i,
          point: 0,
          questions: [],
        };
        resultTable.push(teamTable);
      }
      return [...results, ...resultTable];
    });

    console.log(results);
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
    setSelectedCategoryItem(null);
  };

  useEffect(() => {
    console.log(results.length > 0);
    if (results.length > 0) {
      setReadyToStart(true);
    }
  }, [results]);

  return (
    <div className="App">
      {!hasStarted ? (
        <>
          <LandingPage
            storeNumberOfTeams={storeNumberOfTeams}
            startGame={setHasStarted}
            readyToStart={readyToStart}
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
