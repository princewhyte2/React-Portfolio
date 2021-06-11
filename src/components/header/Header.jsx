import React from "react";

import reactLogo from "../../images/logo.svg";
import myLogo from "../../images/Whyte_-removebg-preview.png";
import nodeLogo from "../../images/nodejs-icon.svg";
import dotnetCore from "../../images/net_Core_Logo.svg.png";
import pyLogo from "../../images/pylogo.png";
import jSLogo from "../../images/logo-javascript.svg";
import androidLogo from "../../images/Android-Logo.png";

import myCV from "../../assets/Whyte_Prince_CV.pdf";

import "./header.css";

const Header = () => {
  return (
    <div className={"header-banner"}>
      <header className={"header-section"}>
        {" "}
        <img src={myLogo} className={"header-logo"} alt="logo" />{" "}
        <nav className={"nav-bar"}>
          <a href={"#about-me"} className={"nav-link"}>
            About
          </a>{" "}
          <a href={"#my-works"} className={"nav-link"}>
            Projects
          </a>
          <a href={"#contact-me"} className={"nav-link"}>
            Contact
          </a>
        </nav>
      </header>
      <div className={"banner-content-wrapper"}>
        <section className={"banner-content"}>
          <h3 id={"title"}>
            {" "}
            Hey there,I'm Whyte! 👋{" "}
            <b className={"love"}> Software Developer</b> <br />
          </h3>
          <p className={"about-me"} id={"about-me"}>
            I've always believed <em>Code</em> can change the world. whether its
            through simplifying our day to day task or giving us an opportunity
            to view things in a whole new way. I love working on projects that
            make people happy as well as solve problems at any scale. In the
            past few years I've found myself learning various programming
            languages frameworks, understanding User Experience design,
            Front-end ,Back-end development, Mobile App development and product
            management.
          </p>
          <a
            href={myCV}
            className={"download-btn"}
            download="Princewhyte_Dabotubo_resume"
          >
            Download CV
          </a>
        </section>
        <div className={"user-img-wrapper"}>
          {/* <img src={logo} className={"user-img"} /> */}
        </div>
      </div>

      <section className={"stack-section"}>
        <h2 className={"stack-section-title"}>I work with these:</h2>
        <div className={"stack-wrapper"}>
          <img src={jSLogo} alt="js_log" />
          <img src={dotnetCore} alt="dotNet_core" />
          <img src={reactLogo} id={"react-logo"} alt="react logo" />
          <img src={nodeLogo} alt="node js logo" />
          <img src={pyLogo} alt="python logo" />
          <img src={androidLogo} alt="android logo" />
        </div>
      </section>
    </div>
  );
};

export default Header;
