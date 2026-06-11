"use client";

import { memo, useMemo } from "react";

const IMG_ORIGINAL = "https://image.tmdb.org/t/p/original";
const IMG_W500 = "https://image.tmdb.org/t/p/w500";

function Banner({ movie }: any) {
  const {
    backdrop_path,
    poster_path,
    title,
    genres = [],
    overview,
    credits,
  } = movie;

  // Tối ưu tính toán URL
  const background = useMemo(
    () => `${IMG_ORIGINAL}${backdrop_path}`,
    [backdrop_path]
  );

  const poster = useMemo(() => `${IMG_W500}${poster_path}`, [poster_path]);

  const cast = credits?.cast?.slice(0, 10) || [];

  return (
    <div
      className="
        relative px-4 md:px-8 lg:px-16 py-12 md:pt-32 md:pb-20
        min-h-[60vh] lg:min-h-screen bg-center bg-no-repeat bg-cover
        z-0
        before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-1/2 before:bg-black before:-z-[1]
        after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:h-1/2 after:bg-gradient-to-t after:from-black/100 after:to-transparent after:-z-[1]
      "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex items-start -mx-4 max-h-fit">
        {/* POSTER */}
        {poster_path && (
          <div className="hidden md:block w-64 lg:w-96 px-4">
            <img className="rounded-3xl" src={poster} alt={title} />
          </div>
        )}

        {/* RIGHT SIDE */}
        <div className="px-4 flex-1 flex flex-col justify-between -my-2 lg:-my-4">
          {/* TITLE */}
          <h2 className="py-2 lg:py-4 font-bold text-white text-3xl md:text-5xl lg:text-7xl">
            {title}
          </h2>

          {/* GENRES */}
          <div className="py-4 flex flex-wrap items-center -mx-1">
            {genres.map((g: any) => (
              <div key={g.id} className="px-1 mb-4">
                <span className="bg-black px-4 py-1 border-2 border-white rounded-full text-white text-xs lg:text-sm">
                  {g.name}
                </span>
              </div>
            ))}
          </div>

          {/* OVERVIEW */}
          <p className="py-2 lg:py-4 text-white text-xs md:text-sm lg:text-base">
            {overview}
          </p>

          {/* CAST */}
          <div className="py-2 lg:py-4">
            <h3 className="text-white text-xl font-medium">Casts</h3>

            <div className="flex flex-wrap -mx-2 mt-1">
              {cast.map((c: any) => (
                <div key={c.id} className="w-28 px-2 mb-1">
                  <img
                    className="rounded-xl"
                    src={
                      c.profile_path
                        ? `${IMG_W500}${c.profile_path}`
                        : "/no-avatar.png"
                    }
                    alt={c.name}
                  />
                  <span className="text-white text-xs md:text-sm font-sm">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default memo(Banner);
