"use client";

import { useState, useEffect, useCallback } from "react";

const API_KEY = "4f85134e0e3de33d9af45eb9596b5735";

export function usePopularMoviesWithPagination(type: "movie" | "tv" = "movie") {
  const [movies, setMovies] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const endpoint =
    type === "tv" ? "/tv/popular" : "/movie/popular";

  const fetchMovies = useCallback(
    async (pageNumber: number) => {
      setLoadingMore(true);

      try {
        const res = await fetch(
          `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&page=${pageNumber}`
        );
        const data = await res.json();

        // Lọc movie trùng trước khi append
        setMovies((prev) => {
          const newMovies = data.results.filter(
            (m: any) => !prev.some((p) => p.id === m.id)
          );
          return [...prev, ...newMovies];
        });
      } catch (error) {
        console.error("Failed to fetch:", error);
      } finally {
        setLoadingMore(false);
      }
    },
    [endpoint]
  );

  // Reset và load page đầu tiên khi type thay đổi
  useEffect(() => {
    setMovies([]);
    setPage(1);
    fetchMovies(1);
  }, [fetchMovies]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMovies(nextPage);
  };

  return {
    movies,
    loadMore,
    loadingMore,
  };
}
