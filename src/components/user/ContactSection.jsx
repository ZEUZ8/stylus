"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/buttons";
import { FloatingCircles } from "@/components/ui/FloatingCircles";

const DETAILS = [
  { icon: Phone, label: "Call or WhatsApp", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "hello@stylustutoring.com" },
  {
    icon: Clock,
    label: "Class hours",
    value: "Mon–Sat, 7:00 AM – 9:30 PM IST",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Online worldwide · Studio in Kochi, India",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate bg-secondary/40 py-20 sm:py-28"
    >
      <FloatingCircles flip />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          
          {/* Contact information */}
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
              Contact
            </span>

            <h2
              id="contact-heading"
              className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl"
            >
              Book your free demo class
            </h2>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Tell us the subject and goal. We'll suggest a tutor and a time
              within one working day — no card required and no obligation after
              the demo.
            </p>

            <ul className="mt-9 grid gap-4">
              {DETAILS.map((item) => {
                const Icon = item.icon;

                return (
                  <li
                    key={item.label}
                    className="flex items-start gap-3.5"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                      <Icon
                        className="size-4"
                        aria-hidden="true"
                      />
                    </span>

                    <div>
                      <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        {item.label}
                      </p>

                      <p className="mt-0.5 text-sm font-semibold text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact form */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <form
              className="grid gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="c-name" className="text-sm font-semibold">
                    Your name
                  </label>

                  <input
                    id="c-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Priya Menon"
                    className="h-11 rounded-xl border border-input bg-background px-3.5 text-sm outline-none transition-colors focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/30"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="c-phone" className="text-sm font-semibold">
                    Phone
                  </label>

                  <input
                    id="c-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="h-11 rounded-xl border border-input bg-background px-3.5 text-sm outline-none transition-colors focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/30"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label htmlFor="c-email" className="text-sm font-semibold">
                  Email
                </label>

                <input
                  id="c-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="h-11 rounded-xl border border-input bg-background px-3.5 text-sm outline-none transition-colors focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/30"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label
                    htmlFor="c-subject"
                    className="text-sm font-semibold"
                  >
                    Subject
                  </label>

                  <select
                    id="c-subject"
                    name="subject"
                    className="h-11 rounded-xl border border-input bg-background px-3 text-sm outline-none transition-colors focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/30"
                  >
                    <option>Mathematics</option>
                    <option>Physics</option>
                    <option>Chemistry</option>
                    <option>English &amp; Writing</option>
                    <option>Social Studies</option>
                    <option>Coding &amp; CS</option>
                  </select>
                </div>

                <div className="grid gap-2">
                  <label
                    htmlFor="c-grade"
                    className="text-sm font-semibold"
                  >
                    Grade / level
                  </label>

                  <input
                    id="c-grade"
                    name="grade"
                    type="text"
                    placeholder="Grade 10, CBSE"
                    className="h-11 rounded-xl border border-input bg-background px-3.5 text-sm outline-none transition-colors focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/30"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label
                  htmlFor="c-message"
                  className="text-sm font-semibold"
                >
                  What would you like help with?
                </label>

                <textarea
                  id="c-message"
                  name="message"
                  rows={4}
                  placeholder="Goals, exam dates, preferred class timings…"
                  className="rounded-xl border border-input bg-background px-3.5 py-3 text-sm outline-none transition-colors focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/30"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="h-12 w-full rounded-full text-base"
              >
                Request my free demo
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                We reply within one working day. Your details are never shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}