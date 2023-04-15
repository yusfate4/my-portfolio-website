import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio__1.png";
import IMG2 from "../../assets/portfolio__2.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio__4.png";
import IMG5 from "../../assets/portfolio__5.jpg";
import IMG6 from "../../assets/portfolio__6.png";

// portfolios project
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Bankist-App dashboard",
    github: "https://github.com/yusfate4/Bankist-App",
    demo: "https://yusfate4.github.io/Bankist-App/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Guess-My-Game",
    github: "https://github.com/yusfate4/Guess-My-Game",
    demo: "https://yusfate4.github.io/Guess-My-Game/",
  },
  {
    id: 2,
    image: IMG3,
    title: "Crypto currency dashboard",
    github: "https://github.com",
    demo: "https://github.com/yusfate4",
  },
  {
    id: 4,
    image: IMG4,
    title: "Tiide Xplore",
    github: "https://github.com/yusfate4/TiideXplore",
    demo: "https://yusfate4.github.io/TiideXplore/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Clipboard landing page",
    github: "https://github.com/yusfate4/clipboard-landing-page",
    demo: "https://yusfate4.github.io/clipboard-landing-page/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Eventful moment dashboard",
    github: "https://github.com/yusfate4/Eventful-Moment",
    demo: "https://eventful-moment-izs1jjg1c-yusfate4.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="__blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="__blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
