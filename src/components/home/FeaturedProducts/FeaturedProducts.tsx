"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  FlaskConical,
  Leaf,
  ShieldCheck,
  Sprout,
} from "lucide-react";
import { useMemo, useState } from "react";

type Product = {
  name: string;
  category: string;
  formula: string;
  description: string;
  benefits: string[];
  useCases: string[];
  cropBenefits: string[];
  accent: string;
};

const categories = [
  "All",
  "Bio Fertilizers",
  "Micronutrients",
  "Speciality Inputs",
  "Seed Treatments",
  "Growth Promoters",
] as const;

type Category = (typeof categories)[number];

const products: Product[] = [
  {
    name: "UniGrow Plus",
    category: "Growth Promoters",
    formula: "Seaweed Extract + Amino Acids",
    description:
      "Premium bio-stimulant developed to support vigorous crop growth and improve nutrient absorption.",
    benefits: [
      "Rapid vegetative growth",
      "Higher nutrient uptake",
      "Improves crop vigor",
    ],
    useCases: [
      "Vegetative growth",
      "Stress recovery",
      "Crop establishment",
    ],
    cropBenefits: [
      "Stronger canopy",
      "Improved vigor",
      "Better uptake",
    ],
    accent:
      "linear-gradient(135deg, #008E52 0%, #00B956 55%, #71D900 100%)",
  },
  {
    name: "MicroMax",
    category: "Micronutrients",
    formula: "Zn + Fe + Mn + B",
    description:
      "Balanced micronutrient formulation designed to correct deficiencies and improve crop productivity.",
    benefits: [
      "Corrects deficiencies",
      "Supports chlorophyll",
      "Improves flowering",
    ],
    useCases: [
      "Deficiency correction",
      "Flowering",
      "Crop recovery",
    ],
    cropBenefits: [
      "Greener leaves",
      "Uniform growth",
      "Better flowering",
    ],
    accent:
      "linear-gradient(135deg, #0078B8 0%, #069CC5 48%, #12BFA8 100%)",
  },
  {
    name: "BioShield",
    category: "Bio Fertilizers",
    formula: "Beneficial Microbial Culture",
    description:
      "Advanced biological input developed to support soil microbial activity, root development and crop health.",
    benefits: [
      "Supports healthier roots",
      "Improves soil biology",
      "Responsible formulation",
    ],
    useCases: [
      "Root zone",
      "Soil biology",
      "Crop establishment",
    ],
    cropBenefits: [
      "Root support",
      "Active soil",
      "Crop resilience",
    ],
    accent:
      "linear-gradient(135deg, #C46B00 0%, #ED8A00 48%, #FF6A00 100%)",
  },
  {
    name: "RootForce",
    category: "Growth Promoters",
    formula: "Humic + Fulvic Acid",
    description:
      "Root-development formulation designed to support nutrient efficiency and stronger crop establishment.",
    benefits: [
      "Supports root development",
      "Improves nutrient efficiency",
      "Supports stress tolerance",
    ],
    useCases: [
      "Transplanting",
      "Root growth",
      "Early crop stage",
    ],
    cropBenefits: [
      "Dense roots",
      "Better uptake",
      "Crop establishment",
    ],
    accent:
      "linear-gradient(135deg, #087B48 0%, #00A65A 52%, #68D600 100%)",
  },
  {
    name: "SeedPrime",
    category: "Seed Treatments",
    formula: "Biological Seed Treatment",
    description:
      "Seed-treatment technology developed to support germination and uniform early crop establishment.",
    benefits: [
      "Supports germination",
      "Uniform emergence",
      "Early-stage support",
    ],
    useCases: [
      "Pre-sowing",
      "Germination",
      "Seedling establishment",
    ],
    cropBenefits: [
      "Uniform stand",
      "Early vigor",
      "Crop establishment",
    ],
    accent:
      "linear-gradient(135deg, #006FAE 0%, #008FC1 50%, #0DB7C0 100%)",
  },
  {
    name: "NutriGold",
    category: "Speciality Inputs",
    formula: "Advanced Nutrient Blend",
    description:
      "Speciality crop nutrition formulation developed for balanced nutrition and productive crop performance.",
    benefits: [
      "Balanced nutrition",
      "Supports crop yield",
      "Supports produce quality",
    ],
    useCases: [
      "Crop nutrition",
      "Fruit development",
      "Yield stage",
    ],
    cropBenefits: [
      "Crop quality",
      "Uniform nutrition",
      "Productivity",
    ],
    accent:
      "linear-gradient(135deg, #C36A00 0%, #E89000 50%, #FF7100 100%)",
  },
];

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const [activeProduct, setActiveProduct] =
    useState<string | null>(null);

  const visibleProducts = useMemo(() => {
    if (activeCategory === "All") {
      return products;
    }

    return products.filter(
      (product) => product.category === activeCategory,
    );
  }, [activeCategory]);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setActiveProduct(null);
  };

  const handleCardToggle = (productName: string) => {
    setActiveProduct((current) =>
      current === productName ? null : productName,
    );
  };

  return (
    <section
      id="products"
      aria-labelledby="featured-products-title"
      className="
        relative
        overflow-hidden
        bg-[#F8FAF6]
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          STATIC SECTION ATMOSPHERE

          Intentionally static. No animated blur surfaces.
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-48
          top-24
          h-112
          w-md
          rounded-full
          bg-emerald-100/45
          blur-[100px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-48
          bottom-12
          h-120
          w-120
          rounded-full
          bg-amber-100/35
          blur-[110px]
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-375
          px-6
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mx-auto max-w-212.5 text-center">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-emerald-50
              px-5
              py-2
            "
          >
            <FlaskConical
              aria-hidden="true"
              size={14}
              strokeWidth={2}
              className="text-emerald-700"
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.32em]
                text-emerald-700
                sm:text-[11px]
              "
            >
              Featured Products
            </span>
          </div>

          <h2
            id="featured-products-title"
            className="
              mt-8
              font-heading
              text-[2.8rem]
              font-extrabold
              leading-[1.02]
              tracking-tighter
              text-[#0B1D16]
              sm:text-[3.6rem]
              lg:text-[4.4rem]
            "
          >
            Lab-engineered inputs.

            <span className="mt-2 block text-emerald-700">
              Field-proven results.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-180
              text-base
              leading-8
              text-slate-600
              sm:text-lg
            "
          >
            Every formulation is researched and developed to
            support crop health, nutrient efficiency and practical
            agricultural performance.
          </p>

          <p
            className="
              mt-3
              text-sm
              font-medium
              text-emerald-700/75
            "
          >
            Hover a product to explore its applications and crop
            benefits.
          </p>
        </div>

        {/* =====================================================
            CATEGORY FILTER
        ====================================================== */}

        <div
          className="
            mt-12
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
          "
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => handleCategoryChange(category)}
                className={[
                  "rounded-full border px-5 py-3 text-sm font-semibold",
                  "motion-transform",
                  "transition-[transform,background-color,color,border-color]",
                  "duration-300 ease-out",
                  "focus-visible:outline-none",
                  "focus-visible:ring-2",
                  "focus-visible:ring-emerald-600",
                  "focus-visible:ring-offset-2",
                  isActive
                    ? [
                        "border-emerald-700",
                        "bg-emerald-700",
                        "text-white",
                      ].join(" ")
                    : [
                        "border-[#DDE5DD]",
                        "bg-white/80",
                        "text-slate-600",
                        "hover:-translate-y-0.5",
                        "hover:border-emerald-200",
                        "hover:bg-emerald-50",
                        "hover:text-emerald-800",
                      ].join(" "),
                ].join(" ")}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* =====================================================
            PRODUCT GRID
        ====================================================== */}

        <div
          className="
            mt-14
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {visibleProducts.map((product) => {
            const isActive = activeProduct === product.name;

            return (
              // eslint-disable-next-line jsx-a11y/role-supports-aria-props
              <article
                key={product.name}
                tabIndex={0}
                aria-expanded={isActive}
                onMouseEnter={() =>
                  setActiveProduct(product.name)
                }
                onMouseLeave={() => setActiveProduct(null)}
                onFocus={() => setActiveProduct(product.name)}
                onBlur={(event) => {
                  if (
                    !event.currentTarget.contains(
                      event.relatedTarget,
                    )
                  ) {
                    setActiveProduct(null);
                  }
                }}
                onClick={() => handleCardToggle(product.name)}
                className={[
                  "group",
                  "relative",
                  "isolate",
                  "h-160",
                  "cursor-pointer",
                  "overflow-hidden",
                  "rounded-[28px]",
                  "border",
                  "bg-white",
                  "motion-transform",
                  "transition-[transform,border-color]",
                  "duration-500",
                  "ease-[cubic-bezier(0.22,1,0.36,1)]",
                  "shadow-[0_18px_55px_rgba(15,40,28,0.07)]",
                  "focus-visible:outline-none",
                  "focus-visible:ring-2",
                  "focus-visible:ring-emerald-600",
                  "focus-visible:ring-offset-4",
                  isActive
                    ? [
                        "-translate-y-2",
                        "border-emerald-200",
                      ].join(" ")
                    : [
                        "border-[#DCE4DC]",
                        "hover:-translate-y-2",
                        "hover:border-emerald-200",
                      ].join(" "),
                ].join(" ")}
              >
                {/* =================================================
                    PRODUCT COLOR HEADER
                ================================================== */}

                <div
                  className="
                    relative
                    h-55
                    overflow-hidden
                    px-7
                    py-6
                    sm:h-57.5
                    sm:px-8
                  "
                  style={{
                    background: product.accent,
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      -right-24
                      -top-24
                      h-64
                      w-64
                      rounded-full
                      border
                      border-white/25
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      -right-12
                      -top-12
                      h-44
                      w-44
                      rounded-full
                      border
                      border-white/15
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)",
                      backgroundSize: "24px 24px",
                    }}
                  />

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-full
                      flex-col
                    "
                  >
                    <div
                      className="
                        inline-flex
                        w-fit
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/35
                        bg-white/85
                        px-4
                        py-2
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[0.15em]
                        text-[#123326]
                        backdrop-blur-md
                      "
                    >
                      <ShieldCheck
                        aria-hidden="true"
                        size={13}
                      />

                      {product.category}
                    </div>

                    <div className="mt-auto">
                      <p
                        className="
                          text-xs
                          font-semibold
                          text-white/85
                        "
                      >
                        {product.formula}
                      </p>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    PRODUCT BODY
                ================================================== */}

                <div
                  className="
                    relative
                    flex
                    h-105
                    flex-col
                    px-7
                    pb-7
                    pt-7
                    sm:px-8
                  "
                >
                  <h3
                    className="
                      font-heading
                      text-[1.7rem]
                      font-extrabold
                      tracking-[-0.04em]
                      text-[#0A1D15]
                    "
                  >
                    {product.name}
                  </h3>

                  <p
                    className="
                      mt-3
                      min-h-14
                      text-sm
                      leading-7
                      text-slate-600
                    "
                  >
                    {product.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {product.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="
                          flex
                          items-center
                          gap-3
                          text-sm
                          text-slate-600
                        "
                      >
                        <span
                          className="
                            flex
                            h-5
                            w-5
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-emerald-600
                            text-emerald-700
                          "
                        >
                          <Check
                            aria-hidden="true"
                            size={12}
                            strokeWidth={2.5}
                          />
                        </span>

                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* =================================================
                      FIXED COMPOSITOR REVEAL PANEL

                      No height animation.
                      No grid row animation.
                      No layout reflow.

                      Only opacity + transform.
                  ================================================== */}

                  <div
                    aria-hidden={!isActive}
                    className={[
                      "absolute",
                      "inset-x-0",
                      "bottom-0",
                      "z-20",
                      "flex",
                      "h-73",
                      "flex-col",
                      "bg-white/98",
                      "px-7",
                      "pb-7",
                      "pt-6",
                      "sm:px-8",
                      "motion-transform",
                      "transition-[transform,opacity]",
                      "duration-500",
                      "ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isActive
                        ? [
                            "translate-y-0",
                            "opacity-100",
                            "pointer-events-auto",
                          ].join(" ")
                        : [
                            "translate-y-4.5",
                            "opacity-0",
                            "pointer-events-none",
                          ].join(" "),
                    ].join(" ")}
                  >
                    <div
                      className="
                        border-t
                        border-[#DDE6DE]
                        pt-5
                      "
                    >
                      <div className="flex items-center gap-2">
                        <Sprout
                          aria-hidden="true"
                          size={14}
                          className="text-emerald-700"
                        />

                        <p
                          className="
                            text-[10px]
                            font-extrabold
                            uppercase
                            tracking-[0.2em]
                            text-emerald-800
                          "
                        >
                          Use Cases
                        </p>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {product.useCases.map((useCase) => (
                          <span
                            key={useCase}
                            className="
                              rounded-full
                              bg-emerald-50
                              px-3
                              py-2
                              text-xs
                              font-semibold
                              text-emerald-800
                            "
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="flex items-center gap-2">
                        <Leaf
                          aria-hidden="true"
                          size={14}
                          className="text-amber-600"
                        />

                        <p
                          className="
                            text-[10px]
                            font-extrabold
                            uppercase
                            tracking-[0.2em]
                            text-amber-600
                          "
                        >
                          Crop Benefits
                        </p>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {product.cropBenefits.map((benefit) => (
                          <span
                            key={benefit}
                            className="
                              rounded-full
                              bg-amber-50
                              px-3
                              py-2
                              text-xs
                              font-semibold
                              text-amber-800
                            "
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      onClick={(event) => event.stopPropagation()}
                      className="
                        group/link
                        mt-auto
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-full
                        bg-[#021C10]
                        px-6
                        py-4
                        text-sm
                        font-bold
                        text-white
                        motion-transform
                        transition-[transform,background-color]
                        duration-300
                        ease-out
                        hover:-translate-y-0.5
                        hover:bg-emerald-700
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-emerald-600
                        focus-visible:ring-offset-2
                      "
                    >
                      Request Dealer Contact

                      <ArrowRight
                        aria-hidden="true"
                        size={16}
                        className="
                          transition-transform
                          duration-300
                          ease-out
                          group-hover/link:translate-x-1
                        "
                      />
                    </Link>
                  </div>

                  {/* =================================================
                      RESTING CTA
                  ================================================== */}

                  <Link
                    href="/contact"
                    onClick={(event) => event.stopPropagation()}
                    className="
                      group/link
                      mt-auto
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      bg-[#021C10]
                      px-6
                      py-4
                      text-sm
                      font-bold
                      text-white
                      motion-transform
                      transition-[transform,background-color]
                      duration-300
                      ease-out
                      hover:-translate-y-0.5
                      hover:bg-emerald-700
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-emerald-600
                      focus-visible:ring-offset-2
                    "
                  >
                    Request Dealer Contact

                    <ArrowRight
                      aria-hidden="true"
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        ease-out
                        group-hover/link:translate-x-1
                      "
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            PRODUCTS CTA
        ====================================================== */}

        <div className="mt-14 flex justify-center">
          <Link
            href="/products"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-emerald-200
              bg-white
              px-7
              py-4
              text-sm
              font-bold
              text-emerald-800
              shadow-[0_14px_35px_rgba(15,70,45,0.07)]
              motion-transform
              transition-[transform,background-color,color,border-color]
              duration-300
              ease-out
              hover:-translate-y-1
              hover:border-emerald-700
              hover:bg-emerald-700
              hover:text-white
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-emerald-600
              focus-visible:ring-offset-2
            "
          >
            Explore All Products

            <ArrowRight
              aria-hidden="true"
              size={17}
              className="
                transition-transform
                duration-300
                ease-out
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}