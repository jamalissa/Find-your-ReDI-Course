import React, { useState } from "react";
import Quiz from "./quiz";
import data from "./assets/data.json";

export default function App() {
  const [answerState, setAnswer] = useState([]);

  console.log(answerState);

  // retrieve answers from answerState array and
  // find out how many times an index is repeated.
  // Biggest one wins and shows the answer

  function mostRepeat() {
    let result = [];

    answerState.forEach((item) => {
      if (item === 0) {
        result.push(item);
      } else if (item === 1) {
        result.push(item);
      } else if (item === 2) {
        result.push(item);
      } else result.push(item);
    });
    result = Math.max(...result);

    return result;
  }

  console.log(mostRepeat());

  return (
    <div>
      {data.map((newData, index) => {
        return (
          <Quiz
            key={index}
            question={newData.question}
            answer={newData.answer}
            setAnswer={setAnswer}
            answerState={answerState}
          />
        );
      })}
    </div>
  );
}
