import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import GitHubLogo from "../images/github-logo.png";
import LinkedInLogo from "../images/linkedin-logo.png";
import TwitterLogo from "../images/twitter-white-logo.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-layout flex flex-col items-center text-center justify-center">
      <div>
        <h1 className="home-header">Riley Newhart</h1>
        <h1 className="home-header">Full Stack Developer</h1>
      </div>
      <div>
        <div className="home-buttons flex flex-wrap m-6">
          <button
            className="home-btn btn btn-outline m-4"
            onClick={() => navigate("/AboutMe")}
          >
            About
          </button>
          <button
            className="home-btn btn btn-outline m-4"
            onClick={() => navigate("/ContactMe")}
          >
            Contact
          </button>
          <button
            className="home-btn btn btn-outline m-4"
            onClick={() => navigate("/Projects")}
          >
            Projects
          </button>
          <button className="home-btn btn btn-outline m-4">
            <a href="https://docs.google.com/document/d/e/2PACX-1vR2qssyUn35cpjzlGy4CGBss3cZZfBYN3SNfD59Ta1zoTd_DT9HFMWWnw_aHPN0h6BI7_jVi8xUDzG5/pub">
              Resume
            </a>
          </button>
        </div>
      </div>

      <div className="flex align-center">
        <div>
          <a href="https://github.com/Rilaey">
            <img src={GitHubLogo} alt="github logo" className="social-logo" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/riley-newhart-667b43128/">
            <img
              src={LinkedInLogo}
              alt="linkedin logo"
              className="social-logo"
            />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/codingWithRiley">
            <img src={TwitterLogo} alt="twitter logo" className="social-logo" />
          </a>
        </div>
      </div>
    </div>
  );
}
