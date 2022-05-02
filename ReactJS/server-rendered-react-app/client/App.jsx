import React from "react";

export const App = ({ questions, answers }) => {
  <div>
    <h1>Q & A tool</h1>
  </div>;

  {
    questions.map(({ questionId, content }) => (
      <div key={questionId}>
        <h3>{content}</h3>
        <div>
          {answers
            .filter((answer) => answer.questionId === questionId)
            .map(({ content, upvotes, answerId }) => (
              <div key={answerId}>
                <span>
                  {content} - {upvotes}
                </span>
              </div>
            ))}
        </div>
      </div>
    ));
  }
};
