"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can become an authorized UNIK BIOTECH dealer?",
    answer:
      "Agricultural retailers, distributors, agri-input businesses and entrepreneurs involved in the agriculture sector can apply to become an authorized dealer.",
  },
  {
    question: "How long does the approval process take?",
    answer:
      "Our team typically reviews dealer applications within 24–48 business hours. Once verified, we'll contact you regarding the next steps.",
  },
  {
    question: "Do I need previous experience in agricultural products?",
    answer:
      "Previous experience is beneficial but not mandatory. We provide product training, technical guidance and marketing support to help every dealer succeed.",
  },
  {
    question: "What support does UNIK BIOTECH provide to dealers?",
    answer:
      "Dealers receive technical training, product knowledge, marketing materials, promotional support and direct assistance from our agronomy and sales teams.",
  },
  {
    question: "Can I apply from any state in India?",
    answer:
      "Yes. We are continuously expanding our dealer network across India and welcome applications from every region.",
  },
  {
    question: "How do I locate my nearest dealer?",
    answer:
      "Use the Dealer Locator search and filters above to search by dealer name, city, district or state.",
  },
];

export default function DealerFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#F8FAF7] py-28">
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-16 text-center">

          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            FAQs
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Everything you need to know about becoming an
            authorized dealer and our dealer network.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-emerald-200"
              >
                <button
                  onClick={() =>
                    setOpenIndex(
                      isOpen ? -1 : index
                    )
                  }
                  className="flex w-full items-center justify-between px-8 py-7 text-left"
                >
                  <h3 className="text-lg font-bold text-slate-900">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-8 py-6 text-slate-600 leading-8">
                      {faq.answer}
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