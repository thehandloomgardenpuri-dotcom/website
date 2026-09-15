"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

function statusNow() {
  // Showroom hours are in India Standard Time regardless of where the visitor is.
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date());
  const h = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const m = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const minutes = h * 60 + m;
  const [oh, om] = SITE.hours.opens.split(":").map(Number);
  const [ch, cm] = SITE.hours.closes.split(":").map(Number);
  const open = minutes >= oh * 60 + om && minutes < ch * 60 + cm;
  return open ? { open, text: "Open now, closes 9 PM" } : { open, text: "Closed now, opens 9 AM" };
}

/** Live open/closed indicator (the dot conveys real state, in IST). */
export default function OpenStatus({ className }: { className?: string }) {
  const [status, setStatus] = useState<{ open: boolean; text: string } | null>(null);

  useEffect(() => {
    const update = () => setStatus(statusNow());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className={`inline-flex items-center gap-2 text-sm font-semibold ${className ?? ""}`}>
      <span className="relative flex size-2.5" aria-hidden>
        {status?.open && <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />}
        <span className={`relative inline-flex size-2.5 rounded-full ${status ? (status.open ? "bg-emerald-500" : "bg-gold") : "bg-current opacity-30"}`} />
      </span>
      {status?.text ?? SITE.hours.display}
    </p>
  );
}
