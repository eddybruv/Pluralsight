import React from "react";
import express from "express";
import { readFileSync } from "fs";
import { renderToString } from "react-dom/server";
import { App } from "../client/App";

const data = {
  question: [
    {
      questionId: "Q1",
      content: "Should we use JQuery or Fetch for AJAX",
    },{
      questionId: 'Q2',
      content: 'What is the best feature of React?'
    }
  ],
  answers: [
    {
      answerId: "A1",
      questionId: "Q1",
      upvotes: 2,
      content: "JQuery",
    },
    {
      answerId: "A2",
      questionId: "Q1",
      upvotes: 1,
      content: "Fetch",
    },
    {
      answerId: "A3",
      questionId: "Q2",
      upvotes: 1,
      content: "Performance",
    },
    {
      answerId: "A4",
      questionId: "Q2",
      upvotes: 2,
      content: "JQuery",
    },
  ],
};

const app = new express();

app.use(express.static("dist"));

app.get("/data")

app.get("/", (_req, res) => {
  const index = readFileSync(`public/index.html`, "utf8");
  const rendered = renderToString(<App {...data}/>);
  res.send(index.replace("{{rendered}}", rendered));
});

app.listen(7777);
console.log("Server is listening");
