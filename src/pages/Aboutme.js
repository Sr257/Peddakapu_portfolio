import React from "react";
import "./Aboutme.css";
import about from "../Images/about.webp";
import { useNavigate } from "react-router-dom";
import clickSound from "../Images/click.mp3";

const Aboutme = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    const audio = new Audio(clickSound);
    audio.volume = 0.5;
    audio.currentTime = 0;

    audio
      .play()
      .then(() => {
        setTimeout(() => {
          navigate("/moreabout");
        }, 200);
      })
      .catch((err) => {
        console.warn("Audio failed to play:", err);
        navigate("/moreabout");
      });
  };

  return (
    <div className="about-container">
      <div className="about-text">
        <h1 className="fade-in">About Me</h1>
        <h2 className="highlight">Full Stack Java Developer</h2>
        <p className="slide-up">
          I’m a seasoned Full Stack Developer with 7+ years of experience
          building scalable enterprise applications across domains like banking,
          retail, and healthcare. I specialize in Java, Spring Boot, React,
          Node.js, and cloud-native architectures using AWS.
        </p>
        <p className="slide-up delay">
          From designing responsive UIs in React with Redux and Tailwind CSS, to
          building robust backends using Microservices and Kafka, I bring
          end-to-end expertise across the development lifecycle. I'm passionate
          about clean code, system design, and continuous learning.
        </p>
        <p className="slide-up delay-2">
          Skilled in containerization (Docker, Kubernetes), CI/CD, real-time
          apps with WebSockets, and secure REST APIs, I thrive in Agile teams
          delivering high-quality, cloud-optimized solutions.
        </p>

        <button onClick={handleLearnMoreClick} className="about-btn">
          Learn More
        </button>
      </div>

      <div className="about-photo">
        <img src={about} alt="Profile" />
      </div>
    </div>
  );
};

export default Aboutme;
