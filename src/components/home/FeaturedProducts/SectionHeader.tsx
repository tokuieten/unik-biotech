"use client";

export default function SectionHeader() {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">

      <span
        className="
          inline-flex
          items-center
          rounded-full
          bg-emerald-50
          px-5
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.35em]
          text-emerald-700
        "
      >
        Featured Products
      </span>

      <h2
        className="
          mt-8
          text-5xl
          font-black
          leading-tight
          tracking-tight
          text-slate-900
          lg:text-6xl
        "
      >
        Lab-engineered inputs.

        <span className="block text-emerald-700">
          Field-proven results.
        </span>
      </h2>

      <p
        className="
          mx-auto
          mt-8
          max-w-2xl
          text-lg
          leading-9
          text-slate-600
        "
      >
        Every formulation is researched, manufactured and tested to
        deliver measurable improvements in crop health, nutrient
        absorption and overall farm productivity.
      </p>

    </div>
  );
}