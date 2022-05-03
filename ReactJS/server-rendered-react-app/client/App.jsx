import React from "react";

export const App = ({ questions, answers, handleModify}) => {
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
                  <button onClick={() => handleModify(answerId, 1)}> + </button>
                  <button onClick={() => handleModify(answerId, -1)}> - </button>
                </span>
              </div>
            ))}
        </div>
      </div>
    ));
  }
};
