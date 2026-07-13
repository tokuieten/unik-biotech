import Image from "next/image";
import {
  ArrowDownRight,
  BadgeCheck,
  Boxes,
  MapPin,
  Sprout,
} from "lucide-react";

type StoryMetric = {
  value: string;
  label: string;
};

const storyMetrics: readonly StoryMetric[] = [
  {
    value: "20+",
    label: "Years serving agriculture",
  },
  {
    value: "100+",
    label: "Agricultural products",
  },
  {
    value: "10,000+",
    label: "Farmers served",
  },
];

export default function OurStory() {
  return (
    <section
      aria-labelledby="our-story-title"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#FDFDF9]
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
          bg-[#FDFDF9]
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
          bottom-[-30%]
          -z-20
          h-165
          w-165
          rounded-full
          bg-emerald-100/45
          blur-[170px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-64
          top-[-35%]
          -z-20
          h-155
          w-155
          rounded-full
          bg-amber-100/35
          blur-[160px]
        "
      />

      {/* =======================================================
          TOP DIVIDER
      ======================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          -z-10
          h-px
          bg-linear-to-r
          from-transparent
          via-[#153D27]/10
          to-transparent
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
        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-[0.88fr_1.12fr]
            lg:gap-20
            xl:gap-28
          "
        >
          {/* ===================================================
              LEFT — STORY CONTENT
          ==================================================== */}

          <div className="lg:py-8">
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
                Our Roots
              </span>
            </div>

            <h2
              id="our-story-title"
              className="
                mt-7
                max-w-160
                font-heading
                text-[2.75rem]
                font-extrabold
                leading-[1.02]
                tracking-[-0.055em]
                text-[#10291B]
                sm:text-[3.5rem]
                lg:text-[4rem]
                xl:text-[4.5rem]
              "
            >
              Started with a
              <span className="block text-[#17643A]">
                simple mission.
              </span>
            </h2>

            <div
              className="
                mt-8
                max-w-155
                space-y-5
                text-base
                leading-8
                text-[#68756D]
                sm:text-[1.05rem]
              "
            >
              <p>
                Founded in 2005 in Pimpalgaon Baswant, Nashik — the
                heart of Maharashtra&apos;s grape and pomegranate belt
                — UNIK BIOTECH RESEARCH began with a simple mission:
                serve farmers with quality inputs they can trust.
              </p>

              <p>
                Over two decades, we have grown from a small local
                manufacturer to an ISO-certified company with 100+
                products serving 10,000+ farmers across India.
              </p>
            </div>

            {/* =================================================
                LOCATION / CERTIFICATION SIGNALS
            ================================================== */}

            <div
              className="
                mt-9
                flex
                flex-wrap
                gap-x-7
                gap-y-4
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-[13px]
                    bg-[#E5F2E8]
                    text-[#17643A]
                  "
                >
                  <MapPin
                    aria-hidden="true"
                    size={18}
                    strokeWidth={1.9}
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.24em]
                      text-[#98A39C]
                    "
                  >
                    Origin
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-bold
                      text-[#20382A]
                    "
                  >
                    Nashik, Maharashtra
                  </p>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="
                  hidden
                  h-10
                  w-px
                  bg-[#DCE5DE]
                  sm:block
                "
              />

              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-[13px]
                    bg-[#FFF1CF]
                    text-[#A66E12]
                  "
                >
                  <BadgeCheck
                    aria-hidden="true"
                    size={18}
                    strokeWidth={1.9}
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.24em]
                      text-[#98A39C]
                    "
                  >
                    Quality
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-bold
                      text-[#20382A]
                    "
                  >
                    ISO 9001 Certified
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                STORY METRICS
            ================================================== */}

            <div
              className="
                mt-12
                grid
                grid-cols-1
                border-y
                border-[#DCE5DE]
                sm:grid-cols-3
              "
            >
              {storyMetrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`
                    py-6
                    sm:px-6
                    sm:py-7

                    ${index === 0 ? "sm:pl-0" : ""}

                    ${
                      index !== storyMetrics.length - 1
                        ? "border-b border-[#DCE5DE] sm:border-b-0 sm:border-r"
                        : ""
                    }
                  `}
                >
                  <p
                    className="
                      font-heading
                      text-[2rem]
                      font-extrabold
                      leading-none
                      tracking-[-0.045em]
                      text-[#17643A]
                      sm:text-[2.25rem]
                    "
                  >
                    {metric.value}
                  </p>

                  <p
                    className="
                      mt-2
                      max-w-35
                      text-[10px]
                      font-bold
                      uppercase
                      leading-5
                      tracking-[0.17em]
                      text-[#7D8981]
                    "
                  >
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ===================================================
              RIGHT — VISUAL COMPOSITION
          ==================================================== */}

          <div
            className="
              relative
              mx-auto
              w-full
              max-w-180
              lg:mx-0
            "
          >
            {/* =================================================
                ESTABLISHED MARKER
            ================================================== */}

            <div
              className="
                absolute
                -left-3
                top-10
                z-30
                rounded-[22px]
                border
                border-white/70
                bg-[#FFFDF8]/95
                px-5
                py-5
                shadow-[0_20px_55px_rgba(17,55,32,0.15)]
                backdrop-blur-xl
                sm:-left-7
                sm:top-14
                sm:px-6
                lg:-left-10
              "
            >
              <span
                className="
                  block
                  font-heading
                  text-[2.5rem]
                  font-extrabold
                  leading-none
                  tracking-[-0.06em]
                  text-[#174A2C]
                  sm:text-[3rem]
                "
              >
                2005
              </span>

              <span
                className="
                  mt-2
                  block
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.27em]
                  text-[#849087]
                "
              >
                Established
              </span>
            </div>

            {/* =================================================
                MAIN IMAGE
            ================================================== */}

            <div
              className="
                group
                relative
                h-140
                overflow-hidden
                rounded-4xl
                bg-[#123D27]
                shadow-[0_36px_90px_rgba(17,55,32,0.18)]
                sm:h-165
                lg:h-180
              "
            >
              <Image
                src="/images/about/about-story-formulation.jpg"
                alt="Agricultural input formulation and manufacturing at UNIK BIOTECH RESEARCH"
                fill
                quality={75}
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="
                    object-cover
                    object-[50%_50%]
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-[1.025]
                "
                />

              {/* Image grading */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-[linear-gradient(180deg,rgba(5,28,17,0.02)_0%,rgba(5,28,17,0.08)_48%,rgba(5,28,17,0.82)_100%)]
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-[linear-gradient(90deg,rgba(4,28,16,0.14)_0%,transparent_48%)]
                "
              />

              {/* =================================================
                  IMAGE CAPTION
              ================================================== */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  z-20
                  p-7
                  sm:p-9
                  lg:p-10
                "
              >
                <div
                  className="
                    flex
                    max-w-130
                    items-start
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/15
                      bg-white/10
                      text-[#B9EDC4]
                      backdrop-blur-md
                    "
                  >
                    <Sprout
                      aria-hidden="true"
                      size={21}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <span
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.3em]
                        text-emerald-200/70
                      "
                    >
                      From Nashik to Indian Farms
                    </span>

                    <p
                      className="
                        mt-3
                        font-heading
                        text-xl
                        font-semibold
                        leading-8
                        tracking-[-0.02em]
                        text-white
                        sm:text-[1.35rem]
                      "
                    >
                      Two decades of agricultural manufacturing,
                      research and farmer-focused development.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                PRODUCT RANGE FLOATING CARD
            ================================================== */}

            <div
              className="
                relative
                z-30
                -mt-8
                ml-auto
                mr-4
                flex
                w-[86%]
                max-w-105
                items-center
                justify-between
                gap-5
                rounded-[22px]
                border
                border-[#D9E5DB]
                bg-white/95
                px-6
                py-5
                shadow-[0_22px_60px_rgba(17,55,32,0.12)]
                backdrop-blur-xl
                sm:-mt-10
                sm:mr-8
                sm:px-7
                sm:py-6
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#E4F2E7]
                    text-[#17643A]
                  "
                >
                  <Boxes
                    aria-hidden="true"
                    size={21}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p
                    className="
                      font-heading
                      text-lg
                      font-extrabold
                      tracking-tight
                      text-[#173326]
                    "
                  >
                    100+ Products
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      leading-5
                      text-[#78847C]
                    "
                  >
                    Built around real crop requirements.
                  </p>
                </div>
              </div>

              <ArrowDownRight
                aria-hidden="true"
                size={20}
                strokeWidth={1.8}
                className="
                  shrink-0
                  text-[#17643A]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}