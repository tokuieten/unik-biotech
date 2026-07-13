"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import type {
  ProductCategory,
  ProductCategoryItem,
} from "@/types/product";

interface ProductCategoryShowcaseProps {
  categories: ProductCategoryItem[];

  categoryCounts: Record<string, number>;

  onSelectCategory: (
    category: ProductCategory
  ) => void;
}

const categoryImages: Record<
  ProductCategory,
  string
> = {
  micronutrient:
    "/images/products/categories/micronutrient.jpg",

  biostimulant:
    "/images/products/categories/biostimulant.jpg",

  protection:
    "/images/products/categories/protection.jpg",

  soil:
    "/images/products/categories/soil-conditioner.jpg",

  biofertilizer:
    "/images/products/categories/biofertilizer.jpg",

  spreader:
    "/images/products/categories/spreader.jpg",
};

export default function ProductCategoryShowcase({
  categories,
  categoryCounts,
  onSelectCategory,
}: ProductCategoryShowcaseProps) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#F8FAF7] to-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Product Categories
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
            Find the Right Solution
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Every category has been carefully
            developed to solve a different
            agricultural challenge—from soil
            nutrition to crop protection and
            yield enhancement.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {categories
            .filter(
              (category) =>
                category.id !== "all"
            )
            .map((category) => (
              <button
                key={category.id}
                onClick={() =>
                  onSelectCategory(
                    category.id as ProductCategory
                  )
                }
                className="group relative overflow-hidden rounded-[34px] text-left shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative h-90">

                  <Image
                    src={
                      categoryImages[
                        category.id as ProductCategory
                      ]
                    }
                    alt={category.label}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-8">

                    <span
                      className={`inline-flex rounded-full px-4 py-2 text-xs font-semibold ${category.color}`}
                    >
                      {category.label}
                    </span>

                    <h3 className="mt-5 text-3xl font-black text-white">
                      {category.label}
                    </h3>

                    <p className="mt-3 text-white/80">
                      {
                        categoryCounts[
                          category.id
                        ]
                      }{" "}
                      products available
                    </p>

                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-all group-hover:gap-4">

                      Explore Category

                      <ArrowRight size={18} />

                    </div>

                  </div>

                </div>

              </button>
            ))}

        </div>

      </div>

    </section>
  );
}