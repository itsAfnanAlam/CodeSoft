import React from "react";
import "./Projects.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h3>PORTFOLIO</h3>
      <h2>Each project is a unique piece of development 🧩</h2>
      <div className="project__wrapper">
        {/* Project Start */}
        <div className="project">
          <div className="p__left ">
            <a
              href="https://crypkart.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://user-images.githubusercontent.com/97395445/182640760-a5549b2a-e7fb-4da1-8ac1-8228cd8524cb.png"
                alt=""
                target="_blank"
                rel="noreferrer"
              />
            </a>
          </div>
          <div className="p__right ">
            <h3>Crypkart 🪙</h3>
            <p>
            Crypkart is a crypto app that allows users to search for information about various cryptocurrencies in real-time and allows users to login with an account and store their favorite coins in their list.
            </p>
            <div className="stack">
              <p>React</p>
              <p>MaterialUI</p>
            </div>
            <div className="links">
              <a
                href="https://github.com/itsAfnanAlam/crypkart"
                target="_blank"
                rel="noreferrer"
              >
                Code
                <GitHubIcon style={{ fontSize: 30 }} />
              </a>
              <a
                href="https://crypkart.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
                <LaunchIcon style={{ fontSize: 30 }} />
              </a>
            </div>
          </div>
        </div>
        {/* Project End */}

        {/* Project Start */}
        <div className="project reversed-proj">
          <div className="p__left">
            <a
              href="https://social-media-mern-proj.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://user-images.githubusercontent.com/97395445/170713241-b2f5e9df-ae63-4ace-8709-ec8b921ebf5f.png"
                alt=""
                target="_blank"
                rel="noreferrer"
              />
            </a>
          </div>
          <div className="p__right">
            <h3>Social 👋</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              deserunt dicta asperiores eum, amet ipsa pariatur repellendus
              nesciunt! Nemo, inventore.
            </p>
            <div className="stack">
              <p>React</p>
              <p>NodeJS</p>
              <p>MUI</p>
            </div>
            <div className="links">
              <a
                href="https://github.com/itsAfnanAlam/mern-social-app"
                target="_blank"
                rel="noreferrer"
              >
                Code
                <GitHubIcon />
              </a>
              <a
                href="https://social-media-mern-proj.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
                <LaunchIcon />
              </a>
            </div>
          </div>
        </div>
        {/* Project Start */}

        {/* Project Start */}
        <div className="project ">
          <div className="p__left">
            <a
              href="https://fightinggameproject.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://user-images.githubusercontent.com/97395445/170710548-8fc4ad0b-4fb0-4629-9b80-f3d8b4886d64.png"
                alt=""
                target="_blank"
                rel="noreferrer"
              />
            </a>
          </div>
          <div className="p__right">
            <h3>Fight Club ⚔️</h3>
            <p>
              Fight club is a two players fighting game.
            </p>
            <div className="stack">
              <p>HTML</p>
              <p>CSS</p>
              <p>JS</p>
            </div>
            <div className="links">
              <a
                href="https://github.com/itsAfnanAlam/fighting_game"
                target="_blank"
                rel="noreferrer"
              >
                Code
                <GitHubIcon />
              </a>
              <a
                href="https://fightinggameproject.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
                <LaunchIcon />
              </a>
            </div>
          </div>
        </div>
        {/* Project Start */}
      </div>
    </div>
  );
};

export default Projects;
