import React, { useEffect } from "react";
import Footer from "./Footer";
import tree from "../../assets/tree.svg";
import logo from "../../assets/odyssey2.svg";
import Venue from "./Venue/Venue";
import Spons from "../Spons/Spons";
import crown from "../../assets/amit_trivedi.png";
import About from "../About/About";
import RegHome from "./Registration/RegHome";
import Try from "./EventHome/EventHome";
;

export default function Home() {

  

  return (
    <>

      {/* Main Section */}
      <div className=" w-auto bg-[#FDFEC4] mb-0" >
        <div className= "relative flex flex-col h-screen">
            {/* Left SVG (Flipped) - Hidden on small screens */}
            <img
            src={tree}
            alt="Left SVG"
            className="h-full absolute left-0 top-0  transform scale-x-[-1] hidden lg:block z-20 animate-slideFromLeft"
            />

            {/* Right SVG (Normal) - Hidden on small screens */}
            <img
            src={tree}
            alt="Right SVG"
            className="absolute right-0 top-0 h-full hidden lg:block z-20 animate-slideFromRight"
            />

            {/* Centered Content - Adjusted positioning */}
            <div className="text-center z-10 flex-grow flex flex-col mb-16 justify-start">
            <img src={logo} alt="Logo" className="mx-auto mb-2 top-0 w-32" />
            <h1 className="text-5xl md:text-7xl font-bold text-blue-950 font-playfair">Odyssey'25</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-3 mb-15 font-playfair">8-9th March</h2>
          </div>

            <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 z-0 flex items-center space-x-4">
            {/* <img
              src={avatar}
              alt="Left Avatar"
              className="w-[100px] md:w-[175px] max-w-none translate-y-24"
              style={{ animationDelay: "0.2s" }}
            /> */}
            <img
              src={crown}
              alt="Crown Icon"
              className="w-[250px] md:w-[330px] max-w-none mx-0 animate-slideFromBottom"
              
            />
            {/* <img
              src={avatar}
              alt="Right Avatar"
              className="w-[100px] md:w-[175px] max-w-none translate-y-24"
              style={{ animationDelay: "0.2s" }}
            /> */}
          </div>  

          <Footer />
            
        </div>


      </div>
      <About />
      <RegHome />
      <Try />
      <Venue />
      <Spons/>
      <Footer />
    </>
  );
}