"use client";

import { useQuery } from "@tanstack/react-query";

const API_KEY = "4f85134e0e3de33d9af45eb9596b5735";

export function useTVSeriesDetail(id: string) {
  return useQuery({
    queryKey: ["tv-detail", id],
    queryFn: async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&append_to_response=videos,credits`
      );
      if (!res.ok) throw new Error("Failed to load TV series");
      return res.json();
    },
  });
}
