"use client";

import { memo } from "react";

function SearchBar() {
  return (
    <form
      className="flex items-center relative rounded-full bg-black w-full md:w-fit lg:w-fit"
    >
      <input
        className="outline-none border-none rounded-full px-6 py-2 bg-black 
                   placeholder-gray-500 text-white flex-1 md:flex-auto md:w-96"
        type="text"
        placeholder="Enter Keyword"
        name="keyword"
        autoComplete="off"
      />

      <button
        type="submit"
        className="bg-red-500 px-6 py-1 rounded-2xl cursor-pointer transition duration-300"
      >
        Search
      </button>
    </form>
  );
}

export default memo(SearchBar);
