import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Latestworks.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  FaReact, FaDesktop, FaCode, FaServer, FaChartBar,
  FaMobileAlt, FaArrowLeft, FaArrowRight, FaAws
} from 'react-icons/fa';
import {
  SiAxios, SiMongodb, SiSpringboot,
  SiApachekafka, SiMysql, SiDocker
} from 'react-icons/si';
import clickSound from "../Images/click.mp3";

const playClickSound = () => {
  const audio = new Audio(clickSound);
  audio.volume = 0.5;
  audio.currentTime = 0;
  audio.play().catch(err => console.warn("Audio blocked:", err));
};

const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={() => { playClickSound(); onClick(); }}>
    <FaArrowLeft />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={() => { playClickSound(); onClick(); }}>
    <FaArrowRight />
  </div>
);

const Latestworks = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="container latest-works-container">
      <Slider {...settings}>

        {/* Project 1 - Vehicle Service Tracking System (AutoNation) */}
        <div className="project-slide">
          <h2>Vehicle Service Tracking System (AutoNation)</h2>
          <h3>React.js, Redux, Spring Boot, MongoDB, AWS, RabbitMQ</h3>
          <ul>
            <li><FaReact /> Built a responsive UI dashboard to track vehicle maintenance lifecycle.</li>
            <li><SiSpringboot /> Created secure REST APIs with Spring Boot for service booking, tracking, and history.</li>
            <li><SiMongodb /> Utilized MongoDB for storing vehicle logs and service records.</li>
            <li><FaAws /> Deployed services on AWS EC2, S3, and RDS for high availability.</li>
            <li><FaServer /> Enabled real-time updates using RabbitMQ messaging queues.</li>
          </ul>
        </div>

        {/* Project 2 - Real-Time Chat Application (Kohl’s) */}
        <div className="project-slide">
          <h2>Real-Time Chat Application (Kohl’s)</h2>
          <h3>React, WebSockets, Kafka, Node.js, Docker, Kubernetes</h3>
          <ul>
            <li><FaChartBar /> Developed user-friendly chat interface with React & WebSocket API.</li>
            <li><SiApachekafka /> Integrated Kafka for message queuing and delivery consistency.</li>
            <li><FaMobileAlt /> Designed mobile-friendly layouts using Tailwind CSS and Bootstrap.</li>
            <li><SiDocker /> Containerized the backend with Docker and deployed using Kubernetes.</li>
            <li><FaServer /> Ensured secure, scalable communication via token-based auth & load balancing.</li>
          </ul>
        </div>

        {/* Project 3 - Arvest Bank */}
        <div className="project-slide">
          <h2>Banking Microservices App (Arvest Bank)</h2>
          <h3>Spring Boot, React.js, Kafka, Hibernate, AWS Lambda</h3>
          <ul>
            <li><FaCode /> Developed banking microservices using Spring Boot & Java 8 features.</li>
            <li><SiMysql /> Integrated relational and NoSQL databases (Oracle + MongoDB).</li>
            <li><FaAws /> Designed serverless logic using AWS Lambda & ECS containerization.</li>
          </ul>
        </div>

        {/* Project 4 - Portfolio */}
        <div className="project-slide">
          <h2>Developer Portfolio Website</h2>
          <h3>React, Bootstrap, Tailwind CSS, React Router, Framer Motion</h3>
          <ul>
            <li><FaDesktop /> Showcases resume, skills, projects, and contact info interactively.</li>
            <li><FaReact /> Built with React components, animations, and routing transitions.</li>
            <li><SiAxios /> Integrated backend APIs using Axios with error-handling layers.</li>
          </ul>
        </div>

      </Slider>

      {/* Back button */}
      <div className="back-button1">
        <Link to="/" className="btn1" onClick={playClickSound}>
          <FaArrowLeft className="me-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Latestworks;
