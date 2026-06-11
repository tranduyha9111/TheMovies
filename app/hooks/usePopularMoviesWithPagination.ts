"use client";

import { useState, useEffect } from "react";

export function usePopularMoviesWithPagination() {
  const [movies, setMovies] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const apiKey = "4f85134e0e3de33d9af45eb9596b5735";

  // Load page đầu tiên
  useEffect(() => {
    fetchMovies(page);
  }, []);

  const fetchMovies = async (pageNumber: number) => {
    setLoadingMore(true);

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${pageNumber}`
      );
      const data = await res.json();

      // 🔹 Lọc movie trùng trước khi append
      setMovies((prev) => {
        const newMovies = data.results.filter(
          (m: any) => !prev.some((p) => p.id === m.id)
        );
        return [...prev, ...newMovies];
      });
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    } finally {
      setLoadingMore(false);
    }
  };

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
