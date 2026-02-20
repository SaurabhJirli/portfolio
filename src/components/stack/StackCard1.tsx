import Text from "@/components/fundations/elements/Text";

const stack = [
  {
    items: [
      {
        rotation: "rotate-6",
        stackLogo: "/images/stacklogos/penpot.svg",
        name: "Penpot",
        about: "Design Tool",
        description:
          "Penpot is the web-based open-source design tool that bridges the gap between designers and developers.",
      },
      {
        rotation: "-rotate-12",
        stackLogo: "/images/stacklogos/tabler.svg",
        name: "Tabler Icons",
        about: "Icon Library",
        description:
          "Free and open source icons designed to make your website or app attractive, visually consistent and simply beautiful.",
      },
      {
        rotation: "rotate-6",
        stackLogo: "/images/stacklogos/arc.svg",
        name: "Arc",
        about: "Browser",
        description:
          "The Arc Browser is a new web browser developed by The Browser Company, aiming to revolutionize the way users interact with the internet.",
      },
      {
        rotation: "-rotate-12",
        stackLogo: "/images/stacklogos/tailwind.svg",
        name: "Tailwind CSS",
        about: "CSS Framework",
        description:
          "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
      },
      {
        rotation: "rotate-6",
        stackLogo: "/images/stacklogos/astro.svg",
        name: "Astrojs",
        about: "Static Site Generator",
        description:
          "Astro powers the world's fastest websites, client-side web apps, dynamic API endpoints, and everything in-between.",
      },
      {
        rotation: "-rotate-12",
        stackLogo: "/images/stacklogos/vscode.svg",
        name: "VS Code",
        about: "Code Editor",
        description:
          "Visual Studio Code (VS Code) is a source-code editor developed by Microsoft for Windows, Linux, and macOS.",
      },
      {
        rotation: "-rotate-12",
        stackLogo: "/images/stacklogos/vscode.svg",
        name: "VS Code",
        about: "Code Editor",
        description:
          "Visual Studio Code (VS Code) is a source-code editor developed by Microsoft for Windows, Linux, and macOS.",
      },
    ],
  },
];

export default function StackCard1() {
  return (
    <div className="relative mt-6 overflow-hidden">
      <div className="justify-between w-full grid">
        <div className="absolute inset-0 left-0 z-10 from-white dark:from-base-950 via-transparent w-44 bg-gradient-to-r"></div>
        <div className="absolute inset-0 left-0 z-10 ml-auto from-white dark:from-base-950 via-transparent w-44 bg-gradient-to-l"></div>
      </div>
      {stack.map((section, index) => (
        <article
          key={index}
          role="list"
          className="flex py-12 gap-2 dark:border-base-700 animate-marquee"
        >
          {section.items.map((item, itemIndex) => (
            <div key={itemIndex} role="listitem" className="w-full min-h-72 min-w-72">
              <div
                className={`flex flex-col ring-1 shadow justify-between p-6 rounded-2xl relative overflow-hidden h-full bg-linear-45 from-base-50 dark:from-base-800 duration-300 to-base-100 dark:to-base-950 ring-base-200 dark:ring-base-800 ring-inset group dark:hover:shadow-dark transform transition-all ${item.rotation}`}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <div>
                    <Text
                      tag="h3"
                      variant="textBase"
                      className="font-medium dark:text-white text-base-900"
                    >
                      {item.name}
                    </Text>
                    <Text
                      tag="p"
                      variant="textSM"
                      className="dark:text-base-400 text-base-600"
                    >
                      {item.about}
                    </Text>
                  </div>
                  <img
                    src={item.stackLogo}
                    alt={item.name}
                    className="duration-300 size-8 rounded-xl dark:border dark:border-base-700 group-hover:-rotate-45"
                  />
                </div>
                <Text
                  tag="p"
                  variant="textBase"
                  className="mt-2 text-base dark:text-base-400 text-base-600"
                >
                  {item.description}
                </Text>
              </div>
            </div>
          ))}
        </article>
      ))}
    </div>
  );
}
