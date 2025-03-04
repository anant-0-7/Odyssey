import React from "react";
import logo from "../../assets/odyssey2.svg";
import linkedin from "../../assets/linkedinp.svg";
import instagram from "../../assets/instagramp.svg";
import twitter from "../../assets/twitterp.svg";
import events from "../../Data/eventData";
import Divyansh from "../../assets/Divyansh.jpg";


const TeamCard = ({ event }) => (
  <article className="text-white p-6 w-full sm:w-80 lg:w-96 rounded-3xl shadow-lg flex flex-col items-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 bg-[#A03232] relative z-10">
    <img
      src={Divyansh}
      alt=""
      className="rounded-3xl  mb-4 object-cover w-full aspect-ratio-[7/4]"
    />
    <article className="flex flex-col items-center flex-start gap-2 w-full">
      <h3 className="p-3 pb-1 text-4xl  font-bold text-center tracking-widest font-custom">
        {event.event_name}
      </h3>
      <div className="flex justify-center mt-5 space-x-5 font-custom">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img src={twitter} alt="twitter icon" className="w-8 h-8" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img src={linkedin} alt="linkedin icon" className="w-8 h-8" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img src={instagram} alt="insta icon" className="w-8 h-8" />
        </a>
      </div>
    </article>
  </article>
);

const TeamsSection = () => (
  <section className="text-center py-8">
    <div className="flex flex-wrap justify-center gap-6 py-6 px-4 mx-auto max-w-[1500px]">
      {events.map((event, index) => (
        <TeamCard key={index} event={event} />
      ))}
    </div>
  </section>
);

export default function Teams() {
  return (
    <>
      <section className="bg-[#FDFEC4] min-h-screen relative">
        <div className="relative">
            <div className="h-5/6 relative flex flex-col items-center">
                        <div className="text-center z-10 flex-grow flex flex-col mb-16 justify-start">
                          <img src={logo} alt="Logo" className="mx-auto mb-2 top-0 w-32" />
                          <h1 className="text-5xl md:text-5xl font-bold text-blue-950 font-playfair">Odyssey'25</h1>
                          <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mt-1 mb-15 font-playfair">8-9th March</h2>
                      </div>
            <p
              className="p-6 text-7xl text-[#A03232] font-custom mx-auto mb-4 animate-slideFromBottom justify-center flex "
              style={{ width: "38rem" }}
            >
              ORGANISING COMMITTEE
            </p>
          </div>
          <TeamsSection />
        </div>
      </section>
    </>
  );
}
