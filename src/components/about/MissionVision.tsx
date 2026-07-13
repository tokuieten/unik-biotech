import Image from "next/image";
import {
  ArrowDownRight,
  Eye,
  Sprout,
  Target,
} from "lucide-react";

export default function MissionVision() {
  return (
    <section
      aria-labelledby="mission-vision-title"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#F8FAF7]
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
          bg-[#F8FAF7]
        "
      />

      {/* =======================================================
          AMBIENT COLOR FIELD
      ======================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-64
          top-[-25%]
          -z-20
          h-155
          w-155
          rounded-full
          bg-emerald-100/65
          blur-[150px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-64
          bottom-[-40%]
          -z-20
          h-160
          w-160
          rounded-full
          bg-amber-100/45
          blur-[160px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[42%]
          top-[15%]
          -z-20
          h-110
          w-110
          rounded-full
          bg-white/80
          blur-[120px]
        "
      />

      {/* =======================================================
          TOP TRANSITION FROM ABOUT HERO
      ======================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          -z-10
          h-32
          bg-linear-to-b
          from-[#061E13]/5
          to-transparent
        "
      />

      {/* =======================================================
          CONTAINER
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
            SECTION INTRO
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
                Purpose & Direction
              </span>
            </div>

            <h2
              id="mission-vision-title"
              className="
                mt-7
                max-w-180
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
              A clear purpose.
              <span className="block text-[#17643A]">
                A longer horizon.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-125
              text-base
              leading-8
              text-[#69766D]
              sm:text-[1.05rem]
              lg:pb-2
            "
          >
            Our direction is shaped by one practical question:
            how can better agricultural science create stronger
            outcomes for farmers?
          </p>
        </div>

        {/* =====================================================
            MISSION / VISION COMPOSITION
        ====================================================== */}

        <div
          className="
            mt-14
            grid
            gap-6
            lg:mt-20
            lg:grid-cols-[1.08fr_0.92fr]
            lg:gap-7
          "
        >
          {/* ===================================================
              MISSION
          ==================================================== */}

          <article
            className="
              group
              relative
              min-h-135
              overflow-hidden
              rounded-[30px]
              border
              border-[#D8E4DA]
              bg-white
              p-8
              shadow-[0_22px_65px_rgba(18,55,38,0.07)]
              transition-[transform,box-shadow,border-color]
              duration-500
              ease-out
              hover:-translate-y-1
              hover:border-emerald-900/15
              hover:shadow-[0_32px_85px_rgba(18,55,38,0.11)]
              sm:p-10
              lg:min-h-150
              lg:p-12
            "
          >
            {/* Background number */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-5
                -top-16
                select-none
                font-heading
                text-[15rem]
                font-extrabold
                leading-none
                tracking-[-0.09em]
                text-[#0C6A3B]/[0.035]
                sm:text-[18rem]
                lg:text-[21rem]
              "
            >
              01
            </span>

            {/* Green atmosphere */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-48
                -left-40
                h-120
                w-120
                rounded-full
                bg-emerald-100/65
                blur-[100px]
                transition-opacity
                duration-700
                group-hover:opacity-90
              "
            />

            <div
              className="
                relative
                z-10
                flex
                h-full
                min-h-119
                flex-col
                lg:min-h-126
              "
            >
              <div className="flex items-start justify-between gap-6">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-[18px]
                    bg-[#E3F3E7]
                    text-[#17643A]
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:-translate-y-1
                    group-hover:-rotate-3
                  "
                >
                  <Target
                    aria-hidden="true"
                    size={24}
                    strokeWidth={1.8}
                  />
                </div>

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.28em]
                    text-[#9AA69E]
                  "
                >
                  What drives us
                </span>
              </div>

              <div className="mt-auto pt-20">
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.32em]
                    text-[#16814A]
                  "
                >
                  Our Mission
                </span>

                <h3
                  className="
                    mt-5
                    max-w-145
                    font-heading
                    text-[2rem]
                    font-extrabold
                    leading-[1.12]
                    tracking-[-0.04em]
                    text-[#10291B]
                    sm:text-[2.5rem]
                    lg:text-[2.8rem]
                  "
                >
                  Empower farmers through better agricultural inputs.
                </h3>

                <p
                  className="
                    mt-7
                    max-w-150
                    text-base
                    leading-8
                    text-[#68766D]
                    sm:text-[1.05rem]
                  "
                >
                  To empower farmers with scientifically advanced,
                  high-quality agricultural inputs that improve crop
                  health, yield and soil fertility — sustainably and
                  affordably.
                </p>
              </div>

              <div
                className="
                  mt-10
                  flex
                  items-center
                  gap-3
                  border-t
                  border-[#DFE8E1]
                  pt-6
                  text-[#17643A]
                "
              >
                <Sprout
                  aria-hidden="true"
                  size={18}
                  strokeWidth={1.8}
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.24em]
                  "
                >
                  Crop Health · Yield · Soil Fertility
                </span>
              </div>
            </div>
          </article>

          {/* ===================================================
              VISION
          ==================================================== */}

          <article
            className="
              group
              relative
              min-h-135
              overflow-hidden
              rounded-[30px]
              border
              border-white/10
              bg-[#0B3D25]
              p-8
              shadow-[0_28px_80px_rgba(8,49,29,0.2)]
              transition-[transform,box-shadow,border-color]
              duration-500
              ease-out
              hover:-translate-y-1
              hover:border-emerald-300/18
              hover:shadow-[0_38px_95px_rgba(8,49,29,0.28)]
              sm:p-10
              lg:min-h-150
              lg:p-12
            "
          >
            {/* Background depth */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[linear-gradient(145deg,#0A3A23_0%,#0D4B2C_58%,#0B3D25_100%)]
              "
            />

            {/* Background number */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-6
                -top-16
                z-10
                select-none
                font-heading
                text-[15rem]
                font-extrabold
                leading-none
                tracking-[-0.09em]
                text-white/[0.035]
                sm:text-[18rem]
                lg:text-[21rem]
              "
            >
              02
            </span>

            {/* Glow */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-48
                -right-40
                z-10
                h-125
                w-125
                rounded-full
                bg-emerald-400/15
                blur-[110px]
              "
            />

            {/* Grid */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                z-10
                bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)]
                bg-size-[54px_54px]
              "
            />

            <div
              className="
                relative
                z-20
                flex
                h-full
                min-h-119
                flex-col
                lg:min-h-126
              "
            >
              <div className="flex items-start justify-between gap-6">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-[18px]
                    border
                    border-white/10
                    bg-white/10
                    text-[#A7E8B8]
                    backdrop-blur-md
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:-translate-y-1
                    group-hover:rotate-3
                  "
                >
                  <Eye
                    aria-hidden="true"
                    size={24}
                    strokeWidth={1.8}
                  />
                </div>

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.28em]
                    text-white/38
                  "
                >
                  Where we are going
                </span>
              </div>

              <div className="mt-auto pt-20">
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.32em]
                    text-[#92D89D]
                  "
                >
                  Our Vision
                </span>

                <h3
                  className="
                    mt-5
                    max-w-130
                    font-heading
                    text-[2rem]
                    font-extrabold
                    leading-[1.12]
                    tracking-[-0.04em]
                    text-white
                    sm:text-[2.5rem]
                    lg:text-[2.8rem]
                  "
                >
                  Become India&apos;s most trusted agricultural inputs brand.
                </h3>

                <p
                  className="
                    mt-7
                    max-w-130
                    text-base
                    leading-8
                    text-white/62
                    sm:text-[1.05rem]
                  "
                >
                  To be the most trusted agricultural inputs brand in
                  India, bridging modern biotechnology with traditional
                  farming wisdom.
                </p>
              </div>

              <div
                className="
                  mt-10
                  flex
                  items-center
                  justify-between
                  gap-5
                  border-t
                  border-white/10
                  pt-6
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.24em]
                    text-emerald-200/65
                  "
                >
                  Biotechnology · Farming Wisdom
                </span>

                <ArrowDownRight
                  aria-hidden="true"
                  size={20}
                  strokeWidth={1.7}
                  className="
                    shrink-0
                    text-[#92D89D]
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                    group-hover:translate-y-1
                  "
                />
              </div>
            </div>
          </article>
        </div>

        {/* =====================================================
            FARMER STORY
        ===================================================== */}

        <div
          className="
            mt-14
            overflow-hidden
            rounded-4xl
            border
            border-[#D8E4DA]
            bg-white
            shadow-[0_30px_90px_rgba(18,55,38,0.08)]
            lg:mt-20
          "
        >
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* Image */}

            <div className="group relative min-h-105 overflow-hidden">
              <Image
                src="/images/about/about-field-farmer.jpg"
                alt="Farmer inspecting grape crop in Nashik vineyard"
                fill
                quality={75}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-1000
                  ease-out
                  group-hover:scale-[1.03]
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-[#071C12]/35
                  via-transparent
                  to-transparent
                "
              />

              <div className="absolute bottom-8 left-8">
                <span
                  className="
                    rounded-full
                    border
                    border-white/15
                    bg-white/10
                    px-4
                    py-2
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.32em]
                    text-white
                    backdrop-blur-md
                  "
                >
                  Maharashtra Vineyards
                </span>
              </div>
            </div>

            {/* Content */}

            <div
              className="
                relative
                flex
                items-center
                overflow-hidden
                bg-[#123D27]
                px-8
                py-12
                sm:px-12
                lg:px-14
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_100%_0%,rgba(110,231,183,.18),transparent_60%)]
                "
              />

              <div className="relative z-10 max-w-xl">
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.32em]
                    text-[#97E2B2]
                  "
                >
                  Built Around Farmers
                </span>

                <h3
                  className="
                    mt-5
                    font-heading
                    text-4xl
                    font-extrabold
                    leading-tight
                    tracking-[-0.04em]
                    text-white
                  "
                >
                  Every formulation begins with real farming challenges.
                </h3>

                <p
                  className="
                    mt-6
                    text-base
                    leading-8
                    text-white/70
                  "
                >
                  Our products are developed around actual crop conditions,
                  regional farming practices and the practical needs of Indian
                  farmers. Scientific research is valuable only when it delivers
                  measurable improvements in the field.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  {[
                    "Crop Health",
                    "Higher Yield",
                    "Soil Fertility",
                    "Field Tested",
                  ].map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/10
                        px-4
                        py-2
                        text-sm
                        text-white/90
                        backdrop-blur-md
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}