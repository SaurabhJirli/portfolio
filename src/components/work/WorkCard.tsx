import Text from "@/components/fundations/elements/Text";
import type { ContentEntry } from "@/lib/content";

type WorkData = {
  title?: string;
  subtitle?: string;
  pubDate?: string;
};

export default function WorkCard({ post }: { post: ContentEntry<WorkData> }) {
  const title = post.data.title ?? "";
  const subtitle = post.data.subtitle ?? "";
  const pubDate = post.data.pubDate
    ? new Date(post.data.pubDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      })
    : "";

  return (
    <div
      className="flex flex-col justify-between p-6 sm:p-8 border border-border-subtle rounded-2xl bg-surface"
    >
      <div>
        <Text
          tag="p"
          variant="textXS"
          className="font-mono text-text-muted"
        >
          {pubDate}
        </Text>
        <Text
          tag="h3"
          variant="textLG"
          className="mt-2 font-medium tracking-tight text-text-primary"
        >
          {title}
        </Text>
        <Text
          tag="p"
          variant="textBase"
          className="mt-3 text-text-secondary leading-relaxed"
        >
          {subtitle}
        </Text>
      </div>
    </div>
  );
}
