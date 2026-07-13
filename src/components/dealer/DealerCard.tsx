import Link from "next/link";
import {
  BadgeCheck,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Package,
  User,
} from "lucide-react";

import type { Dealer } from "@/types/dealer";

type DealerCardProps = {
  dealer: Dealer;
};

export default function DealerCard({
  dealer,
}: DealerCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-4xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-emerald-300
        hover:shadow-[0_25px_70px_rgba(16,185,129,.12)]
      "
    >
      {/* Top */}

      <div className="border-b border-slate-100 bg-linear-to-r from-emerald-50 to-white p-7">

        <div className="flex items-start justify-between gap-4">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">

              <BadgeCheck size={14} />

              {dealer.verified
                ? "Authorized Dealer"
                : "Dealer"}

            </div>

            <h3 className="mt-5 text-2xl font-black text-slate-900">
              {dealer.dealerName}
            </h3>

            <div className="mt-3 flex items-center gap-2 text-slate-600">

              <User size={16} />

              {dealer.owner}

            </div>

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="space-y-6 p-7">

        {/* Address */}

        <div className="flex items-start gap-3">

          <MapPin
            size={18}
            className="mt-1 text-emerald-600"
          />

          <div>

            <p className="font-semibold text-slate-900">
              {dealer.city}, {dealer.district}
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              {dealer.address}
            </p>

          </div>

        </div>

        {/* Phone */}

        <div className="flex items-center gap-3">

          <Phone
            size={18}
            className="text-emerald-600"
          />

          <a
            href={`tel:${dealer.phone}`}
            className="font-medium text-slate-700 hover:text-emerald-700"
          >
            {dealer.phone}
          </a>

        </div>

        {/* Email */}

        {dealer.email && (

          <div className="flex items-center gap-3">

            <Mail
              size={18}
              className="text-emerald-600"
            />

            <a
              href={`mailto:${dealer.email}`}
              className="truncate font-medium text-slate-700 hover:text-emerald-700"
            >
              {dealer.email}
            </a>

          </div>

        )}

        {/* Products */}

        <div>

          <div className="mb-3 flex items-center gap-2">

            <Package
              size={16}
              className="text-emerald-600"
            />

            <span className="text-sm font-semibold text-slate-900">
              Available Products
            </span>

          </div>

          <div className="flex flex-wrap gap-2">

            {dealer.products.map((product) => (

              <span
                key={product}
                className="
                  rounded-full
                  border
                  border-emerald-100
                  bg-emerald-50
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-emerald-700
                "
              >
                {product}
              </span>

            ))}

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="flex border-t border-slate-100">

        <a
          href={`tel:${dealer.phone}`}
          className="
            flex-1
            border-r
            border-slate-100
            px-6
            py-5
            text-center
            font-semibold
            text-emerald-700
            transition
            hover:bg-emerald-50
          "
        >
          Call Dealer
        </a>

        <Link
          href={
            dealer.latitude &&
            dealer.longitude
              ? `https://www.google.com/maps?q=${dealer.latitude},${dealer.longitude}`
              : `https://www.google.com/maps/search/${encodeURIComponent(
                  dealer.address
                )}`
          }
          target="_blank"
          className="
            flex
            flex-1
            items-center
            justify-center
            gap-2
            px-6
            py-5
            font-semibold
            text-slate-700
            transition
            hover:bg-slate-50
            hover:text-emerald-700
          "
        >
          Directions

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />

        </Link>

      </div>

    </article>
  );
}