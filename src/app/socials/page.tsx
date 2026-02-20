import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";

const sections = [
  {
    title: "Design",
    items: [
      {
        stackLogo: "/images/sociallogos/figma.svg",
        name: "Figma Community",
        username: "@mikeandreuzza",
        url: "#_",
      },
      {
        stackLogo: "/images/sociallogos/dribbble.svg",
        name: "Dribbble",
        username: "@mikeandreuzza",
        url: "#_",
      },
      {
        stackLogo: "/images/sociallogos/behance.svg",
        name: "Behance",
        username: "@michael_andreuzza",
        url: "#_",
      },
    ],
  },
  {
    title: "Development",
    items: [
      {
        stackLogo: "/images/sociallogos/github.svg",
        name: "GitHub",
        username: "@michael-andreuzza",
        url: "#_",
      },
      {
        stackLogo: "/images/sociallogos/codepen.svg",
        name: "Codepen",
        username: "@michael-andreuzza",
        url: "#_",
      },
      {
        stackLogo: "/images/sociallogos/stackoverflow.svg",
        name: "Stack Overflow",
        username: "@wicked-labs",
        url: "#_",
      },
    ],
  },
  {
    title: "Social Media",
    items: [
      {
        stackLogo: "/images/sociallogos/linkedin.svg",
        name: "Linkedin",
        username: "@mike-andreuzza",
        url: "#_",
      },
      {
        stackLogo: "/images/sociallogos/x.svg",
        name: "X",
        username: "@Mike_andreuzza",
        url: "#_",
      },
    ],
  },
  {
    title: "Other",
    items: [
      {
        stackLogo: "/images/sociallogos/spotify.svg",
        name: "Spotify",
        username: "@michael-andreuzza",
        url: "#_",
      },
      {
        stackLogo: "/images/sociallogos/medium.svg",
        name: "Medium",
        username: "@michaelandreuzzavega",
        url: "#_",
      },
      {
        stackLogo: "/images/sociallogos/discord.svg",
        name: "Discord",
        username: "@michaandreuzza",
        url: "#_",
      },
    ],
  },
];

export default function SocialsPage() {
  return (
    <section>
      <Wrapper variant="standard" className="py-24">
        <div className="text-center">
          <Text
            tag="h1"
            variant="displayXL"
            className="text-balance dark:text-white text-base-900"
          >
            I am all around
            <span className="italic tracking-wide font-display dark:text-base-400 text-base-600">
              find me on...
            </span>
          </Text>
          <Text
            tag="p"
            variant="textLG"
            className="mt-4 dark:text-base-400 text-base-600 text-balance"
          >
            I am easy to find on the internet, choose from a variety of social
            media platforms.
          </Text>
        </div>
        <div className="mt-6 space-y-12">
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col items-start gap-6">
              <Text
                tag="h3"
                variant="displaySM"
                className="italic tracking-wide font-display dark:text-white text-base-900"
              >
                {section.title}
              </Text>
              <div className="flex flex-col w-full gap-2">
                {section.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    title={item.name}
                    className="relative flex flex-col w-full h-full p-6 overflow-hidden shadow ring-1 rounded-2xl dark:ring-base-800 bg-linear-45 from-base-50 dark:from-base-800 duration-300 to-base-100 dark:to-base-950 ring-base-200 ring-inset group hover:shadow-light dark:hover:shadow-dark transform transition-all"
                  >
                    <div className="flex items-center gap-4 group dark:text-base-400 text-base-600">
                      <img
                        src={item.stackLogo}
                        alt={item.name}
                        width={200}
                        height={200}
                        className="rounded-full size-12 group-hover:-rotate-45 duration-300"
                      />
                      <div className="text-sm leading-6">
                        <Text
                          tag="h3"
                          variant="textSM"
                          className="font-medium uppercase dark:text-white text-base-900"
                        >
                          {item.name}
                        </Text>
                        <Text
                          tag="p"
                          variant="textBase"
                          className="dark:text-base-400 text-base-600"
                        >
                          {item.username}
                        </Text>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
