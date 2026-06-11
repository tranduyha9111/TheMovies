import BannerSlider from "@/app/components/BannerSlider";
import MovieRow from "@/app/components/MovieRow";

export default function Home() {
  return (
    <main>
      <BannerSlider />

      <MovieRow 
        title="Trending Movies" 
        endpoint="/trending/movie/day" 
        type="movie" 
      />
      <MovieRow 
        title="Top Rated Movies" 
        endpoint="/movie/top_rated" 
        type="movie" 
      />
      <MovieRow 
        title="Trending TV" 
        endpoint="/trending/tv/day" 
        type="tv" 
      />
      <MovieRow 
        title="Top Rated TV" 
        endpoint="/tv/top_rated" 
        type="tv" 
      />
    </main>
  );
}
