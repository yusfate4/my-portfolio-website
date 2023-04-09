import React from "react";
import "./about.css";
import ME from "../../assets/me_about.jpg";
import { TbAwardFilled } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi";
import { RiFoldersLine } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {/* card 1 */}
            <article className="about__card">
              <TbAwardFilled className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            {/* card 2 */}
            <article className="about__card">
              <HiOutlineUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            {/* card 3 */}
            <article className="about__card">
              <RiFoldersLine className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            As a goal-oriented front-end developer, I am committed to building
            strong, collaborative teams and providing the best solutions
            possible. I am well-versed in both the front-end designs and
            back-end logic necessary to create top-tier web experiences. I have
            extensive experience in developing user-friendly interfaces that
            both look and function great. I am well-versed in the latest
            technologies, including HTML, CSS, JavaScript, Tailwind CSS,
            BootStrap, and React and I am always looking to expand my knowledge
            base. I am a motivated, goal-oriented individual with the knowledge and experience necessary
            to build successful web experiences.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
