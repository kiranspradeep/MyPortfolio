// Hero.jsx
import "../styles/Hero.css";
import resumeFile from '../assets/docs/Kiran_S_Pradeep_Resume.pdf';
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <h1>
          Hello, I’m <span>Kiran S Pradeep</span>
        </h1>
        <TypeAnimation
          sequence={[
            "I'm a BCA Graduate.",
            1500,
            "I'm a MERN Full Stack Developer.",
            1500,
            "I'm a Fresher ready to build.",
            1500,
          ]}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
          className="hero-tagline"
        />

        {/* Social Links */}
        <div className="hero-socials">
          <a
            href="https://www.linkedin.com/in/kiran-s-pradeep-116456320/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/kiranspradeep"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/918086415357" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="mailto:kiranspradeep2002@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a href="#contact" className="hero-btn">
            Contact Me
          </a>
          <a
      href={resumeFile} // Use the imported variable here
      download="Kiran_S_Pradeep_Resume.pdf" // You can provide a custom name for the downloaded file
      className="hero-btn resume-btn"
    >
      <i className="fas fa-download"></i> Resume
    </a>
        </div>
      </div>
    </div>
  );
}
