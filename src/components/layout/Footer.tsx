import Link from "next/link";

import {
  Globe2,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Sprout,
} from "lucide-react";

const quickLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Science",
    href: "/#science",
  },
  {
    label: "Find Dealer",
    href: "/dealer-locator",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

const categories = [
  {
    label: "Biostimulants",
    href: "/products?category=biostimulants",
  },
  {
    label: "Soil Enhancers",
    href: "/products?category=soil-enhancers",
  },
  {
    label: "Seed Treatments",
    href: "/products?category=seed-treatments",
  },
  {
    label: "Growth Boosters",
    href: "/products?category=growth-boosters",
  },
] as const;

const phoneDisplay = "083800 17593";
const phoneHref = "tel:+918380017593";

const email = "enquiries@unikbiotechresearch.com";

const websiteDisplay = "www.unikbiotechresearch.com";
const websiteHref = "https://www.unikbiotechresearch.com";

const address =
  "B-178, S.S. Co-Op. Ind. Estate, Pimpalgaon (B), Tal. Niphad, Dist. Nashik - 422 209";

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="
        relative
        overflow-hidden
        border-t
        border-emerald-500/40
        bg-[#001B10]
        text-white
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          -top-56
          h-125
          w-125
          rounded-full
          bg-emerald-700/8
          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-72
          -right-40
          h-130
          w-130
          rounded-full
          bg-emerald-900/12
          blur-[150px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-375
          px-6
          pb-8
          pt-20
          sm:px-8
          sm:pt-22
          lg:px-12
          lg:pt-20
          xl:px-16
        "
      >
        <div
          className="
            grid
            gap-14
            md:grid-cols-2
            lg:grid-cols-[1.05fr_0.72fr_0.72fr_1.15fr]
            lg:gap-16
            xl:gap-20
          "
        >
          <div className="max-w-92">
            <Link
              href="/"
              aria-label="UNIK BIOTECH home"
              className="
                group
                inline-flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#008E4B]
                  text-white
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                "
              >
                <Sprout
                  aria-hidden="true"
                  size={21}
                  strokeWidth={2.4}
                />
              </span>

              <span className="flex flex-col">
                <span
                  className="
                    text-[14px]
                    font-extrabold
                    uppercase
                    leading-none
                    tracking-[0.015em]
                    text-white
                  "
                >
                  UNIK BIOTECH
                </span>

                <span
                  className="
                    mt-1.5
                    text-[10px]
                    font-medium
                    uppercase
                    leading-none
                    tracking-[0.08em]
                    text-white/70
                  "
                >
                  BOND WITH QUALITY
                </span>
              </span>
            </Link>

            <p
              className="
                mt-6
                max-w-82
                text-[14px]
                leading-[1.55]
                text-white/80
              "
            >
              ISO 9001:2008 certified agricultural inputs
              manufacturer since 2005. In the service of farmers.
            </p>

            <div
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-amber-500/35
                bg-amber-500/10
                px-3.5
                py-2
                text-amber-400
              "
            >
              <ShieldCheck
                aria-hidden="true"
                size={14}
                strokeWidth={2}
              />

              <span
                className="
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.12em]
                "
              >
                ISO 9001:2008
              </span>
            </div>
          </div>

          <FooterColumn title="Quick Links">
            <nav
              aria-label="Footer quick links"
              className="flex flex-col items-start gap-3.5"
            >
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    text-[14px]
                    font-medium
                    leading-none
                    text-white
                    transition-colors
                    duration-300
                    hover:text-emerald-400
                  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </FooterColumn>

          <FooterColumn title="Categories">
            <nav
              aria-label="Product categories"
              className="flex flex-col items-start gap-3.5"
            >
              {categories.map((category) => (
                <Link
                  key={category.label}
                  href={category.href}
                  className="
                    text-[14px]
                    font-medium
                    leading-none
                    text-white
                    transition-colors
                    duration-300
                    hover:text-emerald-400
                  "
                >
                  {category.label}
                </Link>
              ))}
            </nav>
          </FooterColumn>

          <FooterColumn title="Reach Us">
            <address className="not-italic">
              <ul className="space-y-4">
                <li
                  className="
                    grid
                    grid-cols-[18px_1fr]
                    items-start
                    gap-3
                  "
                >
                  <MapPin
                    aria-hidden="true"
                    size={17}
                    strokeWidth={2}
                    className="mt-0.5 text-emerald-500"
                  />

                  <span
                    className="
                      text-[14px]
                      leading-normal
                      text-white
                    "
                  >
                    {address}
                  </span>
                </li>

                <li>
                  <a
                    href={phoneHref}
                    className="
                      grid
                      grid-cols-[18px_1fr]
                      items-center
                      gap-3
                      text-[14px]
                      text-white
                      transition-colors
                      duration-300
                      hover:text-emerald-400
                    "
                  >
                    <Phone
                      aria-hidden="true"
                      size={17}
                      strokeWidth={2}
                      className="text-emerald-500"
                    />

                    <span>{phoneDisplay}</span>
                  </a>
                </li>

                <li>
                  <a
                    href={`mailto:${email}`}
                    className="
                      grid
                      grid-cols-[18px_1fr]
                      items-center
                      gap-3
                      text-[14px]
                      text-white
                      transition-colors
                      duration-300
                      hover:text-emerald-400
                    "
                  >
                    <Mail
                      aria-hidden="true"
                      size={17}
                      strokeWidth={2}
                      className="text-emerald-500"
                    />

                    <span className="break-all">
                      {email}
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href={websiteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      grid
                      grid-cols-[18px_1fr]
                      items-center
                      gap-3
                      text-[14px]
                      text-white
                      transition-colors
                      duration-300
                      hover:text-emerald-400
                    "
                  >
                    <Globe2
                      aria-hidden="true"
                      size={17}
                      strokeWidth={2}
                      className="text-emerald-500"
                    />

                    <span className="break-all">
                      {websiteDisplay}
                    </span>
                  </a>
                </li>
              </ul>
            </address>
          </FooterColumn>
        </div>

        <div
          className="
            mt-16
            border-t
            border-white/10
            pt-6
            lg:mt-14
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4
              text-[12px]
              text-white/70
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p>
              © 2026 UNIK BIOTECH RESEARCH. All rights reserved.
            </p>

            <p>
              Est. 2005 · Nashik, Maharashtra, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

function FooterColumn({
  title,
  children,
}: FooterColumnProps) {
  return (
    <div>
      <h2
        className="
          mb-6
          text-[11px]
          font-extrabold
          uppercase
          tracking-[0.12em]
          text-white/55
        "
      >
        {title}
      </h2>

      {children}
    </div>
  );
}