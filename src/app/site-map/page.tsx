import Link from "next/link";
import PageHero from "@/components/PageHero";
import { getAllProducts, productPath, type Product } from "@/lib/products";
import { CATEGORIES } from "@/data/taxonomy";
import { WEAVE_GUIDES } from "@/data/weaves";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Site Map: Every Saree, Collection & Guide",
  description:
    "Every page on the Handloom Garden website in one place: all handloom sarees, kurtis and frocks, collections, Odisha weave guides and showroom information for Swargadwar, Puri.",
  path: "/site-map",
});

function ProductLinks({ products }: { products: Product[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-2 text-ink-2 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <li key={p.id}>
          <Link href={productPath(p)} className="hover:text-accent">
            {p.title} <span className="text-xs tabular-nums opacity-70">{p.id}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default async function SiteMapPage() {
  const products = await getAllProducts();
  const sarees = products.filter((p) => p.category === "sarees");
  const premium = sarees.filter((p) => p.collection === "premium");
  const otherSarees = sarees.filter((p) => p.collection !== "premium");

  return (
    <>
      <PageHero crumbs={[{ name: "Site map", path: "/site-map" }]} title="Site map" intro={`All ${products.length} handloom pieces and every page on the site.`} />

      <div className="mx-auto grid max-w-[1400px] gap-16 px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <section aria-labelledby="sm-pages" className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 id="sm-pages" className="display-md">Pages</h2>
            <ul className="mt-5 grid gap-2 text-ink-2">
              <li><Link className="hover:text-accent" href="/">Home</Link></li>
              <li><Link className="hover:text-accent" href="/collections">All collections</Link></li>
              <li><Link className="hover:text-accent" href="/about">Our story</Link></li>
              <li><Link className="hover:text-accent" href="/contact">Visit the showroom</Link></li>
              <li><Link className="hover:text-accent" href="/faq">Questions answered</Link></li>
              <li><Link className="hover:text-accent" href="/puri-saree-shopping-guide">Puri saree shopping guide</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="display-md">Collections</h2>
            <ul className="mt-5 grid gap-2 text-ink-2">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link className="hover:text-accent" href={`/collections/${c.slug}`}>{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display-md">Weave guides</h2>
            <ul className="mt-5 grid gap-2 text-ink-2">
              <li><Link className="hover:text-accent" href="/weaves">All weaves of Odisha</Link></li>
              {WEAVE_GUIDES.map((g) => (
                <li key={g.slug}>
                  <Link className="hover:text-accent" href={`/weaves/${g.slug}`}>{g.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="sm-premium" className="border-t border-line pt-12">
          <h2 id="sm-premium" className="display-md">Premium saree collection <span className="text-ink-2">({premium.length})</span></h2>
          <div className="mt-6"><ProductLinks products={premium} /></div>
        </section>

        <section aria-labelledby="sm-sarees" className="border-t border-line pt-12">
          <h2 id="sm-sarees" className="display-md">Handloom sarees <span className="text-ink-2">({otherSarees.length})</span></h2>
          <div className="mt-6"><ProductLinks products={otherSarees} /></div>
        </section>

        {CATEGORIES.filter((c) => c.slug !== "sarees").map((c) => {
          const list = products.filter((p) => p.category === c.slug);
          if (!list.length) return null;
          return (
            <section key={c.slug} aria-label={c.name} className="border-t border-line pt-12">
              <h2 className="display-md">{c.name} <span className="text-ink-2">({list.length})</span></h2>
              <div className="mt-6"><ProductLinks products={list} /></div>
            </section>
          );
        })}
      </div>
    </>
  );
}
