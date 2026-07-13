"use client";

import Link from "next/link";
import {
  ArrowRight,
  PhoneCall,
  Store,
  UserPlus,
} from "lucide-react";

export default function DealerCTA() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-linear-to-br from-emerald-950 via-emerald-900 to-green-800" />

      {/* Glow */}

      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />

      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl md:p-16">

          <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center">

            {/* Left */}

            <div>

              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">

                <Store size={15} />

                Dealer Network

              </span>

              <h2 className="mt-6 text-5xl font-black leading-tight text-white">

                Let&apos;s Grow

                <span className="block text-emerald-300">
                  Together
                </span>

              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">

                Whether you&apos;re searching for an
                authorized dealer or looking to
                partner with UNIK BIOTECH, our team
                is ready to help you with the right
                products, technical guidance and
                business opportunities.

              </p>

            </div>

            {/* Right */}

            <div className="space-y-5">

              <Link
                href="/dealer-locator#dealer-grid"
                className="group flex items-center justify-between rounded-2xl bg-white px-8 py-6 font-semibold text-emerald-900 transition-all duration-300 hover:scale-[1.02]"
              >

                <span className="flex items-center gap-3">

                  <Store size={22} />

                  Find Authorized Dealer

                </span>

                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />

              </Link>

              <Link
                href="#become-dealer"
                className="group flex items-center justify-between rounded-2xl border border-white/20 bg-white/5 px-8 py-6 font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >

                <span className="flex items-center gap-3">

                  <UserPlus size={22} />

                  Become a Dealer

                </span>

                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />

              </Link>

              <a
                href="tel:+919876543210"
                className="group flex items-center justify-between rounded-2xl border border-white/20 bg-white/5 px-8 py-6 font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >

                <span className="flex items-center gap-3">

                  <PhoneCall size={22} />

                  Talk to Our Team

                </span>

                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}