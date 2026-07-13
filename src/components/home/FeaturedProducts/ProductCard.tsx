"use client";

import {
  ArrowRight,
  CheckCircle2,
  Leaf,
} from "lucide-react";

export interface Product {
  id: number;
  name: string;
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
        rounded-[28px]
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
      {/* Header */}

      <div
        className={`
          relative
          overflow-hidden
          bg-linear-to-br
          ${gradients[product.color]}
          p-7
          text-white
        `}
      >
        <div
          className="
            absolute
            inset-0
            opacity-10
            bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]
          "
        />

        <div
          className="
            absolute
            -right-16
            -top-16
            h-44
            w-44
            rounded-full
            border
            border-white/20
          "
        />

        <span
          className="
            inline-flex
            rounded-full
            border
            border-white/30
            bg-white/15
            px-4
            py-1
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.25em]
            backdrop-blur
          "
        >
          {product.category}
        </span>

        <h3 className="mt-6 text-3xl font-black">
          {product.name}
        </h3>

        <p className="mt-3 text-sm text-white/90">
          {product.composition}
        </p>
      </div>

      {/* Body */}

      <div className="p-7">

        <p className="text-[15px] leading-7 text-slate-600">
          {product.description}
        </p>

        <div className="mt-8 space-y-4">

          {product.benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-3"
            >
              <CheckCircle2
                size={18}
                className="
                  mt-0.5
                  shrink-0
                  text-emerald-600
                "
              />

              <span className="text-sm text-slate-600">
                {benefit}
              </span>

            </div>
          ))}

        </div>

        <div
          className="
            mt-10
            flex
            items-center
            justify-between
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              text-sm
              font-medium
              text-emerald-700
            "
          >
            <Leaf size={18} />

            Premium Formula
          </div>

          <button
            className="
              group/button
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-slate-900
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-emerald-700
            "
          >
            Dealer Contact

            <ArrowRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover/button:translate-x-1
              "
            />
          </button>

        </div>

      </div>
    </article>
  );
}