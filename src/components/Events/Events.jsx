import React from "react";
import logo from "../../assets/odyssey.png";
import text from "../../assets/text.png";
import footer from "../../assets/FOOTER.png";
import events from "../../Data/eventData";
import "./event.css";
const EventCard = ({ event }) => (
  <article className="text-white p-6 w-full sm:w-80 lg:w-96 rounded-3xl shadow-lg flex flex-col items-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 bg-[#A03232] relative z-10">
    <div className="w-full h-48 rounded-3xl bg-black mb-4"></div>
    <article className="flex flex-col items-center flex-start gap-2 w-full">
      <h3 className="p-3 pb-1 text-4xl  font-bold text-center tracking-widest font-custom">
        {event.event_name}
      </h3>
      <p className="flex flex-row gap-2 flex-wrap">
        <span className="text-sm  border-[#FFCC6D] border-2 text-[#FFCC6D] font-normal text-center px-2 py-0.5 rounded-full flex flex-row items-center gap-1">
          <img src="src/assets/Club.svg" alt="Club-Icon" className="w-6 h-6" />{" "}
          {event.organising_club}
        </span>
        <span className="text-sm  border-[#FFCC6D] border-2 text-[#FFCC6D] font-normal text-center px-2 py-0.5 rounded-full">
          {event.vertical}
        </span>
      </p>

      <p className="text-sm md:text-base text-center font-normal px-2 py-0.5 rounded-full flex flex-row gap-1">
        {event.description}
      </p>
    </article>
    <a href={event.link} className="w-full">
      <button className="mt-4 text-2xl md:text-3xl tracking-wider w-full bg-[#FFCC6D] px-4 py-2 font-bold rounded-3xl text-[#A03232] font-custom">
        REGISTER
      </button>
    </a>
  </article>
);

const EventsSection = () => (
  <section className="text-center py-8">
    <div className="flex flex-wrap justify-center gap-6 py-6 px-4 mx-auto max-w-[1500px]">
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <section className="bg-[#FDFEC4] min-h-screen relative">
        <div className="relative">
          <div className="absolute top-0 justify-between w-full hidden xl:flex">
            <img
              src="src/assets/event_top_left.svg"
              alt="decorative item1"
              className="relative left-0 w-96"
            />
            <img
              src="src/assets/event_top_right.svg"
              alt="decorative item2"
              className="relative right-0 w-96"
            />
          </div>
          <div className="h-5/6 relative flex flex-col items-center">
            <img src={logo} alt="Logo" className="w-80 mx-auto mb-4" />
            <img
              src={text}
              alt="Event Text"
              className="p-6 mx-auto mb-4 animate-slideFromBottom"
              style={{ width: "38rem" }}
            />
          </div>
          <EventsSection />
          <div className="absolute bottom-0 right-0 translate-y-10 z-5">
            <img src="src/assets/event_castle.svg" alt="" />
          </div>
        </div>
        <footer className="w-full h-32 flex justify-center items-center bg-[#A03232] rounded-t-3xl relative z-10">
          <img src={footer} alt="Footer Logo" className="w-40 mx-auto" />
        </footer>
      </section>
    </>
  );
}
