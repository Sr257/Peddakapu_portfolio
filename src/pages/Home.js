import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import pic from "../Images/pic1618.png";
import clickSound from "../Images/click.mp3";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const audio = new Audio(clickSound);
    audio.volume = 0.5;
    audio.currentTime = 0;

    audio
      .play()
      .then(() => {
        setTimeout(() => {
          navigate("/latestworks");
        }, 200);
      })
      .catch((err) => {
        console.error("Autoplay issue or error playing sound:", err);
        navigate("/latestworks");
      });
  };

  return (
    <div className="home-container">
      <motion.div
        className="content"
        initial={{ opacity: 1, rotateY: -80 }}
        animate={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="main-section">
          <motion.div className="text-section">
            <p>
              HI, I'M <span>SOWJANYA PEDDAKAPU</span>
            </p>
            <h1>I'M A FULL STACK JAVA DEVELOPER</h1>
            <p className="description">
              Passionate about crafting scalable web applications using Java, React, Spring Boot, and AWS. I bring 7+ years of experience across banking, retail, and healthcare domains.
            </p>
            <motion.button
              onClick={handleButtonClick}
              className="btn btn-outline-light"
              whileTap={{ scale: 0.95 }}
            >
              VIEW MY PROJECTS
            </motion.button>
          </motion.div>

          <motion.div
            className="image-section"
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={pic} alt="Sowjanya Peddakapu Profile" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
