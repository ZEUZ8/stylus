"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Quote, Star } from "lucide-react";

import { FloatingCircles } from "@/components/ui/FloatingCircles";

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

export default function TestimonialsSection() {
  const trackRef = useRef(null);
  const rafRef = useRef(0);

  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");

    setIsMobile(mq.matches);

    const onChange = (e) => {
      setIsMobile(e.matches);
    };

    mq.addEventListener("change", onChange);

    return () => {
      mq.removeEventListener("change", onChange);
    };
  }, []);

  const handleScroll = useCallback(() => {
    cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const track = trackRef.current;

      if (!track) return;

      const center = track.scrollLeft + track.clientWidth / 2;

      let best = 0;
      let bestDist = Number.POSITIVE_INFINITY;

      Array.from(track.children).forEach((node, i) => {
        const slide = node;

        const dist = Math.abs(
          slide.offsetLeft + slide.clientWidth / 2 - center
        );

        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });

      setActive(best);
    });
  }, []);

  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current;
    const slide = track?.children[index];

    if (!track || !slide) return;

    track.scrollTo({
      left:
        slide.offsetLeft -
        (track.clientWidth - slide.clientWidth) / 2,
      behavior: "smooth",
    });
  }, []);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative isolate bg-background py-20 sm:py-28"
    >
      <FloatingCircles />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
            Testimonials
          </span>

          <h2
            id="testimonials-heading"
            className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl"
          >
            Results parents and students talk about
          </h2>

          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-4 fill-accent text-accent"
                />
              ))}
            </span>

            4.9 / 5 average rating from 800+ families
          </p>
        </div>

        <ul
          ref={trackRef}
          onScroll={handleScroll}
          aria-label="Student and parent testimonials"
          className="mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-[13vw] pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 lg:gap-5"
        >
          {TESTIMONIALS.map((item, i) => (
            <li
              key={item.name}
              className={`flex h-full w-[82vw] max-w-[26rem] shrink-0 snap-center flex-col rounded-3xl border bg-card p-6 transition-all duration-300 sm:w-auto sm:max-w-none sm:p-7 ${
                isMobile && active === i
                  ? "scale-[1.02] border-primary/40 opacity-100 shadow-lift"
                  : isMobile
                  ? "scale-[0.96] border-border opacity-70"
                  : "border-border hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft"
              }`}
            >
              <Quote
                className="size-6 text-primary/40"
                aria-hidden="true"
              />

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                {item.quote}
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-primary-foreground">
                  {item.name.charAt(0)}
                </span>

                <div className="min-w-0">
                  <p className="truncate text-sm font-bold">
                    {item.name}
                  </p>

                  <p className="truncate text-xs text-muted-foreground">
                    {item.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-1 flex justify-center gap-2 pb-2 sm:hidden">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={active === i}
              onClick={() => scrollToIndex(i)}
              className={`size-2 rounded-full transition-all duration-300 ${
                active === i ? "w-5 bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}