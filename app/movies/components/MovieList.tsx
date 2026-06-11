"use client";

import { memo, useMemo } from "react";
import MovieCard from "./MovieCard";
import { usePopularMoviesWithPagination } from "@/app/hooks/usePopularMoviesWithPagination";

interface MovieListProps {
  type?: "movie" | "tv";
  searchResults?: any[];
  isSearching?: boolean;
  searchQuery?: string;
}

function MovieList({
  type = "movie",
  searchResults,
  isSearching = false,
  searchQuery = "",
}: MovieListProps) {
  const { movies, loadMore, loadingMore } = usePopularMoviesWithPagination(type);

  // Khi có search query → dùng search results, ngược lại dùng paginated list
  const isSearchMode = Boolean(searchQuery);
  const displayList = isSearchMode ? (searchResults ?? []) : movies;

  const movieCards = useMemo(
    () =>
      displayList.map((movie: any) => (
        <MovieCard key={movie.id} movie={movie} type={type} />
      )),
    [displayList, type]
  );

  return (
    <div>
      {/* Search status */}
      {isSearchMode && (
        <p className="text-gray-400 mb-6 text-sm">
          {isSearching
            ? "Đang tìm kiếm..."
            : `Tìm thấy ${displayList.length} kết quả cho "${searchQuery}"`}
        </p>
      )}

      {/* GRID LIST */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {isSearching ? (
          // Skeleton loading khi đang search
          Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-72 2xl:h-80 rounded-3xl bg-gray-800 animate-pulse"
            />
          ))
        ) : displayList.length === 0 && isSearchMode ? (
          <p className="text-gray-400 col-span-full text-center py-10">
            Không tìm thấy kết quả nào
          </p>
        ) : (
          movieCards
        )}
      </div>

      {/* LOAD MORE — chỉ hiện khi không ở search mode */}
      {!isSearchMode && (
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
            {loadingMore ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}

export default memo(MovieList);
