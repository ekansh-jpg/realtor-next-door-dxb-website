import { Button } from "@/components/ui/button";
import { openLeadForm } from "@/lib/leads";

export default function InternationalInvestors() {
  return <section style={{ backgroundColor: "#0A0A0A" }} className="text-white py-14 md:py-20">
    <div className="container px-5 md:px-6">
      <p className="mb-3 text-xs uppercase text-[#C9A96E]">NRI & international investors</p>
      <h2 className="max-w-3xl font-serif text-2xl font-bold md:text-4xl">Invest from abroad, with clarity at every step</h2>
      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/60">Based in Dubai, with advisory coverage across Dubai, Abu Dhabi and Ras Al Khaimah. Ownership rules and registration processes differ by emirate and project.</p>
      <div className="my-8 grid gap-8 sm:grid-cols-2">
        {[
          ["Remote buying", "Agree your brief, review a research-based shortlist, verify title and developer details, then coordinate signing and registration. An attested power of attorney may be needed; confirm requirements before arranging one."],
          ["Video tours", "Live video viewings and project comparisons help you review layouts, surroundings and finishes. Off-plan renderings illustrate proposals, not completed homes."],
          ["Payment from abroad", "Confirm the approved beneficiary and project escrow account independently. Your bank may request source-of-funds evidence. Seek qualified advice on currency conversion, remittances and home-country tax obligations."],
          ["Golden Visa overview", "A qualifying property value of AED 2M or more may support an application. Mortgage, off-plan and residency requirements depend on current authority rules; approval is not guaranteed."],
        ].map(([title, text]) => <div key={title} className="border-t border-white/10 pt-5"><h3 className="mb-3 font-serif text-xl">{title}</h3><p className="text-sm leading-relaxed text-white/60">{text}</p></div>)}
      </div>
      <Button size="lg" className="mt-2 rounded-full px-8 font-semibold uppercase tracking-wider text-black hover:opacity-90" style={{ backgroundColor: "#C9A96E" }} onClick={() => openLeadForm({ formName: "international_consultation", title: "Plan your international purchase" })}>Discuss your investment goals</Button>
    </div>
  </section>;
}