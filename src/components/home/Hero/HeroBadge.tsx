import { ShieldCheck } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/20 bg-[#153B28]/55 px-3 py-2 shadow-[0_12px_36px_rgba(4,24,14,0.18)] backdrop-blur-md sm:px-4">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0B8F4D] text-[#B8F3CD]">
        <ShieldCheck
          aria-hidden="true"
          size={15}
          strokeWidth={2.2}
        />
      </div>

      <div className="flex min-w-0 items-center gap-2">
        <span className="hidden text-[9px] font-bold uppercase tracking-[0.24em] text-emerald-200/70 sm:inline">
          Certified
        </span>

        <span
          aria-hidden="true"
          className="hidden h-3 w-px bg-white/20 sm:block"
        />

        <span className="truncate text-[11px] font-semibold tracking-[-0.01em] text-white sm:text-xs">
          ISO 9001:2008 Certified
        </span>
      </div>
    </div>
  );
}