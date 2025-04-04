import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/yusuf_me.png";
import HeaderSocial from "./HeaderSocials";
// import React, { Component } from "react";
import Typical from "react-typical";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header-container__1">
          <h5>Hello! 👋 My name is</h5>
          <h1>Dahud Yusuf</h1>
          <p className="text-name">
            I'm a{" "}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Web Developer 👨‍💻",
                1500,
                "PHP & WordPress Expert ✍️",
                1500,
              ]}
            />
          </p>
          {/* <h5 className="text-light">Frontend Developer</h5> */}
          <CTA />
          <HeaderSocial />
        </div>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        {/* <p>Hello! 👋 My name is</p> */}

        {/* <a href="#contact" className="scroll__down">
          Scroll Down
        </a> */}
      </div>
    </header>
  );
};

export default Header;
