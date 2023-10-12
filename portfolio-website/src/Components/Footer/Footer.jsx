import React from "react";
import "./Footer.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <h3>Mohd Afnan Alam</h3>
          <p>Copyright © 2023. All rights are reserved</p>
        </div>
        <div className="footer__right">
          <a
            href="https://www.linkedin.com/in/mohd-afnan-alam-b7a1b0226/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon style={{ fontSize: 35 }} />
          </a>
          <a
            href="https://www.instagram.com/itsafnanalam/?hl=en"
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
      </div>
    </div>
  );
};

export default Footer;
