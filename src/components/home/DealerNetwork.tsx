"use client";

import Link from "next/link";
import type { CSSProperties } from "react";

import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  MapPin,
  Phone,
} from "lucide-react";

type StateItem = {
  name: string;
  animationDelay: string;
  animationDuration: string;
};

const states: StateItem[] = [
  {
    name: "Maharashtra",
    animationDelay: "0s",
    animationDuration: "8.2s",
  },
  {
    name: "Gujarat",
    animationDelay: "-2.1s",
    animationDuration: "9.1s",
  },
  {
    name: "Karnataka",
    animationDelay: "-4.4s",
    animationDuration: "8.7s",
  },
  {
    name: "Andhra Pradesh",
    animationDelay: "-1.3s",
    animationDuration: "9.4s",
  },
  {
    name: "Tamil Nadu",
    animationDelay: "-5.2s",
    animationDuration: "8.9s",
  },
  {
    name: "Madhya Pradesh",
    animationDelay: "-3.5s",
    animationDuration: "9.7s",
  },
  {
    name: "Rajasthan",
    animationDelay: "-6.1s",
    animationDuration: "8.5s",
  },
  {
    name: "Punjab",
    animationDelay: "-2.8s",
    animationDuration: "9.3s",
  },
  {
    name: "Haryana",
    animationDelay: "-4.7s",
    animationDuration: "8.8s",
  },
  {
    name: "Telangana",
    animationDelay: "-1.8s",
    animationDuration: "9.6s",
  },
  {
    name: "Kerala",
    animationDelay: "-5.6s",
    animationDuration: "8.6s",
  },
  {
    name: "Uttar Pradesh",
    animationDelay: "-3.9s",
    animationDuration: "9.2s",
  },
];

const dealerBenefits = [
  "Exclusive territory protection",
  "Co-branded marketing material",
  "On-call agronomist support",
  "Healthy margins on every SKU",
];

export default function DealerNetwork() {
  return (
    <section
      id="dealers"
      aria-labelledby="dealer-network-title"
      className="relative isolate overflow-hidden bg-[#F8FAF4] py-24 sm:py-28 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-64 top-1/2 -z-10 h-152.5 w-152.5 -translate-y-1/2 rounded-full bg-emerald-100/45 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-64 bottom-0 -z-10 h-160 w-160 rounded-full bg-amber-100/35 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-emerald-900/10 to-transparent"
      />

      {/* =========================================================
          MAIN LAYOUT
      ========================================================== */}

      <div className="relative mx-auto w-full max-w-375 px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-24">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="max-w-180">
            <div className="inline-flex items-center gap-3 text-amber-600">
              <MapPin
                aria-hidden="true"
                size={15}
                strokeWidth={2}
              />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.32em]">
                Pan-India Network
              </span>
            </div>

            <h2
              id="dealer-network-title"
              className="mt-7 text-[2.8rem] font-extrabold leading-[1.04] tracking-[-0.045em] text-[#091C14] sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.4rem]"
            >
              Distribute with{" "}
              <span className="text-emerald-700">
                Unik Biotech
              </span>{" "}
              across India.
            </h2>

            <p className="mt-7 max-w-165 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              Join our growing dealer network serving farmers across
              India. Build your territory with dependable agricultural
              inputs, practical field support and a company focused on
              long-term partnerships.
            </p>

            {/* =================================================
                BENEFITS
            ================================================== */}

            <ul className="mt-9 space-y-4">
              {dealerBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-4 text-[15px] font-medium text-slate-700 sm:text-base"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-white">
                    <CheckCircle2
                      aria-hidden="true"
                      size={15}
                      strokeWidth={2.2}
                    />
                  </span>

                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* =================================================
                ACTIONS
            ================================================== */}

            <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/dealers"
                className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-emerald-700 px-8 text-sm font-bold text-white shadow-[0_18px_45px_rgba(4,120,72,0.20)] transition-[transform,background-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-[0_22px_55px_rgba(4,120,72,0.26)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                Become a Dealer

                <ArrowRight
                  aria-hidden="true"
                  size={17}
                  className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                />
              </Link>

              <a
                href="tel:+918380017593"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#CED8CF] bg-white/70 px-8 text-sm font-bold text-[#13251D] backdrop-blur-sm transition-[transform,border-color,background-color] duration-300 ease-out hover:-translate-y-1 hover:border-emerald-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                <Phone
                  aria-hidden="true"
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-300 ease-out group-hover:rotate-6"
                />

                <span>083800 17593</span>
              </a>
            </div>
          </div>

          {/* =====================================================
              RIGHT NETWORK FIELD
          ====================================================== */}

          <div className="relative mx-auto w-full max-w-190 lg:mx-0 lg:max-w-none">
            <div className="relative overflow-hidden rounded-[28px] border border-emerald-900/10 bg-white/35 p-3 shadow-[0_28px_80px_rgba(17,55,38,0.08)] backdrop-blur-sm sm:p-4">
              {/* =================================================
                  STATIC GLOWS
              ================================================== */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-200/30 blur-[90px]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-28 -top-16 h-72 w-72 rounded-full bg-sky-100/45 blur-[100px]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-amber-100/35 blur-[100px]"
              />

              {/* =================================================
                  STATE COUNT
              ================================================== */}

              <div className="absolute right-5 top-5 z-30 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 shadow-[0_10px_30px_rgba(20,70,45,0.07)] backdrop-blur-md">
                <Globe2
                  aria-hidden="true"
                  size={13}
                  className="text-emerald-700"
                />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-emerald-800">
                  12+ States
                </span>
              </div>

              {/* =================================================
                  FLOATING STATE GRID
              ================================================== */}

              <div className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                {states.map((state, index) => {
                  const animationStyle: CSSProperties = {
                    animationDelay: state.animationDelay,
                    animationDuration: state.animationDuration,
                  };

                  return (
                    <div
                      key={state.name}
                      className="dealer-state-float"
                      style={animationStyle}
                    >
                      <div
                        className="dealer-state-breathe relative flex min-h-42 items-center justify-center overflow-hidden rounded-[25px] border border-white/75 bg-white/75 px-4 text-center shadow-[0_16px_45px_rgba(15,65,42,0.035)] backdrop-blur-md sm:min-h-48 lg:min-h-50"
                        style={{
                          animationDelay: `${index * -0.47}s`,
                        }}
                      >
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-linear-to-br from-white/35 via-transparent to-emerald-50/20"
                        />

                        <div className="relative z-10 flex flex-col items-center">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50/90 text-emerald-700">
                            <MapPin
                              aria-hidden="true"
                              size={19}
                              strokeWidth={2}
                            />
                          </span>

                          <p className="mt-4 text-sm font-bold text-[#172820]">
                            {state.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}