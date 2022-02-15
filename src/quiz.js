import React from "react";
import "./quiz.css";

export default function Quiz(props) {
  // Listen to btn-clicks (not working because of confliting class name)

  // document.querySelector(".btn-answer").addEventListener("click", function () {
  //   let result;
  //   result += document.querySelector(".btn-answer").value;
  //   console.log(result);
  // });

  return (
    <div className="wrapper-quiz">
      <div className="question-box">
        <h3>{props.question}</h3>
      </div>
      <div className="answer-box">
        <button className="btn-answer" value="a">
          {props.answer[0]}
        </button>
        <button className="btn-answer" value="b">
          {props.answer[1]}
        </button>
        <button className="btn-answer" value="c">
          {props.answer[2]}
        </button>
        <button className="btn-answer" value="d">
          {props.answer[3]}
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
