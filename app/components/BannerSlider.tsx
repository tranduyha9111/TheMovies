"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { usePopularMovies } from "../hooks/usePopularMovies";
import BannerSlideContent from "./BannerSlideContent";

export default function BannerSlider() {
  const { data, isLoading } = usePopularMovies();

  if (isLoading)
    return <p className="text-white text-center py-20">Loading banner...</p>;

  const movies = data?.results ?? [];

  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        className="hero-banner-swiper w-full h-full"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <BannerSlideContent movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
