"use client";

import { Skeleton } from "boneyard-js/react";
import "@/bones/registry";

/** Shown while a collection route streams in: the header shape plus boneyard's captured product-grid bones. */
export default function CollectionsLoading() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-32 sm:px-6 lg:px-10 lg:pt-40" aria-busy="true" aria-label="Loading collection">
      <div className="h-4 w-48 animate-pulse bg-bg-2" />
      <div className="mt-8 h-16 w-full max-w-[640px] animate-pulse bg-bg-2 sm:h-24" />
      <div className="mt-6 h-5 w-full max-w-[520px] animate-pulse bg-bg-2" />
      <div className="mt-16">
        <Skeleton
          name="product-grid"
          loading
          animate="shimmer"
          fallback={
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="aspect-[3/4] animate-pulse bg-bg-2" />
              ))}
            </div>
          }
        >
          <div />
        </Skeleton>
      </div>
    </div>
  );
}
