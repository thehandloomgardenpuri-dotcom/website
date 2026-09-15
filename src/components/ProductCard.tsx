import Image from "next/image";
import Link from "next/link";
import { Maximize2 } from "lucide-react";
import { productEnquiry, productPath, type Product } from "@/lib/product-shape";
import { whatsappLink } from "@/lib/site";
import BrandIcon from "./BrandIcon";

interface Props {
  product: Product;
  onQuickView?: () => void;
  priority?: boolean;
  sizes?: string;
  headingLevel?: "h2" | "h3";
}

export default function ProductCard({ product: p, onQuickView, priority, sizes, headingLevel: H = "h3" }: Props) {
  return (
    <article className="group relative flex flex-col">
      <div className="relative">
        <Link href={productPath(p)} className="relative block aspect-[3/4] overflow-hidden bg-bg-2" tabIndex={-1} aria-hidden>
          <Image
            src={p.image}
            alt={`${p.title}, ${p.weaveLabel.toLowerCase()} at Handloom Garden, Puri`}
            fill
            priority={priority}
            sizes={sizes ?? "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"}
            placeholder={p.blur ? "blur" : "empty"}
            blurDataURL={p.blur ?? undefined}
            className="object-cover object-top transition-transform duration-[1400ms] ease-[var(--ease-silk)] group-hover:scale-[1.045]"
          />
          <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-maroon-deep/35 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        </Link>
        {onQuickView && (
          <button
            type="button"
            onClick={onQuickView}
            aria-label={`Quick view: ${p.title}`}
            className="absolute right-3 top-3 z-[2] grid size-10 place-items-center rounded-full bg-cream/90 text-charcoal opacity-100 shadow-sm backdrop-blur transition-all duration-500 hover:bg-maroon hover:text-cream md:opacity-0 md:group-hover:opacity-100 md:focus-visible:opacity-100"
          >
            <Maximize2 size={16} strokeWidth={1.75} />
          </button>
        )}
      </div>
      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-xs font-semibold text-gold-ink">{p.weaveLabel}</p>
        <H className="mt-1 font-display text-[1.15rem] leading-snug sm:text-xl">
          <Link href={productPath(p)} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
            {p.title}
          </Link>
        </H>
        <div className="relative z-[1] mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 pt-3 text-xs text-ink-2">
          <span className="tabular-nums">{p.id}</span>
          <a
            href={whatsappLink(productEnquiry(p))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-accent underline-offset-4 hover:underline"
          >
            <BrandIcon name="whatsapp" size={14} /> Ask on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
