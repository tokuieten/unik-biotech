"use client";

import type { ProductCategory } from "@/types/product";
import { PRODUCT_CATEGORIES } from "@/data/products";

type Props = {
  activeCategory: ProductCategory | "all";
  onChange: (category: ProductCategory | "all") => void;
};

export default function ProductCategoryTabs({
  activeCategory,
  onChange,
}: Props) {
  return (
    <div className="overflow-x-auto">
      <div className="flex min-w-max gap-3 pb-2">

        {PRODUCT_CATEGORIES.map((category) => {
          const active =
            activeCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() =>
                onChange(
                  category.id as ProductCategory | "all"
                )
              }
              className={`
                whitespace-nowrap
                rounded-full
                px-5
                py-3
                text-sm
                font-semibold
                transition-all
                duration-300

                ${
                  active
                    ? "bg-primary text-white shadow-lg"
                    : "border border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-primary"
                }
              `}
            >
              {category.label}
            </button>
          );
        })}

      </div>
    </div>
  );
}