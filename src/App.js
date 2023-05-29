import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import ContactMe from "./Pages/ContactMe";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              fullName="Riley Newhart"
              jobTitle="Full Stack Developer"
              githubLink="https://github.com/Rilaey"
              linkedInLink="https://www.linkedin.com/in/riley-newhart-667b43128/"
              twitterLink="https://twitter.com/codingWithRiley"
            />
          }
        />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/ContactMe" element={<ContactMe />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
