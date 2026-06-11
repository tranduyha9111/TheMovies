import Banner from "@/app/movies/components/Banner";
import TvSeriesContent from "@/app/tvSeries/components/TvSeriesContent";

export default function TvSeriesPage() {
  return (
    <div>
      <Banner title="TV Series" />

      <div className="bg-black-main px-4 md:px-8 py-8 xl:p-16">
        <div className="max-w-screen-2xl mx-auto">
          {/* Client component xử lý Search và List cho TV Series */}
          <TvSeriesContent />
        </div>
      </div>
    </div>
  );
}
