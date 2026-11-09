"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Play,
  Send,
} from "lucide-react";

import { FloatingCircles } from "@/components/ui/FloatingCircles";

const REELS = [
  {
    embedId: "DYEfHLixMH_",
    url: "https://www.instagram.com/reel/DYEfHLixMH_/",
    title: "Quick maths tricks from our live classes",
    subject: "Maths",
    gradient:
      "linear-gradient(160deg, oklch(0.55 0.2 265), oklch(0.35 0.15 268))",
  },
  {
    embedId: null,
    url: "https://www.instagram.com/",
    title: "The 10-second trick for percentage questions",
    subject: "Maths",
    gradient:
      "linear-gradient(160deg, oklch(0.7 0.15 70), oklch(0.55 0.18 40))",
  },
  {
    embedId: null,
    url: "https://www.instagram.com/",
    title: "A demo class moment students keep asking about",
    subject: "Chemistry",
    gradient:
      "linear-gradient(160deg, oklch(0.6 0.15 200), oklch(0.4 0.12 220))",
  },
  {
    embedId: null,
    url: "https://www.instagram.com/",
    title: "Essay openers that examiners love",
    subject: "English",
    gradient:
      "linear-gradient(160deg, oklch(0.65 0.18 320), oklch(0.45 0.15 300))",
  },
  {
    embedId: null,
    url: "https://www.instagram.com/",
    title: "How our tutors plan a month of progress",
    subject: "Mentoring",
    gradient:
      "linear-gradient(160deg, oklch(0.6 0.15 150), oklch(0.4 0.12 170))",
  },
  {
    embedId: null,
    url: "https://www.instagram.com/",
    title: "Board-exam revision: last 30 days strategy",
    subject: "Exam prep",
    gradient:
      "linear-gradient(160deg, oklch(0.55 0.18 28), oklch(0.38 0.15 20))",
  },
];

function ReelCard({ reel, isActive }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft">
      {reel.embedId ? (
        <iframe
          src={`https://www.instagram.com/reel/${reel.embedId}/embed`}
          title={reel.title}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          allowFullScreen
          scrolling="no"
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col justify-between"
          style={{ backgroundImage: reel.gradient }}
        >
          <div className="flex items-center justify-between p-5 text-white/80">
            <span className="text-xs font-bold tracking-wide uppercase">
              {reel.subject}
            </span>

            <span className="flex items-center gap-1.5 text-xs font-semibold">
              <Heart className="size-3.5" aria-hidden="true" />
              <MessageCircle className="size-3.5" aria-hidden="true" />
              <Send className="size-3.5" aria-hidden="true" />
            </span>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <span className="grid size-16 place-items-center rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/40">
              <Play
                className="size-7 fill-white text-white"
                aria-hidden="true"
              />
            </span>
          </div>

          <div className="p-5">
            <p className="text-sm font-semibold text-white/95">
              {reel.title}
            </p>
            <p className="mt-1 text-xs text-white/70">
              Reel coming soon — placeholder cover
            </p>
          </div>
        </div>
      )}

      {!isActive && (
        <span
          className="pointer-events-none absolute inset-0 bg-background/40"
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default function ReelsSection() {
  // Removed <HTMLDivElement> because this is JavaScript
  const trackRef = useRef(null);

  const pausedRef = useRef(false);
  const rafRef = useRef(0);

  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const scrollToIndex = useCallback(
    (index) => {
      const track = trackRef.current;
      const slide = track?.children[index];

      if (!track || !slide) return;

      track.scrollTo({
        left:
          slide.offsetLeft -
          (track.clientWidth - slide.clientWidth) / 2,
        behavior: reducedMotion ? "auto" : "smooth",
      });
    },
    [reducedMotion]
  );

  useEffect(() => {
    const mq = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    setReducedMotion(mq.matches);

    const onChange = (event) => {
      setReducedMotion(event.matches);
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

      const center =
        track.scrollLeft + track.clientWidth / 2;

      let best = 0;
      let bestDist = Number.POSITIVE_INFINITY;

      Array.from(track.children).forEach((node, i) => {
        // In JavaScript, node can be used directly.
        const slide = node;

        const dist = Math.abs(
          slide.offsetLeft +
            slide.clientWidth / 2 -
            center
        );

        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });

      setActive(best);
    });
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const timer = window.setInterval(() => {
      if (pausedRef.current) return;

      scrollToIndex(
        (active + 1) % REELS.length
      );
    }, 3400);

    return () => {
      window.clearInterval(timer);
    };
  }, [active, scrollToIndex, reducedMotion]);

  return (
    <section
      id="reels"
      aria-labelledby="reels-heading"
      className="relative isolate bg-secondary/40 py-20 sm:py-28"
    >
      <FloatingCircles flip />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
            Instagram Reels
          </span>

          <h2
            id="reels-heading"
            className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl"
          >
            Our classes, on camera
          </h2>

          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Real moments from real sessions — quick tips, demo snippets and
            student wins from our tutors.
          </p>
        </div>
      </div>

      <div
        className="relative mt-12"
        onPointerDown={() => {
          pausedRef.current = true;
        }}
        onPointerUp={() => {
          pausedRef.current = false;
        }}
        onPointerLeave={() => {
          pausedRef.current = false;
        }}
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
      >
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-[13vw] pb-4 sm:gap-6 sm:px-[26vw] lg:px-[33vw] [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
          aria-label="Instagram reels carousel"
        >
          {REELS.map((reel, i) => (
            <div
              key={reel.title}
              className={`w-[74vw] shrink-0 snap-center transition-all duration-500 ease-out sm:w-[48vw] lg:w-[34vw] ${
                active === i
                  ? "scale-100 opacity-100"
                  : "scale-[0.84] opacity-55"
              }`}
            >
              <div
                className={`overflow-hidden rounded-[2.25rem] bg-card transition-shadow duration-500 ${
                  active === i
                    ? "border-[6px] border-foreground/85 shadow-lift"
                    : "border-4 border-foreground/25"
                }`}
                style={{ height: "min(66vh, 580px)" }}
              >
                <ReelCard
                  reel={reel}
                  isActive={active === i}
                />
              </div>

              {/* <p
                className={`mt-4 text-center text-xs transition-colors sm:text-sm ${
                  active === i
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {reel.subject} ·{" "}
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    active === i
                      ? "text-primary underline underline-offset-2"
                      : ""
                  }
                >
                  Watch on Instagram
                </a>
              </p> */}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      {/* <div className="mt-2 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() =>
            scrollToIndex(
              (active - 1 + REELS.length) % REELS.length
            )
          }
          className="grid size-10 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          aria-label="Previous reel"
        >
          <ChevronLeft
            className="size-5"
            aria-hidden="true"
          />
        </button>

        <button
          type="button"
          onClick={() =>
            scrollToIndex(
              (active + 1) % REELS.length
            )
          }
          className="grid size-10 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          aria-label="Next reel"
        >
          <ChevronRight
            className="size-5"
            aria-hidden="true"
          />
        </button>
      </div> */}

      {/* Instagram link */}
      <div className="mt-10 flex justify-center px-5">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
        >
          Follow us on Instagram
          <FaInstagram
            className="size-4"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}