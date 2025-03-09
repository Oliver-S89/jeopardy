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
  const [hasStarted, setHasStarted] = useState(false);
  // @ts-ignore
  const [teams, setTeams] = useState(0);
  // @ts-ignore
  const [selectedCategoryItem, setSelectedCategoryItem] = useState(null);

  useEffect(() => {
    const storedTeams = localStorage.getItem("teams");
    setTeams(storedTeams !== null ? Number(storedTeams) : 0);
  }, []);

  const storeNumberOfTeams = (number) => {
    setTeams(number);
    // localStorage.setItem('teams', number)
    console.log(number);
  };

  console.log(data.gameData);
  return (
    <div className="App">
      {!hasStarted ? (
        <>
          <header className="App-header">
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
          <h1>Hallo Welt</h1>
          <LandingPage
            storeNumberOfTeams={storeNumberOfTeams}
            startGame={setHasStarted}
          />
        </>
      ) : (
        <>
          <div>
            <JeopardyBoard
              gameData={data.gameData}
              setSelectedCategoryItem={setSelectedCategoryItem}
            />
          </div>
          {selectedCategoryItem && (
            <QuestionWrapper
              categoryItem={selectedCategoryItem}
              setSelectedCategoryItem={setSelectedCategoryItem}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
