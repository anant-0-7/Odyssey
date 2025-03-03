import React from "react";
import Background from "../assets/footer_bakcground.svg";
import title from "../assets/odyssey_title.png";
import ornament from "../assets/odyssey_logo.png";
import collegeLogo from "../assets/college_logo.png";

export default function Footer() {
  return (
    <footer
      className="
        relative
        w-full
        h-[818px]
        flex-shrink-0
        bg-[#A03232]
        text-white
        overflow-hidden
  
      "
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
        backgroundSize: "contain",
      }}
    >
      <div className="mt-10 p-8 flex flex-col items-center justify-evenly">
        <div className="mb-8 flex items-center gap-4 justify-center">
          <img src={ornament} alt="Ornament" className="w-[173.123px] h-auto" />
          <img src={title} alt="Odyssey Title" className="w-[273.123px] h-auto" />
        </div>
        <div className="flex flex-col gap-8 my-5">
          <div className="flex items-start gap-44 justify-evenly ">
            <div className="flex flex-col">
            <p className="text-2xl font-playfair font-bold">Address</p>
              <p className="text-2xl font-playfair">IIIT-Delhi</p>
              <p className="text-2xl font-playfair">Okhla Industrial Estate Phase - III</p>
              <p className="text-2xl font-playfair">Near Govind Puri Metro Station</p>
              <p className="text-2xl font-playfair">New Delhi, India - 110020</p>
              
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-2xl font-playfair font-bold">Social Links</p>
              <p className="text-xl font-playfair">Instgram</p>
              <p className="text-xl font-playfair">Twitter</p>
              <p className="text-xl font-playfair">Linkedin</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-2xl font-playfair font-bold">Contact</p>
              <p className="text-xl font-playfair">Email</p>
              <p className="text-xl font-playfair">Phone</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-11 p-32 items-center">
            <img src={collegeLogo} alt="College Logo" className="w-[373.123px] h-auto p-0" />
            <div>
              <p className="text-md font-playfair font-semibold text-center">© 2025 Odyssey. All Rights Reserved. Designed and Developed by IIIT-Delhi</p>
            </div>
        </div>
      </div>
    </footer>
  );
}
