import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";

export default function TypographyPage() {
  return (
    <Wrapper variant="standard" className="py-24">
      <Text
        tag="h1"
        variant="displayXL"
        className="mt-12 dark:text-white text-base-900 text-balance font-display"
      >
        Typography
      </Text>
      <Text
        tag="h3"
        variant="textXS"
        className="mt-4 font-medium uppercase dark:text-white text-base-900"
      >
        Font in use: Instrument Serif + Geist + Geist Mono
      </Text>

      <div className="flex flex-col mt-12 font-medium dark:text-white text-base-900">
        <div className="py-4">
          <Text tag="p" variant="textXS">Text XS</Text>
        </div>
        <div className="py-4">
          <Text tag="p" variant="textSM">Text SM</Text>
        </div>
        <div className="py-4">
          <Text tag="p" variant="textBase">Text Base</Text>
        </div>
        <div className="py-4">
          <Text tag="p" variant="textLG">Text LG</Text>
        </div>
        <div className="py-4">
          <Text tag="p" variant="textXL">Text XL</Text>
        </div>
        <div className="py-4">
          <Text className="font-display" tag="p" variant="displayXS">
            Display XS
          </Text>
        </div>
        <div className="py-4">
          <Text className="font-display" tag="p" variant="displaySM">
            Display SM
          </Text>
        </div>
        <div className="py-4">
          <Text className="font-display" tag="p" variant="displayMD">
            Display MD
          </Text>
        </div>
        <div className="py-4">
          <Text className="font-display" tag="p" variant="displayLG">
            Display LG
          </Text>
        </div>
        <div className="py-4">
          <Text className="font-display" tag="p" variant="displayXL">
            Display XLnfo
          </Text>
        </div>
        <div className="py-4">
          <Text className="font-display" tag="p" variant="display2XL">
            Display 2XL
          </Text>
        </div>
        <div className="py-4">
          <Text className="font-display" tag="p" variant="display3XL">
            Display 3XL
          </Text>
        </div>
        <div className="py-4">
          <Text className="font-display" tag="p" variant="display4XL">
            Display 4XL
          </Text>
        </div>
        <div className="py-4">
          <Text className="font-display" tag="p" variant="display5XL">
            Display 5XL
          </Text>
        </div>
        <div className="py-4">
          <Text className="font-display" tag="p" variant="display6XL">
            Display 6XL
          </Text>
        </div>
      </div>
    </Wrapper>
  );
}
