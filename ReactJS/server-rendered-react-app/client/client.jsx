import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { handleModify } from "../shared/utility";

let state = undefined;

fetch("http://localhost:7777/data")
  .then((data) => data.json())
  .then((json) => {
    state = json;
    console.log("Got the state", state);
    render();
  });

function handleVote(answerId, increment) {
  state.answers = handleModify(state.answers, answerId, increment);

  fetch(`vote/${answerId}?increment=${increment}`);

  render();
}

function render() {
  ReactDOM.hydrate(
    <App {...state} handleModify={handleModify} />,
    document.querySelector("#root")
  );
}
