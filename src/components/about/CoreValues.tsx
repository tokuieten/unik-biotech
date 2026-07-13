import type { LucideIcon } from "lucide-react";
import {
  Handshake,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Microscope,
  ShieldCheck,
} from "lucide-react";

type CoreValue = {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
};

const coreValues: readonly CoreValue[] = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Quality",
    description:
      "We are committed to maintaining high standards across formulation, manufacturing and every product supplied to the agricultural community.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Innovation",
    description:
      "We continuously explore better formulations, practical technologies and new agricultural solutions for evolving crop requirements.",
  },
  {
    icon: Handshake,
    number: "03",
    title: "Trust",
    description:
      "Long-term relationships with farmers, dealers and partners are built through consistency, transparency and dependable products.",
  },
  {
    icon: Microscope,
    number: "04",
    title: "Research",
    description:
      "Scientific understanding, crop response and field requirements guide the way we approach agricultural product development.",
  },
  {
    icon: Leaf,
    number: "05",
    title: "Sustainability",
    description:
      "We support agricultural productivity with a responsible approach toward crop health, soil condition and long-term farming.",
  },
  {
    icon: HeartHandshake,
    number: "06",
    title: "Farmer First",
    description:
      "The practical realities of farmers remain central to how we think, develop solutions and serve the agricultural ecosystem.",
  },
];

