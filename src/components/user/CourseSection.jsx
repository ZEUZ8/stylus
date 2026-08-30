import { ArrowRight, Atom, Calculator, Code2, FlaskConical, Globe2, PenLine } from "lucide-react";

// import { Button } from "@/components/ui/button";

const COURSES = [
  {
    icon: Calculator,
    title: "Mathematics",
    levels: "Grades 6–12 · Foundation to Advanced",
    body: "Algebra, geometry, calculus and problem-solving drills built for board and entrance exams.",
    tag: "Most booked",
  },
  {
    icon: Atom,
    title: "Physics",
    levels: "Grades 9–12 · JEE / NEET",
    body: "Concept-first teaching with derivations, numericals and weekly timed practice sets.",
  },
  {
    icon: FlaskConical,
    title: "Chemistry",
    levels: "Grades 9–12 · NEET",
    body: "Organic mechanisms, inorganic memory maps and physical chemistry calculation mastery.",
  },
  {
    icon: PenLine,
    title: "English & Writing",
    levels: "Grades 4–12 · IELTS prep",
    body: "Reading comprehension, grammar precision, essays and confident spoken communication.",
  },
  {
    icon: Globe2,
    title: "Social Studies",
    levels: "Grades 6–10",
    body: "History, civics and geography taught through timelines, maps and answer-writing frameworks.",
  },
  {
    icon: Code2,
    title: "Coding & CS",
    levels: "Grades 6–12 · College",
    body: "Python, data structures and project-based learning that builds real portfolios.",
    tag: "New",
  },
];

const CourseSection = ()=>{
  return (
    <section
      id="courses"
      aria-labelledby="courses-heading"
    //   className="bg-secondary/40 py-20 sm:py-28"
      className="bg-cyan-50/20 py-20 sm:py-28 "

    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
            Our Courses
          </span>
          <h2
            id="courses-heading"
            className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl"
          >
            Expert tutoring across 15+ subjects
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Choose a subject, tell us the goal, and we match you with an educator who has taught it
            hundreds of times before.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => {
            const Icon = course.icon;
            return (
              <li
                key={course.title}
                className="group relative flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift sm:p-7"
              >
                {course.tag ? (
                  <span className="absolute right-5 top-5 rounded-full bg-orange-100 px-3 py-1 text-[0.7rem] font-semibold text-accent-foreground">
                    {course.tag}
                  </span>
                ) : null}
                <span className="grid size-11 place-items-center rounded-full bg-[#4DA8BB]/10 text-[#4DA8BB] transition-colors duration-300 group-hover:bg-[#4DA8BB] group-hover:text-white">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold ">{course.title}</h3>
                <p className="mt-1 text-xs font-semibold text-[#4DA8BB]">{course.levels}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{course.body}</p>
              </li>
            );
          })}
        </ul>

        {/* <div className="mt-12 flex justify-center">
          <Button asChild size="lg" className="group h-13 rounded-full px-7 text-base">
            <a href="#contact">
              Book a free demo class
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </a>
          </Button>
        </div> */}
        
      </div>
    </section>
  );
}

export default CourseSection
