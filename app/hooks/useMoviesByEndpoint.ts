"use client";

import { useQuery } from "@tanstack/react-query";

const API_KEY = "4f85134e0e3de33d9af45eb9596b5735";

export function useMoviesByEndpoint(endpoint: string) {
  return useQuery({
    queryKey: ["movies-by-endpoint", endpoint],
    queryFn: async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}`
      );
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
  });
}
