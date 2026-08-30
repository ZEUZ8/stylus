import React from 'react'
import { CheckCircle2, HeartHandshake, ShieldCheck, Target } from "lucide-react";

const PILLARS = [
  {
    icon: Target,
    title: "Personalized Learning Plans",
    body: "Every student starts with a diagnostic session so lessons target the exact gaps holding them back.",
  },
  {
    icon: ShieldCheck,
    title: "Rigorously Vetted Tutors",
    body: "Subject tests, teaching demos and background checks — only the top 4% of applicants join Stylus.",
  },
  {
    icon: HeartHandshake,
    title: "Parents Stay In The Loop",
    body: "Clear progress reports after every four lessons, plus a dedicated academic advisor on call.",
  },
];

const HIGHLIGHTS = [
  "1-on-1 live classes, never pre-recorded",
  "Aligned to your school board and exam pattern",
  "Flexible rescheduling with no lost lessons",
  "Recorded sessions for revision anytime",
];


const AboutSection = () => {
  return (
   <section id="about" aria-labelledby="about-heading" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-20">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#4DA8BB] uppercase">
              About Stylus
            </span>
            <h2
              id="about-heading"
              className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl"
            >
              Tutoring built around the student, not the syllabus.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Stylus began with a simple observation: students don't struggle because they aren't
              capable — they struggle because classrooms move faster than understanding. We pair
              every learner with an educator who teaches at their pace, in their language, with
              measurable checkpoints along the way.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#4DA8BB]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <ul className="grid gap-4">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <li
                  key={pillar.title}
                  className="group rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift sm:p-7"
                >
                  <span className="grid size-11 place-items-center rounded-full bg-[#4DA8BB]/10 text-[#4DA8BB] transition-colors duration-300 group-hover:bg-[#4DA8BB] group-hover:text-white">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutSection


