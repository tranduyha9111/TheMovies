"use client";

import { memo, useMemo } from "react";

function MovieTrailer({ movie }: any) {
  const youtubeKey = useMemo(() => {
    const results = movie?.videos?.results || [];
    const trailer = results.find((v: any) => v.type === "Trailer");
    return trailer?.key || null;
  }, [movie?.videos?.results]);

  if (!youtubeKey) return null;

  return (
    <div className="my-16">
      <h3 className="text-white text-2xl font-semibold mb-4">Trailer</h3>

      <iframe
        src={`https://www.youtube.com/embed/${youtubeKey}`}
        title="Trailer"
        width="100%"
        height="600"
        loading="lazy"
        allowFullScreen
        className="rounded-xl"
      />
    </div>
  );
}

export default memo(MovieTrailer);
