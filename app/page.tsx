import BannerSlider from "@/app/components/BannerSlider";
import MovieRow from "@/app/components/MovieRow";

export default function Home() {
  return (
    <main>
      <BannerSlider />

      <MovieRow title="Trending Movies" />
      <MovieRow title="Top Rated Movies" />
      <MovieRow title="Trending TV" />
      <MovieRow title="Top Rated TV" />
    </main>
  );
}
