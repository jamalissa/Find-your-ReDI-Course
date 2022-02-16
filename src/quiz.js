import React from "react";
import "./quiz.css";

export default function Quiz({ answer, setAnswer, question, answerState }) {
  function answerSelection(answer) {
    setAnswer([...answerState, answer]);
  }

  return (
    <div className="wrapper-quiz">
      <div className="question-box">
        <h3>{question}</h3>
      </div>
      <div className="answer-box">
        <button
          className="btn-answer"
          onClick={() => answerSelection(answer.indexOf(answer[0]))}
        >
          {answer[0]}
        </button>
        <button
          className="btn-answer"
          onClick={() => answerSelection(answer.indexOf(answer[1]))}
        >
          {answer[1]}
        </button>
        <button
          className="btn-answer"
          onClick={() => answerSelection(answer.indexOf(answer[2]))}
        >
          {answer[2]}
        </button>
        <button
          className="btn-answer"
          onClick={() => answerSelection(answer.indexOf(answer[3]))}
        >
          {answer[3]}
        </button>
        <button className="btn-next">Next Question</button>
      </div>
    </div>
  );
}

// increment the final score //

// listen event handler for each button click
// that increments a specific variable
// maybe a function with

// ask mentors about the GitHub branches and merging // Wednesday
