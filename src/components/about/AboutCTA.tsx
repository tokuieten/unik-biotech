import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  Sprout,
} from "lucide-react";

export default function AboutCTA() {
  return (
    <section
      aria-labelledby="about-cta-title"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#F7F9F5]
        px-6
        py-20
        sm:px-8
        sm:py-24
        lg:px-12
        lg:py-28
        xl:px-16
        xl:py-32
      "
    >
      {/* =======================================================
          PAGE ATMOSPHERE
      ======================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-72
          top-[-30%]
          -z-20
          h-175
          w-175
          rounded-full
          bg-emerald-100/55
          blur-[180px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-72
          bottom-[-35%]
          -z-20
          h-175
          w-175
          rounded-full
          bg-amber-100/45
          blur-[190px]
        "
      />

      {/* =======================================================
          CTA PANEL
      ======================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-375
          overflow-hidden
          rounded-[34px]
          bg-[#0A3521]
          shadow-[0_35px_100px_rgba(11,55,34,0.18)]
          sm:rounded-[40px]
          lg:rounded-[48px]
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
            bg-[linear-gradient(115deg,#082A1B_0%,#0A3B24_48%,#0B542D_100%)]
          "
        />

        {/* =====================================================
            ATMOSPHERIC GLOWS
        ====================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-52
            top-1/2
            h-140
            w-140
            -translate-y-1/2
            rounded-full
            bg-emerald-400/18
            blur-[150px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-52
            -top-56
            h-150
            w-150
            rounded-full
            bg-lime-300/12
            blur-[160px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[-60%]
            left-[42%]
            h-130
            w-130
            rounded-full
            bg-emerald-500/12
            blur-[150px]
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
            bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]
            bg-size-[72px_72px]
            opacity-60
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
            opacity-[0.04]
          "
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />

        {/* =====================================================
            DECORATIVE RINGS
        ====================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-24
            top-1/2
            h-105
            w-105
            -translate-y-1/2
            rounded-full
            border
            border-white/5
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-10
            top-1/2
            h-80
            w-80
            -translate-y-1/2
            rounded-full
            border
            border-white/5
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-16
            top-1/2
            h-55
            w-55
            -translate-y-1/2
            rounded-full
            border
            border-white/5
          "
        />

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div
          className="
            relative
            z-10
            grid
            min-h-150
            items-center
            gap-12
            px-7
            py-16
            sm:px-10
            sm:py-20
            lg:grid-cols-[1fr_0.72fr]
            lg:gap-20
            lg:px-16
            lg:py-24
            xl:px-20
            xl:py-28
          "
        >
          {/* ===================================================
              LEFT CONTENT
          ==================================================== */}

          <div className="max-w-190">
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
                  tracking-[0.28em]
                  text-emerald-200
                  sm:text-[11px]
                "
              >
                Grow With UNIK
              </span>
            </div>

            <h2
              id="about-cta-title"
              className="
                mt-7
                max-w-180
                font-heading
                text-[2.75rem]
                font-extrabold
                leading-none
                tracking-[-0.055em]
                text-white
                sm:text-[3.5rem]
                lg:text-[4rem]
                xl:text-[4.6rem]
              "
            >
              The next season starts

              <span className="block text-[#9BE4AC]">
                with the right inputs.
              </span>
            </h2>

            <p
              className="
                mt-7
                max-w-155
                text-base
                leading-8
                text-white/60
                sm:text-[1.05rem]
              "
            >
              Connect with UNIK BIOTECH RESEARCH to explore crop
              nutrition, agricultural biotechnology and formulation
              solutions built for practical farming requirements.
            </p>

            {/* =================================================
                ACTIONS
            ================================================== */}

            <div
              className="
                mt-10
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:flex-wrap
              "
            >
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  min-h-14
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#F0B94C]
                  px-7
                  text-sm
                  font-extrabold
                  text-[#102117]
                  shadow-[0_18px_45px_rgba(240,185,76,0.2)]
                  transition-[transform,background-color,box-shadow]
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:bg-[#F6C763]
                  hover:shadow-[0_24px_55px_rgba(240,185,76,0.28)]
                  sm:px-8
                "
              >
                Contact Our Team

                <ArrowRight
                  aria-hidden="true"
                  size={18}
                  strokeWidth={2.2}
                  className="
                    transition-transform
                    duration-300
                    ease-out
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                href="/dealer-locator"
                className="
                  group
                  inline-flex
                  min-h-14
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-white/15
                  bg-white/6
                  px-7
                  text-sm
                  font-bold
                  text-white
                  backdrop-blur-sm
                  transition-[transform,background-color,border-color]
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:border-white/25
                  hover:bg-white/10
                  sm:px-8
                "
              >
                Become a Dealer

                <ArrowRight
                  aria-hidden="true"
                  size={18}
                  strokeWidth={2}
                  className="
                    transition-transform
                    duration-300
                    ease-out
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>

          {/* ===================================================
              CONTACT PANEL
          ==================================================== */}

          <div
            className="
              relative
              mx-auto
              w-full
              max-w-120
              lg:ml-auto
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/12
                bg-white/6.5
                p-6
                shadow-[0_25px_70px_rgba(0,0,0,0.16)]
                backdrop-blur-md
                sm:p-8
                lg:p-9
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-55
                  w-55
                  rounded-full
                  bg-emerald-300/10
                  blur-[70px]
                "
              />

              <div className="relative z-10">
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-emerald-300
                  "
                >
                  Direct Assistance
                </p>

                <h3
                  className="
                    mt-4
                    font-heading
                    text-[1.75rem]
                    font-extrabold
                    leading-tight
                    tracking-[-0.04em]
                    text-white
                    sm:text-[2rem]
                  "
                >
                  Talk to our team.
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-white/52
                  "
                >
                  Need product information, dealer assistance or
                  agricultural input guidance? Reach us directly.
                </p>

                {/* =============================================
                    PHONE
                ============================================== */}

                <a
                  href="tel:+918380017593"
                  className="
                    group/contact
                    mt-8
                    flex
                    items-center
                    gap-4
                    rounded-[20px]
                    border
                    border-white/10
                    bg-white/5.5
                    p-4
                    transition-[transform,background-color,border-color]
                    duration-300
                    ease-out
                    hover:-translate-y-1
                    hover:border-emerald-300/20
                    hover:bg-white/8.5
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
                      bg-emerald-400/15
                      text-emerald-300
                      transition-[transform,background-color,color]
                      duration-300
                      group-hover/contact:scale-[1.04]
                      group-hover/contact:bg-emerald-400
                      group-hover/contact:text-[#082014]
                    "
                  >
                    <Phone
                      aria-hidden="true"
                      size={20}
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.22em]
                        text-white/40
                      "
                    >
                      Call Us
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-bold
                        text-white
                        sm:text-base
                      "
                    >
                      083800 17593
                    </p>
                  </div>
                </a>

                {/* =============================================
                    WHATSAPP
                ============================================== */}

                <a
                  href="https://wa.me/918380017593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group/contact
                    mt-3
                    flex
                    items-center
                    gap-4
                    rounded-[20px]
                    border
                    border-white/10
                    bg-white/5.5
                    p-4
                    transition-[transform,background-color,border-color]
                    duration-300
                    ease-out
                    hover:-translate-y-1
                    hover:border-emerald-300/20
                    hover:bg-white/8.5
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
                      bg-emerald-400/15
                      text-emerald-300
                      transition-[transform,background-color,color]
                      duration-300
                      group-hover/contact:scale-[1.04]
                      group-hover/contact:bg-emerald-400
                      group-hover/contact:text-[#082014]
                    "
                  >
                    <MessageCircle
                      aria-hidden="true"
                      size={20}
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.22em]
                        text-white/40
                      "
                    >
                      WhatsApp
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-bold
                        text-white
                        sm:text-base
                      "
                    >
                      Message Our Team
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM HIGHLIGHT
        ====================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-20
            bottom-0
            h-px
            bg-linear-to-r
            from-transparent
            via-emerald-300/35
            to-transparent
          "
        />
      </div>
    </section>
  );
}