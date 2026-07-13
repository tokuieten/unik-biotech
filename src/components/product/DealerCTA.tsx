"use client";

import Link from "next/link";
import {
  ArrowRight,
  PhoneCall,
  MapPin,
  Users,
} from "lucide-react";

import type { Product } from "@/types/product";

interface DealerCTAProps {
  product: Product;
}

export default function DealerCTA({
  product,
}: DealerCTAProps) {
  return (
    <section className="relative overflow-hidden bg-[#062B1C] py-28">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-130 w-130 rounded-full bg-emerald-500/10 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-130 w-130 rounded-full bg-lime-400/10 blur-[160px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_45%)]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Left */}

          <div>

            <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-300">
              Need Assistance?
            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight text-white lg:text-6xl">
              Ready to use
              <br />
              {product.name}?
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/75">
              Connect with our agricultural experts
              or locate your nearest authorized
              UNIK BIOTECH dealer for product
              guidance, pricing and availability.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-emerald-900 transition-all duration-300 hover:scale-105"
              >
                Contact Expert

                <ArrowRight size={18} />
              </Link>

              <Link
                href="/dealer"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
              >
                Find Dealer
              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">

            <div className="space-y-8">

              <div className="flex gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">

                  <Users size={30} />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-white">
                    Expert Guidance
                  </h3>

                  <p className="mt-2 leading-7 text-white/70">
                    Get crop-specific product
                    recommendations from our
                    specialists.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">

                  <MapPin size={30} />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-white">
                    Nationwide Dealer Network
                  </h3>

                  <p className="mt-2 leading-7 text-white/70">
                    Find an authorized dealer near
                    you for quick product
                    availability.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">

                  <PhoneCall size={30} />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-white">
                    Direct Support
                  </h3>

                  <p className="mt-2 leading-7 text-white/70">
                    Our technical team is available
                    to help you achieve the best
                    field performance.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}