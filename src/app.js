import React, { useState } from "react";
import Quiz from "./quiz";
import data from "./assets/data.json";

export default function App() {
  const [answerState, setAnswer] = useState([]);

  console.log(answerState);

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
