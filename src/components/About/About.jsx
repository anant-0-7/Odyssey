import { StrictMode, useEffect } from 'react';
import "./About.css";
import { useLocation } from 'react-router-dom';
import branch from '../../assets/branch.svg';
import branchLeft from '../../assets/branchleft.svg';
import grass from '../../assets/grass.svg';
import logo from '../../assets/image.svg'
import React from 'react';

const About = () => {

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const midlImage = document.querySelector('.midl-image');
      const rect = midlImage.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        midlImage.classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="odyssey-container mt-[-100px]">
      <div className="center-image">
        <h1 className="odyssey-title">About Odyssey</h1>
      </div>
      <img src={logo} alt="Odyssey context image" className="midl-image" />

      <div className="midr-image">
        <p className="odyssey-description">
          Get ready for an unforgettable celebration of culture, creativity, and camaraderie at the Indraprastha Institute of Information Technology Delhi. Jashn-e-Odyssey is back, and this year promises to be bigger and better than ever before! Explore the magic that awaits you and join us for a two-day extravaganza of talent, enthusiasm, and pure fun.
        </p>
      </div>
      <img src={branch} alt="Decorative branch" className="topr-image" />
      <img src={branchLeft} alt="Decorative branch" className="topl-image" />
      <img src={grass} alt="Decorative grass" className="bottomr-image hidden lg:block" />
    </section>
  );
};

export default About;