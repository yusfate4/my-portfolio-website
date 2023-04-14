import React from "react";
import "./footer.css";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        EGATOR
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>{" "}
        </li>
        <li>
          <a href="#about">About</a>{" "}
        </li>
        <li>
          <a href="#experience">Experience</a>{" "}
        </li>
        <li>
          <a href="#services">Services</a>{" "}
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>{" "}
        </li>
        <li>
          <a href="#contact">Contact</a>{" "}
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com">
          <FiTwitter />
        </a>
        <a href="https://linkedin.com">
          <AiOutlineLinkedin />{" "}
        </a>
        <a href="https://github.com">
          <AiOutlineGithub />
        </a>
      </div>


      <div className="footer__copyright">
        <small>&copy; Dahud Yusuf. </small>
      </div>
    </footer>
  );
};

export default Footer;
