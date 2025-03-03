import { useLocation } from 'react-router-dom';
import wolf from '../../assets/wolf.svg';
import cat from '../../assets/cat.svg';

const RegHome = () => {
  const location = useLocation();

  return (
    <section className="relative flex flex-col items-center gap-16 w-full bg-[#FAAE5C] p-20">
        <img 
        src={wolf} 
        alt="Decorative branch" 
        className="absolute top-0 left-0 -translate-y-10  hidden lg:block"
        />
      <h5 className=" text-[#AD3535] text-center text-5xl md:text-7xl font-custom">REGISTRATIONS</h5>
      <div className=" flex flex-col md:flex-row gap-10 md:gap-20">
        <a href="/" className="bg-[#AD3535] text-white font-custom rounded-xl px-16 py-3 md:px-20 md:py-4 flex items-center justify-center text-xl md:text-2xl hover:bg-[#8B2B2B]">
          <button>Day I passes</button>
        </a>
        <a href="/" className="bg-[#AD3535] text-white font-custom rounded-xl px-16 py-3 md:px-20 md:py-4 flex items-center justify-center text-xl md:text-2xl hover:bg-[#8B2B2B]">
            <button>Day II passes</button>
        </a>
      </div>
      <p className=" text-[#AD3535] text-center text-4xl md:text-5xl font-custom">Secure Your Spot AT OdysseY</p>
      <div className=" text-[#AD3535] text-center flex flex-col gap-8 text-2xl md:text-3xl font-custom max-w-4xl px-4">
        <p className=" text-[#AD3535] text-center text-2xl md:text-3xl font-custom px-4">
          Ready to be a part of the magic? Register now to ensure your entry into the most anticipated cultural fest of the year. Whether you're participating in events or just soaking in the vibrant atmosphere, your registration is your key to unlocking the full Odyssey experience.
        </p>
        <p className=" text-[#AD3535] text-center text-2xl md:text-3xl font-custom px-4">
          Don't miss out on the cultural celebration of the year! Join us at Odyssey for an unforgettable experience filled with laughter, creativity, and the spirit of togetherness. See you there!
        </p>
      </div>
      <img 
        src={cat} 
        alt="Decorative grass" 
        className="absolute bottom-0 right-0 translate-y-1/2 hidden lg:block"
      />
    </section>
  );
};

export default RegHome;