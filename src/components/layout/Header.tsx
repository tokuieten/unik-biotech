"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import { ArrowRight, Menu, X } from "lucide-react";

import { navigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { useScroll } from "@/hooks/useScroll";

import HeaderBackground from "./HeaderBackground";
import PageContainer from "./PageContainer";

export default function Header() {
  const pathname = usePathname();
  const scrolled = useScroll(50);

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = mobileOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize, {
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <PageContainer>
          <div
            className={clsx(
              `
                pointer-events-auto
                relative
                overflow-hidden
                rounded-[28px]
                py-3
                transition-transform
                duration-500
                ease-[cubic-bezier(.22,1,.36,1)]
              `,
              scrolled
                ? "scale-[0.965]"
                : "scale-100"
            )}
          >
            <HeaderBackground scrolled={scrolled} />

            <div
              className="
                relative
                z-20
                mx-auto
                flex
                w-full
                items-center
                justify-between
                px-4
                sm:px-6
                lg:px-8
              "
            >
              <Link
                href="/"
                aria-label={`${siteConfig.name} home`}
                className="
                  flex
                  min-w-0
                  shrink-0
                  items-center
                "
              >
      <div
      className="
        relative
        h-14
        w-55
        shrink-0
        overflow-hidden
      "
    >
    <Image
      src="/images/logo/logo.jpg"
      alt={siteConfig.name}
      fill
      loading="eager"
      priority
      fetchPriority="high"
      sizes="230px"
      className="
        object-contain
        object-left
      "
    />
  </div>
</Link>

              <nav
                aria-label="Primary navigation"
                className="
                  hidden
                  items-center
                  gap-1
                  xl:flex
                "
              >
                {navigation.map((item) => {
                  const active =
                    pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={clsx(
                        `
                          rounded-xl
                          px-4
                          py-2.5
                          text-[15px]
                          font-semibold
                          tracking-tight
                          transition-[color,background-color,transform]
                          duration-300
                          ease-out
                        `,
                        active
                          ? "bg-emerald-700/10 text-emerald-800"
                          : "text-slate-700 hover:bg-emerald-700/10 hover:text-emerald-800"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex items-center gap-3">
                <Link
                  href="/dealer-locator"
                  className="
                    group
                    hidden
                    items-center
                    gap-2
                    rounded-full
                    bg-emerald-700
                    px-6
                    py-3
                    text-[15px]
                    font-bold
                    text-white
                    shadow-[0_12px_28px_rgba(4,120,87,0.24)]
                    transition-[transform,background-color,box-shadow]
                    duration-300
                    ease-out
                    hover:-translate-y-0.5
                    hover:scale-[1.04]
                    hover:bg-emerald-800
                    hover:shadow-[0_18px_38px_rgba(4,120,87,0.3)]
                    xl:inline-flex
                  "
                >
                  {siteConfig.dealerCTA}

                  <ArrowRight
                    aria-hidden="true"
                    size={17}
                    strokeWidth={2.5}
                    className="
                      transition-transform
                      duration-300
                      ease-out
                      group-hover:translate-x-1
                    "
                  />
                </Link>

                <button
                  type="button"
                  aria-label="Open navigation menu"
                  aria-expanded={mobileOpen}
                  aria-controls="mobile-navigation"
                  onClick={() => setMobileOpen(true)}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/40
                    bg-white/55
                    text-slate-800
                    backdrop-blur-xl
                    transition-[transform,background-color]
                    duration-300
                    ease-out
                    hover:scale-[1.04]
                    hover:bg-white/80
                    xl:hidden
                  "
                >
                  <Menu aria-hidden="true" size={22} strokeWidth={2.25} />
                </button>
              </div>
            </div>
          </div>
        </PageContainer>
      </header>

      <div
        aria-hidden={!mobileOpen}
        onClick={() => setMobileOpen(false)}
        className={clsx(
          `
            fixed
            inset-0
            z-98
            bg-black/35
            backdrop-blur-md
            transition-opacity
            duration-500
            ease-[cubic-bezier(.22,1,.36,1)]
            xl:hidden
          `,
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      />

      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        className={clsx(
          `
            fixed
            right-0
            top-0
            z-101
            flex
            h-dvh
            w-90
            max-w-[92vw]
            flex-col
            overflow-hidden
            bg-white
            shadow-[0_35px_90px_rgba(0,0,0,0.18)]
            transition-transform
            duration-500
            ease-[cubic-bezier(.22,1,.36,1)]
            will-change-transform
            xl:hidden
          `,
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-slate-200
            px-6
            py-5
          "
        >
          <Link
            href="/"
            aria-label={`${siteConfig.name} home`}
            onClick={() => setMobileOpen(false)}
            className="
              flex
              shrink-0
              items-center
            "
          >
  <div className="relative h-12 w-47.5 overflow-hidden">
    <Image
      src="/images/logo/logo.jpg"
      alt={siteConfig.name}
      fill
      sizes="190px"
      className="
        object-contain
        object-left
      "
    />
  </div>
</Link>

          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMobileOpen(false)}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              text-slate-700
              transition-[transform,background-color,color]
              duration-300
              ease-out
              hover:rotate-3
              hover:bg-slate-100
              hover:text-slate-950
            "
          >
            <X aria-hidden="true" size={21} strokeWidth={2.4} />
          </button>
        </div>

        <nav
          aria-label="Mobile primary navigation"
          className="
            flex
            flex-1
            flex-col
            overflow-y-auto
            px-6
            py-6
          "
        >
          {navigation.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setMobileOpen(false)}
                className={clsx(
                  `
                    group
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    px-4
                    py-4
                    text-lg
                    font-semibold
                    transition-[color,background-color,transform]
                    duration-300
                    ease-out
                  `,
                  active
                    ? "bg-emerald-50 text-emerald-800"
                    : "text-slate-700 hover:translate-x-1 hover:bg-emerald-50/70 hover:text-emerald-800"
                )}
              >
                <span>{item.label}</span>

                <ArrowRight
                  aria-hidden="true"
                  size={18}
                  strokeWidth={2.25}
                  className="
                    opacity-50
                    transition-[transform,opacity]
                    duration-300
                    ease-out
                    group-hover:translate-x-1
                    group-hover:opacity-100
                  "
                />
              </Link>
            );
          })}
        </nav>

        <div
          className="
            border-t
            border-slate-200
            bg-slate-50/70
            p-6
          "
        >
          <Link
            href="/dealer-locator"
            onClick={() => setMobileOpen(false)}
            className="
              group
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              bg-emerald-700
              px-6
              py-4
              text-[15px]
              font-bold
              text-white
              shadow-[0_12px_28px_rgba(4,120,87,0.2)]
              transition-[transform,background-color,box-shadow]
              duration-300
              ease-out
              hover:-translate-y-0.5
              hover:bg-emerald-800
              hover:shadow-[0_18px_36px_rgba(4,120,87,0.28)]
            "
          >
            {siteConfig.dealerCTA}

            <ArrowRight
              aria-hidden="true"
              size={18}
              strokeWidth={2.4}
              className="
                transition-transform
                duration-300
                ease-out
                group-hover:translate-x-1
              "
            />
          </Link>

          <div className="mt-7 space-y-2">
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-slate-400
              "
            >
              Contact
            </p>

            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
              className="
                block
                text-base
                font-semibold
                text-slate-700
                transition-colors
                duration-300
                hover:text-emerald-700
              "
            >
              {siteConfig.phone}
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="
                block
                break-all
                text-sm
                text-slate-500
                transition-colors
                duration-300
                hover:text-emerald-700
              "
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}