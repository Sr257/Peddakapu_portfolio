import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Education.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
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

const Education = () => {
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
    <div className="education-main-container">
      <div className="education-content">
        <h1 className="education-title">
          <i className="bi bi-mortarboard"></i> My Education
        </h1>

        <Slider {...settings}>
          <div className="education-card">
            <h2>
              <i className="bi bi-mortarboard"></i> Master’s in Computer Science
            </h2>
            <p className="education-institute">
              <i className="bi bi-building"></i> Western Illinois University, Macomb, Illinois
            </p>
          </div>

          <div className="education-card">
            <h2>
              <i className="bi bi-mortarboard"></i> Bachelor’s in Information Technology
            </h2>
            <p className="education-institute">
              <i className="bi bi-building"></i> JNTUH, Hyderabad, India
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Education;
