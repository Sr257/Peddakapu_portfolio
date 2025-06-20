import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Moreabout from "./pages/Moreabout";
import Latestworks from "./pages/Latestworks";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import logo3 from './Images/logo4.png';
import clickSound from './Images/click.mp3';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.volume = 0.5;
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <Router>
      <header className="navbar-container">
        <div className="logo">
          <img src={logo3} alt="Logo" />
        </div>
        <div
          className="menu-toggle"
          onClick={() => {
            setMenuOpen(!menuOpen);
            playClickSound();
          }}
        >
          <i className={menuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
        </div>
        <nav className={`nav-menu ${menuOpen ? "show" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => { setMenuOpen(false); playClickSound(); }}>
                <i className="bi bi-house-door"></i> HOME
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => { setMenuOpen(false); playClickSound(); }}>
                <i className="bi bi-person"></i> ABOUT ME
              </Link>
            </li>
            <li>
              <Link to="/education" onClick={() => { setMenuOpen(false); playClickSound(); }}>
                <i className="bi bi-mortarboard-fill"></i> EDUCATION
              </Link>
            </li>
            <li>
              <Link to="/experience" onClick={() => { setMenuOpen(false); playClickSound(); }}>
                <i className="bi bi-briefcase"></i> EXPERIENCE
              </Link>
            </li>
            <li>
              <Link to="/skills" onClick={() => { setMenuOpen(false); playClickSound(); }}>
                <i className="bi bi-lightbulb"></i> SKILLS
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => { setMenuOpen(false); playClickSound(); }}>
                <i className="bi bi-envelope"></i> CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/moreabout" element={<Moreabout />} />
        <Route path="/latestworks" element={<Latestworks />} />
        {/* Fallback route */}
        <Route path="*" element={<div style={{ padding: 20, textAlign: "center" }}>404 Page Not Found</div>} />
      </Routes>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Sowjanya Peddakapu. All Rights Reserved.</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/sowjanya-peddakapu"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/sowjanya-peddakapu"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="mailto:sowjanyapedda1111@gmail.com"
              onClick={playClickSound}
            >
              <i className="bi bi-envelope-at-fill"></i>
            </a>
          </div>
        </div>
      </footer>
    </Router>
  );
};

export default App;
