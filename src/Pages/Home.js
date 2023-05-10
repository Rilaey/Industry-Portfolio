import React from "react";
import { useNavigate } from "react-router-dom";
import DarkBgImage from "../images/dark-bg-img.jpg";

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
        <h1 className="my-10 home-header">Welcome To My Portfolio</h1>
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
            flexWrap: "wrap",
          }}
        >
          <button className="btn btn-outline m-4" onClick={() => navigate('/AboutMe')}>About Me</button>
          <button className="btn btn-outline m-4" onClick={() => navigate('/ContactMe')}>Contact Me</button>
          <button className="btn btn-outline m-4" onClick={() => navigate('/Projects')}>Projects</button>
          <button className="btn btn-outline m-4" onClick={() => navigate('/Resume')}>Resume</button>
        </div>
      </div>
    </div>
  );
}
