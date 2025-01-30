import { HeroSlider } from "@/components/hero-slider";

export const Hero = () => {
  return (
    <section className="relative min-h-[748px] pt-24 pb-12 lg:px-12 flex items-center overflow-hidden after:lg:h-[740px] after:lg:w-[740px] after:lg:bg-orange-tertiary after:lg:absolute after:lg:-right-28 after:lg:-top-24 after:lg:rounded-full">
      <HeroSlider />
    </section>
  );
};
