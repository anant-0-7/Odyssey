import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full ${isScrolled || isOpen ? 'bg-[#FDFEC4] shadow-md' : 'bg-[#FDFEC4]'} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center">
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4">
            <Link
              className="px-4 py-2 rounded-md text-gray-800 hover:text-orange-600 hover:bg-orange-100 font-bold font-playfair transition-colors"
              to="/"
            >
              Home
            </Link>
            <Link
              className="px-4 py-2 rounded-md text-gray-800 hover:text-orange-600 hover:bg-orange-100 font-bold font-playfair transition-colors"
              to="/events"
            >
              Events
            </Link>
            <Link
              className="px-4 py-2 rounded-md text-gray-800 hover:text-orange-600 hover:bg-orange-100 font-bold font-playfair transition-colors"
              to="/register"
            >
              Register
            </Link>
            
            <Link
              className="px-4 py-2 rounded-md text-gray-800 hover:text-orange-600 hover:bg-orange-100 font-bold font-playfair transition-colors"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className="px-4 py-2 rounded-md text-gray-800 hover:text-orange-600 hover:bg-orange-100 font-bold font-playfair transition-colors"
              to="/team"
            >
              Team
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-orange-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-2 pb-4">
            <Link
              className="w-full text-center py-2 text-gray-800 hover:text-orange-600 hover:bg-orange-100 transition-colors"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              className="w-full text-center py-2 text-gray-800 hover:text-orange-600 hover:bg-orange-100 transition-colors"
              to="/events"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link
              className="w-full text-center py-2 text-gray-800 hover:text-orange-600 hover:bg-orange-100 transition-colors"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Venue
            </Link>
            <Link
              className="w-full text-center py-2 text-gray-800 hover:text-orange-600 hover:bg-orange-100 transition-colors"
              to="/register"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>

            <Link
              className="w-full text-center py-2 text-gray-800 hover:text-orange-600 hover:bg-orange-100 transition-colors"
              to="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}