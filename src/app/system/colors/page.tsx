import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";

const accent = [
  { label: "Accent 50", className: "bg-accent-50" },
  { label: "Accent 100", className: "bg-accent-100" },
  { label: "Accent 200", className: "bg-accent-200" },
  { label: "Accent 300", className: "bg-accent-300" },
  { label: "Accent 400", className: "bg-accent-400" },
  { label: "Accent 500", className: "bg-accent-500" },
  { label: "Accent 600", className: "bg-accent-600" },
  { label: "Accent 700", className: "bg-accent-700" },
  { label: "Accent 800", className: "bg-accent-800" },
  { label: "Accent 900", className: "bg-accent-900" },
  { label: "Accent 950", className: "bg-accent-950 outline outline-accent-900" },
];

const base = [
  { label: "Base 50", className: "bg-base-50" },
  { label: "Base 100", className: "bg-base-100" },
  { label: "Base 200", className: "bg-base-200" },
  { label: "Base 300", className: "bg-base-300" },
  { label: "Base 400", className: "bg-base-400" },
  { label: "Base 500", className: "bg-base-500" },
  { label: "Base 600", className: "bg-base-600" },
  { label: "Base 700", className: "bg-base-700" },
  { label: "Base 800", className: "bg-base-800" },
  { label: "Base 900", className: "bg-base-900" },
  { label: "Base 950", className: "bg-base-950 outline outline-base-900" },
];

export default function ColorsPage() {
  return (
    <section>
      <Wrapper variant="standard" className="py-24">
        <Text
          tag="h1"
          variant="displayXL"
          className="mt-12 dark:text-white text-base-900 text-balance font-display"
        >
          Colors
        </Text>

        <div>
          <div className="flex flex-col mt-12 gap-2">
            <Text tag="h3" variant="textXS" className="font-medium uppercase dark:text-white text-base-900">
              Accent
            </Text>
            <div className="mt-2 grid grid-cols-4 gap-8">
              {accent.map((item) => (
                <div key={item.label} className="flex flex-col gap-2">
                  <div className={`rounded-full size-12 aspect-square ${item.className}`}></div>
                  <span className="text-xs dark:text-base-400 text-base-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col mt-12 gap-2">
            <Text tag="h3" variant="textXS" className="font-medium uppercase dark:text-white text-base-900">
              Base
            </Text>
            <div className="mt-2 grid grid-cols-4 gap-8">
              {base.map((item) => (
                <div key={item.label} className="flex flex-col gap-2">
                  <div className={`rounded-full size-12 aspect-square ${item.className}`}></div>
                  <span className="text-xs dark:text-base-400 text-base-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
