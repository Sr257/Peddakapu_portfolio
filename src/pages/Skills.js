import React from "react";
import Slider from "react-slick";
import {
  FaReact,
  FaNodeJs,
  FaTools,
  FaCode,
  FaBug,
  FaServer,
  FaCloud,
  FaTasks,
  FaDocker,
  FaAws,
  FaJava,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiHibernate,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiOracle,
  SiJenkins,
  SiApachekafka,
  SiKubernetes,
  SiGit,
} from "react-icons/si";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Skills.css";

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java 17/11/8", icon: <FaJava /> },
      { name: "Python", icon: <FaCode /> },
      { name: "JavaScript", icon: <FaCode /> },
      { name: "PL/SQL", icon: <FaCode /> },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Spring MVC / Security / Batch", icon: <SiSpringboot /> },
      { name: "Hibernate / JPA", icon: <SiHibernate /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Redux", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
    ],
  },
  {
    category: "Backend & Microservices",
    skills: [
      { name: "Microservices Architecture", icon: <FaServer /> },
      { name: "RESTful APIs", icon: <FaServer /> },
      { name: "Kafka", icon: <SiApachekafka /> },
      { name: "RabbitMQ", icon: <FaServer /> },
      { name: "Socket.IO", icon: <FaServer /> },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Oracle 11g/12c/19c", icon: <SiOracle /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS (EC2, S3, RDS, Lambda)", icon: <FaAws /> },
      { name: "Azure", icon: <FaCloud /> },
      { name: "Jenkins", icon: <SiJenkins /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
    ],
  },
  {
    category: "Tools & IDEs",
    skills: [
      { name: "VS Code / IntelliJ / Eclipse", icon: <FaCode /> }, // <-- replaced here
      { name: "Git / GitHub / Bitbucket", icon: <SiGit /> },
      { name: "Postman / SOAP UI", icon: <FaBug /> },
      { name: "JIRA", icon: <FaTasks /> },
      { name: "Maven / Ant", icon: <FaTools /> },
    ],
  },
  {
    category: "Testing & Monitoring",
    skills: [
      { name: "JUnit / Mockito", icon: <FaBug /> },
      { name: "Cucumber / Selenium", icon: <FaBug /> },
      { name: "Log4j / Splunk", icon: <FaTools /> },
    ],
  },
];

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section
      className="skills-main-container"
      style={{ padding: "20px", maxWidth: 800, margin: "auto" }}
    >
      <div className="skills-content">
        <h2
          className="skills-heading"
          style={{ display: "flex", alignItems: "center", gap: 10 }}
        >
          <FaTools />
          Skills and Technologies
        </h2>

        <Slider {...settings}>
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="skills-category"
              style={{ padding: "20px" }}
            >
              <h3>{category.category}</h3>
              <div
                className="skills-list"
                style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}
              >
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="skill-item"
                    style={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Skills;
