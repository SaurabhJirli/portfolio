import Text from "@/components/fundations/elements/Text";

const stack = [
  {
    title: "Design",
    items: [
      {
        stackLogo: "/images/stacklogos/penpot.svg",
        name: "Penpot",
        about: "Design Tool",
        description:
          "Penpot is the web-based open-source design tool that bridges the gap between designers and developers.",
      },
      {
        stackLogo: "/images/stacklogos/tabler.svg",
        name: "Tabler Icons",
        about: "Icon Library",
        description:
          "Free and open source icons designed to make your website or app attractive, visually consistent and simply beautiful.",
      },
    ],
  },
  {
    title: "Developer Tools",
    items: [
      {
        stackLogo: "/images/stacklogos/arc.svg",
        name: "Arc",
        about: "Browser",
        description:
          "The Arc Browser is a new web browser developed by The Browser Company, aiming to revolutionize the way users interact with the internet.",
      },
      {
        stackLogo: "/images/stacklogos/tailwind.svg",
        name: "Tailwind CSS",
        about: "CSS Framework",
        description:
          "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
      },
      {
        stackLogo: "/images/stacklogos/astro.svg",
        name: "Astrojs",
        about: "Static Site Generator",
        description:
          "Astro powers the world's fastest websites, client-side web apps, dynamic API endpoints, and everything in-between..",
      },
      {
        stackLogo: "/images/stacklogos/vscode.svg",
        name: "VS Code",
        about: "Code Editor",
        description:
          "Visual Studio Code (VS Code) is a source-code editor developed by Microsoft for Windows, Linux, and macOS",
      },
    ],
  },
  {
    title: "Productivity",
    items: [
      {
        stackLogo: "/images/stacklogos/lexingtonthemes.svg",
        name: "Lexingont Themes",
        about: "Website Themes",
        description:
          "Free and premium multipage themes and UI Kits for freelancers, developers, businesses, and personal use. Beautifully crafted with Astro.js, and Tailwind CSS.",
      },
      {
        stackLogo: "/images/stacklogos/notes.svg",
        name: "Apple notes",
        about: "Notes",
        description:
          "Apple Notes is a notetaking app developed by Apple Inc. It is provided on the company's iOS, iPadOS, visionOS, and macOS operating systems.",
      },
    ],
  },
];

export default function StackCard2() {
  return (
    <div className="flex flex-col mt-24 gap-12">
      {stack.map((section) => (
        <div key={section.title} className="flex flex-col gap-6">
          <p className="text-2xl italic tracking-wide dark:text-white text-base-900 font-display">
            {section.title}
          </p>

          <ul role="list" className="grid gap-2 sm:grid-cols-2 lg:col-span-2">
            {section.items.map((item) => (
              <li
                key={item.name}
                className="relative flex flex-col justify-between w-full h-full p-6 overflow-hidden shadow transition-all transform ring-1 min-h-72 rounded-2xl bg-linear-45 from-base-50 dark:from-base-800 duration-300 to-base-100 dark:to-base-950 ring-base-200 dark:ring-base-800 ring-inset group hover:shadow-light dark:hover:shadow-dark"
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
                    width={200}
                    height={200}
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
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
