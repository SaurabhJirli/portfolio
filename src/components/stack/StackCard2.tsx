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
      { stackLogo: "/images/stacklogos/java.svg", name: "Java", about: "Primary Language" },
      { stackLogo: "/images/stacklogos/typescript.svg", name: "TypeScript", about: "Frontend & Backend" },
      { stackLogo: "/images/stacklogos/javascript.svg", name: "JavaScript", about: "Web Fundamentals" },
    ],
  },
  {
    title: "Backend & Frameworks",
    items: [
      { stackLogo: "/images/stacklogos/springboot.svg", name: "Spring Boot", about: "Java Framework" },
      { stackLogo: "/images/stacklogos/nodejs.svg", name: "Node.js", about: "Runtime" },
      { stackLogo: "/images/stacklogos/nextjs.svg", name: "Next.js", about: "React Framework", darkInvert: true },
      { stackLogo: "/images/stacklogos/fastify.svg", name: "Fastify", about: "Node.js Framework", darkInvert: true },
      { stackLogo: "/images/stacklogos/graphql.svg", name: "GraphQL", about: "API Query Language" },
    ],
  },
  {
    title: "Databases & Data",
    items: [
      { stackLogo: "/images/stacklogos/postgresql.svg", name: "PostgreSQL", about: "SQL Database" },
      { stackLogo: "/images/stacklogos/mongodb.svg", name: "MongoDB", about: "NoSQL Database" },
      { stackLogo: "/images/stacklogos/influxdb.svg", name: "InfluxDB", about: "Time-Series DB", darkInvert: true },
      { stackLogo: "/images/stacklogos/redis.svg", name: "Redis", about: "In-Memory Store" },
    ],
  },
  {
    title: "Infrastructure & Messaging",
    items: [
      { stackLogo: "/images/stacklogos/docker.svg", name: "Docker", about: "Containers" },
      { stackLogo: "/images/stacklogos/kubernetes.svg", name: "Kubernetes", about: "Orchestration" },
      { stackLogo: "/images/stacklogos/aws.svg", name: "AWS", about: "Cloud Platform" },
      { stackLogo: "/images/stacklogos/azure.svg", name: "Azure", about: "Cloud Platform" },
      { stackLogo: "/images/stacklogos/apachekafka.svg", name: "Apache Kafka", about: "Event Streaming", darkInvert: true },
    ],
  },
  {
    title: "Developer Tools",
    items: [
      { stackLogo: "/images/stacklogos/postman.svg", name: "Postman", about: "API Testing" },
      { stackLogo: "/images/stacklogos/grafana.svg", name: "Grafana", about: "Monitoring" },
    ],
  },
];

export default function StackCard2() {
  return (
    <div className="flex flex-col mt-16 gap-16">
      {stack.map((section) => (
        <div key={section.title}>
          <p className="text-xl italic tracking-tight text-base-900 dark:text-white font-display">
            {section.title}
          </p>
          <div className="grid grid-cols-2 gap-3 mt-6 sm:grid-cols-3 lg:grid-cols-4">
            {section.items.map((item) => (
              <div
                key={item.name}
                className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-950 transition-all duration-300 ease-out hover:border-transparent hover:shadow-accent dark:hover:shadow-accent"
              >
                <img
                  src={item.stackLogo}
                  alt={item.name}
                  width={48}
                  height={48}
                  className={`size-10 rounded-lg dark:border dark:border-base-700 transition-transform duration-300 group-hover:scale-105${item.darkInvert ? " dark:invert" : ""}`}
                />
                <div className="text-center">
                  <Text
                    tag="h3"
                    variant="textSM"
                    className="font-medium text-base-900 dark:text-white"
                  >
                    {item.name}
                  </Text>
                  <Text
                    tag="p"
                    variant="textXS"
                    className="text-base-500 dark:text-base-500"
                  >
                    {item.about}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
