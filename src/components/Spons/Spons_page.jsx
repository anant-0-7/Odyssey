import React from "react";
import text from "../../assets/SPONSORS.svg";
import Footer from "../Footer";
import logo from "../../assets/odyssey2.svg";
import Mankind from '../../assets/mankind.svg';
import Nodwin from '../../assets/nodwin.svg'; 
import ICICI from '../../assets/icici.svg';
import Quelica from '../../assets/quelica.svg';
import Mercy from '../../assets/mercy_for_animals.svg';
import SBI from '../../assets/SBI.png';
import Rajdhani from '../../assets/rajdhani.png';
import Instax from '../../assets/instax.png';
import DTDC from '../../assets/dtdc.png';
import krafton from '../../assets/krafton.png';
import Imperial from '../../assets/imperial.png';
import Farmley from '../../assets/farmley.png';
import Poly from '../../assets/polymed.png';


const data  = [
    {name: "Mankind consumer products pvt ltd", image: Mankind},
    {name: "ICICI Bank Limited",  image: ICICI},
    {name: "Nodwin",  image: Nodwin},
    {name: "Quelica",  image: Quelica},
    {name: "Mercy for animals India Foundation",  image: Mercy},
    {name: "SBI",  image: SBI},
    {name: "Instax",  image: Instax},
    {name: "Farmley",  image: Farmley},
    {name: "Imperial Auto",  image: Imperial},
    {name: "Poly Medicure",  image: Poly},
    {name: "Delhi Tourism", image: DTDC},
    {name: "KRAFTON",  image: krafton},
    {name: "Rajdhani Electricals",  image: Rajdhani},

]

const Description = () => (
    <div className="py-16 text-center">
        <div className="flex flex-col justify-center items-center">
            {data.map((item) => (
                <div className="py-16 items-center flex flex-col justify-center">
                    <div className="w-[228px] h-[170px] bg-white flex justify-center items-center p-5"><img src={item.image} alt={item.name}/></div>
                    <h1 className="text-5xl text-[#AD3535] text-center font-custom py-6">
                        {item.name}
                    </h1>
                </div>
            ))}
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
            <Description />
            {/* Footer Section */}
        </div>
    );
}