export default function CoreValues() {
  return (
    <section
      aria-labelledby="core-values-title"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#FCFCF8]
        py-20
        sm:py-24
        lg:py-32
        xl:py-36
      "
    >
      {/* =======================================================
          BASE
      ======================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-30
          bg-[#FCFCF8]
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
          -left-72
          top-[-18%]
          -z-20
          h-175
          w-175
          rounded-full
          bg-emerald-100/60
          blur-[180px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-72
          bottom-[-22%]
          -z-20
          h-175
          w-175
          rounded-full
          bg-amber-100/45
          blur-[190px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[42%]
          top-[32%]
          -z-20
          h-120
          w-120
          rounded-full
          bg-cyan-100/30
          blur-[150px]
        "
      />

      {/* =======================================================
          GRID
      ======================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[linear-gradient(to_right,rgba(20,52,32,0.022)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,52,32,0.022)_1px,transparent_1px)]
          bg-size-[72px_72px]
        "
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
              <span className="h-px w-10 bg-[#B88931]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.32em]
                  text-[#9A7027]
                  sm:text-[11px]
                "
              >
                Core Values
              </span>
            </div>

            <h2
              id="core-values-title"
              className="
                mt-7
                max-w-180
                font-heading
                text-[2.75rem]
                font-extrabold
                leading-[1.02]
                tracking-[-0.055em]
                text-[#142C1D]
                sm:text-[3.5rem]
                lg:text-[4rem]
                xl:text-[4.5rem]
              "
            >
              Principles that shape

              <span className="block text-[#17643A]">
                every decision.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-125
              text-base
              leading-8
              text-[#66736A]
              sm:text-[1.05rem]
              lg:pb-2
            "
          >
            Our values define how we research, manufacture, build
            relationships and contribute to agriculture. They are the
            operating principles behind UNIK BIOTECH RESEARCH.
          </p>
        </div>

        {/* =====================================================
            VALUES GRID
        ====================================================== */}

        <div
          className="
            mt-16
            grid
            gap-px
            overflow-hidden
            rounded-4xl
            border
            border-[#DCE5DC]
            bg-[#DCE5DC]
            shadow-[0_28px_80px_rgba(18,55,38,0.08)]
            sm:grid-cols-2
            lg:mt-20
            lg:grid-cols-3
          "
        >
          {coreValues.map(
            ({
              icon: Icon,
              number,
              title,
              description,
            }) => (
              <article
                key={number}
                className="
                  group
                  relative
                  min-h-90
                  overflow-hidden
                  bg-white
                  p-7
                  transition-[background-color]
                  duration-500
                  ease-out
                  sm:p-8
                  lg:min-h-100
                  lg:p-10
                  hover:bg-[#F5FAF5]
                "
              >
                {/* =============================================
                    HOVER GLOW
                ============================================== */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-28
                    -top-28
                    h-70
                    w-70
                    rounded-full
                    bg-emerald-100/0
                    blur-[90px]
                    transition-colors
                    duration-500
                    group-hover:bg-emerald-100/75
                  "
                />

                {/* =============================================
                    TOP META
                ============================================== */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-start
                    justify-between
                    gap-6
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-[18px]
                      bg-[#E4F0E6]
                      text-[#17643A]
                      transition-[transform,background-color,color,box-shadow]
                      duration-500
                      ease-out
                      group-hover:-translate-y-1
                      group-hover:scale-[1.035]
                      group-hover:bg-[#17643A]
                      group-hover:text-white
                      group-hover:shadow-[0_16px_35px_rgba(23,100,58,0.2)]
                    "
                  >
                    <Icon
                      aria-hidden="true"
                      size={23}
                      strokeWidth={1.9}
                    />
                  </div>

                  <span
                    className="
                      font-heading
                      text-[3.25rem]
                      font-extrabold
                      leading-none
                      tracking-[-0.07em]
                      text-[#183326]/5.5
                      transition-colors
                      duration-500
                      group-hover:text-[#17643A]/10
                    "
                  >
                    {number}
                  </span>
                </div>

                {/* =============================================
                    CONTENT
                ============================================== */}

                <div
                  className="
                    relative
                    z-10
                    mt-16
                    lg:mt-20
                  "
                >
                  <div
                    aria-hidden="true"
                    className="
                      h-px
                      w-10
                      bg-[#C49A49]
                      transition-[width,background-color]
                      duration-500
                      ease-out
                      group-hover:w-16
                      group-hover:bg-[#17643A]
                    "
                  />

                  <h3
                    className="
                      mt-6
                      font-heading
                      text-[1.6rem]
                      font-extrabold
                      leading-tight
                      tracking-[-0.04em]
                      text-[#183326]
                      sm:text-[1.75rem]
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-105
                      text-sm
                      leading-7
                      text-[#6B786F]
                      sm:text-[0.95rem]
                    "
                  >
                    {description}
                  </p>
                </div>

                {/* =============================================
                    BOTTOM ACCENT
                ============================================== */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-1
                    origin-left
                    scale-x-0
                    bg-linear-to-r
                    from-[#17643A]
                    via-emerald-500
                    to-[#9EDBAA]
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-x-100
                  "
                />
              </article>
            )
          )}
        </div>

        {/* =====================================================
            VALUE STATEMENT
        ====================================================== */}

        <div
          className="
            mt-10
            grid
            overflow-hidden
            rounded-[28px]
            border
            border-[#D7E2D8]
            bg-[#123D27]
            shadow-[0_24px_70px_rgba(18,55,38,0.12)]
            lg:grid-cols-[0.78fr_1.22fr]
          "
        >
          {/* ===================================================
              LABEL PANEL
          ==================================================== */}

          <div
            className="
              relative
              overflow-hidden
              border-b
              border-white/10
              px-7
              py-10
              sm:px-9
              lg:border-b-0
              lg:border-r
              lg:px-12
              lg:py-14
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-28
                -top-32
                h-80
                w-80
                rounded-full
                bg-emerald-400/12
                blur-[100px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#A9DDB6]
                "
              >
                The UNIK Standard
              </p>

              <p
                className="
                  mt-5
                  max-w-100
                  font-heading
                  text-[1.75rem]
                  font-extrabold
                  leading-[1.15]
                  tracking-[-0.04em]
                  text-white
                  sm:text-[2rem]
                "
              >
                Science with purpose. Quality with responsibility.
              </p>
            </div>
          </div>

          {/* ===================================================
              STATEMENT
          ==================================================== */}

          <div
            className="
              relative
              flex
              items-center
              px-7
              py-10
              sm:px-9
              lg:px-12
              lg:py-14
              xl:px-16
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-32
                bottom-[-80%]
                h-100
                w-100
                rounded-full
                bg-emerald-500/10
                blur-[120px]
              "
            />

            <p
              className="
                relative
                z-10
                max-w-180
                text-base
                leading-8
                text-white/65
                sm:text-lg
                sm:leading-9
              "
            >
              Every product, process and partnership should contribute
              to one outcome: practical agricultural progress that
              farmers can depend on season after season.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}