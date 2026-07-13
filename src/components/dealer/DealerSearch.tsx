"use client";

import { Search, Store, MapPin } from "lucide-react";

type DealerSearchProps = {
  search: string;
  totalDealers: number;
  onSearchChange: (value: string) => void;
};

export default function DealerSearch({
  search,
  totalDealers,
  onSearchChange,
}: DealerSearchProps) {
  return (
    <section
      id="dealer-search"
      className="sticky top-20 z-40 border-b border-emerald-100 bg-white/90 backdrop-blur-2xl"
    >
      <div className="mx-auto max-w-7xl px-6 py-6">

        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">

          {/* Left */}

          <div>

            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">

              <Store size={14} />

              Dealer Locator

            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900">
              Find Your Nearest Dealer
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600 leading-7">
              Search by dealer name, district, city or location to
              quickly find an authorized UNIK BIOTECH dealer near you.
            </p>

          </div>

          {/* Dealer Count */}

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 px-8 py-6 text-center shadow-sm">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Dealers
            </p>

            <p className="mt-2 text-5xl font-black text-slate-900">
              {totalDealers}
            </p>

          </div>

        </div>

        {/* Search */}

        <div className="relative mt-8">

          <Search
            size={20}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              onSearchChange(e.target.value)
            }
            placeholder="Search dealer, city, district or product..."
            className="
              h-16
              w-full
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              pl-16
              pr-6
              text-[16px]
              outline-none
              transition-all
              duration-300
              placeholder:text-slate-400
              focus:border-emerald-500
              focus:bg-white
              focus:ring-4
              focus:ring-emerald-100
            "
          />

        </div>

        {/* Quick Hint */}

        <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">

          <MapPin
            size={15}
            className="text-emerald-600"
          />

          Search using district, city, dealer name or product category.

        </div>

      </div>
    </section>
  );
}