import { StrictMode } from 'react';
import "./About.css";
import branch from '../../assets/branch.svg';
import branchLeft from '../../assets/branchLeft.svg';
import grass from '../../assets/grass.svg';
import logo from '../../assets/image.svg'

const OdysseyAbout = () => {
  return (
    <section className="odyssey-container">
      <div className="center-image">
        <h1 className="odyssey-title">About Odyssey</h1>
      </div>
      <img src={logo} alt="Odyssey context image" className="midl-image" />

      <div className="midr-image">
        <p className="odyssey-description">
          Get ready for an unforgettable celebration of culture, creativity, and camaraderie at the Indian Institute of Information Technology Delhi. Jashn-e-Odyssey is back, and this year promises to be bigger and better than ever before! Explore the magic that awaits you and join us for a two-day extravaganza of talent, enthusiasm, and pure fun.
        </p>
      </div>
      <img src={branch} alt="Decorative branch" className="topr-image" />
      <img src={branchLeft} alt="Decorative branch" className="topl-image" />
      <img src={grass} alt="Decorative grass" className="bottomr-image" />
    </section>
  );
};

export default OdysseyAbout;