"use client";

import { memo, useMemo } from "react";
import Link from "next/link";
import { Play } from "lucide-react";

interface MovieCardProps {
  movie: any;
  type?: "movie" | "tv";
}

function MovieCard({ movie, type = "movie" }: MovieCardProps) {
  // TV series dùng 'name', movies dùng 'title'
  const title = type === "tv"
    ? (movie?.name ?? movie?.title ?? "Unknown")
    : (movie?.title ?? movie?.name ?? "Unknown Title");

  const href = type === "tv" ? `/tvSeries/${movie.id}` : `/movies/${movie.id}`;

  const poster = useMemo(
    () =>
      movie?.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "/no-image.jpg",
    [movie?.poster_path]
  );

  return (
    <Link href={href} className="hover:cursor-pointer group/container">
      {/* POSTER */}
      <div
        className="
          relative w-full h-72 2xl:h-80 rounded-3xl bg-center bg-no-repeat bg-cover 
          group/poster
          after:content-[''] after:absolute after:inset-0 after:rounded-3xl 
          hover:after:bg-black/60 after:transition after:ease-in-out after:duration-300
        "
        style={{ backgroundImage: `url(${poster})` }}
      >
        {/* PLAY BUTTON */}
        <button
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            py-4 px-8 bg-red-main rounded-full text-white 
            opacity-0 scale-50 transition duration-300 
            group-hover/poster:opacity-100 group-hover/poster:scale-100
          "
        >
          <Play size={15} />
        </button>
      </div>

      {/* TITLE */}
      <h3
        className="
          font-medium text-white text-sm md:text-lg mt-4 transition duration-300
          group-hover/container:text-red-main
        "
      >
        {title}
      </h3>
    </Link>
  );
}

export default memo(MovieCard);
