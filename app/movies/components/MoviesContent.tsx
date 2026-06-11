"use client";

import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import { useSearch } from "@/app/hooks/useSearch";

export default function MoviesContent() {
  const { results, isSearching, query, search, clearSearch } = useSearch("movie");

  return (
    <>
      <SearchBar onSearch={search} onClear={clearSearch} />

      <div className="mt-16">
        <MovieList
          type="movie"
          searchResults={query ? results : undefined}
          isSearching={isSearching}
          searchQuery={query}
        />
      </div>
    </>
  );
}
