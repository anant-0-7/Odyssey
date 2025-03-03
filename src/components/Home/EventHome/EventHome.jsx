import React from "react";
import eventThemes from "../../../Data/themeData";
import deer from "../../../assets/deer.png";

const Try = () => {
  
  const leftThemes = eventThemes.slice(0, Math.ceil(eventThemes.length / 2));
  const rightThemes = eventThemes.slice(Math.ceil(eventThemes.length / 2));

  return (
    <section className="bg-[#FFCC6D] p-10 font-custom relative z-5">
      <div className="absolute w-full h-auto hidden lg:flex  justify-center items-center gap-10">
         <img src={deer} alt="decorative deer" className="pt-48 pr-16 z-10" />
      </div>
      <p className="p-6 mx-auto mb-4 xl:hidden w-full text-center animate-slideFromBottom font-custom font-medium  text-6xl max-sm:text-5xl text-[#AD3535] tracking-wider">
            Event Themes
          </p>
      <div className="flex flex-row justify-between min-h-screen relative">
        {/* Center Deer Image */}
        <div className="absolute top-0 justify-start items-center w-full h-full hidden xl:flex xl:flex-col xl:gap-96">
          <p className="p-6 mx-auto mb-4 animate-slideFromBottom font-custom font-medium text-6xl text-[#AD3535] tracking-wider">
            Event Themes
          </p>
          
        </div>

        <div className="flex flex-col justify-between z-10 max-w-xs p-2 text-wrap">
          {leftThemes.map((theme, index) => (
            <p
              key={index}
              className="text-[#AD3535] font-normal text-4xl px-6 py-4 max-sm:text-2xl"
            >
              {theme}
            </p>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between z-10 max-w-xs p-2 text-wrap ">
          {rightThemes.map((theme, index) => (
            <p
              key={index}
              className="text-[#AD3535] font-normal text-4xl px-6 py-4 max-sm:text-2xl"
            >
              {theme}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Try;
