"use client";

import {
  Beaker,
  FlaskConical,
  Package,
  TestTube2,
} from "lucide-react";

import type { Product } from "@/types/product";

interface ProductCompositionProps {
  product: Product;
}

export default function ProductComposition({
  product,
}: ProductCompositionProps) {
  const specs = [
    {
      title: "Composition",
      value:
        product.composition ??
        "Available on request",
      icon: FlaskConical,
    },
    {
      title: "Formulation",
      value:
        product.form ??
        "Standard",
      icon: TestTube2,
    },
    {
      title: "Recommended Dosage",
      value:
        product.dosage ??
        "As recommended",
      icon: Beaker,
    },
    {
      title: "Packaging",
      value:
        product.packing ??
        "Available in multiple pack sizes",
      icon: Package,
    },
  ];

  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">

          <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Technical Specifications
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
            Scientifically engineered for
            consistent field performance.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every UNIK formulation undergoes
            strict quality control and
            scientific validation to ensure
            reliable agricultural performance.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {specs.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-4xl
                  border
                  border-slate-200
                  bg-linear-to-br
                  from-white
                  to-emerald-50/30
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-emerald-300
                  hover:shadow-xl
                "
              >
                <div className="flex items-start gap-6">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">

                    <Icon size={30} />

                  </div>

                  <div className="flex-1">

                    <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                      {item.title}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold leading-9 text-slate-900">
                      {item.value}
                    </h3>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}