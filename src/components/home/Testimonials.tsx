import Image from "next/image";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  crop: string;
  location: string;
  image: string;
  metric: string;
  metricLabel: string;
  quote: string;
  imagePosition: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ramesh Patil",
    crop: "Grapes",
    location: "Nashik",
    image: "/images/testimonials/ramesh-patil.jpg",
    metric: "+28%",
    metricLabel: "Yield",
    quote:
      "Berry size improved noticeably after switching to AminoRich. My buyers paid premium prices for the second season in a row.",
    imagePosition: "50% 42%",
  },
  {
    name: "Sunil Deshmukh",
    crop: "Cotton",
    location: "Vidarbha",
    image: "/images/testimonials/sunil-deshmukh.jpg",
    metric: "+34%",
    metricLabel: "Boll Count",
    quote:
      "Rhyzomax helped my crop recover from monsoon stress. Roots were visibly thicker compared to my neighbour's plot.",
    imagePosition: "50% 50%",
  },
  {
    name: "Lakshmi Reddy",
    crop: "Chilli",
    location: "Guntur",
    image: "/images/testimonials/lakshmi-reddy.jpg",
    metric: "+22%",
    metricLabel: "Marketable Yield",
    quote:
      "Three applications of Excess and the canopy was unrecognisable. Branch count nearly doubled — and so did harvest.",
    imagePosition: "50% 50%",
  },
];

function RatingStars() {
  return (
    <div
      className="flex items-center gap-1"
      aria-label="5 out of 5 stars"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          size={18}
          strokeWidth={2}
          className="fill-amber-500 text-amber-500"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="farmer-stories"
      aria-labelledby="farmer-stories-title"
      className="relative isolate overflow-hidden bg-[#FCFCF8]"
    >
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-64 top-10 -z-10 h-130 w-130 rounded-full bg-emerald-100/25 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-64 bottom-0 -z-10 h-135 w-135 rounded-full bg-amber-100/25 blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-emerald-950/10 to-transparent"
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="mx-auto w-full max-w-375 px-6 pb-28 pt-24 sm:px-8 sm:pb-32 sm:pt-28 lg:px-12 lg:pb-36 lg:pt-32 xl:px-16">
        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-195">
            <div className="inline-flex items-center gap-3 text-amber-600">
              <Star
                aria-hidden="true"
                size={15}
                strokeWidth={2}
              />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.32em]">
                Farmer Stories
              </span>
            </div>

            <h2
              id="farmer-stories-title"
              className="mt-7 max-w-190 text-[2.8rem] font-extrabold leading-[1.04] tracking-[-0.045em] text-[#091C14] sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.3rem]"
            >
              Real fields. Real numbers. Real farmers.
            </h2>
          </div>

          <p className="max-w-107.5 pb-2 text-sm leading-7 text-slate-600 sm:text-base">
            Aggregate data from{" "}
            <strong className="font-extrabold text-[#10241A]">
              1,200+ field trials
            </strong>{" "}
            across India.
          </p>
        </div>

        {/* =======================================================
            TESTIMONIAL GRID
        ======================================================== */}

        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="
                group
                relative
                flex
                min-h-full
                flex-col
                overflow-hidden
                rounded-[26px]
                border
                border-[#DCE4DC]
                bg-white
                shadow-[0_18px_55px_rgba(18,55,38,0.055)]
                transition-[transform,box-shadow,border-color]
                duration-500
                ease-out
                will-change-transform
                hover:-translate-y-2
                hover:border-emerald-900/15
                hover:shadow-[0_30px_80px_rgba(18,55,38,0.12)]
              "
            >
              {/* =================================================
                  IMAGE AREA
              ================================================== */}

              <div className="relative h-70 overflow-hidden sm:h-75 lg:h-72.5 xl:h-77.5">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name}, farmer from ${testimonial.location}`}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  quality={75}
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    will-change-transform
                    group-hover:scale-[1.035]
                  "
                  style={{
                    objectPosition: testimonial.imagePosition,
                  }}
                />

                {/* IMAGE READABILITY */}

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-[#061C11]/90 via-[#071E13]/10 to-transparent"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-r from-black/10 via-transparent to-transparent"
                />

                {/* =================================================
                    METRIC BADGE

                    IMPORTANT:
                    Every badge is explicitly anchored TOP RIGHT.
                    No dynamic Tailwind class generation.
                    No purge/scanner issue.
                    No conditional positioning issue.
                ================================================== */}

                <div
                  className="
                    absolute
                    right-5
                    top-5
                    z-30
                    min-w-26.5
                    rounded-[20px]
                    border
                    border-white/70
                    bg-white/90
                    px-5
                    py-3
                    shadow-[0_14px_35px_rgba(8,35,21,0.14)]
                    backdrop-blur-md
                    transition-[transform,box-shadow,background-color]
                    duration-500
                    ease-out
                    will-change-transform
                    sm:right-6
                    sm:top-6
                    group-hover:-translate-y-1
                    group-hover:scale-[1.025]
                    group-hover:bg-white/95
                    group-hover:shadow-[0_20px_45px_rgba(8,35,21,0.18)]
                  "
                >
                  <p className="text-[1.45rem] font-extrabold leading-none tracking-[-0.04em] text-[#0A2116]">
                    {testimonial.metric}
                  </p>

                  <p className="mt-1.5 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.18em] text-slate-600">
                    {testimonial.metricLabel}
                  </p>
                </div>

                {/* =================================================
                    FARMER IDENTITY
                ================================================== */}

                <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6">
                  <h3 className="text-[1.35rem] font-extrabold leading-tight tracking-tight text-white">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-amber-200">
                    {testimonial.crop} · {testimonial.location}
                  </p>
                </div>
              </div>

              {/* =================================================
                  TESTIMONIAL BODY
              ================================================== */}

              <div className="flex flex-1 flex-col px-6 pb-7 pt-6 sm:px-7 sm:pb-8 sm:pt-7">
                <RatingStars />

                <blockquote className="mt-5 text-[15px] leading-7 text-[#23382E] sm:text-base sm:leading-8">
                  “{testimonial.quote}”
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}