"use client";

import { memo, useMemo } from "react";
import MovieCard from "./MovieCard";
import { usePopularMoviesWithPagination } from "@/app/hooks/usePopularMoviesWithPagination";

function MovieList() {
  const { movies, loadMore, loadingMore } = usePopularMoviesWithPagination();

  // Tối ưu: hạn chế re-render list
  const movieList = useMemo(
    () => movies.map((movie: any) => <MovieCard key={movie.id} movie={movie} />),
    [movies]
  );

  return (
    <div>
      {/* GRID MOVIE LIST */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {movieList}
      </div>

      {/* WATCH MORE */}
      <div className="text-center mt-10">
        <button
          onClick={loadMore}
          disabled={loadingMore}
          className="
            border-2 border-white md:px-6 md:text-lg md:leading-7 
            transition-all duration-300 ease-in-out rounded-full px-4 
            text-sm leading-5 font-medium text-white cursor-pointer 
            hover:bg-white hover:text-red-500 disabled:opacity-50
          "
        >
          {loadingMore ? "Loading..." : "Watch More"}
        </button>
      </div>
    </div>
  );
}

export default memo(MovieList);
