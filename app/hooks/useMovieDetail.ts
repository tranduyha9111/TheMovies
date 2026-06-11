"use client";

import { useQuery } from "@tanstack/react-query";

const API_KEY = "4f85134e0e3de33d9af45eb9596b5735";

export function useMovieDetail(id: string) {
  return useQuery({
    queryKey: ["movie-detail", id],
    queryFn: async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`
      );

      if (!res.ok) throw new Error("Failed to load movie");
      return res.json();
    },
  });
}
