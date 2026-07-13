import Image from "next/image";
import { Award, ShieldCheck } from "lucide-react";

export default function IntroImage() {
  return (
    <div className="relative mx-auto w-full max-w-160 lg:mx-0 lg:ml-auto">
      <div className="group relative min-h-130 overflow-hidden rounded-4xl bg-[#DDE8DE] shadow-[0_32px_80px_rgba(17,50,31,0.16)] sm:min-h-155 lg:min-h-170">
        <Image
          src="/images/company/company-intro.jpg"
          alt="Agricultural research and crop development at UNIK BIOTECH RESEARCH"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#0B2B1A]/55 via-transparent to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
              Since 2005
            </p>

            <p className="mt-3 text-xl font-semibold leading-relaxed text-white sm:text-2xl">
              Research, quality and practical agricultural solutions
              built around the needs of farmers.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -left-5 top-12 hidden min-w-55 rounded-3xl border border-white/70 bg-[#FFFCF5]/90 p-5 shadow-[0_24px_60px_rgba(17,50,31,0.14)] backdrop-blur-xl sm:block lg:-left-14 lg:top-16">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E5F0E5] text-[#175B35]">
            <Award size={23} strokeWidth={1.9} />
          </div>

          <div>
            <p className="text-2xl font-extrabold tracking-[-0.04em] text-[#123421]">
              20+
            </p>

            <p className="mt-0.5 text-sm font-medium text-[#68766D]">
              Years of trust
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 right-5 hidden min-w-62.5 rounded-3xl border border-white/70 bg-[#123D27]/95 p-5 shadow-[0_28px_70px_rgba(10,43,26,0.28)] backdrop-blur-xl sm:block lg:-right-8 lg:bottom-12">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#BDE5C6]">
            <ShieldCheck size={24} strokeWidth={1.9} />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A9CDB2]">
              Quality Standard
            </p>

            <p className="mt-1 text-lg font-bold text-white">
              ISO 9001:2008
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-16 -left-16 -z-10 h-64 w-64 rounded-full bg-[#CFE3CF]/70 blur-[90px]" />

      <div className="absolute -right-12 -top-12 -z-10 h-56 w-56 rounded-full bg-[#E6DDBD]/55 blur-[90px]" />
    </div>
  );
}