"use client";

import { memo, useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onClear?: () => void;
}

function SearchBar({ onSearch, onClear }: SearchBarProps) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(keyword.trim());
  };

  const handleClear = () => {
    setKeyword("");
    onClear?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center relative rounded-full bg-black w-full md:w-fit"
    >
      <input
        className="outline-none border-none rounded-full px-6 py-2 bg-black 
                   placeholder-gray-500 text-white flex-1 md:flex-auto md:w-96"
        type="text"
        placeholder="Search movies..."
        name="keyword"
        autoComplete="off"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      {/* Clear button - hiện khi có text */}
      {keyword && (
        <button
          type="button"
          onClick={handleClear}
          className="text-gray-400 hover:text-white px-2 transition"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}

      <button
        type="submit"
        className="bg-red-500 px-6 py-2 rounded-full cursor-pointer 
                   transition duration-300 hover:bg-red-600 text-white font-medium"
      >
        Search
      </button>
    </form>
  );
}

export default memo(SearchBar);
