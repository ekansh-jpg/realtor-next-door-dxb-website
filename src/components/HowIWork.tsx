import { Target, Search, Video, KeyRound } from "lucide-react";

const steps = [
  { icon: Target, title: "Understand your goals & budget", text: "Your objectives, timing and risk tolerance come first." },
  { icon: Search, title: "Research-based shortlist", text: "Compare location, pricing, payment terms and ownership costs." },
  { icon: Video, title: "Viewings (in person or video)", text: "Inspect options and ask the questions that matter before deciding." },
  { icon: KeyRound, title: "Purchase, handover & leasing support", text: "Coordinate the next steps, documentation and agreed aftercare." },
];
export default function HowIWork() {
  return <section className="bg-card py-14 md:py-20">
    <div className="container px-5 md:px-6">
      <p className="mb-3 text-xs uppercase text-primary">A clear process</p>
      <h2 className="mb-10 font-serif text-2xl font-bold md:text-4xl">How I work</h2>
      <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => <li key={step.title} className="border-t border-border pt-5">
          <div className="mb-5 flex items-center justify-between text-primary"><span className="font-serif text-2xl">0{i + 1}</span><step.icon className="h-6 w-6" /></div>
          <h3 className="mb-3 font-serif text-lg font-semibold">{step.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
        </li>)}
      </ol>
    </div>
  </section>;
}