import React from "react";
import data from "./assets/data.json";
import "./quiz.css";

export default function Quiz() {
  return (
    <div className="wrapper-quiz">
      <div className="question-box">
        <h3>"Where is the dark side of the moon ?"</h3>
      </div>
      <div className="answer-box">
        <button className="btn-answer">1</button>
        <button className="btn-answer">2</button>
        <button className="btn-answer">3</button>
        <button className="btn-answer">4</button>
      </div>
    </div>
  );
}

// display Answers in buttons //

let answerDisplay = "";

for (let i = 0; i <= 3; i++) {
  answerDisplay += data["3"]["answer"][i] + " ";
}

console.log(answerDisplay);

// increment the final score //

// listen event handler for each button click
// that increments a specific variable
// maybe a function with

// ask mentors about the GitHub branches and merging // Wednesday
