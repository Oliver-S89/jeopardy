// @ts-ignore
import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { LandingPage } from "./landing";
import { QuestionWrapper } from "./questionWrapper";

// @ts-ignore
import data from "./data/game-data.json";
import { JeopardyBoard } from "./jeopardyBoard";
import { Scoreboard } from "./scoreBoard";

function App() {
  // console.log("BASE DATA", data.gameData);
  const [hasStarted, setHasStarted] = useState(false);
  const [teams, setTeams] = useState([]);
  const [teamCount, setTeamCount] = useState(0);
  const [currentTeam, setCurrentTeam] = useState(0);
  const [results, setResults] = useState([]);
  const [readyToStart, setReadyToStart] = useState(false);

  const [selectedCategoryItem, setSelectedCategoryItem] = useState(null);

  const [showScoreBoard, setShowScoreBoard] = useState(false);

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
          team: i + 1,
          points: 0,
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
    prepairedData[questionItem.categoryIndex][
      questionItem.questionIndex
    ].answeredBy = currentTeam;

    updateResults(
      currentTeam,
      questionItem.points,
      correct,
      questionItem.question,
      questionItem.answer
    );

    setCurrentTeam(nextTeam);
    setSelectedCategoryItem(null);
  };

  const updateResults = (team, points, correctly, question, answer) => {
    console.log("#####", team, points, correctly, question, answer);
    const updateEntry = {
      ...results[team - 1],
      ...{
        points: correctly
          ? results[team - 1].points + points
          : results[team - 1].points,
        questions: [
          ...results[team - 1].questions,
          ...[{ question: question, answer: answer, points: points }],
        ],
      },
    };

    const copyResults = results.map((resultEntry) => {
      if (team === resultEntry.team) {
        return updateEntry;
      }
      return resultEntry;
    });

    setResults(copyResults);
  };

  useEffect(() => {
    if (results.length > 0) {
      console.log("RESULT TABLE", results, results.length > 0);
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
              showScoreBoard={setShowScoreBoard}
            />
          </div>
          {selectedCategoryItem && (
            <QuestionWrapper
              categoryItem={selectedCategoryItem}
              setSelectedCategoryItem={setSelectedCategoryItem}
              finishRound={finishRound}
              currentTeam={currentTeam}
            />
          )}
          {showScoreBoard && (
            <Scoreboard showScoreBoard={setShowScoreBoard} results={results} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
