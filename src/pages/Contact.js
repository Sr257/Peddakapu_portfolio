import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact</h2>
      <p className="contact-subtext">
        I’m always open to discussing new opportunities, collaborations, or simply having a chat.
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:sowjanyapedda1111@gmail.com">sowjanyapedda1111@gmail.com</a>
        </div>

        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href="tel:+12055658014">+1 (205) 565-8014</a>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span>United States</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
