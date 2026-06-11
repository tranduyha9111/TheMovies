"use client";

import Link from "next/link";

export default function MovieCard({ movie }) {
  const { id, title, poster_path } = movie;
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : "/no-poster.png"; // fallback để không bị vỡ UI

  return (
    <Link
      href={`/movies/${id}`}
      className="block group w-full h-full relative overflow-hidden rounded-xl"
    >
      <div className="w-[180px] h-[270px] md:w-[220px] md:h-[330px] relative overflow-hidden rounded-xl">
        <img
          src={posterUrl}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover rounded-xl transition-all duration-500 group-hover:opacity-40"
        />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-white ml-1" />
          </div>
        </div>
      </div>

      <p className="text-white text-sm md:text-base font-semibold mt-2 truncate w-[180px] md:w-[220px]">
        {title}
      </p>
    </Link>
  );
}
