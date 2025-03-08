import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { LandingPage } from "./landing";

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [teams, setTeams] = useState(0);

  useEffect(() => {
    const storedTeams = localStorage.getItem("teams");
    setTeams(storedTeams !== null ? Number(storedTeams) : 0);
  }, []);

  const storeNumberOfTeams = (number) => {
    setTeams(number);
    // localStorage.setItem('teams', number)
    console.log(number);
  };

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
          <h1>Los gehts</h1>
        </>
      )}
    </div>
  );
}

export default App;
