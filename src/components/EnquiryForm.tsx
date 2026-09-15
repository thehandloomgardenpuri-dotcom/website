"use client";

import { useActionState, useEffect, useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import { submitEnquiry, type EnquiryState } from "@/app/contact/actions";
import { CATEGORIES } from "@/data/taxonomy";
import { whatsappLink } from "@/lib/site";
import { gsap } from "@/lib/gsap";
import BrandIcon from "./BrandIcon";

const initial: EnquiryState = { status: "idle" };

const field =
  "w-full rounded-none border-0 border-b border-line bg-transparent px-0 py-3 text-base text-ink transition-colors placeholder:text-ink-2/70 focus:border-accent focus:outline-none focus:ring-0 aria-[invalid=true]:border-maroon";

export default function EnquiryForm() {
  const [state, action, pending] = useActionState(submitEnquiry, initial);
  const done = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.status === "success" && done.current) {
      gsap.from(done.current.children, { autoAlpha: 0, y: 20, stagger: 0.08, duration: 0.8, ease: "expo.out" });
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div ref={done} role="status" className="flex flex-col items-start gap-5">
        <span className="grid size-14 place-items-center rounded-full bg-maroon text-cream">
          <Check size={24} strokeWidth={1.75} />
        </span>
        <p className="display-md">Enquiry received</p>
        <p className="max-w-[44ch] text-ink-2">{state.message}</p>
        {state.summary && (
          <a href={whatsappLink(state.summary)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <BrandIcon name="whatsapp" size={16} /> Ask on WhatsApp
          </a>
        )}
      </div>
    );
  }

  const err = state.fieldErrors ?? {};

  return (
    <form action={action} noValidate className="grid gap-7">
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-semibold">Your name</label>
        <input id="name" name="name" autoComplete="name" required aria-invalid={!!err.name} aria-describedby={err.name ? "name-error" : undefined} className={field} />
        {err.name && <p id="name-error" className="text-sm text-maroon">{err.name}</p>}
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="phone" className="text-sm font-semibold">Phone or WhatsApp</label>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required aria-invalid={!!err.phone} aria-describedby={err.phone ? "phone-error" : "phone-help"} className={field} />
          {err.phone ? (
            <p id="phone-error" className="text-sm text-maroon">{err.phone}</p>
          ) : (
            <p id="phone-help" className="text-xs text-ink-2">We usually reply on WhatsApp.</p>
          )}
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-semibold">Email <span className="font-normal text-ink-2">(optional)</span></label>
          <input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!err.email} aria-describedby={err.email ? "email-error" : undefined} className={field} />
          {err.email && <p id="email-error" className="text-sm text-maroon">{err.email}</p>}
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="interest" className="text-sm font-semibold">Interested in</label>
        <select id="interest" name="interest" defaultValue="Sarees" className={`${field} cursor-pointer`}>
          {CATEGORIES.map((c) => (
            <option key={c.slug} value={c.name} className="bg-bg text-ink">{c.name}</option>
          ))}
          <option value="Wedding or bulk order" className="bg-bg text-ink">Wedding or bulk order</option>
          <option value="Something else" className="bg-bg text-ink">Something else</option>
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-semibold">What are you looking for?</label>
        <textarea id="message" name="message" rows={4} required aria-invalid={!!err.message} aria-describedby={err.message ? "message-error" : "message-help"} className={`${field} resize-none`} />
        {err.message ? (
          <p id="message-error" className="text-sm text-maroon">{err.message}</p>
        ) : (
          <p id="message-help" className="text-xs text-ink-2">A colour, weave, occasion or product code all help.</p>
        )}
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="border-l-2 border-maroon bg-bg-2 px-4 py-3 text-sm">{state.message}</p>
      )}

      <button type="submit" disabled={pending} className="btn btn-primary justify-self-start disabled:opacity-60">
        {pending ? "Sending…" : "Send enquiry"} <ArrowRight size={16} strokeWidth={1.75} />
      </button>
    </form>
  );
}
