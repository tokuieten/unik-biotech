import clsx from "clsx";

type HeaderBackgroundProps = {
  scrolled: boolean;
};

export default function HeaderBackground({
  scrolled,
}: HeaderBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
        rounded-[28px]
      "
    >
      <div
        className={clsx(
          `
            absolute
            inset-0
            rounded-[28px]
            border
            transition-[background-color,border-color,box-shadow]
            duration-500
            ease-[cubic-bezier(.22,1,.36,1)]
          `,
          scrolled
            ? `
                border-white/80
                bg-white/94
                shadow-[0_16px_42px_rgba(0,0,0,0.12)]
              `
            : `
                border-white/45
                bg-white/68
                shadow-[0_10px_30px_rgba(0,0,0,0.07)]
              `
        )}
      />

      <div
        className={clsx(
          `
            absolute
            inset-x-0
            top-0
            h-px
            bg-linear-to-r
            from-transparent
            to-transparent
            transition-opacity
            duration-500
          `,
          scrolled
            ? "via-white/90 opacity-100"
            : "via-white/70 opacity-80"
        )}
      />

      <div
        className="
          absolute
          inset-0
          rounded-[28px]
          shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]
        "
      />
    </div>
  );
}