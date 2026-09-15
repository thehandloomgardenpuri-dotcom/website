"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Skeleton } from "boneyard-js/react";
import { createClient } from "@/utils/supabase/client";
import { CATEGORIES, WEAVE_LABEL, type Category, type Weave } from "@/data/taxonomy";
import { fromRow, PRODUCT_COLUMNS, type Product, type ProductRow } from "@/lib/product-shape";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import ProductCard from "./ProductCard";
import QuickView from "./QuickView";
import "@/bones/registry";

const PAGE_SIZE = 12;

interface Props {
  initial: Product[];
  initialTotal: number;
  fixtureProduct: Product;
}

const GRID = "grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 xl:gap-y-14";

/** Mock grid that `npx boneyard-js build` snapshots to generate the skeleton bones. */
function GridFixture({ product }: { product: Product }) {
  return (
    <div className={GRID}>
      {Array.from({ length: 8 }, (_, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
}

/** Used only if generated bones are missing: a hand-shaped shimmer grid. */
function FallbackGrid() {
  return (
    <div className={GRID} aria-hidden>
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className="animate-pulse">
          <div className="aspect-[3/4] bg-bg-2" />
          <div className="mt-4 h-3 w-1/3 bg-bg-2" />
          <div className="mt-3 h-5 w-4/5 bg-bg-2" />
          <div className="mt-5 h-3 w-full bg-bg-2" />
        </div>
      ))}
    </div>
  );
}

/**
 * Live catalogue browser. The first page is server-rendered for SEO; filter
 * changes and "load more" query Supabase from the browser, showing boneyard
 * skeletons (captured from the real card layout) while each request is in flight.
 */
export default function CollectionExplorer({ initial, initialTotal, fixtureProduct }: Props) {
  const supabase = useRef(createClient()).current;
  const gridRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<Product[]>(initial);
  const [total, setTotal] = useState(initialTotal);
  const [category, setCategory] = useState<Category | "all">("all");
  const [weave, setWeave] = useState<Weave | "all">("all");
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [queryId, setQueryId] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [quick, setQuick] = useState<number | null>(null);
  const firstRun = useRef(true);

  const fetchPage = useCallback(
    async (from: number, cat: Category | "all", wv: Weave | "all") => {
      let query = supabase
        .from("products")
        .select(PRODUCT_COLUMNS, { count: "exact" })
        .order("sort_order", { ascending: true })
        .range(from, from + PAGE_SIZE - 1);
      if (cat !== "all") query = query.eq("category", cat);
      if (wv !== "all") query = query.eq("weave", wv);
      const { data, error: err, count } = await query;
      if (err) throw err;
      return { rows: (data as ProductRow[]).map(fromRow), count: count ?? 0 };
    },
    [supabase],
  );

  // Restore filters from the URL (?category=…&weave=…) on first load.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const c = params.get("category");
    const w = params.get("weave");
    // The page is statically rendered without query params, so filters can only be restored after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (c && CATEGORIES.some((x) => x.slug === c)) setCategory(c as Category);
    if (w && w in WEAVE_LABEL) setWeave(w as Weave);
  }, []);

  useEffect(() => {
    if (firstRun.current && category === "all" && weave === "all") {
      firstRun.current = false;
      return;
    }
    firstRun.current = false;
    const params = new URLSearchParams();
    if (category !== "all") params.set("category", category);
    if (weave !== "all") params.set("weave", weave);
    window.history.replaceState(null, "", params.size ? `?${params}` : window.location.pathname);

    let cancelled = false;
    // Batched with the resets below, so the skeleton remounts empty and uses the captured height.
    setQueryId((id) => id + 1);
    setLoading(true);
    setError(null);
    setItems([]);
    fetchPage(0, category, weave)
      .then(({ rows, count }) => {
        if (cancelled) return;
        setItems(rows);
        setTotal(count);
      })
      .catch(() => !cancelled && setError("We couldn't load the collection just now. Please try again."))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [category, weave, fetchPage]);

  const loadMore = async () => {
    setLoadingMore(true);
    setError(null);
    try {
      const { rows, count } = await fetchPage(items.length, category, weave);
      const start = items.length;
      setItems((prev) => [...prev, ...rows]);
      setTotal(count);
      requestAnimationFrame(() => {
        if (prefersReducedMotion()) return;
        const fresh = gridRef.current?.querySelectorAll(`[data-index]`);
        if (!fresh) return;
        gsap.from(Array.from(fresh).slice(start), { y: 40, autoAlpha: 0, duration: 1, stagger: 0.06, ease: "expo.out" });
      });
    } catch {
      setError("We couldn't load more pieces just now. Please try again.");
    } finally {
      setLoadingMore(false);
    }
  };

  // Boneyard scales bones to the wrapped content's height, so each skeleton wraps the
  // real grid and is keyed per query: a fresh (empty) mount uses the captured height.
  const skeletonProps = {
    name: "product-grid",
    animate: "shimmer" as const,
    transition: 300,
    fixture: <GridFixture product={fixtureProduct} />,
    fallback: <FallbackGrid />,
  };

  const weaveOptions = Object.keys(WEAVE_LABEL) as Weave[];

  return (
    <div>
      <div className="mb-10 grid gap-4">
        <div role="toolbar" aria-label="Filter by collection" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
          {[{ slug: "all" as const, name: "Everything" }, ...CATEGORIES.filter((c) => !c.inStoreOnly)].map((c) => (
            <button
              key={c.slug}
              type="button"
              aria-pressed={category === c.slug}
              onClick={() => setCategory(c.slug)}
              className="shrink-0 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-ink hover:text-ink aria-pressed:border-maroon aria-pressed:bg-maroon aria-pressed:text-cream"
            >
              {c.name}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <label htmlFor="weave-filter" className="font-semibold">
            Weave style
          </label>
          <select
            id="weave-filter"
            value={weave}
            onChange={(e) => setWeave(e.target.value as Weave | "all")}
            className="rounded-full border border-line bg-bg px-4 py-2 text-ink"
          >
            <option value="all">All weaves</option>
            {weaveOptions.map((w) => (
              <option key={w} value={w}>
                {WEAVE_LABEL[w]}
              </option>
            ))}
          </select>
          <p className="ml-auto text-ink-2" aria-live="polite">
            {loading && !items.length ? "Loading…" : `Showing ${items.length} of ${total}`}
          </p>
        </div>
      </div>

      <Skeleton key={`query-${queryId}`} {...skeletonProps} loading={loading}>
        <div ref={gridRef} className={GRID}>
          {items.map((p, i) => (
            <div key={p.id} data-index={i}>
              <ProductCard product={p} priority={i < 4} onQuickView={() => setQuick(i)} />
            </div>
          ))}
        </div>
      </Skeleton>

      {loadingMore && (
        <div className="mt-10">
          <Skeleton key={`more-${items.length}`} {...skeletonProps} loading>
            <div />
          </Skeleton>
        </div>
      )}

      {!loading && !error && items.length === 0 && (
        <div className="border border-dashed border-line px-6 py-16 text-center">
          <p className="font-display text-2xl">Nothing photographed in this combination yet</p>
          <p className="mx-auto mt-3 max-w-[48ch] text-ink-2">The showroom has far more than we can photograph. Try another weave, or ask us on WhatsApp for pictures of what is in stock today.</p>
        </div>
      )}

      {error && (
        <p role="alert" className="mt-8 border-l-2 border-maroon bg-bg-2 px-5 py-4 text-sm">
          {error}
        </p>
      )}

      {!loading && !loadingMore && items.length > 0 && items.length < total && (
        <div className="mt-10 flex justify-center pt-6">
          <button type="button" onClick={loadMore} className="btn btn-ghost text-ink">
            Load more pieces
          </button>
        </div>
      )}

      <QuickView products={items} index={quick} onChange={setQuick} />
    </div>
  );
}
