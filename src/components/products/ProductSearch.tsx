"use client";

import { Search, X } from "lucide-react";

type ProductSearchProps = {
  search: string;
  total: number;
  onSearch: (value: string) => void;
};

export default function ProductSearch({
  search,
  total,
  onSearch,
}: ProductSearchProps) {
  return (
    <section className="sticky top-20 z-20 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-8">

        <div className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-xl">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Product Catalogue
              </p>

              <h2 className="mt-2 text-3xl font-bold text-foreground">
                Find the right product
              </h2>

              <p className="mt-2 text-muted-foreground">
                Browse our complete agricultural product portfolio.
              </p>
            </div>

            <div className="w-full max-w-xl">

              <div className="relative">

                <Search
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground"
                />

                <input
                  value={search}
                  onChange={(e) => onSearch(e.target.value)}
                  placeholder="Search by product, crop or category..."
                  className="h-14 w-full rounded-full border border-border bg-background pl-14 pr-12 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />

                {search.length > 0 && (
                  <button
                    onClick={() => onSearch("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 transition hover:bg-muted"
                  >
                    <X size={18} />
                  </button>
                )}

              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                Showing{" "}
                <span className="font-semibold text-foreground">
                  {total}
                </span>{" "}
                products
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}