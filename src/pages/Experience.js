import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Experience.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const Experience = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="experience-main-container">
      <div className="experience-content">
        <h1 className="experience-title">
          <i className="bi bi-briefcase-fill"></i> Professional Experience
        </h1>
        <Slider {...settings}>

          {/* AutoNation */}
          <div className="experience-card">
            <h2><i className="bi bi-code-slash"></i> Full Stack Java Developer</h2>
            <p className="experience-company">
              <i className="bi bi-building"></i> AutoNation – Fort Lauderdale, FL
            </p>
            <p className="experience-duration">
              <i className="bi bi-calendar-event"></i> Feb 2023 – Present
            </p>
            <ul className="experience-list">
              <li><i className="bi bi-laptop"></i> Built web apps using React, Redux, and Spring Boot Microservices with REST APIs.</li>
              <li><i className="bi bi-database"></i> Worked with MySQL, MongoDB, RabbitMQ, and integrated Feign Clients.</li>
              <li><i className="bi bi-cloud"></i> Deployed scalable apps using AWS EC2, S3, CloudWatch, and Jenkins CI/CD pipelines.</li>
              <li><i className="bi bi-shield-lock"></i> Secured APIs with Spring Security, OAuth2, and implemented service discovery via Eureka.</li>
            </ul>
          </div>

          {/* Kohl's */}
          <div className="experience-card">
            <h2><i className="bi bi-code-slash"></i> Full Stack Java Developer</h2>
            <p className="experience-company">
              <i className="bi bi-building"></i> Kohl’s – Menomonie, WI
            </p>
            <p className="experience-duration">
              <i className="bi bi-calendar-event"></i> Sep 2021 – Jan 2023
            </p>
            <ul className="experience-list">
              <li><i className="bi bi-globe2"></i> Designed dynamic dashboards using React, Tailwind CSS, and WebSockets.</li>
              <li><i className="bi bi-cpu"></i> Built REST APIs with Spring Boot, integrated Oracle DB, and used Kafka for real-time processing.</li>
              <li><i className="bi bi-git"></i> Managed builds and deployments using Docker, Jenkins, and Kubernetes on AWS.</li>
            </ul>
          </div>

          {/* Arvest Bank */}
          <div className="experience-card">
            <h2><i className="bi bi-code-slash"></i> Java Developer</h2>
            <p className="experience-company">
              <i className="bi bi-building"></i> Arvest Bank – Bentonville, AR
            </p>
            <p className="experience-duration">
              <i className="bi bi-calendar-event"></i> Jan 2020 – Aug 2021
            </p>
            <ul className="experience-list">
              <li><i className="bi bi-terminal"></i> Built React.js frontends and Spring Boot backends using Java 8.</li>
              <li><i className="bi bi-shuffle"></i> Used Kafka, Hibernate, and AWS Lambda for event-driven services and cloud automation.</li>
            </ul>
          </div>

          {/* Tvisha Technologies */}
          <div className="experience-card">
            <h2><i className="bi bi-code-slash"></i> Software Developer</h2>
            <p className="experience-company">
              <i className="bi bi-building"></i> Tvisha Technologies – Hyderabad, India
            </p>
            <p className="experience-duration">
              <i className="bi bi-calendar-event"></i> Jul 2018 – Dec 2019
            </p>
            <ul className="experience-list">
              <li><i className="bi bi-pc-display"></i> Developed responsive JSP/Java web applications using Spring and REST.</li>
              <li><i className="bi bi-filetype-xml"></i> Integrated SOAP and REST services, with database work in Oracle and Git versioning.</li>
            </ul>
          </div>

        </Slider>
      </div>
    </div>
  );
};

export default Experience;
