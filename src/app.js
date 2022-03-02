import React, { useState } from "react";
import Header from "./header";
import Quiz from "./quiz";
import Result from "./result";
import data from "./assets/data.json";
import "./app.css";

export const getMostFrequent = (arr) => {
  if (arr.length > 0) {
    const hashmap = arr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(hashmap).reduce((a, b) =>
      hashmap[a] > hashmap[b] ? a : b
    );
  } else console.log("the array is empty");
};

export default function App() {
  const [answerState, setAnswer] = useState({ id: "", answersArray: [] });

  console.log(answerState);
  // console.log(getMostFrequent(answerState.answersArray));

  return (
    <div>
      <Header />
      {data.map((newData, index) => {
        return (
          <Quiz
            id={newData.id}
            key={index}
            question={newData.question}
            answer={newData.answer}
            setAnswer={setAnswer}
            answerState={answerState}
            lastQuestion={newData.lastQuestion}
          />
        );
      })}
      <Result answState={answerState.answersArray} />
    </div>
  );
}
