import ProductCard from "./ProductCard";

import type { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({
  products,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-360 px-6">

          <div className="rounded-[28px] border border-slate-200 bg-white px-8 py-20 text-center shadow-sm">

            <h3 className="text-2xl font-bold text-slate-900">
              No Products Found
            </h3>

            <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-600">
              We couldn&apos;t find any products
              matching your search or selected
              category. Try changing the filters
              or search term.
            </p>

          </div>

        </div>

      </section>
    );
  }

  return (
    <section
      id="products-grid"
      className="py-2"
    >
      <div className="mx-auto max-w-360">

        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {products.map(
            (product, index) => (
              <div
                key={product.slug}
                className="animate-fade-up"
                style={{
                  animationDelay: `${index * 60}ms`,
                  animationFillMode:
                    "both",
                }}
              >
                <ProductCard
                  product={product}
                />
              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
}