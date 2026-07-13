import {
  BadgeCheck,
  GraduationCap,
  Megaphone,
  PackageCheck,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Business Growth",
    description:
      "Expand your business with premium agricultural biotechnology products trusted by farmers across India.",
  },
  {
    icon: PackageCheck,
    title: "Reliable Supply Chain",
    description:
      "Enjoy consistent product availability, timely deliveries and dependable inventory support.",
  },
  {
    icon: GraduationCap,
    title: "Technical Training",
    description:
      "Receive regular product knowledge sessions and agronomic guidance from our experts.",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    description:
      "Access promotional campaigns, dealer branding material and customer awareness initiatives.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Brand",
    description:
      "Represent a company backed by years of research, innovation and farmer confidence.",
  },
  {
    icon: BadgeCheck,
    title: "Dedicated Assistance",
    description:
      "Work directly with our sales and technical teams for continuous support and faster resolutions.",
  },
];

export default function DealerBenefits() {
  return (
    <div>

      {/* Heading */}

      <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
        Why Partner With Us
      </span>

      <h3 className="mt-5 text-4xl font-black tracking-tight text-slate-900">
        Everything You Need
        <span className="block text-emerald-700">
          To Grow Your Business
        </span>
      </h3>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
        As an authorized UNIK BIOTECH dealer,
        you&apos;ll receive more than products—you&apos;ll
        gain a long-term business partner committed
        to helping you succeed.
      </p>

      {/* Benefits Grid */}

      <div className="mt-10 grid gap-5 sm:grid-cols-2">

        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.title}
              className="
                group
                rounded-[28px]
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-emerald-300
                hover:shadow-xl
              "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-700 group-hover:text-white">

                <Icon size={24} />

              </div>

              <h4 className="mt-6 text-xl font-bold text-slate-900">
                {benefit.title}
              </h4>

              <p className="mt-3 leading-7 text-slate-600">
                {benefit.description}
              </p>

            </div>
          );
        })}

      </div>

      {/* Bottom Highlight */}

      <div className="mt-10 rounded-[30px] bg-linear-to-r from-emerald-900 to-green-800 p-8 text-white">

        <p className="text-5xl font-black">
          20+
        </p>

        <p className="mt-2 text-xl font-semibold">
          Years of Agricultural Excellence
        </p>

        <p className="mt-4 max-w-xl leading-7 text-white/75">
          We believe in building lasting partnerships by
          combining innovative biotechnology, dependable
          service and continuous support for every dealer.
        </p>

      </div>

    </div>
  );
}