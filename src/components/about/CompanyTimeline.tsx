import type { LucideIcon } from "lucide-react";
import {
  Award,
  Boxes,
  Building2,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tone: "green" | "gold";
};

const timelineItems: readonly TimelineItem[] = [
  {
    year: "2005",
    title: "Founded",
    description:
      "UNIK BIOTECH RESEARCH was established in Pimpalgaon Baswant, Nashik with a mission to serve farmers.",
    icon: Building2,
    tone: "green",
  },
  {
    year: "2008",
    title: "ISO 9001:2008 Certified",
    description:
      "Achieved ISO 9001:2008 certification, reaffirming commitment to quality.",
    icon: ShieldCheck,
    tone: "gold",
  },
  {
    year: "2012",
    title: "Product Range Expansion",
    description:
      "Expanded to 30+ products including herbal insecticides and biofertilizers.",
    icon: FlaskConical,
    tone: "green",
  },
  {
    year: "2020",
    title: "100+ Products Milestone",
    description:
      "Reached 100+ products serving thousands of farmers across Maharashtra.",
    icon: Boxes,
    tone: "gold",
  },
  {
    year: "2025",
    title: "20 Years of Trust",
    description:
      "Celebrating 20 years of serving farmers with quality and innovation.",
    icon: Award,
    tone: "green",
  },
];

