"use client";

import { useState, useCallback } from "react";

const API_KEY = "4f85134e0e3de33d9af45eb9596b5735";

export function useSearch(type: "movie" | "tv" = "movie") {
  const [results, setResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState("");

  const search = useCallback(
    async (q: string) => {
      setQuery(q);

      if (!q.trim()) {
        setResults([]);
        setIsSearching(false);
        return;
      }

      setIsSearching(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&query=${encodeURIComponent(q)}`
        );
        const data = await res.json();
        setResults(data.results || []);
      } catch (error) {
        console.error("Search failed:", error);
        setResults([]);
      } finally {
        setIsSearching(false);
      }
    },
    [type]
  );

  const clearSearch = useCallback(() => {
    setQuery("");
    setResults([]);
    setIsSearching(false);
  }, []);

  return { results, isSearching, query, search, clearSearch };
}
