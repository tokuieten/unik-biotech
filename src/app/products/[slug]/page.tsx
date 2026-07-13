import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PRODUCTS } from "@/data/products";

import ProductHero from "@/components/product/ProductHero";
import ProductOverview from "@/components/product/ProductOverview";
import ProductBenefits from "@/components/product/ProductBenefits";
import ProductComposition from "@/components/product/ProductComposition";
import ProductDosage from "@/components/product/ProductDosage";
import ProductCrops from "@/components/product/ProductCrops";
import ProductFAQ from "@/components/product/ProductFAQ";
import RelatedProducts from "@/components/product/RelatedProducts";
import DealerCTA from "@/components/product/DealerCTA";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* ==========================================================
   STATIC PARAMS
========================================================== */

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

/* ==========================================================
   METADATA
========================================================== */

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = PRODUCTS.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | UNIK BIOTECH`,
    description: product.description,

    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.image,
        },
      ],
    },
  };
}

/* ==========================================================
   PAGE
========================================================== */

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = PRODUCTS.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (item) =>
      item.slug !== product.slug &&
      item.category === product.category
  );
    return (
    <main className="overflow-x-hidden bg-white">

      {/* ======================================================
          HERO
      ======================================================= */}

      <ProductHero
        product={product}
      />

      {/* ======================================================
          OVERVIEW
      ======================================================= */}

      <ProductOverview
        product={product}
      />

      {/* ======================================================
          BENEFITS
      ======================================================= */}

      <ProductBenefits
        product={product}
      />

      {/* ======================================================
          COMPOSITION
      ======================================================= */}

      <ProductComposition
        product={product}
      />

      {/* ======================================================
          DOSAGE
      ======================================================= */}

      <ProductDosage
        product={product}
      />

      {/* ======================================================
          CROPS
      ======================================================= */}

      <ProductCrops
        product={product}
      />

      {/* ======================================================
          FAQ
      ======================================================= */}

      <ProductFAQ
        product={product}
      />

      {/* ======================================================
          RELATED PRODUCTS
      ======================================================= */}

      <RelatedProducts
        currentProduct={product}
        products={relatedProducts}
      />

      {/* ======================================================
          CTA
      ======================================================= */}

      <DealerCTA
        product={product}
      />

    </main>
  );
}