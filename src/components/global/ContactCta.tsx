import Button from "@/components/fundations/elements/Button";
import Text from "@/components/fundations/elements/Text";

export default function ContactCta() {
  return (
    <div
      data-reveal
      className="rounded-2xl border border-border-subtle bg-surface p-8 sm:p-10 lg:p-12"
    >
      <Text
        tag="h3"
        variant="displaySM"
        className="font-display italic tracking-tight text-text-primary text-wrap-balance"
      >
        Have something worth building?
      </Text>

      <Text
        tag="p"
        variant="textBase"
        className="mt-4 text-text-secondary leading-relaxed max-w-xl"
      >
        I&apos;m open to full-stack work, backend-heavy features, dashboards,
        and product ideas where clean implementation matters.
      </Text>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <Button
          isLink
          size="base"
          variant="default"
          href="/forms/contact"
          title="Send Saurabh a message"
        >
          Send a message
        </Button>
        <Button
          isLink
          size="base"
          variant="muted"
          href="https://www.linkedin.com/in/saurabhrjirli/"
          title="Connect on LinkedIn"
        >
          Connect on LinkedIn
        </Button>
      </div>
    </div>
  );
}
