import React from "react";
import ProfilePic from "../images/profile-pic.jpeg";
import EducationCard from "../components/EducationCard";
import UcfLogo from "../images/ucf-logo.png";

export default function AboutMe() {
  return (
    <>
      <div>
        <a
          href="/"
          style={{
            fontSize: "38px",
            margin: "10px"
          }}
        >
          ←
        </a>
        <div className="flex text-center items-center justify-center">
          <h1 className="about-header m-5">About Me</h1>
        </div>
      </div>
      <div className="about-layout flex align-center text-center items-center justify-center m-10">
        <div>
          <img
            src={ProfilePic}
            alt="Riley Newhart"
            className="profile-picture"
            style={{
              margin: "5px 25px"
            }}
          />
        </div>
        <div>
          <div
            style={{
              margin: "5px 50px"
            }}
          >
            <p
              style={{
                color: "#fff",
                fontSize: "18px"
              }}
            >
              As an experienced full-stack web developer, I'm passionate about
              crafting robust and scalable web applications. With expertise in
              front-end and back-end development, I deliver high-quality code
              that exceeds expectations. I excel in communication and
              collaboration, contributing innovative solutions to complex
              problems. My ultimate goal is to create seamless user experiences,
              making a positive impact on the digital landscape. Let's embark on
              this journey together.
            </p>
          </div>
        </div>
      </div>
      <div className="more-info flex justify-center align-center m-5">
        <div className="m-5">
          <EducationCard
            photo={UcfLogo}
            altText="University Of Central Florida"
            title="University Of Central Florida"
            time="September 2022 - March 2023"
            location="Orlando, FL"
            message="A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS."
          />
        </div>
        <div className="m-5">
          <EducationCard
            photo={UcfLogo}
            altText="Nebula Software Solutions"
            title="Nebula Software Solutions"
            time="June 2022 - December 2022"
            location="Fort Lauderdale, FL"
            message="As a junior developer working at Nebula, My role consisted of writing clean and maintainable code in React.js. I participated in code reviews with the guidance of a senior dev. Communicated with other developers on my team with problem solving and debugging sessions regularly. Followed agile development methodologies and contributed to sprint planning and daily stand-up meetings."
          />
        </div>
      </div>
    </>
  );
}
