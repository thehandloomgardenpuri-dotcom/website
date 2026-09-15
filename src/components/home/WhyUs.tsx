import Image from "next/image";
import { BRAND_IMAGES } from "@/lib/site";
import { editorial } from "@/data/editorial";
import Reveal from "../motion/Reveal";
import SplitReveal from "../motion/SplitReveal";

/** Bento of the brand promises around the showroom photo (four items, four cells). */
export default function WhyUs() {
  const loom = editorial("loom-detail");
  return (
    <section aria-labelledby="why-title" className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
      <SplitReveal id="why-title" className="display-lg max-w-[18ch]">
        Why Puri shops at <em>Handloom Garden</em>
      </SplitReveal>

      <Reveal stagger={0.08} className="mt-14 grid gap-4 md:grid-flow-dense md:grid-cols-6 lg:gap-5">
        <figure className="relative min-h-[420px] overflow-hidden bg-bg-2 md:col-span-3 md:row-span-2">
          <Image
            src={BRAND_IMAGES.showroom}
            alt="Handloom Garden A/C Mega Showroom building at Swargadwar Square, Puri"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
          <figcaption className="on-dark absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent p-7 pt-24 text-cream">
            <p className="font-display text-3xl">A/C mega showroom</p>
            <p className="mt-2 max-w-[40ch] text-cream/85">Ground floor, no stairs, cool inside even in the Puri summer. Easy for families and elders.</p>
          </figcaption>
        </figure>

        <div className="flex flex-col justify-between gap-6 border border-line bg-card p-7 md:col-span-3 lg:col-span-2">
          <div className="relative h-16 w-24">
            <Image src={BRAND_IMAGES.silkMark} alt="Silk Mark logo" fill sizes="96px" className="object-contain object-left" />
          </div>
          <div>
            <h3 className="font-display text-2xl">Silk Mark certified</h3>
            <p className="mt-2 text-ink-2">Our silks carry the Silk Mark, India&apos;s assurance of natural silk.</p>
          </div>
        </div>

        <div className="on-dark relative flex min-h-[320px] flex-col justify-end overflow-hidden bg-maroon-deep p-7 text-cream md:col-span-6 lg:col-span-1 lg:row-span-2">
          <Image src={loom.src} alt={loom.alt} fill sizes="(max-width: 1024px) 100vw, 17vw" placeholder="blur" blurDataURL={loom.blur} className="object-cover" />
          <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-maroon-deep via-maroon-deep/70 to-maroon-deep/10" />
          <h3 className="relative font-display text-2xl">Direct from Odisha&apos;s looms</h3>
          <p className="relative mt-2 text-cream/90">Every purchase supports the weaving families who keep these traditions alive.</p>
        </div>

        <div className="flex flex-col justify-between gap-6 bg-bg-2 p-7 md:col-span-3 lg:col-span-2">
          <h3 className="font-display text-2xl">For every occasion</h3>
          <p className="text-ink-2">Wedding silks, festive Bomkai, everyday cotton, kurtis, frocks, jodo and bed covers, across a wide range of prices.</p>
        </div>
      </Reveal>
    </section>
  );
}
