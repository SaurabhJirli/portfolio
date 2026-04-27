import Button from "@/components/fundations/elements/Button";
import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import Plus from "@/components/fundations/icons/Plus";

export default function LinksPage() {
  return (
    <>
      <section>
        <Wrapper variant="standard" className="pt-24 pb-12 lg:pt-32">
          <Text
            tag="h1"
            variant="displayXL"
            className="uppercase font-display text-base-900 dark:text-white text-balance"
          >
            Links
          </Text>
        </Wrapper>
      </section>
      <section>
        <Wrapper variant="standard" className="py-12">
          <div className="flex flex-col gap-12">
            <div className="py-4">
              <Text tag="p" variant="textXS" className="font-medium uppercase text-base-900 dark:text-white">
                Underlined link on hover
              </Text>
              <div className="flex flex-wrap items-center mt-4 gap-4">
                <Text
                  tag="a"
                  variant="textSM"
                  underlined={true}
                  title="link to your page"
                  aria-label="your label"
                  href="/system/overview"
                  className="duration-300 dark:text-white text-base-900"
                >
                  Underlined Link
                </Text>
              </div>
            </div>

            <div className="flex flex-col gap-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Text tag="p" variant="textXS" className="font-medium uppercase text-base-900 dark:text-white">
                    Default text
                  </Text>
                  <div className="flex flex-col mt-2 gap-4">
                    <Button isLink href="#_" size="xxs" variant="default">Default XXS</Button>
                    <Button isLink href="#_" size="xs" variant="default">Default XS</Button>
                    <Button isLink href="#_" size="sm" variant="default">Default SM</Button>
                    <Button isLink href="#_" size="base" variant="default">Default Base</Button>
                    <Button isLink href="#_" size="md" variant="default">Default MD</Button>
                    <Button isLink href="#_" size="lg" variant="default">Default LG</Button>
                    <Button isLink href="#_" size="xl" variant="default">Default XL</Button>
                  </div>
                </div>
                <div>
                  <Text tag="p" variant="textXS" className="font-medium uppercase text-base-900 dark:text-white">
                    Icon
                  </Text>
                  <div className="flex flex-col mt-2 gap-4">
                    <Button isLink href="#_" size="xxs" variant="default" iconOnly icon={<Plus size="sm" />} />
                    <Button isLink href="#_" size="xs" variant="default" iconOnly icon={<Plus size="sm" />} />
                    <Button isLink href="#_" size="sm" variant="default" iconOnly icon={<Plus size="base" />} />
                    <Button isLink href="#_" size="base" variant="default" iconOnly icon={<Plus size="base" />} />
                    <Button isLink href="#_" size="md" variant="default" iconOnly icon={<Plus size="lg" />} />
                    <Button isLink href="#_" size="lg" variant="default" iconOnly icon={<Plus size="xl" />} />
                    <Button isLink href="#_" size="xl" variant="default" iconOnly icon={<Plus size="xl" />} />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Text tag="p" variant="textXS" className="font-medium uppercase text-base-900 dark:text-white">
                    Accent text
                  </Text>
                  <div className="flex flex-col mt-2 gap-4">
                    <Button isLink href="#_" size="xxs" variant="accent">Accent XXS</Button>
                    <Button isLink href="#_" size="xs" variant="accent">Accent XS</Button>
                    <Button isLink href="#_" size="sm" variant="accent">Accent SM</Button>
                    <Button isLink href="#_" size="base" variant="accent">Accent Base</Button>
                    <Button isLink href="#_" size="md" variant="accent">Accent MD</Button>
                    <Button isLink href="#_" size="lg" variant="accent">Accent LG</Button>
                    <Button isLink href="#_" size="xl" variant="accent">Accent XL</Button>
                  </div>
                </div>
                <div>
                  <Text tag="p" variant="textXS" className="font-medium uppercase text-base-900 dark:text-white">
                    Icon
                  </Text>
                  <div className="flex flex-col mt-2 gap-4">
                    <Button isLink href="#_" size="xxs" variant="accent" iconOnly icon={<Plus size="sm" />} />
                    <Button isLink href="#_" size="xs" variant="accent" iconOnly icon={<Plus size="sm" />} />
                    <Button isLink href="#_" size="sm" variant="accent" iconOnly icon={<Plus size="base" />} />
                    <Button isLink href="#_" size="base" variant="accent" iconOnly icon={<Plus size="base" />} />
                    <Button isLink href="#_" size="md" variant="accent" iconOnly icon={<Plus size="lg" />} />
                    <Button isLink href="#_" size="lg" variant="accent" iconOnly icon={<Plus size="xl" />} />
                    <Button isLink href="#_" size="xl" variant="accent" iconOnly icon={<Plus size="xl" />} />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Text tag="p" variant="textXS" className="font-medium uppercase text-base-900 dark:text-white">
                    Muted text
                  </Text>
                  <div className="flex flex-col mt-2 gap-4">
                    <Button isLink href="#_" size="xxs" variant="muted">Muted XXS</Button>
                    <Button isLink href="#_" size="xs" variant="muted">Muted XS</Button>
                    <Button isLink href="#_" size="sm" variant="muted">Muted SM</Button>
                    <Button isLink href="#_" size="base" variant="muted">Muted Base</Button>
                    <Button isLink href="#_" size="md" variant="muted">Muted MD</Button>
                    <Button isLink href="#_" size="lg" variant="muted">Muted LG</Button>
                    <Button isLink href="#_" size="xl" variant="muted">Muted XL</Button>
                  </div>
                </div>
                <div>
                  <Text tag="p" variant="textXS" className="font-medium uppercase text-base-900 dark:text-white">
                    Icon
                  </Text>
                  <div className="flex flex-col mt-2 gap-4">
                    <Button isLink href="#_" size="xxs" variant="muted" iconOnly icon={<Plus size="sm" />} />
                    <Button size="xs" variant="muted" iconOnly icon={<Plus size="sm" />} />
                    <Button size="sm" variant="muted" iconOnly icon={<Plus size="base" />} />
                    <Button isLink href="#_" size="base" variant="muted" iconOnly icon={<Plus size="base" />} />
                    <Button size="md" variant="muted" iconOnly icon={<Plus size="lg" />} />
                    <Button size="lg" variant="muted" iconOnly icon={<Plus size="xl" />} />
                    <Button size="xl" variant="muted" iconOnly icon={<Plus size="xl" />} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
