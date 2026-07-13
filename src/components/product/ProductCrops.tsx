"use client";

import {
  Wheat,
  Leaf,
  Sprout,
  Trees,
  ArrowRight,
} from "lucide-react";

import type { Product } from "@/types/product";

interface ProductCropsProps {
  product: Product;
}

const cropIcons = [
  Wheat,
  Leaf,
  Sprout,
  Trees,
];

const cropGradients = [
  "from-emerald-500 to-green-600",
  "from-lime-500 to-emerald-600",
  "from-green-500 to-teal-600",
  "from-emerald-600 to-green-700",
];

export default function ProductCrops({
  product,
}: ProductCropsProps) {
  if (
    !product.crops ||
    product.crops.length === 0
  ) {
    return null;
  }

  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Suitable Crops
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
            Recommended Applications
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {product.name} has been formulated
            for use across multiple crops while
            supporting healthier growth and
            improved productivity.
          </p>

        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {product.crops.map(
            (crop, index) => {
              const Icon =
                cropIcons[
                  index %
                    cropIcons.length
                ];

              const gradient =
                cropGradients[
                  index %
                    cropGradients.length
                ];

              return (
                <article
                  key={crop}
                  className="
                    group
                    overflow-hidden
                    rounded-[34px]
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-emerald-300
                    hover:shadow-2xl
                  "
                >
                  <div
                    className={`h-40 bg-linear-to-br ${gradient} flex items-center justify-center`}
                  >
                    <Icon
                      size={72}
                      className="text-white transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-8">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                      Supported Crop
                    </p>

                    <h3 className="mt-3 text-3xl font-black text-slate-900">
                      {crop}
                    </h3>

                    <p className="mt-5 leading-7 text-slate-600">
                      Scientifically suitable for
                      improving crop nutrition,
                      growth and overall field
                      performance.
                    </p>

                    <div className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-700 transition-all group-hover:gap-4">

                      Recommended

                      <ArrowRight size={18} />

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