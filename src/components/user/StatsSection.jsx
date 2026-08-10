"use client"
import { useEffect, useRef, useState } from "react";
import { Award, BookOpen, TrendingUp, Users } from "lucide-react";

const STATS = [
  { value: 2500, suffix: "+", label: "Students Enrolled", icon: Users },
  { value: 98, suffix: "%", label: "Success Rate", icon: TrendingUp },
  { value: 120, suffix: "+", label: "Expert Tutors", icon: Award },
  { value: 15, suffix: "+", label: "Subjects Offered", icon: BookOpen },
];

function useCountUp(target, start, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(target);
      return;
    }
    let frame = 0;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start, duration]);

  return value;
}

function StatCard({ stat, start, index }) {
  const value = useCountUp(stat.value, start);
  const Icon = stat.icon;

  return (
    <li
      className="glass-card group rounded-3xl p-6  transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift sm:p-7"
      style={{ transitionDelay: `${index * 20}ms` }}
    >
      <span className="grid size-11 place-items-center rounded-full bg-blue-100 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <Icon className="size-5 " aria-hidden />
      </span>
      <p className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {value.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</p>
    </li>
  );
}

const StatsSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" aria-labelledby="stats-heading" className="relative bg-background pb-6">
      <div ref={ref} className="mx-auto -mt-14 max-w-7xl px-5 sm:px-8">
        <h2 id="stats-heading" className="sr-only">
          Stylus by the numbers
        </h2>
        <ul className=" grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} start={visible} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default StatsSection;
