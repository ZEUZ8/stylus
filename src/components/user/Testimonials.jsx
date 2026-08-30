import React from "react";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Aarav went from 54% to 89% in maths in one term. His tutor found the exact topics he'd never really understood and rebuilt them from scratch.",
    name: "Priya M.",
    role: "Parent · Grade 10",
  },
  {
    quote:
      "The physics sessions were the first time derivations actually made sense to me. I stopped memorising and started solving.",
    name: "Rehan S.",
    role: "Student · JEE aspirant",
  },
  {
    quote:
      "Progress reports every month meant I always knew where my daughter stood. No guessing, no surprises before exams.",
    name: "Deepa R.",
    role: "Parent · Grade 8",
  },
  {
    quote:
      "Flexible timings let me fit lessons around college. My tutor rescheduled twice during placements without any fuss.",
    name: "Ananya K.",
    role: "Student · Undergraduate",
  },
  {
    quote:
      "My son used to dread English. Now he reads ahead of the class and writes essays without being asked twice.",
    name: "Vikram T.",
    role: "Parent · Grade 6",
  },
  {
    quote:
      "The demo class sold it for me — no pressure, no sales pitch, just a genuinely good teacher doing what he does.",
    name: "Sana Q.",
    role: "Parent · Grade 12",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium tracking-[0.2em] text-[#4DA8BB] uppercase">
            Testimonials
          </span>
          <h2
            id="testimonials-heading"
            className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl"
          >
            Results parents and students talk about
          </h2>
          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-orange-300 text-orange-300" />
              ))}
            </span>
            4.9 / 5 average rating from 800+ families
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
          {TESTIMONIALS.map((item) => (
            <li
              key={item.name}
              className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft sm:p-7"
            >
              <Quote className="size-6 text-[#4DA8BB]/40" aria-hidden />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                {item.quote}
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                {/* <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-primary-foreground"> */}
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#4DA8BB] text-sm font-bold text-white">
                  {item.name.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold">{item.name}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {item.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
