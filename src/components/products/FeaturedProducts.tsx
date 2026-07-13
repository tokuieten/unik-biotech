"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import ProductCard from "./ProductCard";

import { PRODUCTS } from "@/data/products";

export default function FeaturedProducts() {
  const featuredProducts =
    PRODUCTS.filter((product) => product.featured).slice(0, 6);

  if (featuredProducts.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#F6FBF7] py-24 lg:py-32">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(132,204,22,.08),transparent_40%)]" />

      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-lime-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-3xl">

            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-2 text-sm font-semibold text-emerald-700 shadow-sm">

              <Sparkles size={16} />

              Featured Products

            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Trusted by Farmers Across India
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore some of our most successful agricultural solutions
              engineered for stronger crops, healthier soil, higher yields,
              and sustainable farming practices.
            </p>

          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-3 self-start rounded-full bg-emerald-700 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600"
          >
            View Complete Catalogue

            <ArrowRight size={18} />

          </Link>

        </div>

        {/* Grid */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {featuredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
}