"use client";

import {
  CheckCircle2,
  FlaskConical,
  Leaf,
  Sprout,
} from "lucide-react";

import type { Product } from "@/types/product";

interface ProductOverviewProps {
  product: Product;
}

export default function ProductOverview({
  product,
}: ProductOverviewProps) {
  return (
    <section className="relative bg-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-20 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT */}

          <div>

            <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
              Product Overview
            </span>

            <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
              Built for modern,
              sustainable agriculture.
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              {product.description}
            </p>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">

              <div className="rounded-[28px] border border-slate-200 p-7">

                <Leaf className="mb-5 text-emerald-600" size={32} />

                <h3 className="text-xl font-bold">
                  Improved Crop Health
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Scientifically developed
                  formulation that improves
                  nutrient uptake and promotes
                  healthier crop development.
                </p>

              </div>

              <div className="rounded-[28px] border border-slate-200 p-7">

                <FlaskConical
                  className="mb-5 text-emerald-600"
                  size={32}
                />

                <h3 className="text-xl font-bold">
                  Advanced Formulation
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Carefully engineered using
                  modern agricultural science
                  for reliable field
                  performance.
                </p>

              </div>

              <div className="rounded-[28px] border border-slate-200 p-7">

                <Sprout
                  className="mb-5 text-emerald-600"
                  size={32}
                />

                <h3 className="text-xl font-bold">
                  Better Yield
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Helps plants grow stronger,
                  healthier and more productive
                  throughout the crop cycle.
                </p>

              </div>

              <div className="rounded-[28px] border border-slate-200 p-7">

                <CheckCircle2
                  className="mb-5 text-emerald-600"
                  size={32}
                />

                <h3 className="text-xl font-bold">
                  Trusted Quality
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Manufactured under strict
                  quality standards for
                  consistent agricultural
                  performance.
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="sticky top-32 rounded-[34px] border border-slate-200 bg-linear-to-br from-[#F8FAF7] to-white p-10 shadow-sm">

              <h3 className="text-2xl font-black text-slate-900">
                Why Choose {product.name}?
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {product.tagline}
              </p>

              <div className="mt-10 space-y-5">

                {product.benefits.map(
                  (benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-4"
                    >
                      <div className="mt-1 rounded-full bg-emerald-100 p-2">

                        <CheckCircle2
                          size={18}
                          className="text-emerald-700"
                        />

                      </div>

                      <p className="leading-7 text-slate-700">
                        {benefit}
                      </p>

                    </div>
                  )
                )}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}