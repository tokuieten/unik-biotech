import IntroContent from "./IntroContent";
import IntroImage from "./IntroImage";

export default function CompanyIntro() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAF3] py-24 sm:py-28 lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-16 h-136 w-136 rounded-full bg-[#DDEDDC]/70 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 bottom-0 h-152 w-152 rounded-full bg-[#EFE4BF]/45 blur-[150px]"
      />

      <div className="relative mx-auto w-full max-w-345 px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 xl:gap-32">
          <IntroImage />

          <IntroContent />
        </div>
      </div>
    </section>
  );
}