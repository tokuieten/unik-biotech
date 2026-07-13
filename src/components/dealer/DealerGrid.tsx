import { SearchX } from "lucide-react";

import DealerCard from "./DealerCard";

import type { Dealer } from "@/types/dealer";

type DealerGridProps = {
  dealers: Dealer[];
};

export default function DealerGrid({
  dealers,
}: DealerGridProps) {
  if (dealers.length === 0) {
    return (
      <section className="bg-[#FCFCFA] py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div
            className="
              rounded-[36px]
              border
              border-slate-200
              bg-white
              px-8
              py-24
              text-center
              shadow-sm
            "
          >

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50">

              <SearchX
                size={42}
                className="text-emerald-600"
              />

            </div>

            <h2 className="mt-8 text-3xl font-black text-slate-900">
              No Dealers Found
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              We couldn&apos;t find any authorized dealers
              matching your search or selected filters.
              Try changing the search term or selecting
              another district.
            </p>

          </div>

        </div>

      </section>
    );
  }

  return (
    <section className="bg-[#FCFCFA] py-16">

      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}

        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">

              Authorized Network

            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900">
              Available Dealers
            </h2>

            <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-600">
              Contact your nearest authorized UNIK BIOTECH
              dealer for genuine products, expert guidance
              and reliable agricultural solutions.
            </p>

          </div>

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 px-7 py-5 text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Showing
            </p>

            <p className="mt-2 text-5xl font-black text-slate-900">
              {dealers.length}
            </p>

            <p className="text-sm text-slate-500">
              Dealers
            </p>

          </div>

        </div>

        {/* Grid */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {dealers.map((dealer, index) => (

            <div
              key={dealer.id}
              className="animate-fade-up"
              style={{
                animationDelay: `${index * 70}ms`,
                animationFillMode: "both",
              }}
            >
              <DealerCard
                dealer={dealer}
              />
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}