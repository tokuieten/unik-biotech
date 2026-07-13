import Image from "next/image";

export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        isolate
        overflow-hidden
      "
    >
      {/* =====================================================
          HERO IMAGE
          Transform ownership belongs to animations.css.
          Do not add Tailwind scale/translate classes here.
      ====================================================== */}

      <div className="absolute inset-0 -z-50 bg-[#082619]">
        <Image
          src="/images/hero/hero.jpg"
          alt=""
          fill
          priority
          quality={75}
          sizes="100vw"
          className="
            motion-transform
            animate-hero
            object-cover
            object-[62%_50%]
          "
        />
      </div>

      {/* =====================================================
          PRIMARY HORIZONTAL CONTRAST OVERLAY
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          -z-40
          bg-[linear-gradient(90deg,rgba(5,28,17,0.96)_0%,rgba(6,35,21,0.91)_28%,rgba(7,39,23,0.72)_52%,rgba(7,38,22,0.46)_74%,rgba(6,31,19,0.58)_100%)]
        "
      />

      {/* =====================================================
          VERTICAL DEPTH OVERLAY
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          -z-30
          bg-[linear-gradient(180deg,rgba(4,20,12,0.30)_0%,rgba(4,24,14,0.02)_36%,rgba(3,20,12,0.12)_68%,rgba(3,18,11,0.64)_100%)]
        "
      />

      {/* =====================================================
          STATIC AMBIENT LIGHTING

          These layers intentionally remain static.
          Large blurred layers must never use animate-float.
      ====================================================== */}

      <div
        className="
          absolute
          -left-56
          top-1/2
          -z-20
          h-160
          w-160
          -translate-y-1/2
          rounded-full
          bg-[#0B6B3A]/25
          blur-[100px]
        "
      />

      <div
        className="
          absolute
          left-[34%]
          top-[18%]
          -z-20
          h-96
          w-96
          rounded-full
          bg-emerald-400/8
          blur-[90px]
        "
      />

      <div
        className="
          absolute
          -right-48
          -bottom-56
          -z-20
          h-144
          w-xl
          rounded-full
          bg-[#7DBA72]/10
          blur-[110px]
        "
      />

      {/* =====================================================
          SCIENTIFIC GRID TEXTURE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)]
          bg-size-[72px_72px]
          opacity-[0.16]
          mask-[linear-gradient(to_right,black,transparent_68%)]
          [-webkit-mask-image:linear-gradient(to_right,black,transparent_68%)]
        "
      />

      {/* =====================================================
          MICRO TEXTURE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          -z-10
          opacity-[0.035]
          mix-blend-soft-light
        "
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* =====================================================
          TOP DEPTH FADE
      ====================================================== */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-40
          bg-linear-to-b
          from-[#04170E]/45
          to-transparent
        "
      />

      {/* =====================================================
          BOTTOM SECTION TRANSITION
      ====================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-52
          bg-linear-to-t
          from-[#061E13]/75
          via-[#061E13]/25
          to-transparent
        "
      />
    </div>
  );
}