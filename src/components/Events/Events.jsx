import React, { useEffect } from "react";
import Navbar from "../Home/Navbar";
import logo from "../../assets/odyssey.png";
import text from "../../assets/text.png";
import footer from "../../assets/FOOTER.png";

const EventCard = () => (
  <div
    className=" text-white p-4  rounded-3xl shadow-lg flex flex-col items-center"
    style={{ background: "#A03232" }}
  >
    <div className="w-full h-48 rounded-3xl bg-black mb-4"></div>
    <h3 className="p-3 text-4xl font-bold">EVENT NAME</h3>
    <p className=" text-m font-bold text-left">
      Description Description Description Description Description
    </p>
    <button
      className="mt-3 text-xl bg-yellow-400 font-bold rounded-3xl text-white px-4 py-2 w-full sm:w-64 md:w-72 lg:w-80 xl:w-96"
      style={{ background: "#FFCC6D", color: "#A03232" }}
    >
      REGISTER
    </button>
  </div>
);

const EventsSection = () => (
  <section className="text-center py-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-20 ">
      {[...Array(9)].map((_, index) => (
        <EventCard key={index} />
      ))}
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <div className="bg-[#FDFEC4] ">
        <div className="h-5/6 relative flex flex-col items-center">
          <img src={logo} alt="Logo" className="w-80 mx-auto mb-2 " />
          <img
            src={text}
            alt="Logo"
            className="p-10 mx-auto mb-2 "
           style={{width:"40rem"}}
          />
        </div>
        <EventsSection />
        <div
          className="w-full h-32  "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#A03232",
          }}
        >
          <img src={footer} alt="Logo" className="w-40 mx-auto mb-2 " />
        </div>
      </div>
    </>
  );
}
