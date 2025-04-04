import React from "react";
import "./footer.css";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
   

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
          <a href="#portfolio">Portfolio</a>{" "}
        </li>
        <li>
          <a href="#contact">Contact</a>{" "}
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/yusfate4">
          <FiTwitter />
        </a>
        <a href="https://www.linkedin.com/in/dahudyusuf/">
          <AiOutlineLinkedin />{" "}
        </a>
        <a href="https://github.com/yusfate4">
          <AiOutlineGithub />
        </a>
        <a
          href="https://wa.me/message/SOM4EYZEQ5T7L1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>

        <a
          href="mailto:abiodunyusuf4@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMail />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Dahud Yusuf. </small>
      </div>
    </footer>
  );
};

export default Footer;
