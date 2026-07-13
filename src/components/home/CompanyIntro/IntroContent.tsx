"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function IntroContent() {
  return (
    <div className="max-w-xl">

      <span className="inline-flex rounded-full bg-emerald-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700">
        About UNIK BIOTECH
      </span>

      <h2 className="mt-8 text-5xl font-black leading-tight text-slate-900 lg:text-6xl">
        Biotechnology built
        <br />

        <span className="text-emerald-700">
          for modern agriculture.
        </span>
      </h2>

      <p className="mt-8 text-lg leading-9 text-slate-600">
        Since 2005, UNIK BIOTECH RESEARCH has been committed to
        developing scientifically advanced agricultural inputs that help
        farmers improve crop health, increase productivity and practice
        sustainable farming.
      </p>

      <p className="mt-6 text-lg leading-9 text-slate-600">
        From micronutrients and bio-fertilizers to specialty crop
        nutrition, every formulation is designed through research and
        validated through field performance.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">

        <Link
          href="/about"
          className="inline-flex items-center gap-3 rounded-full bg-emerald-700 px-7 py-4 font-semibold text-white transition hover:bg-emerald-800"
        >
          Discover Our Story

          <ArrowRight size={18} />
        </Link>

        <Link
          href="/products"
          className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-emerald-700 hover:text-emerald-700"
        >
          View Products
        </Link>

      </div>

    </div>
  );
}