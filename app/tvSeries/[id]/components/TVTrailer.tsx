"use client";

import { memo, useMemo } from "react";

function TVTrailer({ series }: any) {
  const youtubeKey = useMemo(() => {
    const results = series?.videos?.results || [];
    // Ưu tiên Trailer, fallback sang Teaser
    const trailer =
      results.find((v: any) => v.type === "Trailer") ||
      results.find((v: any) => v.type === "Teaser");
    return trailer?.key || null;
  }, [series?.videos?.results]);

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

export default memo(TVTrailer);
