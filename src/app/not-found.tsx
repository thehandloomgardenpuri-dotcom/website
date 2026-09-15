import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { editorial } from "@/data/editorial";

export default function NotFound() {
  const detail = editorial("jodo-scarves");
  return (
    <section className="mx-auto grid min-h-[80dvh] max-w-[1400px] items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-12 lg:px-10">
      <div className="lg:col-span-7">
        <p lang="or" aria-hidden className="font-odia text-6xl text-accent/15 sm:text-8xl">ଖୋଜା</p>
        <h1 className="display-xl mt-4 max-w-[14ch]">
          This thread <em>came loose</em>
        </h1>
        <p className="mt-6 max-w-[48ch] text-lg text-ink-2">
          The page you were looking for isn&apos;t here. The sarees are, though.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/collections" className="btn btn-primary">
            View collection <ArrowRight size={16} strokeWidth={1.75} />
          </Link>
          <Link href="/" className="btn btn-ghost text-ink">
            Back to home
          </Link>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[340px] lg:col-span-4 lg:col-start-9">
        <div className="arch relative aspect-[3/4] bg-bg-2">
          <Image src={detail.src} alt={detail.alt} fill sizes="340px" placeholder="blur" blurDataURL={detail.blur} className="object-cover" />
        </div>
        <div aria-hidden className="kumbha mt-3 text-gold/80" />
      </div>
    </section>
  );
}
