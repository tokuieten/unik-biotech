import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  FlaskConical,
  Leaf,
  ShieldCheck,
} from "lucide-react";

import type { Product } from "@/types/product";

type Props = {
  product: Product;
};

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
    "bg-emerald-100 text-emerald-700",

  biostimulant:
    "bg-sky-100 text-sky-700",

  protection:
    "bg-rose-100 text-rose-700",

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

export default function ProductCard({
  product,
}: Props) {
  const Icon =
    categoryIcons[product.category] ??
    FlaskConical;

  const badge =
    categoryColors[product.category] ??
    "bg-neutral-100 text-neutral-700";

  const category =
    categoryLabels[product.category] ??
    "Product";

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200
        bg-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-emerald-300
        hover:shadow-xl
      "
    >
      {/* Background */}

      <div className="absolute inset-0 bg-linear-to-b from-white via-white to-emerald-50/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Category */}

      <div className="absolute left-5 top-5 z-20">

        <div
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold ${badge}`}
        >
          <Icon size={13} />

          {category}

        </div>

      </div>

      {/* Image */}

      <div className="relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,.06),transparent_70%)]" />

        <div className="relative flex h-64 items-center justify-center p-4">

          <Image
            src={
              product.image ||
              "/images/products/placeholder.png"
            }
            alt={product.name}
            width={260}
            height={260}
            className="
              h-auto
              w-auto
              max-h-full
              max-w-full
              object-contain
              object-center
              transition-all
              duration-500
              group-hover:scale-105
            "
          />

        </div>

      </div>

      {/* Content */}

      <div className="relative space-y-4 px-6 pb-6">

        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
            {product.tagline}
          </p>

          <h3 className="mt-2 text-2xl font-bold leading-tight text-slate-900">
            {product.name}
          </h3>

        </div>

        <p className="line-clamp-2 text-sm leading-6 text-slate-600">
          {product.description}
        </p>

        {/* Benefits */}

        {product.benefits.length > 0 && (

          <div className="flex flex-wrap gap-2">

            {product.benefits
              .slice(0, 2)
              .map((benefit) => (
                <span
                  key={benefit}
                  className="
                    rounded-full
                    border
                    border-emerald-100
                    bg-emerald-50
                    px-2.5
                    py-1
                    text-[11px]
                    font-medium
                    text-emerald-700
                  "
                >
                  {benefit}
                </span>
              ))}

          </div>

        )}

        {/* CTA */}

        <div className="border-t border-slate-100 pt-4">

          <Link
            href={`/products/${product.slug}`}
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-emerald-700
              transition-all
              duration-300
              group-hover:gap-3
            "
          >
            View Product

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </Link>

        </div>

      </div>

    </article>
  );
}