"use client";

import {
  CheckCircle2,
  ArrowUpRight,
  Leaf,
  Sprout,
  ShieldCheck,
  FlaskConical,
} from "lucide-react";

import type { Product } from "@/types/product";

interface ProductBenefitsProps {
  product: Product;
}

const icons = [
  Leaf,
  FlaskConical,
  ShieldCheck,
  Sprout,
];

export default function ProductBenefits({
  product,
}: ProductBenefitsProps) {
  return (
    <section className="bg-[#F8FAF7] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Key Benefits
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
            Why farmers choose
            <span className="text-emerald-700">
              {" "}
              {product.name}
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Scientifically formulated to improve
            crop performance while delivering
            measurable field results.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {product.benefits.map(
            (benefit, index) => {
              const Icon =
                icons[index % icons.length];

              return (
                <article
                  key={benefit}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-4xl
                    border
                    border-slate-200
                    bg-white
                    p-8
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-emerald-300
                    hover:shadow-xl
                  "
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-emerald-50 blur-3xl transition duration-500 group-hover:bg-emerald-100" />

                  <div className="relative">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">

                      <Icon size={30} />

                    </div>

                    <div className="mt-8 flex items-center gap-2">

                      <CheckCircle2
                        size={18}
                        className="text-emerald-600"
                      />

                      <span className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                        Benefit {index + 1}
                      </span>

                    </div>

                    <h3 className="mt-5 text-xl font-bold leading-8 text-slate-900">
                      {benefit}
                    </h3>

                    <p className="mt-5 leading-7 text-slate-600">
                      This formulation has been
                      developed to deliver
                      consistent performance in
                      the field while improving
                      crop growth and productivity.
                    </p>

                    <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-all duration-300 group-hover:gap-4">

                      Learn More

                      <ArrowUpRight size={18} />

                    </div>

                  </div>

                </article>
              );
            }
          )}

        </div>

      </div>

    </section>
  );
}