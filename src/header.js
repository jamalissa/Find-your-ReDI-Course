import React from "react";

export default function Header() {
  return (
    <div className="wrapper">
      <h1 className="heading">Welcome to the ReDI Course Finder</h1>
      <h2 className="sub-heading">
        If you're here you want to know what course is best suited for you
      </h2>
      <div class="btn-box">
        <button className="btn-start">Start the Quiz</button>
      </div>
    </div>
  );
}
