type FloatingCirclesProps = {
  /** Mirror the arrangement left-for-right so consecutive sections vary. */
  flip?: boolean;
};

/**
 * Decorative layer inspired by the Stylus brand theme: small floating
 * yellow (and a few teal) dots hugging the side edges, small ring
 * circles, and large circles peeking in from the section edges.
 * Sits behind all content so it never blocks text or clicks.
 */
export function FloatingCircles({ flip = false }: FloatingCirclesProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={flip ? { transform: "scaleX(-1)" } : undefined}
      >
        {/* Large circles peeking in from the edges */}
        <div className="animate-float-slow absolute -top-24 left-[6%] size-48 rounded-full border-14 border-brand-yellow/70 sm:size-56" />
        <div className="animate-blob absolute top-[24%] -right-28 size-64 rounded-full bg-brand-yellow/25 sm:-right-36 sm:size-80" />
        <div className="animate-float-slow absolute -bottom-16 right-[12%] size-40 rounded-full bg-brand-teal/15 sm:size-48 [animation-delay:-3.5s]" />
        <div className="absolute top-[64%] -left-20 size-44 rounded-full border-10 border-brand-yellow/40 sm:-left-24 sm:size-52" />

        {/* Small side dots */}
        <span className="animate-space-orbit absolute top-[12%] left-[3%] size-3 rounded-full bg-brand-yellow/80" />
        <span className="animate-float-slow absolute top-[34%] left-[1.8%] size-5 rounded-full bg-brand-yellow [animation-delay:-2.2s]" />
        <span className="animate-space-twinkle absolute top-[57%] left-[3.2%] size-2.5 rounded-full bg-brand-teal/80" />
        <span className="animate-float-slow absolute top-[80%] left-[2.2%] size-4 rounded-full bg-brand-yellow/70 [animation-delay:-4.5s]" />
        <span className="animate-space-orbit absolute top-[22%] right-[2.4%] size-4 rounded-full bg-brand-yellow/80 [animation-delay:-1.6s]" />
        <span className="animate-float-slow absolute top-[46%] right-[1.6%] size-2.5 rounded-full bg-brand-teal/70 [animation-delay:-3.1s]" />
        <span className="animate-space-twinkle absolute top-[70%] right-[3%] size-3 rounded-full bg-brand-yellow/85 [animation-delay:-2.8s]" />

        {/* Small rings */}
        <span className="animate-float-slow absolute top-[25%] left-[5%] size-7 rounded-full border-2 border-brand-yellow/55 [animation-delay:-1.2s]" />
        <span className="animate-float-slow absolute top-[84%] right-[5.5%] size-6 rounded-full border-2 border-brand-yellow/45 [animation-delay:-2.6s]" />
      </div>
    </div>
  );
}
