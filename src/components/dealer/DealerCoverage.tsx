import {
  MapPinned,
  Store,
  Map,
  Users,
  BadgeCheck,
} from "lucide-react";

type DealerCoverageProps = {
  totalDealers: number;
  totalStates: number;
  totalDistricts: number;
};

export default function DealerCoverage({
  totalDealers,
  totalStates,
  totalDistricts,
}: DealerCoverageProps) {
  return (
    <section className="bg-[#F8FAF7] py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Dealer Network
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
            Growing Across India
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our expanding dealer network ensures farmers,
            distributors and retailers always have access
            to genuine UNIK BIOTECH products and expert
            agronomic support.
          </p>

        </div>

        {/* Statistics */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {/* Dealers */}

          <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">

              <Store size={26} />

            </div>

            <p className="mt-8 text-5xl font-black text-slate-900">
              {totalDealers}+
            </p>

            <p className="mt-3 font-medium text-slate-600">
              Authorized Dealers
            </p>

          </div>

          {/* States */}

          <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">

              <Map size={26} />

            </div>

            <p className="mt-8 text-5xl font-black text-slate-900">
              {totalStates}+
            </p>

            <p className="mt-3 font-medium text-slate-600">
              States Covered
            </p>

          </div>

          {/* Districts */}

          <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">

              <MapPinned size={26} />

            </div>

            <p className="mt-8 text-5xl font-black text-slate-900">
              {totalDistricts}+
            </p>

            <p className="mt-3 font-medium text-slate-600">
              Districts Covered
            </p>

          </div>

          {/* Trust */}

          <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">

              <BadgeCheck size={26} />

            </div>

            <p className="mt-8 text-5xl font-black text-slate-900">
              20+
            </p>

            <p className="mt-3 font-medium text-slate-600">
              Years of Trust
            </p>

          </div>

        </div>

        {/* Bottom Banner */}

        <div className="mt-16 overflow-hidden rounded-[36px] bg-linear-to-r from-emerald-900 via-emerald-800 to-green-800 p-10 text-white">

          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">

                <Users size={16} />

                Trusted Network

              </div>

              <h3 className="mt-5 text-4xl font-black">
                Building Strong Partnerships
              </h3>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
                Every authorized dealer is backed by
                product training, agronomic guidance,
                technical support and a reliable supply
                chain to serve farmers efficiently.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4 text-center">

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                <p className="text-3xl font-black">
                  100%
                </p>

                <p className="mt-2 text-sm text-white/75">
                  Genuine Products
                </p>

              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                <p className="text-3xl font-black">
                  Fast
                </p>

                <p className="mt-2 text-sm text-white/75">
                  Supply Network
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}