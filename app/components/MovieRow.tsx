"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import MovieCard from "./MovieCard";
import { useMoviesByEndpoint } from "../hooks/useMoviesByEndpoint";

import "swiper/css";
import "swiper/css/free-mode";

// Đưa breakpoints ra ngoài để tránh tạo lại mỗi lần render
const ROW_BREAKPOINTS = {
  320: { slidesPerView: 2.5, spaceBetween: 15 },
  640: { slidesPerView: 3.5, spaceBetween: 20 },
  1024: { slidesPerView: 5.2, spaceBetween: 30 },
  1280: { slidesPerView: 6.5, spaceBetween: 30 },
};

interface MovieRowProps {
  title: string;
  endpoint: string;
  type?: "movie" | "tv";
}

export default function MovieRow({ title, endpoint, type = "movie" }: MovieRowProps) {
  const { data, isLoading } = useMoviesByEndpoint(endpoint);

  if (isLoading) {
    return <p className="text-white py-4">Loading movies...</p>;
  }

  const movies = data?.results ?? [];

  return (
    <div className="bg-black-main px-4 md:px-8 py-8 md:py-16">
      <div className="max-w-screen-2xl mx-auto">

        {/* Title + View More */}
        <div className="flex items-center justify-between">
          <span className="text-white font-semibold text-lg md:text-2xl">
            {title}
          </span>

          <a
            href={type === "tv" ? "/tvSeries" : "/movies"}
            className="border-2 border-white md:px-6 md:text-lg md:leading-7 
                       transition rounded-full px-4 text-sm leading-5 font-medium 
                       text-white hover:bg-white hover:text-red-500"
          >
            View More
          </a>
        </div>

        {/* Movie Slider */}
        <div className="mt-8">
          <Swiper
            modules={[FreeMode, Autoplay]}
            freeMode
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={ROW_BREAKPOINTS}
            className="movie-row-swiper"
          >
            {movies.map((movie: any) => (
              <SwiperSlide key={movie.id} className="!w-auto">
                <MovieCard movie={movie} type={type} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  );
}
