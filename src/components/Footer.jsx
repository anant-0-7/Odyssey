import React from "react";
import Background from "../assets/footer_bakcground.svg";
import title from "../assets/odyssey_title.png";
import ornament from "../assets/odyssey_logo.png";
import collegeLogo from "../assets/college_logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="relative w-full min-h-[818px] flex-shrink-0 bg-[#A03232] text-white overflow-hidden flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
        backgroundSize: "contain",
      }}
    >
      {/* Hide Background Below 560px */}
      <style>
        {`
          @media (max-width: 570px) {
            footer {
              background-image: none !important;
            }
          }
        `}
      </style>

      <div className="mt-10 p-4 md:p-8 flex flex-col items-center justify-center text-center w-full max-w-[1200px]">
        {/* Logo Section */}
        <div className="mb-8 flex items-center gap-4">
          <img src={ornament} alt="Ornament" className="w-20 md:w-32 lg:w-40 h-auto" />
          <img src={title} alt="Odyssey Title" className="w-40 md:w-48 lg:w-64 h-auto mt-2" />
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-32 my-5 w-full px-4 flex-wrap justify-center">
          {/* Address */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-lg md:text-xl lg:text-2xl font-playfair font-bold">Address</p>
            <p className="text-base md:text-lg lg:text-xl font-playfair">IIIT-Delhi</p>
            <p className="text-base md:text-lg lg:text-xl font-playfair">Okhla Industrial Estate Phase - III</p>
            <p className="text-base md:text-lg lg:text-xl font-playfair">Near Govind Puri Metro Station</p>
            <p className="text-base md:text-lg lg:text-xl font-playfair">New Delhi, India - 110020</p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-lg md:text-xl lg:text-2xl font-playfair font-bold">Social Links</p>
            <Link to="https://www.instagram.com/iiitdodyssey/?hl=en" className="text-base md:text-lg lg:text-xl font-playfair hover:underline">
              Instagram
            </Link>
            <Link to="https://x.com/iiitdodyssey?lang=en" className="text-base md:text-lg lg:text-xl font-playfair hover:underline">
              Twitter
            </Link>
            <Link to="https://www.linkedin.com/company/iiitdodyssey/posts/?feedView=all" className="text-base md:text-lg lg:text-xl font-playfair hover:underline">
              LinkedIn
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-lg md:text-xl lg:text-2xl font-playfair font-bold">Contact</p>
            <p className="text-base md:text-lg lg:text-xl font-playfair">Email</p>
            <p className="text-base md:text-lg lg:text-xl font-playfair">Phone</p>
          </div>
        </div>

        {/* College Logo and Copyright */}
        <div className="flex flex-col gap-4 mt-8 md:mt-11 p-4 md:p-8 items-center">
          <img src={collegeLogo} alt="College Logo" className="w-64 md:w-80 lg:w-96 h-auto" />
          <p className="text-xs md:text-sm font-playfair font-semibold text-center max-w-[300px] md:max-w-none">
            © 2025 Odyssey. All Rights Reserved. Designed and Developed by IIIT-Delhi
          </p>
        </div>
      </div>
    </footer>
  );
}
