import React from "react";
import { getMostFrequent } from "./app";
import "./result.css";

export default function Result({ answState }) {
  console.log(getMostFrequent(answState));
  // calling most frequent function to then display results

  function restartQuiz() {
    window.scroll(0, 0);
    window.location.reload();
  }

  return (
    <div>
      <main className="result-wrapper">
        <div className="result-heading-container">
          <h3 className="result-heading">The results are in!</h3>
          <h4>
            Congrats! Based on your answers this is the choice we think is best
            for you.
          </h4>
        </div>
        <div className="result-info">
          {/* /* <img> Course image </img> */}
          <button className="btn-restart" onClick={() => restartQuiz()}>
            Back to the start
          </button>
        </div>
      </main>
    </div>
  );
}
