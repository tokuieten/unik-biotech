import {
  ArrowRight,
  TrendingUp,
} from "lucide-react";

import DealerBenefits from "./DealerBenefits";
import DealerForm from "./DealerForm";

export default function BecomeDealer() {
  return (
    <section
      id="become-dealer"
      className="bg-[#FCFCFA] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">

            <TrendingUp size={14} />

            Partnership Opportunity

          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
            Become an
            <span className="block text-emerald-700">
              Authorized Dealer
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Join UNIK BIOTECH&apos;s growing dealer network
            and provide innovative agricultural
            solutions to farmers in your region.
            We support our partners with premium
            products, technical expertise and
            continuous business growth.
          </p>

        </div>

        {/* Content */}

        <div className="grid gap-12 xl:grid-cols-[1fr_520px]">

          {/* Benefits */}

          <DealerBenefits />

          {/* Form */}

          <DealerForm />

        </div>

        {/* Bottom Strip */}

        <div className="mt-16 rounded-4xl bg-linear-to-r from-emerald-900 via-emerald-800 to-green-700 px-8 py-8 text-white">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <h3 className="text-2xl font-black">
                Ready to grow with UNIK BIOTECH?
              </h3>

              <p className="mt-2 text-white/80">
                Submit your application today.
                Our team will review it and
                contact you shortly.
              </p>

            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur">

              We usually respond within 24–48 hours

              <ArrowRight size={16} />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}