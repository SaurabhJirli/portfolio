import Text from "@/components/fundations/elements/Text";
import Button from "@/components/fundations/elements/Button";
import Wrapper from "@/components/fundations/containers/Wrapper";
import ChevronRight from "@/components/fundations/icons/ChevronRight";
import ContactCta from "@/components/global/ContactCta";
import LogoCloud from "@/components/assets/LogoCloud";

const services = [
  {
    title: "Backend Development",
    price: "Available",
    items: [
      {
        description:
          "Robust backend systems and APIs built with industry-standard tools and best practices.",
        includes: [
          "RESTful API Design",
          "Spring Boot Microservices",
          "Database Design (SQL & NoSQL)",
          "Event-Driven Architecture",
          "Apache Kafka Integration",
          "Docker & Kubernetes",
          "IoT Data Pipelines (MQTT)",
          "Performance Optimization",
          "Security Best Practices",
          "Technical Documentation",
        ],
      },
    ],
  },
  {
    title: "Full-Stack Development",
    price: "Available",
    items: [
      {
        description:
          "End-to-end application development from backend APIs to polished front-end interfaces.",
        includes: [
          "Everything in Backend",
          "Next.js & React Applications",
          "TypeScript & JavaScript",
          "Server-Side Rendering",
          "PostgreSQL & MongoDB",
          "InfluxDB (Time-Series)",
          "CI/CD Pipeline Setup",
          "Cloud Deployment",
          "Responsive UI Development",
          "Ongoing Support & Maintenance",
        ],
      },
    ],
  },
];

export default function StudioPage() {
  return (
    <section>
      <Wrapper variant="standard" className="py-20 lg:py-32">
        <div className="text-center">
          <Text
            tag="h1"
            variant="displayXL"
            className="dark:text-white text-base-900 text-balance"
          >
            Software Development Engineer
            <span className="italic font-display dark:text-base-400 text-base-600">
              {" "}for hire
            </span>
          </Text>

          <Text
            tag="p"
            variant="textLG"
            className="mt-4 dark:text-base-400 text-base-600"
          >
            Backend systems, distributed architectures, and full-stack applications — built to scale.
          </Text>

          <LogoCloud />
        </div>
        <div className="flex flex-col mt-12 gap-4">
          {services.map((section) => (
            <div
              key={section.title}
              className="relative flex flex-col justify-between w-full h-full p-6 sm:p-8 overflow-hidden min-h-72 rounded-2xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-950 transition-all duration-300 ease-out hover:border-transparent hover:shadow-accent dark:hover:shadow-accent"
            >
              <div className="flex items-center justify-between font-display italic tracking-tight dark:text-white text-base-900">
                <Text tag="h3" variant="displaySM" className="text-balance">
                  {section.title}
                </Text>
                <Text tag="p" variant="textXL" className="text-balance">
                  {section.price}
                </Text>
              </div>
              <div role="list" className="mt-6">
                {section.items.map((item, index) => (
                  <div key={index}>
                    <Text
                      tag="p"
                      variant="textXL"
                      className="dark:text-base-400 text-base-600 text-balance"
                    >
                      {item.description}
                    </Text>
                    <ul
                      className="mt-6 text-sm list-inside grid gap-y-2 md:grid-cols-2 gap-x-6 dark:text-base-400 text-base-600"
                      role="list"
                    >
                      {item.includes.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <ChevronRight className="size-4" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex mt-12 col-span-full">
                <Button
                  isLink
                  size="sm"
                  variant="default"
                  href="/forms/contact"
                  title="Get started"
                >
                  Get started
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <ContactCta />
        </div>
      </Wrapper>
    </section>
  );
}
