interface BannerProps {
  title?: string;
}

export default function Banner({ title = "Movies" }: BannerProps) {
  return (
    <div className="bg-no-repeat bg-center bg-cover h-48 relative bg-[#0d0d0d] flex items-center justify-center">
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://calm-cendol-f3d19f.netlify.app/assets/footer-bg-e4b3ddb4.jpg)' }}
      ></div>
      <h2 className="relative text-white text-4xl md:text-5xl font-bold z-10 transition-all duration-300">
        {title}
      </h2>
    </div>
  );
}
