import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Store,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Users,
  BadgeCheck,
} from "lucide-react";

type DealerHeroProps = {
  totalDealers: number;
};

export default function DealerHero({
  totalDealers,
}: DealerHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#082417]">

      {/* Background Image */}

      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/dealer/hero/dealer-hero.jpg"
          alt="UNIK BIOTECH Dealer Network"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(3,23,15,.94)_0%,rgba(5,28,17,.88)_35%,rgba(5,28,17,.72)_65%,rgba(5,28,17,.58)_100%)]" />

      {/* Glow */}

      <div className="absolute -left-40 top-1/2 -z-10 h-105 w-105 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-[120px]" />

      <div className="absolute right-0 top-0 -z-10 h-130 w-130 rounded-full bg-lime-400/10 blur-[160px]" />

      {/* Grid */}

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[72px_72px]" />

      <div className="mx-auto flex min-h-190 max-w-360 items-center px-6 pb-24 pt-44 sm:px-8 lg:px-12">

        <div className="max-w-4xl">

          {/* Badge */}

          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-sm font-semibold text-emerald-200 backdrop-blur">

            <Store size={16} />

            Dealer Network

          </div>

          {/* Heading */}

          <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">

            Find an

            <span className="block text-emerald-400">
              Authorized Dealer
            </span>

            Near You

          </h1>

          {/* Description */}

          <p className="mt-8 max-w-3xl text-lg leading-9 text-white/75">

            Locate your nearest UNIK BIOTECH dealer for genuine
            agricultural products, expert crop guidance and trusted
            farming solutions. Interested in partnering with us?
            Become a part of our growing nationwide dealer network.

          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="#dealer-search"
              className="inline-flex items-center gap-3 rounded-full bg-emerald-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500"
            >
              Find Dealer

              <ArrowRight size={18} />
            </Link>

            <Link
              href="#become-dealer"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
            >
              Become a Dealer
            </Link>

          </div>

          {/* Stats */}

          <div className="mt-16 grid max-w-4xl grid-cols-3 gap-8">

            <div>

              <Store className="mb-4 text-emerald-400" />

              <p className="text-4xl font-black text-white">
                {totalDealers}+
              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/55">
                Dealers
              </p>

            </div>

            <div>

              <MapPin className="mb-4 text-emerald-400" />

              <p className="text-4xl font-black text-white">
                35+
              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/55">
                Districts
              </p>

            </div>

            <div>

              <BadgeCheck className="mb-4 text-emerald-400" />

              <p className="text-4xl font-black text-white">
                20+
              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/55">
                Years of Trust
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}