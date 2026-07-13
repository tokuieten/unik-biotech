"use client";

import Link from "next/link";
import {
  Phone,
  MessageCircle,
} from "lucide-react";

export default function CTA() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-linear-to-r
        from-[#067A34]
        via-[#0B8E3B]
        to-[#0DA743]
      "
    >
      {/* =======================================================
          GRID
      ======================================================= */}

      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,.95) 1px, transparent 0)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* =======================================================
          GLOW LEFT
      ======================================================= */}

      <div
        className="
          absolute
          -left-56
          top-1/2
          h-130
          w-130
          -translate-y-1/2
          rounded-full
          bg-emerald-300/15
          blur-[160px]
        "
      />

      {/* =======================================================
          GLOW RIGHT
      ======================================================= */}

      <div
        className="
          absolute
          -right-56
          bottom-0
          h-120
          w-120
          rounded-full
          bg-lime-300/10
          blur-[160px]
        "
      />

      {/* =======================================================
          CONTENT
      ======================================================= */}

      <div
        className="
          relative
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          px-6
          py-28
          text-center
          lg:px-8
          lg:py-32
        "
      >
        <h2
          className="
            max-w-4xl
            text-5xl
            font-black
            leading-[0.95]
            tracking-tighter
            text-white
            sm:text-6xl
            lg:text-7xl
          "
        >
          Ready to improve your
          <br />
          yield?
        </h2>

        <p
          className="
            mt-8
            max-w-3xl
            text-lg
            leading-9
            text-white/90
            lg:text-xl
          "
        >
          Talk to our agronomists and discover the right
          biotechnology solution for healthier crops,
          stronger yields and sustainable farming.
        </p>

        {/* ============================================== */}

        <div
          className="
            mt-14
            flex
            flex-wrap
            justify-center
            gap-5
          "
        >
          <Link
            href="tel:+918380017593"
            className="
              group
              inline-flex
              items-center
              gap-4
              rounded-full
              bg-amber-500
              px-9
              py-5
              text-lg
              font-bold
              text-[#09140F]
              shadow-[0_18px_40px_rgba(255,174,0,.25)]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:bg-amber-400
            "
          >
            <Phone
              size={22}
              className="
                transition-transform
                duration-300
                group-hover:rotate-12
              "
            />

            Call Now: 083800 17593
          </Link>

          <Link
            href="https://wa.me/918380017593"
            target="_blank"
            className="
              group
              inline-flex
              items-center
              gap-4
              rounded-full
              border
              border-white/15
              bg-[#065927]
              px-9
              py-5
              text-lg
              font-bold
              text-white
              shadow-lg
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-1
              hover:bg-[#04491F]
            "
          >
            <MessageCircle
              size={22}
              className="
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />

            WhatsApp Us
          </Link>
        </div>
      </div>
    </section>
  );
}