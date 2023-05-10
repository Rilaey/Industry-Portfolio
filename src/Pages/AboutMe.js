import React from "react";
import ProfilePic from "../images/profile-pic.jpeg";

export default function AboutMe() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "10%",
          flexDirection: "column",
          // border: "2px solid red"
        }}
      >
        <div>
          <img
            src={ProfilePic}
            alt="Riley Newhart"
            className="profile-picture"
          />
        </div>
        <div>
          <div>
            <h1
              style={{
                fontSize: "48px",
                marginBottom: "20px",
                fontStyle: "italic",
                textDecoration: "underline"
              }}
            >
              Get to know me!
            </h1>
            <p style={{
              fontSize: "18px"
            }}>
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
    </div>
  );
}
