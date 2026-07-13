"use client";

import {
  Droplets,
  Beaker,
  Clock3,
  CheckCircle2,
} from "lucide-react";

import type { Product } from "@/types/product";

interface ProductDosageProps {
  product: Product;
}

export default function ProductDosage({
  product,
}: ProductDosageProps) {
  return (
    <section className="bg-[#F8FAF7] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Application Guide
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
            Easy application.
            Reliable performance.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Follow the recommended application
            guidelines to achieve maximum crop
            response and optimum nutrient
            utilization.
          </p>

        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left */}

          <div className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-sm">

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">

                <Droplets size={30} />

              </div>

              <div>

                <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                  Recommended Dosage
                </p>

                <h3 className="mt-2 text-3xl font-black text-slate-900">
                  {product.dosage ??
                    "As recommended"}
                </h3>

              </div>

            </div>

            <div className="mt-10 grid gap-6">

              <div className="flex gap-5 rounded-2xl bg-emerald-50 p-6">

                <CheckCircle2
                  className="mt-1 text-emerald-600"
                  size={22}
                />

                <div>

                  <h4 className="font-bold text-slate-900">
                    Mix Thoroughly
                  </h4>

                  <p className="mt-2 leading-7 text-slate-600">
                    Dissolve the recommended
                    quantity completely before
                    spraying or application.

                  </p>

                </div>

              </div>

              <div className="flex gap-5 rounded-2xl bg-emerald-50 p-6">

                <Clock3
                  className="mt-1 text-emerald-600"
                  size={22}
                />

                <div>

                  <h4 className="font-bold text-slate-900">
                    Best Time
                  </h4>

                  <p className="mt-2 leading-7 text-slate-600">
                    Apply during the morning or
                    evening for maximum nutrient
                    absorption.

                  </p>

                </div>

              </div>

              <div className="flex gap-5 rounded-2xl bg-emerald-50 p-6">

                <Beaker
                  className="mt-1 text-emerald-600"
                  size={22}
                />

                <div>

                  <h4 className="font-bold text-slate-900">
                    Professional Advice
                  </h4>

                  <p className="mt-2 leading-7 text-slate-600">
                    Dosage may vary depending on
                    crop stage, soil condition
                    and local agronomic
                    recommendations.

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-[36px] bg-linear-to-br from-emerald-700 to-emerald-900 p-10 text-white">

            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-200">
              Application Summary
            </p>

            <h3 className="mt-4 text-4xl font-black">
              Designed for
              consistent field
              performance.
            </h3>

            <p className="mt-8 leading-8 text-emerald-100">
              {product.name} has been developed
              for efficient nutrient uptake,
              improved plant health and enhanced
              crop productivity when applied as
              recommended.
            </p>

            <div className="mt-12 space-y-5">

              <div className="flex items-center gap-4">

                <div className="h-3 w-3 rounded-full bg-lime-300" />

                <span>
                  Scientifically formulated
                </span>

              </div>

              <div className="flex items-center gap-4">

                <div className="h-3 w-3 rounded-full bg-lime-300" />

                <span>
                  Fast nutrient absorption
                </span>

              </div>

              <div className="flex items-center gap-4">

                <div className="h-3 w-3 rounded-full bg-lime-300" />

                <span>
                  Suitable for modern farming
                </span>

              </div>

              <div className="flex items-center gap-4">

                <div className="h-3 w-3 rounded-full bg-lime-300" />

                <span>
                  Trusted by growers
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}