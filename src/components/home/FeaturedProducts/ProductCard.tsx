"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Leaf,
} from "lucide-react";

export interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  category: string;
  composition: string;
  description: string;
  color: "green" | "blue" | "amber";
  benefits: string[];
}

interface ProductCardProps {
  product: Product;
}

const gradients = {
  green:
    "from-emerald-700 via-green-600 to-lime-500",

  blue:
    "from-sky-700 via-cyan-600 to-teal-500",

  amber:
    "from-amber-700 via-yellow-600 to-orange-500",
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-[30px]
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-2xl
      "
    >
      {/* Image */}

      <div className="relative h-72 bg-[#F8FBF8]">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,.08),transparent_70%)]" />

        <div className="absolute right-5 top-5">

          <span
            className={`
              rounded-full
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-white
              bg-linear-to-r
              ${gradients[product.color]}
            `}
          >
            {product.category}
          </span>

        </div>

        <div className="flex h-full items-center justify-center p-8">

          <Image
            src={product.image}
            alt={product.name}
            width={280}
            height={280}
            className="
              h-auto
              max-h-60
              w-auto
              max-w-60
              object-contain
              transition-all
              duration-500
              group-hover:scale-105
            "
          />

        </div>

      </div>

      {/* Body */}

      <div className="p-7">

        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          {product.composition}
        </p>

        <h3 className="mt-3 text-3xl font-black text-slate-900">
          {product.name}
        </h3>

        <p className="mt-4 text-[15px] leading-7 text-slate-600">
          {product.description}
        </p>

        <div className="mt-8 space-y-3">

          {product.benefits.slice(0, 3).map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-3"
            >
              <CheckCircle2
                size={18}
                className="text-emerald-600"
              />

              <span className="text-sm text-slate-600">
                {benefit}
              </span>
            </div>
          ))}

        </div>

        <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">

          <div className="flex items-center gap-2 text-sm font-medium text-emerald-700">

            <Leaf size={18} />

            Premium Formula

          </div>

          <Link
            href={`/products/${product.slug}`}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-emerald-700
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-emerald-600
            "
          >
            View Product

            <ArrowRight
              size={16}
            />

          </Link>

        </div>

      </div>

    </article>
  );
}