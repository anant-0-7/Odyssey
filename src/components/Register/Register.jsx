import React from "react";
import text from "../../assets/REGISTRATIONS.svg";
import footer from "../../assets/FOOTER.png";
import logo from "../../assets/odyssey2.svg";


const Description = () => (
    <div className="py-16 text-center">
        <div className="flex flex-col justify-center">
            <div className="py-16">
                <h1 className="text-5xl font-black text-[#AD3535] text-center font-custom">
                    Secure Your Spot At Odyssey!
                </h1>
            </div>
            <div className="flex flex-col justify-center py-4 md:mx-24 mx-8 md:text-5xl text-3xl">
                <h1 className=" text-[#AD3535] text-center py-10 font-custom">
                    Ready to be a part of the magic? Register now to ensure your entry into
                    the most anticipated cultural fest of the year. Whether you're
                    participating in events or just soaking in the vibrant atmosphere, your
                    registration is your key to unlocking the full Odyssey experience.
                </h1>
                <h1 className=" text-[#AD3535] text-center py-10 font-custom">
                    Don't miss out on the cultural celebration of the year! Join us at Odyssey for an unforgettable experience filled with laughter,
                    creativity, and the spirit of togetherness.
                    See you there!
                </h1>
            </div>
        </div>
    </div>
);

export default function Register() {
    return (
        <div className="bg-[#FDFEC4] min-h-screen">
            {/* Main Section */}
            <div className=  "relative flex flex-col items-center">
                <div className="text-center z-10 flex-grow flex flex-col mb-16 justify-start">
                    <img src={logo} alt="Logo" className="mx-auto mb-2 top-0 w-32" />
                    <h1 className="text-5xl md:text-5xl font-bold text-blue-950 font-playfair mb-2">Odyssey'25</h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mt-1 mb-15 font-playfair">8-9th March</h2>
                </div>
                <img
                    src={text}
                    alt="Registration Details"
                    className="p-10 mx-auto mb-2 animate-slideFromBottom"
                    style={{ width: "38rem" }}
                />
            </div>
            <div className="flex justify-center items-center flex-col gap-8 py-3">
                <button className="bg-[#AD3535] text-2xl md:w-96 py-8 text-center rounded-3xl text-white  font-custom w-72">DAY 1 Passes</button>
                <button className="bg-[#AD3535] text-2xl md:w-96 py-8 text-center rounded-3xl text-white  font-custom w-72">DAY 2 Passes</button>
            </div>
            <Description />

            {/* Footer Section */}
            <div className="w-full h-32 flex justify-center items-center bg-[#A03232]">
                <img src={footer} alt="Footer" className="w-40 mx-auto mb-2" />
            </div>
        </div>
    );
}
