import Banner from "@/app/movies/components/Banner";
import MoviesContent from "@/app/movies/components/MoviesContent";

export default function MoviesPage() {
  return (
    <div>
      <Banner />

      <div className="bg-black-main px-4 md:px-8 py-8 xl:p-16">
        <div className="max-w-screen-2xl mx-auto">
          {/* Client component xử lý Search và List */}
          <MoviesContent />
        </div>
      </div>
    </div>
  );
}
