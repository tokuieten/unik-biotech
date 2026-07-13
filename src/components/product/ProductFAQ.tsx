"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import type { Product } from "@/types/product";

interface ProductFAQProps {
  product: Product;
}

export default function ProductFAQ({
  product,
}: ProductFAQProps) {
  const faqs = [
    {
      question: `What is ${product.name} used for?`,
      answer: product.description,
    },
    {
      question: "Which crops is this product suitable for?",
      answer:
        product.crops?.length
          ? `Recommended for ${product.crops.join(
              ", "
            )}.`
          : "Suitable for a wide range of agricultural crops. Contact our agronomy team for crop-specific recommendations.",
    },
    {
      question: "How should this product be applied?",
      answer:
        product.dosage ??
        "Please follow the dosage recommended by our agronomy experts or as mentioned on the product label.",
    },
    {
      question: "What is the product composition?",
      answer:
        product.composition ??
        "Detailed composition is available on request.",
    },
    {
      question:
        "Can this product be mixed with other agricultural inputs?",
      answer:
        "Compatibility depends on the product combination and field conditions. Always perform a jar test before mixing and consult our technical experts if required.",
    },
    {
      question:
        "Where can I purchase this product?",
      answer:
        "You can contact UNIK BIOTECH directly or locate your nearest authorized dealer through our dealer network.",
    },
  ];

  const [openIndex, setOpenIndex] =
    useState(0);

  return (
    <section className="bg-[#F8FAF7] py-28">

      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
            Everything you need to know
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Find answers to the most common
            questions regarding application,
            dosage, compatibility and usage of
            {` ${product.name}.`}
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => {
            const open =
              index === openIndex;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setOpenIndex(
                      open ? -1 : index
                    )
                  }
                  className="flex w-full items-center justify-between px-8 py-7 text-left"
                >
                  <h3 className="pr-8 text-lg font-bold text-slate-900">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${
                      open
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">

                    <div className="border-t border-slate-100 px-8 py-6">

                      <p className="leading-8 text-slate-600">
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}