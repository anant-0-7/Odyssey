import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FDFEC4] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center">
          {/* Navbar Links (Desktop) */}
          <div className="hidden md:flex space-x-20">
            <Link className="text-gray-800 hover:text-orange-600 font-medium" to="/">Home</Link>
            <Link className="text-gray-800 hover:text-orange-600 font-medium" to="/events">Events</Link>
            <Link className="text-gray-800 hover:text-orange-600 font-medium" to="/">Venue</Link>
            <Link className="text-gray-800 hover:text-orange-600 font-medium" to="/register">Register</Link>
            <Link className="text-gray-800 hover:text-orange-600 font-medium" to="/">About</Link>
            <Link className="text-gray-800 hover:text-orange-600 font-medium" to="/contact">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-2 pb-4">
            <Link className="text-gray-800 hover:text-orange-600 font-medium" to="/">Home</Link>
            <Link className="text-gray-800 hover:text-orange-600 font-medium" to="/events">Events</Link>
            <Link className="text-gray-800 hover:text-orange-600 font-medium" to="/">Venue</Link>
            <Link className="text-gray-800 hover:text-orange-600 font-medium" to="/">Register</Link>
            <Link className="text-gray-800 hover:text-orange-600 font-medium" to="/">About</Link>
            <Link className="text-gray-800 hover:text-orange-600 font-medium" to="/contact">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
