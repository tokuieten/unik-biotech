import {
  Award,
  FlaskConical,
  Leaf,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "20+",
    label: "Years of Trust",
  },
  {
    icon: FlaskConical,
    value: "100+",
    label: "Premium Products",
  },
  {
    icon: Leaf,
    value: "10K+",
    label: "Farmers Served",
  },
  {
    icon: ShieldCheck,
    value: "ISO",
    label: "9001:2008 Certified",
  },
];

export default function HeroStats() {
  return (
    <div className="w-full max-w-117.5 rounded-[30px] border border-white/15 bg-[#173D29]/80 p-7 shadow-[0_30px_90px_rgba(3,20,12,0.32)] backdrop-blur-xl xl:p-8">
      <div className="mb-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-emerald-200/70">
          Trusted Across India
        </p>

        <h2 className="mt-3 max-w-85 font-heading text-[1.75rem] font-bold leading-[1.12] tracking-[-0.04em] text-white xl:text-[2rem]">
          Built on Science.
          <br />
          Driven by Results.
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="group min-h-36.25 rounded-[22px] border border-white/10 bg-white/[0.07] p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/25 hover:bg-white/11"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
              <Icon size={19} strokeWidth={2} />
            </div>

            <strong className="mt-5 block font-heading text-[1.9rem] font-extrabold leading-none tracking-tighter text-white">
              {value}
            </strong>

            <span className="mt-2 block text-xs font-medium text-white/60">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-white/10 pt-6">
        <p className="text-sm leading-6 text-white/60">
          Delivering innovative agricultural biotechnology solutions with a
          commitment to quality, sustainability and farmer success since 2005.
        </p>
      </div>
    </div>
  );
}