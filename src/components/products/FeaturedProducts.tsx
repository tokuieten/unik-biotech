"use client";

import ProductGrid from "./ProductGrid";
import { PRODUCTS } from "@/data/products";

export default function FeaturedProducts() {
  const featuredProducts = PRODUCTS.filter(
    (product) => product.featured
  );

  if (featuredProducts.length === 0) return null;

  return (
    <section className="py-24 bg-[#F8FAF7]">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl mb-14">

          <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Featured Collection
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Most Trusted Products
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            These are some of our most trusted agricultural
            solutions preferred by farmers for better yield,
            healthier crops and consistent performance.
          </p>

        </div>

        <ProductGrid
          products={featuredProducts}
        />

      </div>
    </section>
  );
}