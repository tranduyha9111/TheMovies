import Banner from "@/app/movies/components/Banner";
import MovieList from "@/app/movies/components/MovieList";
import SearchBar from "@/app/movies/components/SearchBar";

export default function TvSeriesPage() {
  return (
    <div>
      <Banner />

      <div className="bg-black-main px-4 md:px-8 py-8 xl:p-16">
        <div className="max-w-screen-2xl mx-auto">
          <SearchBar />

          {/* Danh sách phim */}
          <div className="mt-16">
            <MovieList />
          </div>
        </div>
      </div>
    </div>
  );
}
