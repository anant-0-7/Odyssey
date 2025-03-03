import logo from "../../assets/odyssey.png";
import text from "../../assets/contact_us_title.svg";
import footer from "../../assets/FOOTER.png";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import Mail from "../../assets/material-symbols_mail-rounded.svg"

const Description = () => (
    <div className="">
        <div className="flex flex-col justify-center py-8">
            <h1 className="text-4xl font-semibold text-[#AD3535] text-center font-custom">Follow us on social media to stay updated on all the exciting</h1>
            <h1 className="text-4xl font-semibold text-[#AD3535] text-center font-custom">developments and sneak peeks leading up to the grand event.</h1>
        </div>
        <div className="flex mt-4 justify-center gap-44 py-5">
            <a
                href="https://www.instagram.com/iiitdodyssey/?hl=en"
                target = "_blank"
                className="p-2"
            >
                <img src={instagram} className="w-auto h-12" alt="Instagram" />
            </a>
            <a
                href="https://x.com/odyssey_iiitd"
                target = "_blank"
                className="p-2"
            >
                <img src={twitter} className="w-auto h-12" alt="Twitter" />
            </a>
            <a
                href="https://www.linkedin.com/company/iiitdodyssey/"
                target = "_blank"
                className="p-2"
            >
                <img src={linkedin} className="w-auto h-12" alt="LinkedIn" />
            </a>
        </div>
        <div className="flex flex-col justify-center py-8">
            <h1 className="text-3xl font-bold text-[#AD3535] text-center font-custom">@IIITDODYSSEY</h1>
            <div className="flex justify-center items-center text-3xl font-bold text-[#AD3535]">
                <img src={Mail} alt="" className="w-8 h-8 mr-2" />
                <span className="font-custom ">odyssey@iiitd.ac.in</span>
            </div>
        </div>
    </div>
);

const Map = () => (
    <div className="flex flex-col justify-center py-8 items-center">
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
        <div className="text-[#AD3535] mt-6 space-y-1 pb-4">
            <p className="font-bold text-4xl font-custom">
                INDRAPRASTHA INSTITUTE OF INFORMATION TECHNOLOGY DELHI
            </p>
            <p className="text-2xl font-semibold font-custom">OKHLA INDUSTRIAL ESTATE PHASE III</p>
            <p className="text-2xl font-semibold font-custom" >NEAR GOVIND PURI METRO STATION</p>
            <p className="text-2xl font-semibold font-custom">NEW DELHI, INDIA</p>
        </div>
    </div>
);

export default function Contact() {
    return (
        <>
            <div className="bg-[#FDFEC4]">
                <div className="h-5/6 relative flex flex-col items-center">
                    <img src={logo} alt="Logo" className="w-80 mx-auto mb-2 " />
                    <img
                        src={text}
                        alt="Logo"
                        className="p-10 mx-auto mb-2 animate-slideFromBottom"
                        style={{ width: "38rem" }}
                    />
                </div>
                <div>
                    {<Description />}
                </div>
                <div>
                    <Map />
                </div>
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
