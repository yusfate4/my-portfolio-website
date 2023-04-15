import React from "react";
import "./about.css";
import ME from "../../assets/me_about.jpg";
// import { TbAwardFilled } from "react-icons/tb";
// import { HiOutlineUsers } from "react-icons/hi";
// import { RiFoldersLine } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5>WHO IS DAHUD YUSUF?</h5>
      <h2>A Bit About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_Image" />
          </div>
        </div>

        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <TbAwardFilled className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <HiOutlineUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <RiFoldersLine className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div> */}

          <p>
            As a goal-oriented front-end developer, I am committed to building
            strong, collaborative teams and providing the best solutions
            possible. My area of expertise is creating fantastic user interfaces
            and my work is excellent and provides consumers with a smooth
            experience across mobile and online platforms. <br /> <br /> I am
            also a technical writer who focuses on using articles to address
            issues. I write clear and straightforward instructions that enable
            readers to effectively overcome any technical obstacle they may
            encounter. I have a sharp eye for detail and a talent for reducing
            complicated technical topics.
            {/* My writings are a go-to resource for
            anyone looking for real-world answers to their technological
            challenges, whether it be installing new hardware or diagnosing
            software problems. */}
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk About Your Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
