"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const navLinks = [
    { title: "Home", href: "#" },
    {
      title: "Resources▾",
      submenu: [
        { title: "Docs", href: "#" },
        { title: "Blog", href: "#" },
        { title: "Community", href: "#" },
      ],
    },
    { title: "Ecosystem", href: "#" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full flex justify-between items-center px-4 md:px-16 py-4 fixed top-0 z-[9999] transition-colors duration-300 ${scrolled ? 'bg-[#000000] shadow-lg' : 'bg-transparent'}`}>
      {/* Logo */}
      <div className="flex items-center space-x-3 text-white font-bold text-xl cursor-pointer">
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="h-auto w-auto"
          />
        </div>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <ul
        className={`fixed md:hidden left-0 right-0 top-[72px] w-full bg-[#101010] text-white flex flex-col items-center space-y-4 py-4 transition-all duration-300 z-[9998] ${menuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-4 opacity-0 pointer-events-none'}`}
        style={{ minHeight: 'calc(100vh - 72px)' }}
      >
        {navLinks.map((link, i) =>
          link.submenu ? (
            <li key={i} className="relative w-full group cursor-pointer">
              <span className="block text-lg font-medium px-6 py-2 w-full text-left">{link.title}</span>
              <ul className="mt-2 bg-[#202020] rounded-lg shadow-xl p-2 space-y-2 w-[90vw] mx-auto">
                {link.submenu.map((sub, si) => (
                  <li
                    key={si}
                    className="text-sm text-gray-300 hover:text-white px-3 py-1 rounded cursor-pointer"
                  >
                    {sub.title}
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={i} className="cursor-pointer hover:text-red-600 transition text-lg font-medium w-full px-6 py-2 text-left">
              {link.title}
            </li>
          )
        )}
        <li className="w-full px-6 mt-4">
          <button className="w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold px-5 py-2 rounded-md">
            Launch App
          </button>
        </li>
      </ul>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-8 text-white font-medium">
        {navLinks.map((link, i) =>
          link.submenu ? (
            <li key={i} className="relative group cursor-pointer">
              {link.title}
              <ul className="absolute top-full left-0 mt-2 bg-[#101010] rounded-lg shadow-xl p-2 space-y-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity w-40">
                {link.submenu.map((sub, si) => (
                  <li
                    key={si}
                    className="text-sm text-gray-300 hover:text-white px-3 py-1 rounded cursor-pointer"
                  >
                    {sub.title}
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={i} className="cursor-pointer hover:text-red-600 transition">
              {link.title}
            </li>
          )
        )}
      </ul>

      {/* Launch App Button */}
      <button className="hidden md:inline-block bg-red-600 hover:bg-red-700 transition text-white font-semibold px-5 py-2 rounded-md">
        Launch App
      </button>
    </nav>
  );
};

export default Navbar;