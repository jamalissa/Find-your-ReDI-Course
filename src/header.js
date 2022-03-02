import React from "react";
import logo from "./assets/redi_logo.png";
import "./header.css";

export default function Header() {
  return (
    <div className="wrapper">
      <img className="img-logo" src={logo} alt="logo"></img>
      <h1 className="heading">ReDI Course Finder</h1>
      <h2 className="sub-heading">
        So, you want to know what course is best suited for you but there are
        just too many options to choose ? Don't worry. ReDI is here for you.
        <br />
        <br />
        We prepared a few simple questions that will result in a clear winner.
        You just have to start your journey.
      </h2>
      <div className="btn-box">
        <button
          className="btn-start"
          onClick={() => window.scrollBy({ top: 757, behavior: "smooth" })}
        >
          Are you ReDI ?<br />
          {/* <small>click me!</small> */}
        </button>
      </div>
    </div>
  );
}
