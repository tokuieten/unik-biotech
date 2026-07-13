"use client";

import { useMemo, useState } from "react";

import ProductFilters from "@/components/products/ProductFilter";
import ProductGrid from "@/components/products/ProductGrid";
import ProductEmpty from "@/components/products/ProductEmpty";

import type {
  Product,
  ProductCategory,
  ProductCategoryItem,
} from "@/types/product";

type ProductsClientProps = {
  products: Product[];
  categories: ProductCategoryItem[];
};

export default function ProductsClient({
  products,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  categories,
}: ProductsClientProps) {
  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState<ProductCategory | "all">("all");

  /* ==========================================================
     FILTER PRODUCTS
  ========================================================== */

  const filteredProducts = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        category === "all"
          ? true
          : product.category === category;

      if (!matchesCategory) {
        return false;
      }

      if (!keyword) {
        return true;
      }

      const searchable = [
        product.name,
        product.tagline,
        product.description,
        product.category,
        product.composition ?? "",
        product.form ?? "",
        ...(product.crops ?? []),
        ...(product.benefits ?? []),
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(keyword);
    });
  }, [products, category, search]);

  return (
    <>
      {/* ======================================================
          FILTERS
      ======================================================= */}

      <ProductFilters
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        totalProducts={filteredProducts.length}
      />

      {/* ======================================================
          PRODUCTS
      ======================================================= */}

      <section className="bg-[#FCFCFA] py-6">

        <div className="mx-auto max-w-360 px-6">

          {/* Small Header */}

          <div className="mb-6 flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Products
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Browse our latest agricultural
                solutions.
              </p>

            </div>

            {search && (
              <button
                onClick={() => setSearch("")}
                className="
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-slate-600
                  transition-all
                  duration-300
                  hover:border-emerald-300
                  hover:text-emerald-700
                "
              >
                Clear Search
              </button>
            )}

          </div>

          {/* Product Grid */}

          {filteredProducts.length > 0 ? (
            <ProductGrid
              products={filteredProducts}
            />
          ) : (
            <ProductEmpty
              search={search}
            />
          )}

        </div>

      </section>
    </>
  );
}