"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";

import { useTVSeriesDetail } from "@/app/hooks/useTVSeriesDetail";
import Banner from "./components/Banner";
import TVTrailer from "./components/TVTrailer";
import MovieRow from "@/app/components/MovieRow";

export default function TVSeriesDetailPage() {
  const { id } = useParams();
  const seriesId = useMemo(() => String(id), [id]);

  const { data: series, isLoading } = useTVSeriesDetail(seriesId);

  if (isLoading)
    return (
      <p className="text-white text-center py-10 bg-black min-h-screen">
        Loading...
      </p>
    );

  if (!series)
    return (
      <p className="text-white text-center py-10 bg-black min-h-screen">
        TV Series không tìm thấy
      </p>
    );

  return (
    <div className="bg-black-main min-h-screen">
      <Banner series={series} />

      <div className="px-4 md:px-8 lg:px-16">
        <TVTrailer series={series} />
      </div>

      <div className="pb-16">
        <MovieRow
          title="Similar TV Shows"
          endpoint={`/tv/${seriesId}/similar`}
          type="tv"
        />
      </div>
    </div>
  );
}
