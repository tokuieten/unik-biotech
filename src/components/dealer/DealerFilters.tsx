"use client";

import { Filter, RotateCcw } from "lucide-react";

type DealerFiltersProps = {
  states: string[];
  districts: string[];

  selectedState: string;
  selectedDistrict: string;

  onStateChange: (value: string) => void;
  onDistrictChange: (value: string) => void;
};

export default function DealerFilters({
  states,
  districts,
  selectedState,
  selectedDistrict,
  onStateChange,
  onDistrictChange,
}: DealerFiltersProps) {
  const hasFilters =
    selectedState !== "all" ||
    selectedDistrict !== "all";

  return (
    <section className="border-b border-slate-200 bg-white">

      <div className="mx-auto max-w-7xl px-6 py-5">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">

              <Filter size={18} />

            </div>

            <div>

              <p className="font-semibold text-slate-900">
                Filter Dealers
              </p>

              <p className="text-sm text-slate-500">
                Narrow down your search by location.
              </p>

            </div>

          </div>

          {/* Right */}

          <div className="flex flex-wrap items-center gap-4">

            {/* State */}

            <select
              value={selectedState}
              onChange={(e) =>
                onStateChange(e.target.value)
              }
              className="
                h-12
                min-w-55
                rounded-xl
                border
                border-slate-200
                bg-white
                px-4
                text-sm
                font-medium
                text-slate-700
                outline-none
                transition-all
                focus:border-emerald-500
                focus:ring-4
                focus:ring-emerald-100
              "
            >
              {states.map((state) => (
                <option
                  key={state}
                  value={state}
                >
                  {state === "all"
                    ? "All States"
                    : state}
                </option>
              ))}
            </select>

            {/* District */}

            <select
              value={selectedDistrict}
              onChange={(e) =>
                onDistrictChange(
                  e.target.value
                )
              }
              className="
                h-12
                min-w-55
                rounded-xl
                border
                border-slate-200
                bg-white
                px-4
                text-sm
                font-medium
                text-slate-700
                outline-none
                transition-all
                focus:border-emerald-500
                focus:ring-4
                focus:ring-emerald-100
              "
            >
              {districts.map(
                (district) => (
                  <option
                    key={district}
                    value={district}
                  >
                    {district === "all"
                      ? "All Districts"
                      : district}
                  </option>
                )
              )}
            </select>

            {/* Reset */}

            {hasFilters && (
              <button
                onClick={() => {
                  onStateChange("all");
                  onDistrictChange("all");
                }}
                className="
                  inline-flex
                  h-12
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-200
                  px-5
                  font-medium
                  text-slate-600
                  transition-all
                  hover:border-emerald-300
                  hover:text-emerald-700
                "
              >
                <RotateCcw size={16} />

                Clear Filters

              </button>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}