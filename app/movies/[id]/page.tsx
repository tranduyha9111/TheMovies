"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";

import { useMovieDetail } from "../../hooks/useMovieDetail";
import Banner from "./components/Banner";
import MovieTrailer from "./components/MovieTrailer";
import MovieRow from "@/app/components/MovieRow";

export default function MoviePage() {
  const { id } = useParams();

  const movieId = useMemo(() => String(id), [id]);

  const { data: movie, isLoading } = useMovieDetail(movieId);

  if (isLoading)
    return <p className="text-white text-center py-10">Loading...</p>;

  if (!movie)
    return <p className="text-white text-center py-10">Movie không tìm thấy</p>;

  return (
    <div className="bg-black-main min-h-screen">
      <Banner movie={movie} />

      <div className="px-4 md:px-8 lg:px-16">
        <MovieTrailer movie={movie} />
      </div>
      <div className="px-4 md:px-8 lg:px-16 pb-16">
        <MovieRow 
          title="Similar Movies" 
          endpoint={`/movie/${movieId}/similar`} 
          type="movie" 
        />
      </div>
    </div>
  );
}
