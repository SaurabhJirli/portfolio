const logos = [
  { src: "/images/brands/springboot.svg", alt: "Spring Boot" },
  { src: "/images/brands/postgresql.svg", alt: "PostgreSQL" },
  { src: "/images/brands/docker.svg", alt: "Docker" },
  { src: "/images/brands/kubernetes.svg", alt: "Kubernetes" },
  { src: "/images/brands/kafka.svg", alt: "Apache Kafka" },
  { src: "/images/brands/nextjs.svg", alt: "Next.js" },
];

export default function LogoCloud() {
  return (
    <div className="mt-12 py-6 border-t border-base-200 dark:border-base-800">
      <p className="text-xs font-mono text-base-400 dark:text-base-600 text-center mb-6">Tools I use regularly</p>
      <div className="flex items-center justify-center flex-wrap gap-8">
        {logos.map((logo) => (
          <img
            key={logo.src}
            width={200}
            height={100}
            className="h-7 opacity-50 hover:opacity-100 transition-opacity duration-300 dark:invert"
            src={logo.src}
            alt={logo.alt}
          />
        ))}
      </div>
    </div>
  );
}
