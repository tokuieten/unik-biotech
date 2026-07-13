import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-350 px-5 sm:px-8 lg:px-10 xl:px-12",
        className
      )}
    >
      {children}
    </div>
  );
}