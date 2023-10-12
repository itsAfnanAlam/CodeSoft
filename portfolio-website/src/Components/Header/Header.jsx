import React, { useRef } from "react";
import "./Header.css";

import CloseIcon from "@mui/icons-material/Close";
import ClearAllIcon from "@mui/icons-material/ClearAll";

const Header = () => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>Afnan.dev</h3>
			<nav ref={navRef}>
				<a href="#home">Home</a>
				<a href="/#about">About</a>
				<a href="/#projects">Projects</a>
				<a href="/#contact">Contact</a>
				<a href="https://drive.google.com/file/d/1nSI4ZfPDfgDSfesDa9iHY_ph6N4oWEsq/view"
        target={"_blank"} rel="noreferrer">Resume</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<CloseIcon />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<ClearAllIcon />
			</button>
		</header>
	);
}

export default Header;
