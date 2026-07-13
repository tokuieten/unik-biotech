"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Product } from "@/types/product";

interface RelatedProductsProps {
  currentProduct: Product;
  products: Product[];
}

const categoryColors = {
  micronutrient:
    "bg-emerald-100 text-emerald-700",

  biostimulant:
    "bg-sky-100 text-sky-700",

  protection:
    "bg-red-100 text-red-700",

  soil:
    "bg-amber-100 text-amber-700",

  biofertilizer:
    "bg-teal-100 text-teal-700",

  spreader:
    "bg-violet-100 text-violet-700",
};

const categoryLabels = {
  micronutrient: "Micronutrient",

  biostimulant: "Biostimulant",

  protection: "Crop Protection",

  soil: "Soil Conditioner",

  biofertilizer: "Bio Fertilizer",

  spreader: "Spreader",
};

export default function RelatedProducts({
  currentProduct,
  products,
}: RelatedProductsProps) {
  const relatedProducts = products
    .filter(
      (product) =>
        product.slug !== currentProduct.slug &&
        product.category ===
          currentProduct.category
    )
    .slice(0, 3);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#F8FAF7] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
              Related Products
            </span>

            <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
              Explore Similar
              Solutions
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Discover more products
              developed for similar
              agricultural applications.
            </p>

          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-3 font-semibold text-emerald-700 transition hover:gap-4"
          >
            View All Products

            <ArrowRight size={18} />

          </Link>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {relatedProducts.map(
            (product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
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
                {/* Image */}

                <div className="relative overflow-hidden bg-linear-to-br from-white to-emerald-50">

                  <div className="flex h-70 items-center justify-center p-10">

                    <Image
                      src={product.image}
                      alt={product.name}
                      width={260}
                      height={260}
                      className="h-55 w-auto object-contain transition duration-700 group-hover:scale-110"
                    />

                  </div>

                </div>

                {/* Content */}

                <div className="p-8">

                  <span
                    className={`
                      inline-flex
                      rounded-full
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      ${
                        categoryColors[
                          product.category
                        ]
                      }
                    `}
                  >
                    {
                      categoryLabels[
                        product.category
                      ]
                    }
                  </span>

                  <h3 className="mt-6 text-3xl font-black text-slate-900">
                    {product.name}
                  </h3>

                  <p className="mt-3 font-semibold text-emerald-700">
                    {product.tagline}
                  </p>

                  <p className="mt-5 line-clamp-3 leading-7 text-slate-600">
                    {product.description}
                  </p>

                  {product.benefits
                    ?.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">

                      {product.benefits
                        .slice(0, 2)
                        .map((benefit) => (
                          <span
                            key={benefit}
                            className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                          >
                            {benefit}
                          </span>
                        ))}

                    </div>
                  )}

                  <div className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-700 transition-all duration-300 group-hover:gap-4">

                    View Product

                    <ArrowRight
                      size={18}
                    />

                  </div>

                </div>

              </Link>
            )
          )}

        </div>

      </div>

    </section>
  );
}