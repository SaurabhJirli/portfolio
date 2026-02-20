import Text from "@/components/fundations/elements/Text";
import Button from "@/components/fundations/elements/Button";
import Wrapper from "@/components/fundations/containers/Wrapper";
import ChevronRight from "@/components/fundations/icons/ChevronRight";
import ContactCta from "@/components/global/ContactCta";
import LogoCloud from "@/components/assets/LogoCloud";

const services = [
  {
    title: "Design",
    price: "5,455",
    items: [
      {
        description:
          "Ideal for emerging businesses requiring continuous design assistance.",
        includes: [
          "Brand Style Guide",
          "Component Library",
          "UI Patterns",
          "Interactive Prototypes",
          "Accessibility Standards",
          "Responsive Designs",
          "Design Tokens",
          "User Flow Diagrams",
          "Documentation & Guidelines",
          "Version Control",
        ],
      },
    ],
  },
  {
    title: "Design and  Development",
    price: "8,455",
    items: [
      {
        description:
          "Ideal for startups requiring design and front-end development services.",
        includes: [
          "Same as in design",
          "End-to-End Development",
          "Database Design & Integration",
          "API Development & Integration",
          "Front-End & Back-End",
          "Security Best Practices",
          "Scalable Architecture",
          "Performance Optimization",
          "Cloud Deployment & CI/CD",
          "Technical Documentation",
          "Ongoing Support & Maintenance",
        ],
      },
    ],
  },
];

export default function StudioPage() {
  return (
    <section>
      <Wrapper className="px-8 py-24 mx-auto">
        <div className="text-center">
          <Text
            tag="h1"
            variant="displayXL"
            className="dark:text-white text-base-900 text-balance"
          >
            Software Engineer
            <span className="italic tracking-wide font-display dark:text-base-400 text-base-600">
              for hire
            </span>
          </Text>

          <Text
            tag="p"
            variant="textLG"
            className="mt-4 dark:text-base-400 text-base-600"
          >
            Design, development, and delivery - from first commit to production.
          </Text>

          <LogoCloud />
        </div>
        <div className="flex flex-col mt-6 gap-2">
          {services.map((section) => (
            <div
              key={section.title}
              className="relative flex flex-col justify-between w-full h-full p-6 overflow-hidden shadow transition-all transform ring-1 min-h-72 rounded-2xl bg-linear-45 from-base-50 dark:from-base-800 duration-300 to-base-100 dark:to-base-950 ring-base-200 dark:ring-base-800 ring-inset group hover:shadow-light dark:hover:shadow-dark"
            >
              <div className="flex items-center justify-between italic font-medium tracking-wide dark:text-white text-base-900 font-display">
                <Text tag="h3" variant="displaySM" className="text-balance">
                  {section.title}
                </Text>
                <Text tag="p" variant="textXL" className="text-balance">
                  ${section.price}/m
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
                          <span className="duration-300 hover:translate-x-2">
                            {feature}
                          </span>
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
                  title="your title"
                  aria-label="your label"
                  className="rounded-full bg-base-50 px-4 flex gap-1 justify-betweenZ items-center py-2.5 h-9 text-sm font-semibold text-base-900 hover:bg-base-200 duration-300 ring-1 ring-inset ring-base-200"
                >
                  Get started
                </Button>
              </div>
            </div>
          ))}
        </div>
        <ContactCta />
      </Wrapper>
    </section>
  );
}
