import React from "react";
import events from "../../Data/eventData";
import deer from "../../assets/deer.png";
import logo from "../../assets/odyssey.png";
import text from "../../assets/text.png";

const Try = () => {
  // Split the events array
  const leftEvents = events.slice(0, Math.ceil(events.length / 2));
  const rightEvents = events.slice(Math.ceil(events.length / 2));

  return (
    <section className="bg-[#FFCC6D] rounded-t-3xl p-10 font-custom">
      <div className="flex flex-row justify-between min-h-screen relative">
        {/* Center Deer Image */}
        <div className="absolute top-0  justify-start items-center w-full h-full hidden xl:flex xl:flex-col xl:gap-96">
            <p className="p-6 mx-auto mb-4 animate-slideFromBottom font-custom font-medium text-6xl text-[#AD3535] tracking-wider">Events</p>
          <img src={deer} alt="decorative deer" className="relative left-0 " />
        </div>
        {/* Left Column */}
        <div className="flex flex-col justify-between z-10 max-w-xs p-2 text-wrap">
          {leftEvents.map((event, index) => (
            <p
              key={index}
              className="text-[#AD3535] font-normal text-4xl px-6 py-4"
            >
              {event.event_name}
            </p>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between z-10 max-w-xs p-2 text-wrap">
          {rightEvents.map((event, index) => (
            <p
              key={index}
              className="text-[#AD3535] font-normal text-4xl px-6 py-4"
            >
              {event.event_name}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Try;
