import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import MarsMarketLogo from "../images/marsmarketlogo.png";
import BackyardSportsLogo from "../images/BackyardSportsLogo1.png";
import ParkFinderLogo from "../images/ParkFinderLogo.png";
import LocalWeatherLogo from "../images/weather-logo.jpg";
import TextEditorLogo from "../images/text-edit.jpeg";
import ChatLogo from "../images/chat-logo.avif";

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      image: MarsMarketLogo,
      altText: "mars market logo",
      title: "The Mars Market",
      description:
        "Come and visit the one stop shop for all of your product needs. Create an account in seconds and start posting items you want to sell. With PayPals seamless integration you can use paypal, credit/debit cards, or apple pay!",
      tools:
        "React, Tailwind, DaisyUI, MongoDB, PayPal, Node, Express, GraphQl",
      github: "https://github.com/Rilaey/The-Mars-Market",
      application: "http://www.themarsmarket.com/"
    },
    {
      image: BackyardSportsLogo,
      altText: "backyard sports logo",
      title: "Backyard Sports",
      description:
        "Assemble your team with Backyard Sports. With this application connect with people who have the same sport interest as you. After connecting with your team hop into the chat room and talk with your teammates in real time.",
      tools:
        "HTML, CSS, Bootstrap, Handlebars, JavaScript, MySql, Various API's",
      github: "https://github.com/Rilaey/Backyard-Sports",
      application: "https://backyard-sports.herokuapp.com/"
    },
    {
      image: ParkFinderLogo,
      altText: "park finder logo",
      title: "Park Finder",
      description:
        "Let Park Finder choose your next destination for you! With Park Finder's search feature you can find a random state park in the United States or narrow down the search based on location mile radius with the help of the Google Maps API.",
      tools: "HTML, CSS, Bootstrap, JavaScript, Various API's",
      github: "https://github.com/Rilaey/Park-Finder",
      application: "https://rilaey.github.io/Park-Finder/"
    },
    {
      image: LocalWeatherLogo,
      altText: "local weather logo",
      title: "Weather Forecast",
      description:
        "Local Weather is a user-friendly and intuitive application designed to provide you with up-to-date weather information in a 5 day forecast at your fingertips. With its sleek and modern interface, the app offers a comprehensive overview of the current weather conditions in your desired location, enabling you to make informed decisions and plan your activities accordingly.",
      tools: "Vite, DaisyUI, TailwindCSS, OpenWeatherAPI",
      github: "https://github.com/Rilaey/cool-weather",
      application: "https://rilaey.github.io/cool-weather/"
    },
    {
      image: TextEditorLogo,
      altText: "text editor logo",
      title: "PWA Text Editor",
      description:
        "Need to write some code on the fly in a simple development environment? If so look no further because this is the application for you!",
      tools: "React, Express, IndexDB, CSS",
      github: "https://github.com/Rilaey/PWA-Text-Editor",
      application: "https://rileys-text-editor.herokuapp.com/"
    },
    {
      image: ChatLogo,
      altText: "Chat rooms logo",
      title: "React Chat Rooms",
      description:
        "The Real-Time Chat App is a modern and interactive messaging application built using React, Node.js, and Socket.io. It allows users to communicate with each other in real-time, making it perfect for both personal and professional use.",
      tools: "React, Node, Express, Socket.io",
      github: "https://github.com/Rilaey/Chat-Rooms",
      application: "https://react-chat-rooms.herokuapp.com/"
    }
  ]);

  return (
    <>
      <div>
        <a
          href="/"
          style={{
            fontSize: "38px",
            margin: "10px"
          }}
          className="back-btn"
        >
          ←
        </a>
      </div>
      <div className="flex flex-col text-center items-center justify-center">
        <div className="m-5">
          <h1
            className="project-header"
            style={{
              // textDecoration: "underline",
              padding: "25px auto",
              fontSize: "48px"
            }}
          >
            Projects
          </h1>
        </div>
        <div className="flex items-center justify-center text-center flex-wrap">
          {projects.map((item) => {
            return (
              <ProjectCard
                image={item.image}
                altText={item.altText}
                title={item.title}
                description={item.description}
                tools={item.tools}
                github={item.github}
                application={item.application}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
