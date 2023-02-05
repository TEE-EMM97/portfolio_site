import React from "react";
import { Link } from "gatsby";
import profilePic from "../../../../content/profilepic.webp";
import "./bio.scss";

export const Bio = () => {
  return (
    <>
      <div className="bio">
        <img src={profilePic} alt={"myself"} style={{}} />

        <p className="bio__text">
          Personal blog by
          <a href="https://twitter.com/home"> Tev</a>. Ramblings of a programmer
          and wanna be F1 Driver.
        </p>
      </div>
      <div className="mt-5">
        <p>
          <Link to={"/"}>Go Home</Link>
        </p>
      </div>
    </>
  );
};
