type StackItem = {
  stackLogo: string;
  name: string;
  darkInvert?: boolean;
};

const primaryTools: StackItem[] = [
  { stackLogo: "/images/stacklogos/java.svg", name: "Java" },
  { stackLogo: "/images/stacklogos/springboot.svg", name: "Spring Boot" },
  { stackLogo: "/images/stacklogos/typescript.svg", name: "TypeScript" },
  { stackLogo: "/images/stacklogos/nextjs.svg", name: "Next.js", darkInvert: true },
  { stackLogo: "/images/stacklogos/postgresql.svg", name: "PostgreSQL" },
  { stackLogo: "/images/stacklogos/docker.svg", name: "Docker" },
  { stackLogo: "/images/stacklogos/aws.svg", name: "AWS" },
  { stackLogo: "/images/stacklogos/kubernetes.svg", name: "Kubernetes" },
  { stackLogo: "/images/stacklogos/nodejs.svg", name: "Node.js" },
  { stackLogo: "/images/stacklogos/redis.svg", name: "Redis" },
];

const supportingTools: StackItem[] = [
  { stackLogo: "/images/stacklogos/mongodb.svg", name: "MongoDB" },
  { stackLogo: "/images/stacklogos/graphql.svg", name: "GraphQL" },
  { stackLogo: "/images/stacklogos/azure.svg", name: "Azure" },
  { stackLogo: "/images/stacklogos/apachekafka.svg", name: "Kafka", darkInvert: true },
  { stackLogo: "/images/stacklogos/javascript.svg", name: "JavaScript" },
  { stackLogo: "/images/stacklogos/fastify.svg", name: "Fastify", darkInvert: true },
  { stackLogo: "/images/stacklogos/influxdb.svg", name: "InfluxDB", darkInvert: true },
  { stackLogo: "/images/stacklogos/grafana.svg", name: "Grafana" },
  { stackLogo: "/images/stacklogos/postman.svg", name: "Postman" },
];

const primaryLoop = [...primaryTools, ...primaryTools];
const supportingLoop = [...supportingTools, ...supportingTools];

function LogoTile({
  item,
  variant = "primary",
}: {
  item: StackItem;
  variant?: "primary" | "supporting";
}) {
  const isPrimary = variant === "primary";

  return (
    <div
      title={item.name}
      className={`group shrink-0 flex flex-col items-center justify-center rounded-xl
        ${isPrimary
          ? "w-20 h-20 sm:w-[5.5rem] sm:h-[5.5rem] gap-1.5"
          : "w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] gap-1"
        }
        bg-surface
        border border-border-subtle
        transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:bg-surface-elevated hover:border-border-strong`}
    >
      <img
        src={item.stackLogo}
        alt=""
        width={isPrimary ? 40 : 32}
        height={isPrimary ? 40 : 32}
        className={`${isPrimary ? "size-9 sm:size-10" : "size-7 sm:size-8"} object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105${item.darkInvert ? " dark:invert" : ""}`}
      />
      <span
        className={`${isPrimary ? "text-[10px]" : "text-[9px]"} font-medium tracking-wide text-text-muted
          opacity-0 translate-y-0.5
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          group-hover:opacity-100 group-hover:translate-y-0`}
      >
        {item.name}
      </span>
    </div>
  );
}

function MarqueeTrack({
  items: trackItems,
  animationClass,
  variant = "primary",
  offset = "",
}: {
  items: StackItem[];
  animationClass: string;
  variant?: "primary" | "supporting";
  offset?: string;
}) {
  const gap = variant === "primary" ? "gap-3 sm:gap-4" : "gap-2.5 sm:gap-3";

  return (
    <div className={`relative overflow-hidden ${offset}`}>
      <div className="absolute inset-y-0 left-0 z-10 w-12 sm:w-20 lg:w-28 bg-gradient-to-r from-canvas via-canvas/80 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 z-10 w-12 sm:w-20 lg:w-28 bg-gradient-to-l from-canvas via-canvas/80 to-transparent pointer-events-none" />
      <div
        className={`flex ${gap} py-2.5 ${animationClass}`}
        aria-hidden="true"
      >
        {trackItems.map((item, i) => (
          <LogoTile key={`${item.name}-${i}`} item={item} variant={variant} />
        ))}
      </div>
    </div>
  );
}

export default function StackCard1() {
  return (
    <div
      className="mt-8 sm:mt-10 space-y-2"
      role="img"
      aria-label="Technology stack logos scrolling in two rows"
    >
      <MarqueeTrack
        items={primaryLoop}
        animationClass="animate-marquee"
        variant="primary"
      />
      <MarqueeTrack
        items={supportingLoop}
        animationClass="animate-marqueeRight"
        variant="supporting"
        offset="ml-8 sm:ml-16"
      />
    </div>
  );
}
