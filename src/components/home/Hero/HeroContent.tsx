import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="w-full max-w-175">
      <h1 className="max-w-170 font-heading text-[3.5rem] font-extrabold leading-[0.98] tracking-[-0.055em] text-white sm:text-[4.25rem] lg:text-[4.8rem] xl:text-[5.15rem]">
        Science-driven
        <br />
        solutions for{" "}
        <span className="text-[#63E695]">healthier soil</span>
        <br />
        &amp; higher yields.
      </h1>

      <p className="mt-7 max-w-152.5 text-base font-normal leading-[1.75] text-white/75 sm:text-[1.05rem]">
        Agri-inputs, soil enhancers and seed treatments engineered in our
        R&amp;D lab and trusted by 10,000+ farmers across India since 2005.
      </p>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href="/products"
          className="group inline-flex min-h-13.5 items-center justify-center gap-3 rounded-full bg-[#0B8F4D] px-7 text-[0.92rem] font-bold text-white shadow-[0_18px_45px_rgba(11,143,77,0.3)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0A7C43]"
        >
          Explore Products

          <ArrowRight
            size={17}
            strokeWidth={2.2}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        <Link
          href="/contact"
          className="group inline-flex min-h-13.5 items-center justify-center gap-3 rounded-full border border-white/25 bg-white/5 px-7 text-[0.92rem] font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
        >
          <Phone
            size={17}
            strokeWidth={2}
            className="text-white/80"
          />

          Become a Dealer
        </Link>
      </div>

      <div className="mt-12 grid max-w-140 grid-cols-3 gap-6 border-t border-white/15 pt-7 sm:gap-10">
        <div>
          <strong className="block font-heading text-2xl font-extrabold tracking-[-0.04em] text-white sm:text-[1.75rem]">
            20+
          </strong>

          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
            Years
          </span>
        </div>

        <div>
          <strong className="block font-heading text-2xl font-extrabold tracking-[-0.04em] text-white sm:text-[1.75rem]">
            100+
          </strong>

          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
            Products
          </span>
        </div>

        <div>
          <strong className="block font-heading text-2xl font-extrabold tracking-[-0.04em] text-white sm:text-[1.75rem]">
            10K+
          </strong>

          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
            Farmers
          </span>
        </div>
      </div>
    </div>
  );
}