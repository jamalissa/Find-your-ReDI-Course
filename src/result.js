import React from "react";
import { getMostFrequent } from "./app";
import "./result.css";
// import webDev from "./assets/web_dev_track.png";
// import userCenter from "./assets/user_center_track.png";
// import dataAnalyst from "./assets/data_analyst_track.png";
// import cloudInfra from "./assets/cloud_infra_track.png";

// const resultImg = document.getElementById("result-img");
let resultInfoPara = document.querySelector(".result-info-para");

export default function Result({ answState }) {
  // console.log(getMostFrequent(answState));
  // calling most frequent function to then display results

  function restartQuiz() {
    window.scroll(0, 0);
    window.location.reload();
  }

  let quizResult = getMostFrequent(answState);

  function getImage() {
    if (quizResult === 0) {
      return console.log("this is zero");
      // resultInfoPara.textContent = "Web Dev Development!";
    } else if (quizResult === 1) {
      return console.log("this is two");
      // resultInfoPara.textContent = "User Centered Design";
    } else if (quizResult === 2) {
      return (resultInfoPara.textContent = "Data Analyst");
    } else if (quizResult === 3) {
      return (resultInfoPara.textContent = "Cloud Infrastructure");
    }
  }
  console.log(getImage());
  // console.log(resultImg.src);

  return (
    <div>
      <main className="result-wrapper">
        <div className="result-heading-container">
          <h3 className="result-heading">The results are in!</h3>
        </div>
        <div className="result-info">
          <p className="result-info-para"></p>
          {/* <img src={webDev} alt="" id="result-img"></img> */}
          <button className="btn-restart" onClick={() => restartQuiz()}>
            Back to the start
          </button>
        </div>
      </main>
    </div>
  );
}
