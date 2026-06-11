"use client";

import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";

export default function Footer() {
  const links = [
    "Home",
    "Live",
    "You must watch",
    "Contact us",
    "FAQ",
    "Recent realease",
    "Term of services",
    "Premium",
    "Top IMDB",
    "About us",
    "Pravacy policy",
  ];

  const linkClass =
    "md:w-1/3 w-1/2 p-2 md:text-2xl text-white font-semibold transition-all duration-300 ease-in-out hover:text-red-500";

  return (
    <div
      className="h-100 lg:h-120 px-8 py-12 md:p-16 bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://calm-cendol-f3d19f.netlify.app/assets/footer-bg-e4b3ddb4.jpg)",
      }}
    >
      <div className="max-w-4xl h-full mx-auto flex flex-col justify-around">
        {/* LOGO */}
        <Link
          className="flex items-center justify-center cursor-pointer group"
          href="/"
        >
          <Image className="mr-2 md:mr-4 w-8 md:w-12" src={logo} alt="logo" />
          <h1 className="text-white font-semibold text-2xl md:text-4xl group-hover:text-red-main transition-custom duration-300">
            theMovies
          </h1>
        </Link>

        {/* LINK LIST */}
        <div className="flex text-white font-semibold text-base md:text-2xl items-start justify-between flex-wrap -mx-2">
          {links.map((item) => (
            <Link key={item} href="/" className={linkClass}>
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
