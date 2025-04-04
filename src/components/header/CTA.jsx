import React from "react";
import CV from "../../assets/yusuf_cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download Resume
      </a>
      <a
        href="https://wa.me/message/SOM4EYZEQ5T7L1"
        className="btn btn-primary"
      >
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
