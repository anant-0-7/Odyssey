import React from "react";
import Mankind from "../../assets/mankind.svg";
import Nodwin from "../../assets/nodwin.svg";
import ICICI from "../../assets/icici.svg";
import Quelica from "../../assets/quelica.svg";
import Mercy from "../../assets/mercy_for_animals.svg";

export default function Spons() {
    return (
        <div
            className="
        flex flex-col
        w-screen min-h-screen
        bg-[#FFCC6D]
        p-[2vw]
        items-center
        overflow-y-auto overflow-x-hidden
      "
        >
            {/* Main Title */}
            <h1
                className="
          font-[OdysseyFont]
          text-[#AD3535]
          text-[8vw]          /* Default for very small screens */
          text-center
          sm:text-[7vw]       /* >= 640px */
          md:text-[5vw]       /* >= 768px */
          lg:text-[4vw]       /* >= 1024px */
        "
            >
                OUR SPONSORS
            </h1>

            {/* Small Heading */}
            <p
                className="
          font-[OdysseyFont]
          text-[#AD3535]
          text-[5vw]
          text-center
          mt-2 mb-4
          sm:text-[4vw]
          md:text-[3vw]
          lg:text-[2.5vw]
        "
            >
                Our Partners in Celebration!
            </p>

            {/* Description */}
            <p
                className="
          font-[OdysseyFont]
          text-[#AD3535]
          text-[4.5vw]
          text-center
          px-[5vw]
          sm:text-[4vw]
          md:text-[3vw]
          lg:text-[2.5vw]
          lg:px-[15vw]
        "
            >
                A heartfelt thank you to our sponsors for making Odyssey possible! We
                extend our gratitude to these organizations for their support and
                commitment to fostering creativity and culture. Explore our sponsors'
                page to learn more about the fantastic companies that believe in the
                power of celebration.
            </p>

            {/* Sponsor Cards */}
            <div
                className="
          flex flex-wrap
          justify-center
          gap-8
          mt-8
          w-[90%]
          sm:w-[80%]
          md:w-[70%]
          lg:w-[60%]
        "
            >
                {/* Each Sponsor Item */}
                <div
                    className="
            bg-white
            w-[150px]
            h-[130px]
            flex
            items-center
            justify-center
            mb-4
            sm:w-[180px]
            sm:h-[160px]
            md:w-[200px]
            md:h-[180px]
          "
                >
                    <img src={Mankind} alt="Mankind" />
                </div>

                <div
                    className="
            bg-white
            w-[150px]
            h-[130px]
            flex
            items-center
            justify-center
            mb-4
            sm:w-[180px]
            sm:h-[160px]
            md:w-[200px]
            md:h-[180px]
          "
                >
                    <img src={Nodwin} alt="Nodwin" />
                </div>

                <div
                    className="
            bg-white
            w-[150px]
            h-[130px]
            flex
            items-center
            justify-center
            mb-4
            sm:w-[180px]
            sm:h-[160px]
            md:w-[200px]
            md:h-[180px]
          "
                >
                    <img src={ICICI} alt="ICICI" />
                </div>

                <div
                    className="
            bg-white
            w-[150px]
            h-[130px]
            flex
            items-center
            justify-center
            mb-4
            sm:w-[180px]
            sm:h-[160px]
            md:w-[200px]
            md:h-[180px]
          "
                >
                    <img src={Quelica} alt="Quelica" />
                </div>

                <div
                    className="
            bg-white
            w-[150px]
            h-[130px]
            flex
            items-center
            justify-center
            mb-4
            sm:w-[180px]
            sm:h-[160px]
            md:w-[200px]
            md:h-[180px]
          "
                >
                    <img src={Mercy} alt="Mercy for Animals" />
                </div>
            </div>
        </div>
    );
}
