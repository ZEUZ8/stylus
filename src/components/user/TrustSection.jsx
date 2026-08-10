import { Building2, Compass, Landmark, Library, School, Shapes } from "lucide-react";

const PARTNERS = [
  { name: "Northfield Academy", icon: School },
  { name: "Ridgeway Institute", icon: Landmark },
  { name: "Brightlake School", icon: Library },
  { name: "Vertex College", icon: Building2 },
  { name: "Compass Prep", icon: Compass },
  { name: "Meridian Labs", icon: Shapes },
];

const TrustSection = ()=> {
  return (
    <section
      id="testimonials"
      aria-labelledby="trust-heading"
      className="bg-background py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="trust-heading" className="text-2xl font-extrabold sm:text-3xl">
            Trusted by Students &amp; Parents
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Partnered with schools, colleges and coaching institutes to support learners at
            every stage of their journey.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {PARTNERS.map((partner) => {
            const Icon = partner.icon;
            return (
              <li key={partner.name}>
                <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-secondary/50 px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-background hover:shadow-soft">
                  <Icon className="size-6 shrink-0 text-primary" aria-hidden />
                  <span className="text-xs font-semibold text-muted-foreground sm:text-sm">
                    {partner.name}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default TrustSection;
