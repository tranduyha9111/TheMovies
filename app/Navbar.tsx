"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../public/logo.png";
import NavItem from "./NavItem";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-200 ease-in-out 
        px-8 py-0 md:py-4 ${isScrolled ? "bg-black" : "bg-transparent"}`}
    >
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="hidden md:flex items-center group">
          <Image src={logo} alt="logo" className="mr-4 w-8 md:w-12" />
          <h1 className="text-white font-semibold text-2xl md:text-4xl 
                         group-hover:text-red-500 transition-colors duration-300">
            theMovies
          </h1>
        </Link>

        {/* Menu */}
        <nav
          className="fixed md:relative inset-x-0 bottom-0 md:bottom-auto flex items-center 
                     justify-evenly bg-black-main md:bg-transparent py-2 md:py-4 -mx-4"
        >
          {[
            { href: "/", label: "Home" },
            { href: "/movies", label: "Movies" },
            { href: "/tvSeries", label: "TV Series" },
          ].map((item) => (
            <div key={item.href} className="px-4">
              <NavItem href={item.href}>{item.label}</NavItem>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
