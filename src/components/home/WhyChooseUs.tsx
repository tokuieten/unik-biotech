import type { LucideIcon } from "lucide-react";
import {
  Droplets,
  FlaskConical,
  Leaf,
  Microscope,
  ShieldCheck,
} from "lucide-react";

type CredibilityItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const credibilityItems: readonly CredibilityItem[] = [
  {
    icon: Microscope,
    title: "R&D Driven",
    description:
      "Crop-specific formulations developed through focused agricultural research and practical crop science.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control",
    description:
      "Every batch follows controlled quality processes aligned with ISO 9001:2008 manufacturing standards.",
  },
  {
    icon: Leaf,
    title: "Sustainable Agriculture",
    description:
      "Responsible agricultural solutions designed to support crop productivity while protecting long-term soil health.",
  },
  {
    icon: Droplets,
    title: "Field Validated",
    description:
      "Solutions shaped by real agricultural requirements and the practical realities faced by Indian farmers.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      aria-labelledby="scientific-credibility-title"
      className="relative isolate overflow-hidden bg-[#031C10] py-20 sm:py-24 lg:py-28 xl:py-32"
    >
      {/* Background depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(112deg,#02170D_0%,#031D11_45%,#062A17_100%)]"
      />

      {/* Right green atmospheric glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12%] top-[-30%] -z-20 h-212.5 w-212.5 rounded-full bg-emerald-700/20 blur-[180px]"
      />

      {/* Lower atmospheric glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-55%] left-[32%] -z-20 h-180 w-180 rounded-full bg-green-800/15 blur-[170px]"
      />

      {/* Scientific background visual */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-18%] right-[4%] -z-10 h-[78%] w-[58%] opacity-[0.055]"
      >
        <FlaskConical
          strokeWidth={0.65}
          className="h-full w-full text-emerald-200"
        />
      </div>

      {/* Fine grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-size-[72px_72px]"
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-375 px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section heading */}
        <div className="max-w-190">
          <div className="flex items-center gap-3">
            <FlaskConical
              aria-hidden="true"
              size={16}
              strokeWidth={1.9}
              className="text-emerald-400"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400 sm:text-[11px]">
              Scientific Credibility
            </span>
          </div>

          <h2
            id="scientific-credibility-title"
            className="mt-7 max-w-180 font-heading text-[2.7rem] font-extrabold leading-[1.05] tracking-tighter text-[#F7FAF7] sm:text-[3.4rem] lg:text-[4rem] xl:text-[4.35rem]"
          >
            Built in the lab.
            <span className="block">Proven on the farm.</span>
          </h2>

          <p className="mt-6 max-w-175 text-base leading-8 text-white/62 sm:text-lg">
            Two decades of formulation science distilled into every bottle,
            sachet and bag that leaves our facility.
          </p>
        </div>

        {/* Credibility cards */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {credibilityItems.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="
                group
                relative
                min-h-57.5
                overflow-hidden
                rounded-3xl
                border
                border-white/12
                bg-[#062416]/72
                px-7
                py-8
                backdrop-blur-sm
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-emerald-400/28
                hover:bg-[#082B1A]/88
                sm:px-8
                sm:py-9
              "
            >
              {/* Hover atmosphere */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-500/0 blur-3xl transition-colors duration-500 group-hover:bg-emerald-500/10"
              />

              <div className="relative z-10">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#009C51] text-white shadow-[0_14px_34px_rgba(0,156,81,0.2)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.03]">
                  <Icon
                    aria-hidden="true"
                    size={22}
                    strokeWidth={1.9}
                  />
                </div>

                <h3 className="mt-7 font-heading text-[1.15rem] font-bold tracking-tight text-white sm:text-xl">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60 sm:text-[0.95rem]">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}