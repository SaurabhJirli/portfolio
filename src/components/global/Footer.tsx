import Link from "next/link";
import type { Route } from "next";
import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";

const navLinks = [
  { text: "About", href: "/#about" },
  { text: "Work", href: "/#work" },
  { text: "Projects", href: "/projects/" },
  { text: "Stack", href: "/stack" },
  { text: "Contact", href: "/forms/contact" },
];

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/SaurabhJirli",
    icon: (
      <svg viewBox="0 0 256 256" fill="currentColor" className="size-4" aria-hidden="true">
        <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.55a43.82,43.82,0,0,1,.79-33.58,43.86,43.86,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.86,43.86,0,0,1,32.32-20.06A43.82,43.82,0,0,1,192,73.55a8,8,0,0,0,1.11,7.95A41.74,41.74,0,0,1,200,104Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saurabhrjirli/",
    icon: (
      <svg viewBox="0 0 256 256" fill="currentColor" className="size-4" aria-hidden="true">
        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:csaurabhrj2001@gmail.com",
    icon: (
      <svg viewBox="0 0 256 256" fill="currentColor" className="size-4" aria-hidden="true">
        <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919482072443?text=Hi%20Saurabh%2C%20I%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect.",
    icon: (
      <svg viewBox="0 0 256 256" fill="currentColor" className="size-4" aria-hidden="true">
        <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <Wrapper variant="standard" className="py-20 lg:py-28">
        {/* Identity + Contact actions */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Link href="/" className="inline-block">
              <Text
                tag="span"
                variant="displayLG"
                className="italic tracking-tight font-display text-text-primary"
              >
                Saurabh Jirli
              </Text>
            </Link>
            <p className="mt-3 text-sm text-text-secondary max-w-sm leading-relaxed text-pretty">
              Software development engineer building backend services, cloud-based applications, and IoT-related systems, with frontend work when the project needs it.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                aria-label={link.label}
              >
                <span className="transition-transform duration-200 group-hover:-translate-y-0.5">
                  {link.icon}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation + Copyright */}
        <div className="mt-14 pt-6 border-t border-border-subtle flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href as Route}
                className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
              >
                {link.text}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Saurabh Jirli
          </p>
        </div>
      </Wrapper>
    </footer>
  );
}
