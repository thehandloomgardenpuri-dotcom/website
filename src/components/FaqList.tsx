import { Plus } from "lucide-react";
import type { QA } from "@/data/weaves";

/**
 * Native <details> accordion: answers are always in the HTML (crawlable and
 * quotable), work without JavaScript, and open with a height transition.
 */
export default function FaqList({ faqs, headingLevel: H = "h3" }: { faqs: QA[]; headingLevel?: "h2" | "h3" }) {
  return (
    <div className="border-t border-line">
      {faqs.map((f, i) => (
        <details key={f.q} className="faq group border-b border-line" open={i === 0}>
          <summary className="flex items-start justify-between gap-6 py-6">
            <H className="font-display text-xl leading-snug sm:text-2xl">{f.q}</H>
            <span className="faq-icon mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-line text-accent">
              <Plus size={18} strokeWidth={1.5} />
            </span>
          </summary>
          <p className="max-w-[68ch] pb-7 pr-12 leading-relaxed text-ink-2">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
