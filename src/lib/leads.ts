import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { trackFormSubmit } from "@/lib/tracking";

export const WHATSAPP_NUMBER = "971544590555";
export const BUDGETS = ["AED 1–3M", "AED 3–5M", "AED 5–10M", "AED 10M+"];
export const INTERESTS = ["Off-plan", "Ready apartment", "Villa", "Commercial", "Golden Visa property"];
export const TIMELINES = ["Ready now", "1–3 months", "3–6 months", "Just researching"];

const UTM_KEY = "ek_utm";
export const captureUtm = () => {
  try {
    const q = new URLSearchParams(window.location.search);
    const utm = { utm_source: q.get("utm_source"), utm_medium: q.get("utm_medium"), utm_campaign: q.get("utm_campaign") };
    if (utm.utm_source || utm.utm_medium || utm.utm_campaign) sessionStorage.setItem(UTM_KEY, JSON.stringify(utm));
  } catch { /* ignore */ }
};
const getUtm = () => {
  try { return JSON.parse(sessionStorage.getItem(UTM_KEY) || "{}"); } catch { return {}; }
};

const opt = (max: number) => z.string().trim().max(max).optional().or(z.literal(""));

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z.string().trim().regex(/^\+\d[\d\s-]{5,24}$/, "Enter your WhatsApp number with country code, e.g. +971 50 123 4567"),
  email: z.string().trim().email("Enter a valid email").max(255),
  budget: opt(60), interest: opt(60), timeline: opt(60), country: opt(80), message: opt(2000),
  consent: z.literal(true, { errorMap: () => ({ message: "Please tick the consent box to continue" }) }),
});
export type LeadInput = z.infer<typeof leadSchema>;

const nz = (v?: string) => (v && v.trim() ? v.trim() : null);

export const submitLead = async (input: LeadInput, formName: string, property?: string) => {
  const utm = getUtm();
  const { error } = await supabase.from("leads").insert({
    name: input.name.trim(), phone: input.phone.trim(), email: input.email.trim(),
    budget: nz(input.budget), interest: nz(input.interest), timeline: nz(input.timeline),
    country: nz(input.country), message: nz(input.message), property: property ?? null,
    source_page: window.location.pathname.slice(0, 300), form_name: formName,
    utm_source: utm.utm_source ?? null, utm_medium: utm.utm_medium ?? null, utm_campaign: utm.utm_campaign ?? null,
    consent: true,
  });
  if (error) throw error;
  trackFormSubmit(formName);
};

export type LeadRequest = { formName: string; property?: string; title?: string; subtitle?: string; variant?: "full" | "short" };
export const openLeadForm = (req: LeadRequest) => window.dispatchEvent(new CustomEvent<LeadRequest>("ek:open-lead", { detail: req }));
