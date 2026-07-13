import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  FlaskConical,
  Leaf,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import type { Product } from "@/types/product";

type Props = {
  product: Product;
  featured?: boolean;
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
  micronutrient: "bg-emerald-100 text-emerald-700",
  biostimulant: "bg-sky-100 text-sky-700",
  protection: "bg-rose-100 text-rose-700",
  soil: "bg-amber-100 text-amber-700",
  biofertilizer: "bg-teal-100 text-teal-700",
  spreader: "bg-violet-100 text-violet-700",
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
  featured = false,
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
        rounded-[30px]
        border
        border-slate-200
        bg-white
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-emerald-300
        hover:shadow-2xl
      "
    >
      <div className="absolute inset-0 bg-linear-to-b from-white via-white to-emerald-50/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Badge */}

      <div className="absolute left-5 top-5 z-20 flex items-center gap-2">

        <div
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold ${badge}`}
        >
          <Icon size={13} />
          {category}
        </div>

        {featured && (
          <div className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1.5 text-[11px] font-semibold text-amber-700">
            <Sparkles size={12} />
            Featured
          </div>
        )}

      </div>

      {/* IMAGE */}

      <div
        className={`
          relative
          overflow-hidden
          border-b
          border-slate-100
          ${
            featured
              ? "bg-linear-to-b from-emerald-50 via-white to-white"
              : "bg-white"
          }
        `}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,.08),transparent_70%)]" />

        <div
          className={`
            relative
            flex
            items-center
            justify-center
            ${
              featured
                ? "h-85 p-8"
                : "h-64 p-4"
            }
          `}
        >
          <Image
            src={
              product.image ||
              "/images/products/placeholder.png"
            }
            alt={product.name}
            width={featured ? 340 : 260}
            height={featured ? 340 : 260}
            className={`
              h-auto
              w-auto
              object-contain
              transition-all
              duration-500
              group-hover:scale-105
              ${
                featured
                  ? "max-h-72.5 max-w-72.5"
                  : "max-h-full max-w-full"
              }
            `}
          />
        </div>
      </div>

      {/* CONTENT */}

      <div
        className={`
          relative
          ${
            featured
              ? "space-y-5 px-7 py-7"
              : "space-y-4 px-6 py-6"
          }
        `}
      >
        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
            {product.tagline}
          </p>

          <h3
            className={`
              mt-2
              font-black
              leading-tight
              text-slate-900
              ${
                featured
                  ? "text-3xl"
                  : "text-2xl"
              }
            `}
          >
            {product.name}
          </h3>

        </div>

        <p
          className={`
            text-slate-600
            ${
              featured
                ? "line-clamp-3 text-[15px] leading-7"
                : "line-clamp-2 text-sm leading-6"
            }
          `}
        >
          {product.description}
        </p>

        {product.benefits.length > 0 && (

          <div className="flex flex-wrap gap-2">

            {product.benefits
              .slice(0, featured ? 3 : 2)
              .map((benefit) => (
                <span
                  key={benefit}
                  className="
                    rounded-full
                    border
                    border-emerald-100
                    bg-emerald-50
                    px-3
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

        <div className="border-t border-slate-100 pt-5">

          <Link
            href={`/products/${product.slug}`}
            className="
              inline-flex
              items-center
              gap-2
              font-semibold
              text-emerald-700
              transition-all
              duration-300
              group-hover:gap-4
            "
          >
            View Product

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </Link>

        </div>

      </div>

    </article>
  );
}