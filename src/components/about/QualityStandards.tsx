import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Check,
  FlaskConical,
  Microscope,
  ScanSearch,
  ShieldCheck,
  TestTubeDiagonal,
} from "lucide-react";

type QualityStandard = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  checks: readonly string[];
};

const qualityStandards: readonly QualityStandard[] = [
  {
    icon: ShieldCheck,
    eyebrow: "Certified System",
    title: "ISO 9001:2008",
    description:
      "A structured quality management approach supporting controlled manufacturing, documented processes and consistent product standards.",
    checks: [
      "Documented quality processes",
      "Controlled manufacturing systems",
      "Continuous process improvement",
    ],
  },
  {
    icon: FlaskConical,
    eyebrow: "Formulation Control",
    title: "Batch-Level Quality",
    description:
      "Every formulation is handled through defined production and quality checkpoints before it moves into the agricultural supply network.",
    checks: [
      "Raw material evaluation",
      "Formulation consistency checks",
      "Finished batch assessment",
    ],
  },
  {
    icon: Microscope,
    eyebrow: "Research Discipline",
    title: "Science-Led Development",
    description:
      "Product development is shaped around crop physiology, nutrient response and the practical requirements of modern Indian agriculture.",
    checks: [
      "Crop-focused formulation",
      "Agricultural research inputs",
      "Field requirement analysis",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    icon: ScanSearch,
    title: "Input Review",
    description:
      "Raw materials and formulation inputs are evaluated against defined requirements.",
  },
  {
    number: "02",
    icon: TestTubeDiagonal,
    title: "Controlled Formulation",
    description:
      "Production follows structured formulation and manufacturing processes.",
  },
  {
    number: "03",
    icon: Microscope,
    title: "Quality Assessment",
    description:
      "Product characteristics and batch consistency are reviewed before release.",
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Approved for Supply",
    description:
      "Qualified products move forward for packaging and agricultural distribution.",
  },
] as const;

export default function QualityStandards() {
  return (
    <section
      aria-labelledby="quality-standards-title"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#F7F9F5]
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
          bg-[#F7F9F5]
        "
      />

      {/* =======================================================
          ATMOSPHERE
      ======================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-72
          top-[-12%]
          -z-20
          h-175
          w-175
          rounded-full
          bg-emerald-100/60
          blur-[170px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-72
          bottom-[-18%]
          -z-20
          h-175
          w-175
          rounded-full
          bg-amber-100/45
          blur-[180px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[42%]
          top-[8%]
          -z-20
          h-120
          w-120
          rounded-full
          bg-cyan-100/35
          blur-[150px]
        "
      />

      {/* =======================================================
          FINE GRID
      ======================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[linear-gradient(to_right,rgba(20,52,32,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,52,32,0.025)_1px,transparent_1px)]
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
                Quality Standards
              </span>
            </div>

            <h2
              id="quality-standards-title"
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
              Quality is not inspected in.

              <span className="block text-[#17643A]">
                It is engineered in.
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
            From formulation inputs to finished batches, our quality
            approach is built around control, consistency and
            responsible agricultural manufacturing.
                    </p>
        </div>

        {/* =====================================================
            QUALITY LAB VISUAL
        ====================================================== */}

        <div
          className="
            group
            relative
            mt-12
            min-h-85
            overflow-hidden
            rounded-[30px]
            border
            border-[#E0E8E1]
            shadow-[0_24px_70px_rgba(17,55,32,0.10)]
            sm:min-h-105
            lg:mt-16
            lg:min-h-120
          "
        >
          <Image
            src="/images/about/about-quality-lab.jpg"
            alt="Agricultural formulation quality control and laboratory testing"
            fill
            quality={75}
            sizes="(max-width: 1024px) 100vw, 90vw"
            className="
              object-cover
              object-center
              transition-transform
              duration-1000
              ease-out
              group-hover:scale-[1.02]
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-linear-to-r
              from-[#061F13]/65
              via-[#061F13]/10
              to-transparent
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-0
              z-10
              max-w-145
              p-7
              sm:p-10
              lg:p-12
            "
          >
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-emerald-300
              "
            >
              Controlled Quality
            </span>

            <h3
              className="
                mt-4
                font-heading
                text-3xl
                font-extrabold
                leading-tight
                tracking-tight
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              Precision before every product leaves our facility.
            </h3>

            <p
              className="
                mt-5
                max-w-120
                text-sm
                leading-7
                text-white/70
                sm:text-base
              "
            >
              Formulations are evaluated through controlled quality
              processes designed to support consistency, reliability and
              dependable agricultural performance.
            </p>
          </div>
        </div>

        {/* =====================================================
            STANDARD CARDS
        ====================================================== */}

        <div
          className="
            mt-16
            grid
            gap-5
            md:grid-cols-2
            lg:mt-20
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {qualityStandards.map(
            ({
              icon: Icon,
              eyebrow,
              title,
              description,
              checks,
            }) => (
              <article
                key={title}
                className="
                  group
                  relative
                  flex
                  min-h-full
                  flex-col
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#DCE5DC]
                  bg-white/80
                  p-7
                  shadow-[0_18px_55px_rgba(18,55,38,0.055)]
                  backdrop-blur-sm
                  transition-[transform,border-color,box-shadow]
                  duration-500
                  ease-out
                  hover:-translate-y-2
                  hover:border-emerald-900/15
                  hover:shadow-[0_30px_80px_rgba(18,55,38,0.11)]
                  sm:p-8
                  lg:p-9
                "
              >
                {/* =============================================
                    CARD ATMOSPHERE
                ============================================== */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-52
                    w-52
                    rounded-full
                    bg-emerald-100/0
                    blur-3xl
                    transition-colors
                    duration-500
                    group-hover:bg-emerald-100/70
                  "
                />

                {/* =============================================
                    ICON
                ============================================== */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-[18px]
                    bg-[#E2F0E5]
                    text-[#17643A]
                    transition-[transform,background-color,color]
                    duration-500
                    ease-out
                    group-hover:-translate-y-1
                    group-hover:scale-[1.03]
                    group-hover:bg-[#17643A]
                    group-hover:text-white
                  "
                >
                  <Icon
                    aria-hidden="true"
                    size={23}
                    strokeWidth={1.9}
                  />
                </div>

                {/* =============================================
                    CONTENT
                ============================================== */}

                <div className="relative z-10">
                  <p
                    className="
                      mt-8
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.28em]
                      text-[#9A7027]
                    "
                  >
                    {eyebrow}
                  </p>

                  <h3
                    className="
                      mt-3
                      font-heading
                      text-[1.5rem]
                      font-extrabold
                      leading-tight
                      tracking-[-0.035em]
                      text-[#183326]
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mt-5
                      text-sm
                      leading-7
                      text-[#6D7971]
                      sm:text-[0.95rem]
                    "
                  >
                    {description}
                  </p>
                </div>

                {/* =============================================
                    CHECKS
                ============================================== */}

                <div
                  className="
                    relative
                    z-10
                    mt-8
                    space-y-4
                    border-t
                    border-[#E3EAE3]
                    pt-7
                  "
                >
                  {checks.map((check) => (
                    <div
                      key={check}
                      className="flex items-start gap-3"
                    >
                      <div
                        className="
                          mt-0.5
                          flex
                          h-5
                          w-5
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#E2F0E5]
                          text-[#17643A]
                        "
                      >
                        <Check
                          aria-hidden="true"
                          size={12}
                          strokeWidth={2.5}
                        />
                      </div>

                      <span
                        className="
                          text-sm
                          font-medium
                          leading-6
                          text-[#536158]
                        "
                      >
                        {check}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            )
          )}
        </div>

        {/* =====================================================
            QUALITY PROCESS
        ====================================================== */}

        <div
          className="
            relative
            mt-16
            overflow-hidden
            rounded-4xl
            border
            border-[#D7E2D8]
            bg-[#102F20]
            px-6
            py-10
            shadow-[0_30px_90px_rgba(17,55,32,0.14)]
            sm:px-8
            sm:py-12
            lg:mt-20
            lg:px-12
            lg:py-14
            xl:px-14
          "
        >
          {/* =============================================
              PANEL ATMOSPHERE
          ============================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-36
              -top-44
              h-120
              w-120
              rounded-full
              bg-emerald-500/15
              blur-[130px]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-40
              bottom-[-55%]
              h-125
              w-125
              rounded-full
              bg-green-400/10
              blur-[140px]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[linear-gradient(to_right,rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.022)_1px,transparent_1px)]
              bg-size-[64px_64px]
            "
          />

          {/* =============================================
              PROCESS HEADER
          ============================================== */}

          <div
            className="
              relative
              z-10
              grid
              gap-6
              lg:grid-cols-[1fr_0.72fr]
              lg:items-end
              lg:gap-14
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-emerald-300
                "
              >
                Quality Flow
              </p>

              <h3
                className="
                  mt-4
                  max-w-155
                  font-heading
                  text-[2rem]
                  font-extrabold
                  leading-[1.08]
                  tracking-[-0.045em]
                  text-white
                  sm:text-[2.5rem]
                  lg:text-[3rem]
                "
              >
                A controlled path from input to approved product.
              </h3>
            </div>

            <p
              className="
                max-w-120
                text-sm
                leading-7
                text-white/55
                sm:text-base
                sm:leading-8
              "
            >
              Defined checkpoints create a repeatable system for
              maintaining formulation consistency and product
              confidence.
            </p>
          </div>

          {/* =============================================
              PROCESS STEPS
          ============================================== */}

          <div
            className="
              relative
              z-10
              mt-12
              grid
              gap-4
              md:grid-cols-2
              lg:mt-14
              lg:grid-cols-4
              lg:gap-0
            "
          >
            {processSteps.map(
              ({ number, icon: Icon, title, description }, index) => (
                <article
                  key={number}
                  className="
                    group/process
                    relative
                    rounded-[22px]
                    border
                    border-white/10
                    bg-white/4.5
                    p-6
                    transition-[transform,background-color,border-color]
                    duration-500
                    ease-out
                    hover:-translate-y-1
                    hover:border-emerald-300/20
                    hover:bg-white/[0.07]
                    lg:rounded-none
                    lg:border-y
                    lg:border-l-0
                    lg:border-r-0
                    lg:bg-transparent
                    lg:px-7
                    lg:py-8
                    lg:hover:bg-white/[0.035]
                  "
                >
                  {/* =========================================
                      CONNECTOR
                  ========================================== */}

                  {index < processSteps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        right-0
                        top-1/2
                        hidden
                        h-16
                        w-px
                        -translate-y-1/2
                        bg-white/10
                        lg:block
                      "
                    />
                  )}

                  <div className="flex items-center justify-between gap-4">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-[14px]
                        bg-emerald-400/12
                        text-emerald-300
                        transition-[transform,background-color,color]
                        duration-500
                        ease-out
                        group-hover/process:-translate-y-1
                        group-hover/process:bg-emerald-400
                        group-hover/process:text-[#082014]
                      "
                    >
                      <Icon
                        aria-hidden="true"
                        size={19}
                        strokeWidth={1.9}
                      />
                    </div>

                    <span
                      className="
                        font-heading
                        text-3xl
                        font-extrabold
                        tracking-[-0.06em]
                        text-white/10
                      "
                    >
                      {number}
                    </span>
                  </div>

                  <h4
                    className="
                      mt-7
                      font-heading
                      text-lg
                      font-bold
                      tracking-tight
                      text-white
                    "
                  >
                    {title}
                  </h4>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-white/50
                    "
                  >
                    {description}
                  </p>
                </article>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}