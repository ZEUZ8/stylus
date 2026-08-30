"use client"
import Image from "next/image";
import StatsSection from "@/components/user/StatsSection"
import TrustSection from "@/components/user/TrustSection"
import AboutSection from "@/components/user/AboutSection"
import CourseSection from "@/components/user/CourseSection"
import Testimonials from "@/components/user/Testimonials"

export default function Home() {
  return (
    <>
      <section
        id="home"
        className=" relative isolate flex min-h-screen items-center overflow-hidden bg-hero-gradient pt-24 pb-16 sm:pt-28"
      >
        {/* Decorative blurred shapes */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="animate-blob absolute -left-24 top-10 size-[26rem] rounded-full bg-primary/15 blur-3xl" />
          <div className="animate-blob absolute -right-20 top-1/4 size-[30rem] rounded-full bg-accent/15 blur-3xl [animation-delay:-6s]" />
          <div className="animate-blob absolute bottom-0 left-1/3 size-[22rem] rounded-full bg-primary-deep/10 blur-3xl [animation-delay:-12s]" />
        </div>

        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-8">
          <div className="animate-fade-up max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary backdrop-blur-sm sm:text-sm">
              {/* <Sparkles className="size-4" aria-hidden /> */}
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
              {/* <Button
              asChild
              size="lg"
              className="group h-13 rounded-full px-7 text-base shadow-lift transition-transform duration-300 hover:scale-[1.03]"
            >
              <a href="#demo">
                Book Free Demo
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </a>
            </Button> */}
              {/* <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 rounded-full border-border bg-background/70 px-7 text-base backdrop-blur-sm transition-transform duration-300 hover:scale-[1.03]"
            >
              <a href="#courses">
                <PlayCircle className="size-4" aria-hidden />
                View Courses
              </a>
            </Button> */}
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              {/* <GraduationCap className="size-4 text-primary" aria-hidden /> */}
              No card required — meet your tutor before you enroll.
            </p>
          </div>

          <div className="animate-fade-up relative [animation-delay:150ms]">
            <div className="animate-float-slow relative mx-auto max-w-xl">
              <div
                aria-hidden
                className="absolute inset-6 -z-10 rounded-[3rem] bg-primary/10 blur-2xl"
              />
              <img
                src={"bg.png"}
                width={1280}
                height={1088}
                alt="Illustration of an online tutor teaching on a video call while two students learn on a laptop and tablet, surrounded by books, a graduation cap, an achievement badge and a growth chart"
                className=" h-auto w-full drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <StatsSection />
      <AboutSection/>
      <CourseSection/>
      <Testimonials/>
      <TrustSection/>
    </>
  );
}
