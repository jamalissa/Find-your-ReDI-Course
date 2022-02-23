import React, { useState } from "react";
import Quiz from "./quiz";
import Result from "./result";
import data from "./assets/data.json";

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

  // retrieve answers from answerState array and
  // find out how many times an index is repeated.
  // Biggest one wins and shows the answer

  // Get the most frequent answer for the results page //

  return (
    <div>
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

// function mostRepeat() {
//   let result = [];

//   answerState.forEach((item) => {
//     if (item === 0) {
//       result.push(item);
//     } else if (item === 1) {
//       result.push(item);
//     } else if (item === 2) {
//       result.push(item);
//     } else result.push(item);
//   });
//   result = Math.max(...result);

//   return result;
// }