export default function CompanyTimeline() {
  return (
    <section
      aria-labelledby="company-timeline-title"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#071E13]
        py-20
        sm:py-24
        lg:py-32
        xl:py-36
      "
    >
      {/* =======================================================
          BACKGROUND FOUNDATION
      ======================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-30
          bg-[linear-gradient(115deg,#05180F_0%,#071E13_48%,#0A2C1A_100%)]
        "
      />

      {/* =======================================================
          ATMOSPHERIC LIGHT
      ======================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-80
          top-[18%]
          -z-20
          h-175
          w-175
          rounded-full
          bg-emerald-700/15
          blur-[180px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-72
          bottom-[-25%]
          -z-20
          h-175
          w-175
          rounded-full
          bg-green-700/12
          blur-[190px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[42%]
          top-[5%]
          -z-20
          h-125
          w-125
          rounded-full
          bg-emerald-400/6
          blur-[150px]
        "
      />

      {/* =======================================================
          SCIENTIFIC GRID
      ======================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[linear-gradient(to_right,rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.022)_1px,transparent_1px)]
          bg-size-[72px_72px]
        "
      />

      {/* =======================================================
          MICRO TEXTURE
      ======================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-[0.035]
        "
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* =======================================================
          CONTENT
      ======================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-375
          px-6
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-[1fr_0.72fr]
            lg:items-end
            lg:gap-16
          "
        >
          <div className="max-w-190">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#D2A64F]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.32em]
                  text-[#D8B263]
                  sm:text-[11px]
                "
              >
                Our Legacy
              </span>
            </div>

            <h2
              id="company-timeline-title"
              className="
                mt-7
                max-w-180
                font-heading
                text-[2.75rem]
                font-extrabold
                leading-[1.02]
                tracking-[-0.055em]
                text-white
                sm:text-[3.5rem]
                lg:text-[4rem]
                xl:text-[4.5rem]
              "
            >
              Twenty years.
              <span className="block text-[#9BDDAB]">
                One continuous journey.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-125
              text-base
              leading-8
              text-white/55
              sm:text-[1.05rem]
              lg:pb-2
            "
          >
            From a local agricultural inputs manufacturer in Nashik
            to a growing product portfolio serving thousands of
            farmers.
          </p>
        </div>

        {/* =====================================================
            TIMELINE
        ====================================================== */}

        <div className="relative mt-16 lg:mt-24">
          {/* ===================================================
              DESKTOP CENTER AXIS
          ==================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-10
              left-1/2
              top-10
              hidden
              w-px
              -translate-x-1/2
              bg-white/10
              lg:block
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-10
              hidden
              h-[calc(100%-5rem)]
              w-px
              -translate-x-1/2
              bg-linear-to-b
              from-emerald-400/80
              via-emerald-400/45
              to-[#D7AD59]/70
              lg:block
            "
          />

          {/* ===================================================
              MOBILE AXIS
          ==================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-8
              left-5
              top-8
              w-px
              bg-linear-to-b
              from-emerald-400/70
              via-emerald-400/35
              to-[#D7AD59]/60
              lg:hidden
            "
          />

          {/* ===================================================
              ITEMS
          ==================================================== */}

          <div className="space-y-8 lg:space-y-5">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;
              const isLast = index === timelineItems.length - 1;

              return (
                <article
                  key={item.year}
                  className="
                    group
                    relative
                    pl-14
                    lg:grid
                    lg:min-h-62
                    lg:grid-cols-[1fr_120px_1fr]
                    lg:items-center
                    lg:pl-0
                  "
                >
                  {/* =============================================
                      MOBILE NODE
                  ============================================== */}

                  <div
                    className={`
                      absolute
                      left-0
                      top-8
                      z-20
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-110
                      lg:hidden

                      ${
                        item.tone === "green"
                          ? "border-emerald-300/25 bg-[#0A6B3B] text-emerald-100"
                          : "border-amber-300/25 bg-[#8A611E] text-amber-100"
                      }
                    `}
                  >
                    <Icon
                      aria-hidden="true"
                      size={17}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* =============================================
                      LEFT COLUMN
                  ============================================== */}

                  <div
                    className={`
                      ${
                        isLeft
                          ? "lg:col-start-1 lg:row-start-1"
                          : "lg:col-start-1 lg:row-start-1"
                      }
                    `}
                  >
                    {isLeft ? (
                      <TimelineCard
                        item={item}
                        align="right"
                        isLast={isLast}
                      />
                    ) : (
                      <TimelineYear
                        year={item.year}
                        align="right"
                        tone={item.tone}
                      />
                    )}
                  </div>

                  {/* =============================================
                      CENTER NODE
                  ============================================== */}

                  <div
                    className="
                      relative
                      z-20
                      hidden
                      items-center
                      justify-center
                      lg:col-start-2
                      lg:row-start-1
                      lg:flex
                    "
                  >
                    <div
                      className={`
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        border-[5px]
                        border-[#071E13]
                        shadow-[0_12px_35px_rgba(0,0,0,0.28)]
                        transition-[transform,box-shadow]
                        duration-500
                        ease-out
                        group-hover:scale-110

                        ${
                          item.tone === "green"
                            ? "bg-[#0A8A4A] text-white group-hover:shadow-[0_0_45px_rgba(16,185,129,0.3)]"
                            : "bg-[#B17B24] text-white group-hover:shadow-[0_0_45px_rgba(217,164,65,0.28)]"
                        }
                      `}
                    >
                      <Icon
                        aria-hidden="true"
                        size={20}
                        strokeWidth={1.9}
                      />
                    </div>
                  </div>

                  {/* =============================================
                      RIGHT COLUMN
                  ============================================== */}

                  <div
                    className="
                      lg:col-start-3
                      lg:row-start-1
                    "
                  >
                    {isLeft ? (
                      <TimelineYear
                        year={item.year}
                        align="left"
                        tone={item.tone}
                      />
                    ) : (
                      <TimelineCard
                        item={item}
                        align="left"
                        isLast={isLast}
                      />
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

type TimelineCardProps = {
  item: TimelineItem;
  align: "left" | "right";
  isLast: boolean;
};

function TimelineCard({
  item,
  align,
  isLast,
}: TimelineCardProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        p-6
        transition-[transform,border-color,background-color,box-shadow]
        duration-500
        ease-out
        group-hover:-translate-y-1
        sm:p-7
        lg:max-w-130
        lg:p-8

        ${
          align === "right"
            ? "lg:ml-auto lg:text-right"
            : "lg:mr-auto lg:text-left"
        }

        ${
          isLast
            ? "border-emerald-300/20 bg-emerald-500/10 shadow-[0_22px_65px_rgba(0,0,0,0.16)]"
            : "border-white/10 bg-white/4.5 shadow-[0_18px_55px_rgba(0,0,0,0.12)]"
        }

        hover:border-emerald-300/20
        hover:bg-white/[0.07]
        hover:shadow-[0_28px_75px_rgba(0,0,0,0.2)]
      `}
    >
      <span
        className="
          text-[10px]
          font-bold
          uppercase
          tracking-[0.28em]
          text-emerald-300/65
          lg:hidden
        "
      >
        {item.year}
      </span>

      <h3
        className="
          mt-3
          font-heading
          text-xl
          font-bold
          tracking-tight
          text-white
          lg:mt-0
          lg:text-[1.35rem]
        "
      >
        {item.title}
      </h3>

      <p
        className="
          mt-4
          text-sm
          leading-7
          text-white/52
          sm:text-[0.95rem]
        "
      >
        {item.description}
      </p>
    </div>
  );
}

type TimelineYearProps = {
  year: string;
  align: "left" | "right";
  tone: TimelineItem["tone"];
};

function TimelineYear({
  year,
  align,
  tone,
}: TimelineYearProps) {
  return (
    <div
      className={`
        hidden
        lg:block

        ${align === "right" ? "text-right" : "text-left"}
      `}
    >
      <span
        className={`
          font-heading
          text-[4.75rem]
          font-extrabold
          leading-none
          tracking-[-0.07em]
          transition-colors
          duration-500

          ${
            tone === "green"
              ? "text-emerald-100/10 group-hover:text-emerald-200/20"
              : "text-amber-100/10 group-hover:text-amber-200/20"
          }
        `}
      >
        {year}
      </span>
    </div>
  );
}