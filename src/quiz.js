import React from "react";
import data from "./assets/data.json";

export default function Quiz() {
  return <div className="container"></div>;
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
