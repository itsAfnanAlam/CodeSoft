import React from "react";
import "./Home.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FilePresentIcon from "@mui/icons-material/FilePresent";

const home = () => {
  return (
    <div className="home" id="home">
      <div className="home__top">
        <div className="home__top__left">
          <h1 className="title">Full-Stack Web Developer 👋</h1>
          <p>
            Hi, I'm Mohd Afnan Alam. A passionate Full Stack Web Developer based
            in New Delhi, India. 📍
          </p>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/mohd-afnan-alam-b7a1b0226/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon style={{ fontSize: 35 }} />
            </a>
            <a
              href="https://github.com/itsAfnanAlam"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon style={{ fontSize: 35 }} />
            </a>
            <a
              href="https://www.instagram.com/itsafnanalam/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon style={{ fontSize: 35 }} />
            </a>
          </div>
          <div className="resume">
            <a
              href="https://drive.google.com/file/d/1nSI4ZfPDfgDSfesDa9iHY_ph6N4oWEsq/view"
              target="_blank"
              rel="noreferrer"
            >
              <button>
                Resume
                <FilePresentIcon />
              </button>
            </a>
          </div>
        </div>
        <div className="home__top__right"></div>
      </div>
      <div className="home__bottom">
        <p>Tech Stack</p>
        <div className="t__stack">
          <ul>
            <li>
              <img src="/img/html.png" alt="HTML" title="HTML" />
            </li>
            <li>
              <img src="/img/css.png" alt="CSS" title="CSS" />
            </li>
            <li>
              <img src="/img/js.png" alt="Javascript" title="JS" />
            </li>
            <li>
              <img src="/img/react.png" alt="React" title="ReactJs" />
            </li>
            <li>
              <img src="/img/java.png" alt="java" title="Java" />
            </li>
            <li>
              <img src="/img/node.png" alt="Node" title="NodeJs" />
            </li>
            <li>
              <img src="/img/mongo.png" alt="mongoDb" title="MongoDB" />
            </li>
            <li>
              <img src="/img/sass.png" alt="sass" title="Sass" />
            </li>
            <li>
              <img src="/img/sql.png" alt="SQL" title="SQL" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default home;
