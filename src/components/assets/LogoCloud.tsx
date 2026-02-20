const logos = [
  { src: "/images/brands/1.svg", alt: "b1 Logo" },
  { src: "/images/brands/2.svg", alt: "b2 Logo" },
  { src: "/images/brands/3.svg", alt: "b3 Logo" },
  { src: "/images/brands/4.svg", alt: "b4 Logo" },
  { src: "/images/brands/5.svg", alt: "b5 Logo" },
  { src: "/images/brands/6.svg", alt: "b6 Logo" },
];

export default function LogoCloud() {
  return (
    <div className="relative py-2 mx-auto mt-12 overflow-hidden overflow-x-hidden">
      <div className="justify-between w-full grid">
        <div className="absolute inset-0 left-0 z-10 from-white dark:from-base-950 via-transparent w-44 bg-gradient-to-r"></div>
        <div className="absolute inset-0 left-0 z-10 ml-auto from-white dark:from-base-950 via-transparent w-44 bg-gradient-to-l"></div>
      </div>
      <div className="relative flex items-center animate-marquee gap-4 whitespace-nowrap">
        {logos.map((logo) => (
          <img
            key={logo.src}
            width={200}
            height={100}
            className="h-8 dark:filter-none filter invert"
            src={logo.src}
            alt={logo.alt}
          />
        ))}
      </div>
    </div>
  );
}
