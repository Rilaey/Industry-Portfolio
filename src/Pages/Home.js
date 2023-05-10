import React from "react";
import { useNavigate } from "react-router-dom";
import DarkBgImage from "../images/dark-bg-img.jpg";
import GitHubLogo from "../images/github-logo.png";
import LinkedInLogo from "../images/linkedin-logo.png";
import TwitterLogo from "../images/twitter-white-logo.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${DarkBgImage})`,
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingBottom: "20%"
      }}
    >
      <div>
        <h1 className="my-10 home-header">Riley Newhart's Portfolio</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          alignContent: "center"
        }}
      >
        <div
          className="home-buttons"
          style={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          <button
            className="btn btn-outline m-4"
            onClick={() => navigate("/AboutMe")}
          >
            About Me
          </button>
          <button
            className="btn btn-outline m-4"
            onClick={() => navigate("/ContactMe")}
          >
            Contact Me
          </button>
          <button
            className="btn btn-outline m-4"
            onClick={() => navigate("/Projects")}
          >
            Projects
          </button>
          <button
            className="btn btn-outline m-4"
            onClick={() => navigate("/Resume")}
          >
            Resume
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center"
        }}
      >
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
            <img src={TwitterLogo} alt="twitter logo" className="social-logo"/>
          </a>
        </div>
      </div>
    </div>
  );
}
