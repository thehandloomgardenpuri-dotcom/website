"use server";

import { cookies, headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export interface EnquiryState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "phone" | "email" | "message", string>>;
  summary?: string;
}

const clean = (v: FormDataEntryValue | null, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/** Saves a showroom enquiry to Supabase (insert-only table; visitors can never read enquiries back). */
export async function submitEnquiry(_prev: EnquiryState, form: FormData): Promise<EnquiryState> {
  // Honeypot: real visitors never see or fill this field.
  if (clean(form.get("company"), 100)) return { status: "success", message: "Thank you." };

  const name = clean(form.get("name"), 120);
  const phone = clean(form.get("phone"), 20);
  const email = clean(form.get("email"), 200);
  const interest = clean(form.get("interest"), 80);
  const message = clean(form.get("message"), 2000);

  const fieldErrors: EnquiryState["fieldErrors"] = {};
  if (!name) fieldErrors.name = "Please tell us your name.";
  if (!/^[0-9+ ()-]{7,20}$/.test(phone)) fieldErrors.phone = "Please enter a phone or WhatsApp number we can reach you on.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fieldErrors.email = "That email address doesn't look right.";
  if (!message) fieldErrors.message = "Tell us what you are looking for.";
  if (Object.keys(fieldErrors).length) return { status: "error", message: "Please check the highlighted fields.", fieldErrors };

  const supabase = createClient(await cookies());
  const referer = (await headers()).get("referer") ?? "/contact";
  const { error } = await supabase.from("enquiries").insert({
    kind: "enquiry",
    name,
    phone,
    email: email || null,
    interest: interest || null,
    message,
    source_page: new URL(referer, "https://www.handloomgarden.com").pathname.slice(0, 200),
  });

  if (error) {
    console.error("[enquiry] insert failed:", error.message);
    return { status: "error", message: "Sorry, we couldn't send that just now. Please message us on WhatsApp instead." };
  }

  return {
    status: "success",
    message: `Thank you, ${name.split(" ")[0]}. The showroom team will get back to you soon.`,
    summary: `Hi Handloom Garden, I just sent an enquiry on your website.\nName: ${name}\nInterested in: ${interest || "General"}\n${message}`,
  };
}
