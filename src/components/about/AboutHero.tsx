import Image from "next/image";
import {
  FlaskConical,
  Leaf,
  MapPin,
  Sprout,
} from "lucide-react";

const heroStats = [
  {
    value: "2005",
    label: "Established",
  },
  {
    value: "100+",
    label: "Products",
  },
  {
    value: "20 Years",
    label: "Serving Farmers",
  },
] as const;

export default function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-title"
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
        bg-[#032719]
      "
    >
      {/* =====================================================
          BACKGROUND FOUNDATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-50
          bg-[linear-gradient(112deg,#021D12_0%,#032719_48%,#073B22_100%)]
        "
      />

      {/* =====================================================
          ATMOSPHERIC LIGHT
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-80
          top-[18%]
          -z-40
          h-175
          w-175
          rounded-full
          bg-emerald-700/20
          blur-[180px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-64
          top-[-20%]
          -z-40
          h-175
          w-175
          rounded-full
          bg-green-500/15
          blur-[190px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-45%]
          left-[38%]
          -z-40
          h-150
          w-150
          rounded-full
          bg-emerald-500/10
          blur-[170px]
        "
      />

      {/* =====================================================
          SCIENTIFIC GRID
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-30
          bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]
          bg-size-[72px_72px]
          opacity-55
        "
      />

      {/* =====================================================
          MICRO TEXTURE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-30
          opacity-[0.035]
          mix-blend-soft-light
        "
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.95) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* =====================================================
          DECORATIVE YEAR
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-14
          bottom-[12%]
          -z-20
          hidden
          font-heading
          text-[14rem]
          font-extrabold
          leading-none
          tracking-[-0.09em]
          text-white/2.5
          xl:block
          2xl:text-[18rem]
        "
      >
        20
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-375
          items-center
          px-6
          pb-20
          pt-40
          sm:px-8
          sm:pb-24
          sm:pt-44
          lg:px-12
          lg:pb-28
          lg:pt-48
          xl:px-16
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-14
            lg:grid-cols-[0.94fr_1.06fr]
            lg:gap-16
            xl:gap-24
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="max-w-170">
            {/* Eyebrow */}

            <div
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-emerald-300/15
                bg-white/5.5
                px-4
                py-2.5
                backdrop-blur-sm
              "
            >
              <Sprout
                aria-hidden="true"
                size={15}
                strokeWidth={2}
                className="text-emerald-300"
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-emerald-200
                  sm:text-[11px]
                "
              >
                About UNIK Biotech
              </span>
            </div>

            {/* Heading */}

            <h1
              id="about-hero-title"
              className="
                mt-8
                max-w-165
                font-heading
                text-[3.3rem]
                font-extrabold
                leading-[0.98]
                tracking-[-0.06em]
                text-white
                sm:text-[4.25rem]
                lg:text-[4.7rem]
                xl:text-[5.35rem]
              "
            >
              Two decades

              <span className="block text-[#8DDEA0]">
                of science.
              </span>

              <span className="mt-2 block">
                Built around the
              </span>

              <span className="block">
                farmer.
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                mt-8
                max-w-145
                text-base
                leading-8
                text-white/62
                sm:text-[1.05rem]
                sm:leading-9
              "
            >
              Since 2005, UNIK BIOTECH RESEARCH has developed
              agricultural inputs designed around crop health, field
              performance and the realities of Indian farming.
            </p>

            {/* Location */}

            <div
              className="
                mt-7
                flex
                items-center
                gap-3
                text-white/55
              "
            >
              <MapPin
                aria-hidden="true"
                size={17}
                strokeWidth={1.9}
                className="shrink-0 text-emerald-400"
              />

              <span
                className="
                  text-xs
                  font-medium
                  sm:text-sm
                "
              >
                Pimpalgaon Baswant · Nashik · Maharashtra
              </span>
            </div>

            {/* Stats */}

            <div
              className="
                mt-11
                grid
                max-w-145
                grid-cols-3
                border-y
                border-white/10
              "
            >
              {heroStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    py-6
                    ${index > 0 ? "border-l border-white/10 pl-5 sm:pl-7" : ""}
                  `}
                >
                  <p
                    className="
                      font-heading
                      text-xl
                      font-extrabold
                      tracking-[-0.04em]
                      text-white
                      sm:text-2xl
                    "
                  >
                    {stat.value}
                  </p>

                  <p
                    className="
                      mt-2
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.24em]
                      text-emerald-300/60
                      sm:text-[9px]
                    "
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE COMPOSITION
          ================================================== */}

          <div
            className="
              relative
              mx-auto
              w-full
              max-w-165
              lg:mx-0
              lg:ml-auto
            "
          >
            {/* ===============================================
                IMAGE FRAME
            ================================================ */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-white/12
                bg-[#0B3A25]
                shadow-[0_38px_100px_rgba(0,0,0,0.28)]
                sm:rounded-[36px]
              "
            >
              <div
                className="
                  relative
                  h-125
                  w-full
                  overflow-hidden
                  sm:h-145
                  lg:h-155
                "
              >
                <Image
                src="/images/about/about-hero-research.jpg"
                alt="Agricultural biotechnology researcher examining plant samples at UNIK BIOTECH RESEARCH"
                fill
                priority
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

                {/* Image depth */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-[#041C11]/90
                    via-transparent
                    to-black/5
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-linear-to-r
                    from-[#052518]/10
                    via-transparent
                    to-transparent
                  "
                />

                {/* ===========================================
                    20 YEAR BADGE
                ============================================ */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    z-20
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-white/20
                    bg-[#062A1B]/78
                    px-5
                    py-4
                    shadow-[0_18px_45px_rgba(0,0,0,0.2)]
                    backdrop-blur-xl
                    sm:left-7
                    sm:top-7
                    sm:px-6
                    sm:py-5
                  "
                >
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -left-10
                      -top-12
                      h-28
                      w-28
                      rounded-full
                      bg-emerald-400/20
                      blur-[45px]
                    "
                  />

                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      gap-4
                    "
                  >
                    <span
                      className="
                        font-heading
                        text-[2.75rem]
                        font-extrabold
                        leading-none
                        tracking-[-0.07em]
                        text-white
                        sm:text-[3.25rem]
                      "
                    >
                      20
                    </span>

                    <div
                      className="
                        border-l
                        border-white/15
                        pl-4
                      "
                    >
                      <span
                        className="
                          block
                          text-[8px]
                          font-bold
                          uppercase
                          leading-4
                          tracking-[0.25em]
                          text-emerald-300
                          sm:text-[9px]
                        "
                      >
                        Years of
                      </span>

                      <span
                        className="
                          block
                          text-[8px]
                          font-bold
                          uppercase
                          leading-4
                          tracking-[0.25em]
                          text-white/65
                          sm:text-[9px]
                        "
                      >
                        Agricultural
                      </span>

                      <span
                        className="
                          block
                          text-[8px]
                          font-bold
                          uppercase
                          leading-4
                          tracking-[0.25em]
                          text-white/65
                          sm:text-[9px]
                        "
                      >
                        Research
                      </span>
                    </div>
                  </div>
                </div>

                {/* ===========================================
                    IMAGE CAPTION
                ============================================ */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    z-20
                    p-5
                    sm:p-7
                  "
                >
                  <div
                    className="
                      flex
                      max-w-105
                      items-center
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
                        text-emerald-200
                        backdrop-blur-md
                      "
                    >
                      <FlaskConical
                        aria-hidden="true"
                        size={20}
                        strokeWidth={1.9}
                      />
                    </div>

                    <div>
                      <p
                        className="
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[0.28em]
                          text-emerald-300
                          sm:text-[9px]
                        "
                      >
                        Research Led
                      </p>

                      <p
                        className="
                          mt-1
                          font-heading
                          text-sm
                          font-bold
                          tracking-tight
                          text-white
                          sm:text-base
                        "
                      >
                        Science designed for the field.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===============================================
                FLOATING LEAF MARK
            ================================================ */}

            <div
              aria-hidden="true"
              className="
                absolute
                -bottom-7
                -right-5
                z-30
                hidden
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border
                border-emerald-300/15
                bg-[#07462A]
                text-emerald-300
                shadow-[0_20px_50px_rgba(0,0,0,0.24)]
                sm:flex
                lg:-right-7
              "
            >
              <Leaf
                size={28}
                strokeWidth={1.7}
              />
            </div>

            {/* ===============================================
                FRAME LINE
            ================================================ */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-5
                left-10
                right-14
                -z-10
                h-full
                rounded-[36px]
                border
                border-emerald-300/8
              "
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM TRANSITION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-24
          bg-linear-to-t
          from-[#021E13]/40
          to-transparent
        "
      />
    </section>
  );
}