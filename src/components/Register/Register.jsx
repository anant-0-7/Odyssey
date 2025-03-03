import React from "react";
import text from "../../assets/REGISTRATIONS.svg";
import footer from "../../assets/FOOTER.png";
import logo from "../../assets/odyssey2.svg";


const Description = () => (
    <div className="py-16">
        <div className="flex flex-col justify-center">
            <div className="py-16">
                <h1 className="text-5xl font-black text-[#AD3535] text-center font-custom">
                    Secure Your Spot At Odyssey!
                </h1>
            </div>
            <div className="flex flex-col justify-center px-20 py-4">
                <h1 className="text-5xl text-[#AD3535] text-center py-10 mx-32 font-custom">
                    Ready to be a part of the magic? Register now to ensure your entry into
                    the most anticipated cultural fest of the year. Whether you're
                    participating in events or just soaking in the vibrant atmosphere, your
                    registration is your key to unlocking the full Odyssey experience.
                </h1>
                <h1 className="text-5xl text-[#AD3535] text-center py-10 mx-32 font-custom">
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
            <div className="h-5/6 relative flex flex-col items-center">
                <div className="text-center z-10 flex-grow flex flex-col mb-16 justify-start">
                    <img src={logo} alt="Logo" className="mx-auto mb-2 top-0 w-32" />
                    <h1 className="text-3xl md:text-7xl font-bold text-blue-950">Odyssey'25</h1>
                    <h2 className="text-xl md:text-3xl font-bold text-blue-950 mt-1 mb-15">8-9th March</h2>
                </div>
                <img
                    src={text}
                    alt="Registration Details"
                    className="p-10 mx-auto mb-2 animate-slideFromBottom"
                    style={{ width: "38rem" }}
                />
            </div>
            <div className="flex justify-center items-center flex-col gap-8 py-3">
                <button className="bg-[#AD3535] text-2xl w-[581px] py-8 text-center rounded-3xl text-white font-bold font-custom ">DAY 1 Passes</button>
                <button className="bg-[#AD3535] text-2xl w-[581px] py-8 text-center rounded-3xl text-white font-bold font-custom">DAY 2 Passes</button>
            </div>
            <Description />

            {/* Footer Section */}
            <div className="w-full h-32 flex justify-center items-center bg-[#A03232]">
                <img src={footer} alt="Footer" className="w-40 mx-auto mb-2" />
            </div>
        </div>
    );
}
