import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  FlaskConical,
  Leaf,
  ShieldCheck,
  Sprout,
} from "lucide-react";

type StoryFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const storyFeatures: readonly StoryFeature[] = [
  {
    icon: FlaskConical,
    title: "Research-led formulations",
    description:
      "Agricultural inputs developed around crop physiology, nutrient response and practical field requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Controlled quality",
    description:
      "Consistent manufacturing processes focused on dependable formulation and batch-level quality.",
  },
  {
    icon: Sprout,
    title: "Built for crop performance",
    description:
      "Solutions designed to support stronger growth, efficient nutrition and improved crop productivity.",
  },
  {
    icon: Leaf,
    title: "Responsible agriculture",
    description:
      "A long-term approach to productivity that respects crop health, soil condition and sustainable farming.",
  },
];

export default function CompanyStory() {
  return (
    <section
      aria-labelledby="company-story-title"
      className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      {/* Base background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[#F8FAF7]"
      />

      {/* Mint atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_4%_16%,rgba(198,238,210,0.78)_0%,rgba(222,244,228,0.48)_24%,transparent_49%)]"
      />

      {/* Cool cyan atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_90%_4%,rgba(196,232,239,0.72)_0%,rgba(222,241,243,0.44)_26%,transparent_54%)]"
      />

      {/* Warm cream atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_84%_90%,rgba(249,228,180,0.66)_0%,rgba(250,239,208,0.38)_27%,transparent_56%)]"
      />

      {/* Central light balance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_51%_45%,rgba(255,255,255,0.84)_0%,rgba(255,255,255,0.32)_38%,transparent_72%)]"
      />

      <div className="relative mx-auto w-full max-w-345 px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-[0.94fr_1.06fr] lg:gap-20 xl:gap-28">
          {/* LEFT MEDIA COLUMN */}
          <div className="relative mx-auto w-full max-w-155 lg:mx-0">
            {/* 2005 badge */}
            <div className="absolute -left-3 top-8 z-20 rounded-[20px] border border-white/70 bg-[#FFFDF7]/95 px-5 py-4 shadow-[0_18px_50px_rgba(17,55,32,0.13)] backdrop-blur-xl sm:-left-6 sm:top-12 sm:px-6 lg:-left-10">
              <span className="block font-heading text-[2rem] font-extrabold leading-none tracking-tighter text-[#174A2C] sm:text-[2.25rem]">
                2005
              </span>

              <span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.26em] text-[#7A887F]">
                Established
              </span>
            </div>

            {/* Unified image + caption composition */}
            <div className="overflow-hidden rounded-[30px] bg-[#123D27] shadow-[0_32px_80px_rgba(17,55,32,0.16)]">
              {/* Image */}
              <div className="group relative h-125 w-full overflow-hidden sm:h-145 lg:h-152.5">
                <Image
                  src="/images/about/lab.jpg"
                  alt="Agricultural research and crop development at UNIK BIOTECH RESEARCH"
                  fill
                  loading="eager"
                  quality={75}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 620px, 46vw"
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#123D27]/25 to-transparent"
                />
              </div>

              {/* Green caption panel */}
              <div className="relative flex min-h-55 items-center justify-center bg-[#123D27] px-8 py-12 text-center sm:px-12 lg:px-14">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(81,166,108,0.16)_0%,transparent_60%)]"
                />

                <div className="relative z-10 mx-auto max-w-110">
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#AEE8BF]">
                      <Sprout
                        aria-hidden="true"
                        size={19}
                        strokeWidth={1.9}
                      />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A9CDB3]">
                      Our Purpose
                    </span>
                  </div>

                  <p className="mt-6 font-heading text-xl font-semibold leading-normal tracking-tight text-white sm:text-[1.35rem]">
                    Better agricultural inputs for healthier crops, productive
                    farms and stronger farming outcomes.
                  </p>

                  <div className="mx-auto mt-7 h-px w-16 bg-white/20" />

                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.28em] text-white/45">
                    Nashik, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT COLUMN */}
          <div className="lg:py-6">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#B88931]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#9A7027]">
                Our Story
              </span>
            </div>

            <h2
              id="company-story-title"
              className="mt-6 max-w-180 font-heading text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.055em] text-[#142C1D] sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem]"
            >
              Rooted in science.

              <span className="block text-[#17643A]">
                Built for the field.
              </span>
            </h2>

            <p className="mt-7 max-w-165 text-base leading-8 text-[#66736A] sm:text-[1.05rem]">
              Founded in Nashik in 2005, UNIK BIOTECH RESEARCH develops
              agricultural inputs for the realities of modern farming. Our work
              connects formulation research, manufacturing discipline and field
              understanding to create practical crop solutions.
            </p>

            <p className="mt-4 max-w-165 text-base leading-8 text-[#66736A] sm:text-[1.05rem]">
              For two decades, the objective has remained precise: make reliable
              agricultural technology accessible to farmers and support better
              crop performance season after season.
            </p>

            <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {storyFeatures.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="group border-t border-[#D4E2D7] pt-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#E3F0E5]/90 text-[#17643A] transition-transform duration-300 group-hover:-translate-y-1">
                      <Icon
                        aria-hidden="true"
                        size={20}
                        strokeWidth={1.9}
                      />
                    </div>

                    <div>
                      <h3 className="font-heading text-[1.05rem] font-bold leading-6 tracking-tight text-[#193325]">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#748078]">
                        {description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-11">
              <Link
                href="/about"
                className="group inline-flex min-h-13.5 items-center justify-center gap-3 rounded-full bg-[#17643A] px-7 text-sm font-bold text-white shadow-[0_16px_38px_rgba(23,100,58,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#125530] hover:shadow-[0_20px_46px_rgba(23,100,58,0.26)]"
              >
                Discover Our Story

                <ArrowUpRight
                  aria-hidden="true"
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}