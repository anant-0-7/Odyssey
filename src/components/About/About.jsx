import { StrictMode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import branch from "../../assets/branch.svg";
import branchLeft from "../../assets/branchleft.svg";
import grass from "../../assets/grass.svg";
import logo from "../../assets/image.svg";
import React from "react";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    const logoImage = document.querySelector(".odyssey-logo");
    if (logoImage) {
      logoImage.classList.add("fade-in");
    }
  }, []);

  return (
    <section className="flex flex-col items-center w-full h-screen bg-[#FFCC6D] font-custom relative">
      <div className="absolute top-0 -translate-y-10 hidden xl:flex justify-between w-full">
        <img
          src={branch}
          alt="Decorative branch1"
          className="absolute top-0 right-0"
        />
        <img
          src={branchLeft}
          alt="Decorative branch2"
          className="absolute top-0 left-0"
        />
      </div>

      <div className="absolute top-[15%] text-[#AD3535] text-center text-5xl"></div>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-40 justify-center items-center max-lg:py-16 w-full lg:h-full max-w-7xl p-6 md:p-12 lg:p-24">
        <img
          src={logo}
          alt="Odyssey context image"
          className="odyssey-logo max-lg:w-32 "
        />
        <div className="flex flex-col items-start gap-4 lg:gap-8">
          <h3 className="odyssey-title text-left text-5xl md:text-6xl lg:text-7xl text-[#AD3535]">
            About Odyssey
          </h3>
          <p className="odyssey-description text-left text-[#AD3535] text-xl md:text-2xl lg:text-3xl">
            Get ready for an unforgettable celebration of culture, creativity, and camaraderie at the Indraprastha Institute of Information Technology Delhi. Jashn-e-Odyssey is back, and this year promises to be bigger and better than ever before! Explore the magic that awaits you and join us for a two-day extravaganza of talent, enthusiasm, and pure fun.
          </p>
        </div>
      </div>

      <img
        src={grass}
        alt="Decorative grass"
        className="absolute bottom-0 right-0 translate-y-10 hidden  lg:block lg:w-44 xl:w-64"
      />

      <style>
        {`
          .odyssey-logo {
            opacity: 0;
            transform: translateY(20px);
          }

          .fade-in {
            animation: fadeInAnimation 1.5s ease-in-out forwards;
          }

          @keyframes fadeInAnimation {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default About;
