import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  FlaskConical,
} from "lucide-react";

export default function ProductsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#082417]">

      {/* Background */}

      <div className="absolute inset-0 -z-30">

        <Image
          src="/images/products/hero/products-hero.jpg"
          alt="UNIK Biotech Product Portfolio"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />

      </div>

      {/* Overlay */}

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(4,24,14,.90)_0%,rgba(6,35,22,.72)_45%,rgba(8,45,28,.55)_100%)]" />

      {/* Glow */}

      <div className="absolute -left-24 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-[100px]" />

      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-lime-400/10 blur-[120px]" />

      {/* Content */}

      <div className="mx-auto flex min-h-105 max-w-360 items-center px-6 pt-36 pb-16">

        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">

            <FlaskConical size={14} />

            Product Catalogue

          </div>

          <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-white lg:text-6xl">
            Agricultural Solutions
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Explore our complete range of
            micronutrients, biostimulants,
            biofertilizers, crop protection and
            soil health solutions developed for
            modern agriculture.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="#products-grid"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-emerald-500"
            >
              Explore Products

              <ArrowRight size={17} />

            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
            >
              Contact Sales
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}