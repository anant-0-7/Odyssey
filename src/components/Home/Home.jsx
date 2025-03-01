import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import tree from "../../assets/tree.svg";
import logo from "../../assets/odyssey2.svg";
import Venue from "../Venue/Venue";
import About from "../About/About";
import Spons from "../Spons/Spons";
import Reg from "../Registration/Reg";
import crown from "../../assets/amit_trivedi.png";
import avatar from "../../assets/avatar.png" // Import the avatar image

export default function Home() {



  return (
    <>

      {/* Main Section */}
      <div className=" w-auto h-screen bg-[#FDFEC4] overflow-hidden" >
        <div className= "h-5/6 relative flex flex-col items-center">
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
            <div className="text-center z-10 pt-20 mt-[-70px]">
            <img src={logo} alt="Logo" className="w-20 mx-auto mb-2" />
            <h1 className="text-5xl font-bold text-blue-950">Odyssey'25</h1>
            <h2 className="text-2xl font-bold text-blue-950 mt-1">8-9th March</h2>
            </div>

            <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 z-0 flex items-center space-x-4">
            <img
              src={avatar}
              alt="Left Avatar"
              className="w-[100px] md:w-[175px] max-w-none translate-y-24"
              style={{ animationDelay: "0.2s" }}
            />
            <img
              src={crown}
              alt="Crown Icon"
              className="w-[200px] md:w-[310px] max-w-none mx-0 animate-slideFromBottom"
              
            />
            <img
              src={avatar}
              alt="Right Avatar"
              className="w-[100px] md:w-[175px] max-w-none translate-y-24"
              style={{ animationDelay: "0.2s" }}
            />
          </div>  
            
        </div>

        {/* Footer */}
        <Footer />

      </div>
      <About />
      <Venue />
      <Spons/>
    </>
  );
}