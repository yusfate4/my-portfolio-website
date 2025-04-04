import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio__1.png";
import IMG2 from "../../assets/portfolio__2.png";
import IMG3 from "../../assets/portfolio__3.png";
import IMG4 from "../../assets/portfolio__4.png";
import IMG5 from "../../assets/portfolio__5.png";
import IMG6 from "../../assets/portfolio__6.png";

// portfolios project
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Beemak E-commerce Website",
    github: "https://github.com/yusfate4/Beemak-E-commerce",
    demo: "https://beemakfoodstore.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "AFIWEL Official Website",
    github: "https://github.com/yusfate4/url-shortening-api",
    demo: "https://afiwel.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Affordable Data Connect",
    github: "https://github.com/yusfate4/clipboard-landing-page",
    demo: "https://affordabledataconnect.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "My Portfolio",
    github: "https://github.com/yusfate4/Guess-My-Game",
    demo: "https://dahud-yusuf.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "One Health AI Tech Landing Page",
    github: "https://github.com/yusfate4/mini-project",
    demo: "https://onehealthaitech.com/",
  },

  {
    id: 6,
    image: IMG6,
    title: "Tell-A-Doc Website",
    github: "https://github.com/yusfate4/",
    demo: "https://tell-a-doc.netlify.app/",
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
                {/* <a href={github} className="btn" target="__blank">
                  Github
                </a> */}
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
