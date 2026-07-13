import type { LucideIcon } from "lucide-react";
import {
  Award,
  FlaskConical,
  ShieldCheck,
  Users,
} from "lucide-react";

type TrustItem = {
  icon: LucideIcon;
  value: string;
  label: string;
};

const trustItems: readonly TrustItem[] = [
  {
    icon: Award,
    value: "20+",
    label: "Years of Trust",
  },
  {
    icon: ShieldCheck,
    value: "ISO 9001:2008",
    label: "Quality Certified",
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Farmers Served",
  },
  {
    icon: FlaskConical,
    value: "100+",
    label: "Engineered Products",
  },
];

export default function TrustStrip() {
  return (
    <section
      aria-label="UNIK BIOTECH company achievements"
      className="relative z-20 w-full border-b border-[#E3EAE4] bg-white"
    >
      <div className="mx-auto w-full max-w-345 px-6 sm:px-8 lg:px-12">
        <div className="grid min-h-39 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(({ icon: Icon, value, label }, index) => (
            <article
              key={label}
              className={[
                "group relative flex items-center gap-5 py-7",
                "sm:px-6",
                "lg:px-8 lg:py-8",
                index === 0 ? "sm:pl-0 lg:pl-0" : "",
                index === trustItems.length - 1
                  ? "sm:pr-0 lg:pr-0"
                  : "",
                index < trustItems.length - 1
                  ? "border-b border-[#E3EAE4] sm:border-b-0"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {index > 0 && (
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-[#DDE6DF] lg:block"
                />
              )}

              <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#E7F2E8] text-[#17643A] transition-transform duration-300 ease-out group-hover:-translate-y-1">
                <Icon
                  aria-hidden="true"
                  size={22}
                  strokeWidth={1.9}
                />
              </div>

              <div className="min-w-0">
                <p className="font-heading text-[1.45rem] font-extrabold leading-none tracking-[-0.04em] text-[#142C1D] sm:text-[1.55rem]">
                  {value}
                </p>

                <p className="mt-2 text-[0.8rem] font-medium leading-none text-[#65736A]">
                  {label}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}