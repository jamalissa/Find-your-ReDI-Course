import React from "react";
import "./quiz.css";

export default function Quiz({
  answer,
  setAnswer,
  question,
  answerState,
  lastQuestion,
  id,
}) {
  function answerSelection(answer, id) {
    if (id !== answerState.id) {
      setAnswer({
        ...answerState,
        answersArray: [...answerState.answersArray, answer],
        id: id,
      });
    }
  }

  return (
    <div className="wrapper-quiz">
      <div className="question-box">
        <h3>{question}</h3>
      </div>
      <div className="answer-box">
        <button
          className="btn-answer"
          onClick={() => answerSelection(answer.indexOf(answer[0]), id)}
        >
          {answer[0]}
        </button>
        <button
          className="btn-answer"
          onClick={() => answerSelection(answer.indexOf(answer[1]), id)}
        >
          {answer[1]}
        </button>
        <button
          className="btn-answer"
          onClick={() => answerSelection(answer.indexOf(answer[2]), id)}
        >
          {answer[2]}
        </button>
        <button
          className="btn-answer"
          onClick={() => answerSelection(answer.indexOf(answer[3]), id)}
        >
          {answer[3]}
        </button>
        <button
          className="btn-next"
          onClick={() =>
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          {lastQuestion ? "See the results!" : "Next Question"}
        </button>
      </div>
    </div>
  );
}

// increment the final score //

// listen event handler for each button click
// that increments a specific variable
// maybe a function with

// ask mentors about the GitHub branches and merging // Wednesday
