import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaDatabase,
  FaCloud,
  FaTools,
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Moreabout.css";
import clickSound from "../Images/click.mp3";

const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    <FaArrowRight />
  </div>
);

const Moreabout = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.volume = 0.5;
    audio.currentTime = 0;
    audio.play().catch((err) => console.warn("Audio blocked:", err));
  };

  return (
    <div className="container moreabout-container">
      <div className="content">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="about-section">
            <h2>Who Am I?</h2>
            <p>
              I’m a dedicated Full Stack Java Developer with 7+ years of experience across banking, retail, and healthcare industries. I specialize in Java, Spring Boot, React.js, and Microservices architecture. I’ve built scalable enterprise applications, integrated real-time Kafka pipelines, and deployed cloud-native solutions on AWS.
            </p>
          </div>

          {/* Slide 2 */}
          <div className="skills-section">
            <h2>Technical Skills</h2>
            <ul className="skills-list">
              <li>
                <FaCode className="icon" /> <span>Backend: Java 17, Spring Boot, Microservices, REST APIs, Node.js</span>
              </li>
              <li>
                <FaDatabase className="icon" /> <span>Database: MongoDB, MySQL, Oracle, Hibernate/JPA</span>
              </li>
              <li>
                <FaCloud className="icon" /> <span>Cloud: AWS (EC2, S3, RDS, Lambda, CloudWatch), Azure</span>
              </li>
              <li>
                <FaTools className="icon" /> <span>DevOps & Tools: Git, Docker, Jenkins, Kubernetes, Kafka, JIRA</span>
              </li>
            </ul>
          </div>

          {/* Slide 3 */}
          <div className="goals-section">
            <h2>Future Goals</h2>
            <p>
              My goal is to grow into a cloud-native solution architect, mastering large-scale distributed systems and DevOps. I'm passionate about driving innovation with microservices, Kafka, and serverless technologies, while continuously delivering high-quality enterprise solutions.
            </p>
          </div>
        </Slider>

        {/* Back Link */}
        <div className="back-link">
          <Link to="/about" onClick={playClickSound}>
            Back to About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Moreabout;
