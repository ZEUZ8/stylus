"use client";
import Image from "next/image";
import {
  ArrowRight,
  GraduationCap,
  MoonStar,
  PlayCircle,
  Sparkle,
  Sparkles,
} from "lucide-react";

import heroAsset from "@/assets/learning-desk-scene.png";
import spacePlanet from "@/assets/space-planet.png";
import spaceRocket from "@/assets/space-rocket.png";
import spaceAstronaut from "@/assets/space-astronaut.png";
import spaceUfo from "@/assets/space-ufo.png";
import spaceGalaxy from "@/assets/space-galaxy.png";
import {Button} from "@/components/ui/buttons"

import StatsSection from "@/components/user/StatsSection";
import TrustSection from "@/components/user/TrustSection";
import AboutSection from "@/components/user/AboutSection";
import CourseSection from "@/components/user/CourseSection";
import Testimonials from "@/components/user/Testimonials";
import ContactSection from "@/components/user/ContactSection";
import SiteFooter from "@/components/user/SiteFooter";
import ReelsSection from "@/components/user/ReelsSection";
import { FloatingCircles } from "@/components/ui/FloatingCircles";
export default function Home() {
  return (
    <>
      <section
        id="home"
        className="relative isolate flex min-h-screen items-center overflow-hidden bg-hero-gradient pt-24 pb-16 sm:pt-28"
      >
        {/* Decorative blurred shapes */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="animate-blob absolute -left-24 top-10 size-104 rounded-full bg-primary/15 blur-3xl" />
          <div className="animate-blob absolute -right-20 top-1/4 size-120 rounded-full bg-accent/15 blur-3xl [animation-delay:-6s]" />
          <div className="animate-blob absolute bottom-0 left-1/3 size-88 rounded-full bg-primary-deep/10 blur-3xl [animation-delay:-12s]" />
        </div>

        <FloatingCircles />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
        >
          <img
            src={spacePlanet.src}
            width={816}
            height={816}
            alt=""
            className="animate-space-orbit absolute right-[4%] top-[13%] size-14 object-contain opacity-90 drop-shadow-lg sm:size-16 lg:right-[7%] lg:size-20"
          />
          <img
            src={spaceRocket.src}
            width={816}
            height={816}
            alt=""
            className="animate-space-glide absolute bottom-[18%] left-[5%] hidden size-14 object-contain opacity-90 drop-shadow-md sm:block xl:left-[8%] xl:size-16"
          />
          <img
            src={spaceAstronaut.src}
            width={816}
            height={816}
            alt=""
            className="animate-space-drift absolute right-[4%] bottom-[8%] hidden size-16 object-contain opacity-90 drop-shadow-lg md:block xl:right-[7%] xl:size-20"
          />
          <img
            src={spaceUfo.src}
            width={816}
            height={816}
            alt=""
            className="animate-space-glide absolute left-[47%] top-[9%] size-14 object-contain opacity-90 drop-shadow-lg sm:size-16 lg:left-[45%] lg:top-[11%] lg:size-20"
          />
          <img
            src={spaceGalaxy.src}
            width={816}
            height={816}
            alt=""
            className="animate-space-orbit absolute right-[17%] bottom-[28%] size-14 object-contain opacity-90 drop-shadow-lg sm:right-[36%] sm:size-16 lg:right-[43%] lg:size-20"
          />
          <MoonStar className="animate-space-drift absolute right-[3%] top-[42%] size-7 text-accent/65 lg:right-[4%]" />
          <Sparkle className="animate-space-twinkle absolute right-[8%] top-[51%] size-4 text-accent/70" />
          <Sparkles className="animate-space-twinkle absolute left-[3%] top-[63%] size-5 text-primary/35 [animation-delay:-1.4s]" />
          <span className="animate-space-orbit absolute bottom-[24%] left-[46%] hidden size-2 rounded-full bg-accent/60 shadow-[0_0_14px_var(--accent)] sm:block" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-8">
          <div className="animate-fade-up max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary backdrop-blur-sm sm:text-sm">
              <Sparkles className="size-4" aria-hidden />
              Personalized 1-on-1 live tutoring
            </span>

            <h1 className="mt-6 text-4xl leading-[1.05] font-extrabold text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
              Learning That Shapes{" "}
              <span className="text-gradient-brand">Bright Futures.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Stylus provides personalized online tutoring for school students,
              college students, and competitive exam aspirants through
              experienced educators and interactive live classes designed to
              help every learner reach their full potential.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="group h-13 rounded-full px-7 text-base shadow-lift transition-transform duration-300 hover:scale-[1.03]"
              >
                <a href="#contact">
                  Book Free Demo
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-13 rounded-full border-border bg-background/70 px-7 text-base backdrop-blur-sm transition-transform duration-300 hover:scale-[1.03]"
              >
                <a href="#courses">
                  <PlayCircle className="size-4" aria-hidden />
                  View Courses
                </a>
              </Button>
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <GraduationCap className="size-4 text-primary" aria-hidden />
              No card required — meet your tutor before you enroll.
            </p>
          </div>

          <div className="animate-fade-up relative [animation-delay:150ms]">
            <div className="relative mx-auto w-full lg:w-[108%]">
              <img
                src={heroAsset.src}
                width={1774}
                height={887}
                alt="A tutor reaches out of a laptop screen toward a student wearing headphones, with books, an abacus, a rocket and planets floating between them"
                className="h-auto w-full"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, #000 72%, transparent 100%), linear-gradient(to right, #000 80%, transparent 100%)",
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, #000 72%, transparent 100%), linear-gradient(to right, #000 80%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* <StatsSection /> */}
      <AboutSection />
      <CourseSection />
      <ReelsSection />
      <Testimonials />
      <TrustSection />
      <ContactSection />
      <SiteFooter />
    </>
  );
}
