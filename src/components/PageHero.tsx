import type { ReactNode } from "react";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import SplitReveal from "./motion/SplitReveal";
import Reveal from "./motion/Reveal";

interface Props {
  crumbs: Crumb[];
  title: ReactNode;
  intro?: ReactNode;
  aside?: ReactNode;
  /** Odia word shown large and faint beside the title (wide screens, pages without an aside). */
  watermark?: string;
}

/** Shared header for inner pages: breadcrumb, H1, and an answer-first intro paragraph. */
export default function PageHero({ crumbs, title, intro, aside, watermark }: Props) {
  // The watermark gets its own grid column so it can never sit behind the title or intro text.
  const showWatermark = Boolean(watermark) && !aside;
  const wide = !aside && !showWatermark;
  return (
    <header className="relative overflow-hidden border-b border-line">
      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-4 pb-14 pt-32 sm:px-6 lg:grid-cols-12 lg:px-10 lg:pb-20 lg:pt-40">
        <div className={wide ? "lg:col-span-10" : showWatermark ? "lg:col-span-12 xl:col-span-8" : "lg:col-span-7"}>
          <Breadcrumbs items={crumbs} />
          <SplitReveal as="h1" trigger="intro" className="display-xl mt-8">
            {title}
          </SplitReveal>
          {intro && (
            <Reveal delay={0.3} className="mt-8 max-w-[62ch] text-lg leading-relaxed text-ink-2">
              {intro}
            </Reveal>
          )}
        </div>
        {aside && <div className="lg:col-span-5 lg:self-end">{aside}</div>}
        {showWatermark && (
          <p
            aria-hidden
            lang="or"
            className="pointer-events-none hidden select-none self-start justify-self-end overflow-hidden whitespace-nowrap font-odia text-[6.5rem] leading-none text-accent/[0.07] xl:col-span-4 xl:block"
          >
            {watermark}
          </p>
        )}
      </div>
    </header>
  );
}
