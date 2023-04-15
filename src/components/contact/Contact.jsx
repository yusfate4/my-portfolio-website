import React from "react";
import "./contact.css";
// import { AiOutlineMail } from "react-icons/ai";
// import { FiTwitter } from "react-icons/fi";
// import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4r11unu",
        "template_85mbn3d",
        form.current,
        "0IHwBSYfcX4ePZs1c"
      )







      
      // .then(
      //   (result) => {
      //     console.log(result.text);
      //   },
      //   (error) => {
      //     console.log(error.text);
      //   }
      // );

    // e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Let's Get In Touch </h5>
      <h2>I am constantly eager to hear about new projects and opportunities.</h2>

      <div className="container contact__container">
        {/* <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>abiodunyusuf4@gmail.com</h5>
            <a
              href="mailto:abiodunyusuf4@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FiTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>Dahud Yusuf</h5>
            <a
              href="https://twitter.com/yusfate4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
             <a
              href="https://api.whatsapp.com/send?phone=08174485504"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div> */}
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onClick={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
