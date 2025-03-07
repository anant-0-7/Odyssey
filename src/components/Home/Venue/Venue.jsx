import Castle from "./Castle";
import instagram from "../../../assets/instagram.svg";
import twitter from "../../../assets/twitter.svg";
import linkedin from "../../../assets/linkedin.svg";

export default function Venue() {




  return (
    <div className="p-8 bg-[#FAAE5C] flex h-min-[1000] font-custom">
      {/* Castle on the left */}
      <div className="h-max absolute left-0 top-25 hidden lg:block">
        <Castle className="left-0 resize" />
      </div>
      <div className="w-2/6 h-max hidden md:block">
        <svg></svg>
      </div>

      {/* Main content centered */}
      <div className="flex flex-col justify-center space-y-4 mt-15 pr-8 resize z-30">
        <h1 className="text-8xl font-medium text-[#AD3535]">VENUE</h1>

        <div className="space-y-2 md:max-w-2xl">
          <p className="text-3xl text-[#AD3535]">
            FOLLOW US ON SOCIAL MEDIA TO STAY UPDATED ON ALL THE EXCITING
          </p>
          <p className="text-3xl text-[#AD3535]">
            DEVELOPMENTS AND SNEAK PEEKS LEADING UP TO THE GRAND EVENT
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-1 mt-4 justify-evenly">
          <a
            href="https://www.instagram.com/iiitdodyssey/?hl=en"
            className="p-2"
          >
            <img src={instagram} className="w-auto h-12" alt="Instagram" />
          </a>
          <a
            href="https://x.com/odyssey_iiitd"
            className="p-2"
          >
            <img src={twitter} className="w-auto h-12" alt="Twitter" />
          </a>
          <a
            href="#"
            className="p-2"
          >
            <img src={linkedin} className="w-auto h-12" alt="LinkedIn" />
          </a>
        </div>

        <h2 className="text-2xl font-semibold text-[#AD3535] mt-8">
          GOOGLE MAP LOCATION
        </h2>

        {/* Google Map Container */}
        <div className="w-full max-w-4xl aspect-[16/9] bg-gray-100 rounded-xl border-2 border-[#E0E0E0] overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d876.1868692322348!2d77.271162!3d28.547309!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMyJzUwLjYiTiA3N8KwMTYnMTYuOCJF!5e0!3m2!1sen!2sus!4v1739805379202!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Venue Address */}
        <div className="text-[#AD3535] mt-6 space-y-1">
          <p className="font-semibold text-2xl">
            INDRAPRASTHA INSTITUTE OF INFORMATION TECHNOLOGY DELHI
          </p>
          <p className="text-lg">OKHLA INDUSTRIAL ESTATE PHASE III</p>
          <p className="text-lg">NEAR GOVIND PURI METRO STATION</p>
        </div>
      </div>
    </div>
  );
};

