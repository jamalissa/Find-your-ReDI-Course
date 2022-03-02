import React from "react";
import { getMostFrequent } from "./app";
import "./result.css";
import webDev from "./assets/web_dev_track.png";
import userCenter from "./assets/user_center_track.png";
import dataAnalyst from "./assets/data_analyst_track.png";
import cloudInfra from "./assets/cloud_infra_track.png";

export default function Result({ answState }) {
  console.log(getMostFrequent(answState));
  // calling most frequent function to then display results

  function restartQuiz() {
    window.scroll(0, 0);
    window.location.reload();
  }

  let quizResult = getMostFrequent(answState);

  function getImage() {
    if (quizResult === "0") {
      return (
        <img src={webDev} className="result-info-img" alt="web_dev_image"></img>
      );
    } else if (quizResult === "1") {
      return (
        <img
          src={userCenter}
          className="result-info-img"
          alt="web_dev_image"
        ></img>
      );
    } else if (quizResult === "2") {
      return (
        <img
          src={dataAnalyst}
          className="result-info-img"
          alt="web_dev_image"
        ></img>
      );
    } else if (quizResult === "3") {
      return (
        <img
          src={cloudInfra}
          className="result-info-img"
          alt="web_dev_image"
        ></img>
      );
    }
  }

  return (
    <div>
      <main className="result-wrapper">
        <div className="result-heading-container">
          <h3 className="result-heading">The results are in!</h3>
        </div>
        <div className="result-info">
          <p className="result-info-para">
            Based on your choices it looks like you'd be best suited for this
            course <br /> &#8659;
          </p>
          {getImage()}
          <button className="btn-restart" onClick={() => restartQuiz()}>
            Back to the start
          </button>
        </div>
      </main>
    </div>
  );
}
