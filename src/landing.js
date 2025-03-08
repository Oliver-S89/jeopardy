import React from "react";

export function LandingPage(props) {
  console.log(props);

  return (
    <>
      <h1>Wieviele Teams gibt es</h1>
      <input
        type="text"
        onChange={(e) => props.storeNumberOfTeams(e.target.value)}
      />
      <button onClick={() => props.startGame(true)}>Los Gehts</button>
    </>
  );
}
