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
            As a dedicated Web Developer, I am committed to building robust,
            high-performing websites that deliver exceptional user experiences.
            My expertise spans a wide range of web technologies, including PHP
            and front-end development, allowing me to create responsive,
            efficient solutions tailored to diverse needs. With a strong focus
            on clean code and a keen eye for detail, I ensure every project
            meets high standards of quality and functionality across platforms.
            <br /> <br /> My specialization in WordPress sets me apart, where I
            leverage its powerful capabilities to craft seamless, user-friendly
            websites. With deep knowledge of WordPress architecture, I develop
            custom themes, plugins, and optimized solutions that enhance
            performance and scalability. Whether it’s ensuring mobile
            responsiveness or fine-tuning site speed, I bring precision and
            passion to every WordPress project, delivering results that exceed
            expectations.
            {/* My writings are a go-to resource for
            anyone looking for real-world answers to their technological
            challenges, whether it be installing new hardware or diagnosing
            software problems. */}
          </p>

          <a href="https://wa.me/message/SOM4EYZEQ5T7L1" className="btn btn-primary">
            Let's Talk About Your Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
