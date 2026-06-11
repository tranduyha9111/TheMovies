"use client";

import Link from "next/link";

export default function BannerSlideContent({ movie }: { movie: any }) {
  const bgImage = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const transition = "transition duration-700 ease-in-out";
  const fadeDown = `opacity-0 animate-fade-down ${transition}`;

  return (
    <div className="w-full h-full">
      <div
        className="relative h-[25rem] md:h-[36rem] lg:h-[52rem] px-4 md:px-12 py-12 md:py-32
                   flex justify-center bg-center bg-no-repeat bg-cover
                   before:content-[''] before:absolute before:inset-0 before:bg-black/60
                   after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-28
                   after:bg-gradient-to-t after:from-black/100 after:to-transparent"
        style={{ backgroundImage: `url(${bgImage})` }}
      > 
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

        <div className="justify-between items-center max-w-screen-2xl h-fit flex z-10 w-full">
          {/* LEFT CONTENT */}
          <div className="lg:w-2/3 px-4 w-full">
            {/* TITLE */}
            <h2
              className={`lg:text-7xl md:text-6xl text-4xl text-white font-bold mb-4 drop-shadow-lg
                         ${fadeDown} delay-200`}
            >
              {movie.title}
            </h2>

            {/* OVERVIEW */}
            <p
              className={`md:text-xl text-xs text-white font-medium my-8
                         ${fadeDown} delay-500`}
            >
              {movie.overview}
            </p>

            {/* BUTTONS */}
            <div className={`flex mt-8 ${transition} opacity-100 translate-y-0 delay-[900ms]`}>
              <Link
                href={`/movies/${movie.id}`}
                className="mr-4 rounded-full py-2 px-8 text-xl font-semibold text-white bg-red-500
                           shadow-[0_0_7px_8px_rgba(255,0,0,0.4)] border-red-500
                           transition-all duration-300 ease-in-out"
              >
                Watch now
              </Link>

              <button
                className="border-2 border-white py-2 px-8 text-xl leading-8 rounded-full
                           text-white font-semibold transition-all duration-300 ease-in-out
                           hover:bg-white hover:text-red-500"
              >
                Watch trailer
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex mt-8 opacity-0 animate-fade-down delay-700">
            <div
              className="rounded-3xl w-95 h-140 bg-cover bg-center bg-no-repeat
                         animate-scale-up delay-700"
              style={{ backgroundImage: `url(${bgImage})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
