import { ReactNode } from "react";
import clsx from "clsx";

interface SectionTitleProps {
  badge?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export default function SectionTitle({
  badge,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div
      className={clsx(
        "mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {badge && (
        <span className="badge mb-6">
          {badge}
        </span>
      )}

      <h2 className="section-title">
        {title}
      </h2>

      {description && (
        <p className="section-description mt-6">
          {description}
        </p>
      )}
    </div>
  );
}