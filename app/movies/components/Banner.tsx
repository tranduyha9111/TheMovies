import next from "next";

export default function Banner() {
  return (
    <div className="bg-no-repeat bg-center bg-cover h-48 relative">
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-y-0 text-white text-4xl font-bold z-10 box-border border-0 border-solid border-gray-300">
        Movies
      </span>
    </div>
  );
}
