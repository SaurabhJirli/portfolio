type StackItem = {
  stackLogo: string;
  name: string;
  darkInvert?: boolean;
};

const items: StackItem[] = [
  { stackLogo: "/images/stacklogos/java.svg", name: "Java" },
  { stackLogo: "/images/stacklogos/springboot.svg", name: "Spring Boot" },
  { stackLogo: "/images/stacklogos/postgresql.svg", name: "PostgreSQL" },
  { stackLogo: "/images/stacklogos/docker.svg", name: "Docker" },
  { stackLogo: "/images/stacklogos/apachekafka.svg", name: "Kafka", darkInvert: true },
  { stackLogo: "/images/stacklogos/kubernetes.svg", name: "Kubernetes" },
  { stackLogo: "/images/stacklogos/aws.svg", name: "AWS" },
  { stackLogo: "/images/stacklogos/azure.svg", name: "Azure" },
  { stackLogo: "/images/stacklogos/mongodb.svg", name: "MongoDB" },
  { stackLogo: "/images/stacklogos/nextjs.svg", name: "Next.js", darkInvert: true },
  { stackLogo: "/images/stacklogos/typescript.svg", name: "TypeScript" },
  { stackLogo: "/images/stacklogos/javascript.svg", name: "JavaScript" },
  { stackLogo: "/images/stacklogos/nodejs.svg", name: "Node.js" },
  { stackLogo: "/images/stacklogos/postman.svg", name: "Postman" },
  { stackLogo: "/images/stacklogos/influxdb.svg", name: "InfluxDB", darkInvert: true },
  { stackLogo: "/images/stacklogos/fastify.svg", name: "Fastify", darkInvert: true },
  { stackLogo: "/images/stacklogos/grafana.svg", name: "Grafana" },
  { stackLogo: "/images/stacklogos/graphql.svg", name: "GraphQL" },
  { stackLogo: "/images/stacklogos/redis.svg", name: "Redis" },
];

const row1 = [...items];
const row2 = [
  items[8], items[15], items[3], items[10], items[6], items[17],
  items[1], items[14], items[12], items[7], items[16], items[4],
  items[11], items[9], items[2], items[18], items[13], items[0], items[5],
];

const row1Loop = [...row1, ...row1];
const row2Loop = [...row2, ...row2];

function LogoPill({
  item,
  index,
  variant = "primary",
}: {
  item: StackItem;
  index: number;
  variant?: "primary" | "secondary";
}) {
  const isPrimary = variant === "primary";
  return (
    <div
      title={item.name}
      className={`group shrink-0 flex items-center justify-center rounded-2xl border transition-all duration-300 ease-out hover:shadow-accent hover:scale-110 ${
        isPrimary
          ? "size-20 border-base-200/40 dark:border-base-700/25 hover:bg-base-100/80 dark:hover:bg-base-800/50 stack-wave-primary"
          : "size-16 border-base-200/30 dark:border-base-700/20 opacity-60 hover:opacity-100 hover:bg-base-100/60 dark:hover:bg-base-800/40 stack-wave-secondary"
      }`}
      style={{ animationDelay: `${index * -0.5}s` }}
    >
      <img
        src={item.stackLogo}
        alt={item.name}
        width={isPrimary ? 48 : 36}
        height={isPrimary ? 48 : 36}
        className={`${isPrimary ? "size-12" : "size-9"} rounded-md dark:border dark:border-base-700 transition-transform duration-300${item.darkInvert ? " dark:invert" : ""}`}
      />
    </div>
  );
}

export default function StackCard1() {
  return (
    <div className="mt-10 space-y-3">
      {/* Row 1 — primary, scrolls left */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white dark:from-base-950 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white dark:from-base-950 to-transparent pointer-events-none" />
        <div className="flex gap-6 py-6 animate-marquee">
          {row1Loop.map((item, i) => (
            <LogoPill key={`r1-${item.name}-${i}`} item={item} index={i} variant="primary" />
          ))}
        </div>
      </div>
      {/* Row 2 — secondary, scrolls right, offset */}
      <div className="relative overflow-hidden ml-10">
        <div className="absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white dark:from-base-950 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white dark:from-base-950 to-transparent pointer-events-none" />
        <div className="flex gap-5 py-4 animate-marqueeRight">
          {row2Loop.map((item, i) => (
            <LogoPill key={`r2-${item.name}-${i}`} item={item} index={i} variant="secondary" />
          ))}
        </div>
      </div>
    </div>
  );
}
