"use client";

import SearchBar from "@/app/movies/components/SearchBar";
import MovieList from "@/app/movies/components/MovieList";
import { useSearch } from "@/app/hooks/useSearch";

export default function TvSeriesContent() {
  const { results, isSearching, query, search, clearSearch } = useSearch("tv");

  return (
    <>
      <SearchBar onSearch={search} onClear={clearSearch} />

      <div className="mt-16">
        <MovieList
          type="tv"
          searchResults={query ? results : undefined}
          isSearching={isSearching}
          searchQuery={query}
        />
      </div>
    </>
  );
}
