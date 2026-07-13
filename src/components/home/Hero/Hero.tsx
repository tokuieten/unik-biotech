import HeroBackground from "./HeroBackground";
import HeroBadge from "./HeroBadge";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B2F1D] lg:min-h-205">
      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-190 w-full max-w-345 items-center px-6 pb-24 pt-44 sm:px-8 lg:min-h-205 lg:px-12 lg:pb-48">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div className="max-w-180">
            <HeroBadge />

            <div className="mt-7">
              <HeroContent />
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-end">
            <HeroStats />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 h-28 bg-linear-to-t from-[#071D12]/35 to-transparent" />

      <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex">
        <span className="text-[10px] font-semibold uppercase tracking-[0.38em] text-white/55">
          Scroll
        </span>

        <div className="relative h-9 w-px overflow-hidden bg-white/20">
          <div className="absolute left-0 top-0 h-4 w-px animate-[heroScroll_1.8s_ease-in-out_infinite] bg-white" />
        </div>
      </div>
    </section>
  );
}