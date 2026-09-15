import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "./JsonLd";

export interface Crumb {
  name: string;
  path: string;
}

/** Visible breadcrumb trail plus matching BreadcrumbList structured data. */
export default function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  const trail = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-2">
          {trail.map((c, i) => (
            <li key={c.path} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden className="text-line">/</span>}
              {i === trail.length - 1 ? (
                <span aria-current="page" className="text-ink">{c.name}</span>
              ) : (
                <Link href={c.path} className="hover:text-accent">{c.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
