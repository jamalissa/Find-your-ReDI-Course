import React from "react";
import Quiz from "./quiz";
import data from "./assets/data.json";

export default function App() {
  return (
    <div>
      <Quiz question={data[1]["question"]} answer={data[1]["answer"]} />
      <Quiz question={data[2]["question"]} answer={data[2]["answer"]} />
      <Quiz question={data[3]["question"]} answer={data[3]["answer"]} />
    </div>
  );
}
