import React from "react";
import { getMostFrequent } from "./app";
import "./result.css";

export default function Result({ answState }) {
  console.log(getMostFrequent(answState));
  // calling most frequent function to then display results

  return (
    <div>
      <main className="result-wrapper">
        <div className="result-info">
          <h4>
            Congrats! Based on your answers this is the choice we think is best
            for you.
          </h4>
          {/* /* <img> Course image </img> */}
        </div>
      </main>
    </div>
  );
}
