import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import logoImg from "../assets/img4.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (path) =>
    `relative group transition duration-300 ${
      location.pathname === path
        ? "text-[#FFD700] font-semibold"
        : "text-parchment hover:text-[#FFD700]"
    }`;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrollY > 50
          ? "bg-heritage-pattern bg-repeat bg-fixed shadow-xl"
          : "bg-heritage-pattern bg-repeat bg-fixed"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-3 bg-black/60 rounded-b-lg backdrop-blur-sm">
        {/* Logo + Text */}
        <div className="flex items-center space-x-4">
          <img
            src={logoImg}
            alt="Neural Nexus Logo"
            className="w-14 h-14 rounded-full shadow-divine object-cover"
          />
          <div className="flex flex-col justify-center">
            <h1
              className="text-2xl md:text-3xl font-bold text-[#FFB347] animate-fadeIn"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Neural Nexus
            </h1>
            <p className="text-xs md:text-sm italic text-gray-300 mt-0.5">
              "A manuscript not submitted is a book not published."
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-sans text-lg items-center">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/heritage" className={linkClass("/heritage")}>
            Heritage
          </Link>
          <Link to="/upload" className={linkClass("/upload")}>
            Upload Manuscript
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link to="/feedback" className={linkClass("/feedback")}>
            Feedback
          </Link>
          <Link to="/contact" className={linkClass("/contact")}>
            Contact
          </Link>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search Heritage..."
              aria-label="Search"
              className="rounded-full py-1 px-4 text-sm text-deepMaroon focus:outline-none focus:ring-2 focus:ring-[#FFB347] transition-all duration-300"
            />
            <FaSearch className="absolute right-3 top-1.5 text-deepMaroon" />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-full hover:bg-[#FFB347] transition-colors duration-300"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6 text-parchment" />
          ) : (
            <FaBars className="w-6 h-6 text-parchment" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden bg-black/80 backdrop-blur-sm text-parchment shadow-2xl transition-transform duration-500 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col space-y-4 p-6 text-xl font-sans">
          <li>
            <Link to="/" className="hover:text-[#FFB347]" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/heritage"
              className="hover:text-[#FFB347]"
              onClick={toggleMenu}
            >
              Heritage
            </Link>
          </li>
          <li>
            <Link
              to="/upload"
              className="hover:text-[#FFB347]"
              onClick={toggleMenu}
            >
              Upload Manuscript
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#FFB347]" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/feedback"
              className="hover:text-[#FFB347]"
              onClick={toggleMenu}
            >
              Feedback
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-[#FFB347]"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>

          {/* Mobile Search */}
          <li className="mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 rounded-full text-deepMaroon focus:outline-none focus:ring-2 focus:ring-[#FFB347]"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
