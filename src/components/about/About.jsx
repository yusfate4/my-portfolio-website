import React from "react";
import "./about.css";
import ME from "../../assets/me_about.jpg";
import { TbAwardFilled } from "react-icons/tb";
import {HiOutlineUsers} from 'react-icons/hi'

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
              <TbAwardFilled className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
