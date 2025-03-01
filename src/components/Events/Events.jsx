import logo from "../../assets/odyssey.png";
import text from "../../assets/text.png";
import footer from "../../assets/FOOTER.png";

const EventCard = () => (
  <article
    className="text-white p-6 w-full sm:w-80 lg:w-96 rounded-3xl shadow-lg flex-shrink-0 flex flex-col items-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
    style={{ background: "#A03232" }}
  >
    <div className="w-full h-48 rounded-3xl bg-black mb-4"></div>
    <h3 className="p-3 text-3xl font-bold">EVENT NAME</h3>
    <p className="text-m font-semibold text-left">
      Description Description Description Description Description
    </p>
    <button className="mt-4 text-lg md:text-xl w-full bg-[#FFCC6D] px-4 py-2 font-bold rounded-3xl text-[#A03232]">
      REGISTER
    </button>
  </article>
);

const EventsSection = () => (
  <section className="text-center py-8">
    <div className="flex flex-wrap justify-center gap-6 py-6 px-4 mx-auto max-w-[1500px]">
      {[...Array(9)].map((_, index) => (
        <EventCard key={index} />
      ))}
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <div className="bg-[#FDFEC4] min-h-screen">
        
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
        <footer
          className="w-full h-32 flex justify-center items-center bg-[#A03232]"
        >
          <img src={footer} alt="Footer Logo" className="w-40 mx-auto" />
        </footer>
      </div>
    </>
  );
}
