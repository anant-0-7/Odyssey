import { StrictMode, useEffect } from 'react';
import "./Reg.css";
import { useLocation } from 'react-router-dom';
import wolf from '../../assets/wolf.svg';
import cat from '../../assets/cat.svg';
import React from 'react';

const Reg = () => {

  const location = useLocation();

  return (
    <section className="registration-container mt-[-100px]">
      <div className="registration-title">
        <h1 className="odyssey-title">REGISTRATIONS</h1>
      </div>
      <div className="registration-subtitle">
        <h1 className="odyssey-title">Secure Your Spot AT OdysseY</h1>
      </div>

      <div className="registration-description1">
        <p className="odyssey-description">
        Ready to be a part of the magic? Register now to ensure your entry into the most anticipated cultural fest of the year. Whether you're participating in events or just soaking in the vibrant atmosphere, your registration is your key to unlocking the full Odyssey experience.
        </p>
      </div>
      <div className="registration-description2">
        <p className="odyssey-description">
        Don't miss out on the cultural celebration of the year! Join us at Odyssey for an unforgettable experience filled with laughter, creativity, and the spirit of togetherness. See you there!
        </p>
      </div>
      <div className="registration-buttons">
        <a href="https://www.google.com" className="registration-button">Day I passes</a>
        <a href="https://www.google.com" className="registration-button">Day II passes</a>
      </div>
      <img src={wolf} alt="Decorative branch" className="registration-image-top-left" />
      <img src={cat} alt="Decorative grass" className="registration-image-bottom-right hidden lg:block" />
    </section>
  );
};

export default Reg;