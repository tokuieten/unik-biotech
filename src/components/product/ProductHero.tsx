"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Leaf,
  Droplets,
  ShieldCheck,
  FlaskConical,
} from "lucide-react";

import type { Product } from "@/types/product";

interface ProductHeroProps {
  product: Product;
}

const categoryIcons = {
  micronutrient: FlaskConical,
  biostimulant: Leaf,
  protection: ShieldCheck,
  soil: Droplets,
  biofertilizer: Leaf,
  spreader: Droplets,
};

const categoryColors = {
  micronutrient:
    "bg-emerald-500/15 text-emerald-300 border-emerald-400/20",

  biostimulant:
    "bg-sky-500/15 text-sky-300 border-sky-400/20",

  protection:
    "bg-red-500/15 text-red-300 border-red-400/20",

  soil:
    "bg-amber-500/15 text-amber-300 border-amber-400/20",

  biofertilizer:
    "bg-teal-500/15 text-teal-300 border-teal-400/20",

  spreader:
    "bg-violet-500/15 text-violet-300 border-violet-400/20",
};

const categoryLabels = {
  micronutrient: "Micronutrient",

  biostimulant: "Biostimulant",

  protection: "Crop Protection",

  soil: "Soil Conditioner",

  biofertilizer: "Bio Fertilizer",

  spreader: "Spreader",
};

export default function ProductHero({
  product,
}: ProductHeroProps) {
  const Icon =
    categoryIcons[product.category] ??
    FlaskConical;

  const badge =
    categoryColors[product.category];

  const category =
    categoryLabels[product.category];

  return (
    <section className="relative overflow-hidden bg-[#042416]">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03]" />

        <div className="absolute inset-0 bg-linear-to-br from-emerald-950 via-[#063A25] to-[#02160E]" />

        <div className="absolute -left-32 top-0 h-125 w-125 rounded-full bg-emerald-500/10 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-150 w-150 rounded-full bg-lime-400/10 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-40">

        {/* Breadcrumb */}

        <Link
          href="/products"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10"
        >
          <ArrowLeft size={18} />

          Back to Products
        </Link>

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">

          {/* LEFT */}

          <div>

            <div
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold ${badge}`}
            >
              <Icon size={16} />

              {category}
            </div>

            <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-white lg:text-7xl">
              {product.name}
            </h1>

            <p className="mt-6 text-2xl font-semibold text-emerald-300">
              {product.tagline}
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/75">
              {product.description}
            </p>

            {/* Quick Stats */}

            <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <p className="text-xs uppercase tracking-widest text-white/40">
                  Category
                </p>

                <p className="mt-3 font-semibold text-white">
                  {category}
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <p className="text-xs uppercase tracking-widest text-white/40">
                  Form
                </p>

                <p className="mt-3 font-semibold text-white">
                  {product.form}
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <p className="text-xs uppercase tracking-widest text-white/40">
                  Dosage
                </p>

                <p className="mt-3 font-semibold text-white">
                  {product.dosage}
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <p className="text-xs uppercase tracking-widest text-white/40">
                  Suitable Crops
                </p>

                <p className="mt-3 font-semibold text-white">
                  {product.crops?.length ?? 0}+
                </p>

              </div>

            </div>

            {/* CTA */}

            <div className="mt-14 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-emerald-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-emerald-400"
              >
                Contact Expert

                <ArrowRight size={18} />
              </Link>

              <Link
                href="/dealer"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
              >
                Find Dealer
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="absolute inset-0 rounded-[48px] bg-emerald-500/10 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-2xl">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.15),transparent_45%)]" />

              <div className="flex h-170 items-center justify-center p-14">

                <Image
                  src={product.image}
                  alt={product.name}
                  width={560}
                  height={560}
                  priority
                  className="h-135 w-auto object-contain transition duration-700 hover:scale-105"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}