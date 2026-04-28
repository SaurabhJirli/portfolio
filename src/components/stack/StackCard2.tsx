import Text from "@/components/fundations/elements/Text";

type StackEntry = {
  stackLogo: string;
  name: string;
  about: string;
  darkInvert?: boolean;
};

type StackSection = {
  title: string;
  items: StackEntry[];
};

const stack: StackSection[] = [
  {
    title: "Languages",
    items: [
      { stackLogo: "/images/stacklogos/java.svg", name: "Java", about: "Primary language" },
      { stackLogo: "/images/stacklogos/typescript.svg", name: "TypeScript", about: "Frontend and backend" },
      { stackLogo: "/images/stacklogos/javascript.svg", name: "JavaScript", about: "Web fundamentals" },
    ],
  },
  {
    title: "Backend",
    items: [
      { stackLogo: "/images/stacklogos/springboot.svg", name: "Spring Boot", about: "Java framework" },
      { stackLogo: "/images/stacklogos/nodejs.svg", name: "Node.js", about: "Runtime" },
      { stackLogo: "/images/stacklogos/nextjs.svg", name: "Next.js", about: "React framework", darkInvert: true },
      { stackLogo: "/images/stacklogos/fastify.svg", name: "Fastify", about: "Node.js framework", darkInvert: true },
      { stackLogo: "/images/stacklogos/graphql.svg", name: "GraphQL", about: "API query language" },
    ],
  },
  {
    title: "Data",
    items: [
      { stackLogo: "/images/stacklogos/postgresql.svg", name: "PostgreSQL", about: "SQL database" },
      { stackLogo: "/images/stacklogos/mongodb.svg", name: "MongoDB", about: "NoSQL database" },
      { stackLogo: "/images/stacklogos/redis.svg", name: "Redis", about: "In-memory store" },
      { stackLogo: "/images/stacklogos/influxdb.svg", name: "InfluxDB", about: "Time-series DB", darkInvert: true },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { stackLogo: "/images/stacklogos/docker.svg", name: "Docker", about: "Containers" },
      { stackLogo: "/images/stacklogos/kubernetes.svg", name: "Kubernetes", about: "Orchestration" },
      { stackLogo: "/images/stacklogos/aws.svg", name: "AWS", about: "Cloud platform" },
      { stackLogo: "/images/stacklogos/azure.svg", name: "Azure", about: "Cloud platform" },
      { stackLogo: "/images/stacklogos/apachekafka.svg", name: "Kafka", about: "Event streaming", darkInvert: true },
    ],
  },
  {
    title: "Observability",
    items: [
      { stackLogo: "/images/stacklogos/grafana.svg", name: "Grafana", about: "Monitoring dashboards" },
      { stackLogo: "/images/stacklogos/postman.svg", name: "Postman", about: "API testing" },
    ],
  },
];

function StackGridItem({ item }: { item: StackEntry }) {
  return (
    <div className="group flex items-center gap-4 p-4 rounded-xl border border-base-200/50 dark:border-base-800/30 bg-white/40 dark:bg-base-900/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white hover:border-base-200/80 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:hover:bg-base-900/40 dark:hover:border-base-700/40 dark:hover:shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
      <div className="shrink-0 flex items-center justify-center size-11 sm:size-12 rounded-lg bg-base-100/60 dark:bg-base-800/40 border border-base-200/30 dark:border-base-700/20">
        <img
          src={item.stackLogo}
          alt={item.name}
          width={36}
          height={36}
          className={`size-6 sm:size-7 object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105${item.darkInvert ? " dark:invert" : ""}`}
        />
      </div>
      <div className="min-w-0">
        <Text
          tag="h3"
          variant="textSM"
          className="font-medium text-base-900 dark:text-white tracking-tight leading-tight"
        >
          {item.name}
        </Text>
        <Text
          tag="p"
          variant="textXS"
          className="text-base-400 dark:text-base-500 mt-0.5 leading-tight"
        >
          {item.about}
        </Text>
      </div>
    </div>
  );
}

export default function StackCard2() {
  return (
    <div className="flex flex-col mt-16 sm:mt-20 gap-14 sm:gap-16">
      {stack.map((section) => (
        <div key={section.title}>
          <div className="flex items-center gap-4 mb-6">
            <p className="text-sm italic tracking-tight text-base-900 dark:text-white font-display">
              {section.title}
            </p>
            <div className="flex-1 h-px bg-base-200/50 dark:bg-base-800/30" />
          </div>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {section.items.map((item) => (
              <StackGridItem key={item.name} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
