import React from "react";
import ProfilePic from "../images/profile-pic.jpeg";

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
      </div>
      <div className="about-layout flex align-center text-center items-center justify-center mx-10">
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
            <h1
              className="about-header"
              style={{
                margin: "12px auto",
                fontSize: "32px",
                textDecoration: "underline",
                color: "#fff"
              }}
            >
              Get to know me!
            </h1>
            <p
              style={{
                color: "#fff",
                fontSize: "18px"
              }}
            >
              As a full-stack web developer, I bring a passion for building
              robust and scalable web applications. With a strong foundation in
              both front-end and back-end development, I am a quick learner with
              a keen eye for detail. I deliver high-quality code that meets user
              requirements and exceeds expectations. My excellent communication
              and collaboration skills make me a great team player, eager to
              contribute my skills to create innovative solutions to complex
              problems.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
