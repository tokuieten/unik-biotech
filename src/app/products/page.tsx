import type { Metadata } from "next";

import ProductsHero from "@/components/products/ProductsHero";
import ProductCTA from "@/components/products/ProductCTA";

import ProductsClient from "./ProductsClient";

import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
} from "@/data/products";

/* ============================================================
   SEO
============================================================ */

export const metadata: Metadata = {
  title: "Products | UNIK BIOTECH",
  description:
    "Explore UNIK BIOTECH's complete portfolio of micronutrients, biostimulants, biofertilizers, crop protection solutions and soil conditioners.",
};

/* ============================================================
   PAGE
============================================================ */

export default function ProductsPage() {
  return (
    <main className="bg-[#FCFCFA]">

      {/* ======================================================
          HERO
      ======================================================= */}

      <ProductsHero />

      {/* ======================================================
          PRODUCTS
      ======================================================= */}

      <ProductsClient
        products={PRODUCTS}
        categories={PRODUCT_CATEGORIES}
      />

      {/* ======================================================
          CTA
      ======================================================= */}

      <ProductCTA />

    </main>
  );
}