"use client";

import dynamic from "next/dynamic";

import type { Dealer } from "@/types/dealer";

const DealerMapView = dynamic<{
  dealers: Dealer[];
}>(
  () =>
    import("./DealerMapView").then(
      (mod) => mod.default
    ),
  {
    ssr: false,
  }
);

type DealerMapProps = {
  dealers: Dealer[];
};

export default function DealerMap({
  dealers,
}: DealerMapProps) {
  return (
    <section className="bg-[#FCFCFA] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Dealer Locations
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
            Explore Our Network
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            View all authorized UNIK BIOTECH dealers
            across India and locate the one nearest
            to you.
          </p>

        </div>

        <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl">

          <DealerMapView dealers={dealers} />

        </div>

      </div>

    </section>
  );
}