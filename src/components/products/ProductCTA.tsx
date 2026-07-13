"use client";

import Link from "next/link";
import {
  ArrowRight,
  PhoneCall,
  MapPin,
} from "lucide-react";

export default function ProductCTA() {
  return (
    <section className="bg-[#082417] py-20">

      <div className="mx-auto max-w-360 px-6">

        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-r from-emerald-900 via-emerald-800 to-green-800 px-8 py-10 lg:px-14 lg:py-14">

          {/* Background Glow */}

          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[100px]" />

          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-lime-400/10 blur-[120px]" />

          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}

            <div className="max-w-2xl">

              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                Expert Assistance
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight text-white lg:text-5xl">
                Need help selecting
                the right product?
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/75">
                Our agricultural specialists can
                recommend the ideal solution based
                on your crop, soil conditions and
                farming requirements.
              </p>

            </div>

            {/* Right */}

            <div className="flex flex-col gap-4 lg:min-w-[320px]">

              <Link
                href="/contact"
                className="group inline-flex items-center justify-between rounded-2xl bg-white px-6 py-4 font-semibold text-emerald-900 transition-all duration-300 hover:scale-[1.02]"
              >
                Contact Expert

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

              <Link
                href="/dealer"
                className="group inline-flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/15"
              >
                <span className="flex items-center gap-2">

                  <MapPin size={18} />

                  Find Dealer

                </span>

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

              <a
                href="tel:+919876543210"
                className="group inline-flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/15"
              >
                <span className="flex items-center gap-2">

                  <PhoneCall size={18} />

                  Call Support

                </span>

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}