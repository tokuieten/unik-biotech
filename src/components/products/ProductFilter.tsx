"use client";

import { Search } from "lucide-react";

import type { ProductCategory } from "@/types/product";

interface ProductFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;

  category: ProductCategory | "all";
  onCategoryChange: (
    value: ProductCategory | "all"
  ) => void;

  totalProducts: number;
}

const categories = [
  {
    id: "all",
    label: "All Products",
  },
  {
    id: "micronutrient",
    label: "Micronutrients",
  },
  {
    id: "biostimulant",
    label: "Biostimulants",
  },
  {
    id: "protection",
    label: "Crop Protection",
  },
  {
    id: "soil",
    label: "Soil Conditioners",
  },
  {
    id: "biofertilizer",
    label: "Bio Fertilizers",
  },
  {
    id: "spreader",
    label: "Spreaders & Stickers",
  },
] as const;

export default function ProductFilters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
}: ProductFiltersProps) {
  return (
    <section className="sticky top-20 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl">

      <div className="mx-auto max-w-360 px-6 py-5">

        {/* Search */}

        <div className="relative max-w-md">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              onSearchChange(e.target.value)
            }
            placeholder="Search products..."
            className="
              h-12
              w-full
              rounded-full
              border
              border-slate-200
              bg-slate-50
              pl-12
              pr-4
              text-sm
              outline-none
              transition-all
              duration-300
              placeholder:text-slate-400
              focus:border-emerald-500
              focus:bg-white
              focus:ring-4
              focus:ring-emerald-100
            "
          />

        </div>

        {/* Categories */}

        <div className="mt-4 flex flex-wrap gap-3">

          {categories.map((item) => {
            const active =
              category === item.id;

            return (
              <button
                key={item.id}
                onClick={() =>
                  onCategoryChange(
                    item.id as
                      | ProductCategory
                      | "all"
                  )
                }
                className={`
                  rounded-full
                  border
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  ${
                    active
                      ? "border-emerald-700 bg-emerald-700 text-white shadow-md"
                      : "border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
                  }
                `}
              >
                {item.label}
              </button>
            );
          })}

        </div>

      </div>

    </section>
  );
}