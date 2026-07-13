import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact UNIK BIOTECH RESEARCH for agricultural product enquiries, crop guidance, dealer partnerships, distribution opportunities, and customer support.",
};

const contactDetails = [
  {
    icon: MapPin,
    eyebrow: "Visit our office",
    title: "UNIK BIOTECH RESEARCH",
    description:
      "B-178, S.S. Co-Op. Ind. Estate, Pimpalgaon (B), Tal. Niphad, Dist. Nashik - 422 209",
    href: "https://maps.google.com/?q=B-178+S.S.+Co-Op.+Ind.+Estate+Pimpalgaon+Nashik+422209",
    action: "Open in Maps",
  },
  {
    icon: Phone,
    eyebrow: "Customer care",
    title: "083800 17593",
    description:
      "Speak directly with our team for product and crop-related enquiries.",
    href: "tel:08380017593",
    action: "Call our team",
  },
  {
    icon: Mail,
    eyebrow: "Email us",
    title: "enquiries@unikbiotechresearch.com",
    description:
      "Send us your requirement and our team will get back to you.",
    href: "mailto:enquiries@unikbiotechresearch.com",
    action: "Send an email",
  },
] as const;

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F9F5]">
      <section
        className="
          relative
          overflow-hidden
          bg-[#082C1C]
          pb-28
          pt-48
          sm:pb-32
          sm:pt-52
          lg:pb-44
          lg:pt-56
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[linear-gradient(115deg,rgba(5,30,18,0.98)_0%,rgba(7,49,29,0.94)_48%,rgba(9,74,40,0.82)_100%)]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-40
            -top-64
            h-180
            w-180
            rounded-full
            bg-emerald-400/10
            blur-[120px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-72
            -left-52
            h-160
            w-160
            rounded-full
            bg-[#63C878]/10
            blur-[120px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.08]
            bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)]
            bg-size-[72px_72px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-40
            bg-linear-to-t
            from-black/20
            to-transparent
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-345
            px-6
            sm:px-8
            lg:px-12
          "
        >
          <div className="max-w-215">
            <div
              className="
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-white/14
                bg-white/7
                px-4
                py-2.5
                backdrop-blur-xl
              "
            >
              <Sparkles
                aria-hidden="true"
                size={15}
                className="text-emerald-300"
              />

              <span
                className="
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.22em]
                  text-white/70
                "
              >
                Start a conversation
              </span>
            </div>

            <h1
              className="
                mt-8
                max-w-200
                font-heading
                text-5xl
                font-extrabold
                leading-[0.98]
                tracking-[-0.055em]
                text-white
                sm:text-6xl
                lg:text-[78px]
              "
            >
              Better agriculture starts with{" "}
              <span className="text-[#64DC8D]">
                better conversations.
              </span>
            </h1>

            <p
              className="
                mt-8
                max-w-170
                text-base
                leading-8
                text-white/65
                sm:text-lg
              "
            >
              Whether you need product information, crop
              guidance, distribution support, or want to
              build a dealer partnership, our team is ready
              to understand your requirement.
            </p>

            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-x-8
                gap-y-4
              "
            >
              <HeroSignal
                icon={ShieldCheck}
                text="20+ years of agricultural research"
              />

              <HeroSignal
                icon={Clock3}
                text="Direct response from our team"
              />

              <HeroSignal
                icon={Globe2}
                text="Serving farmers across India"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="
          relative
          z-20
          -mt-16
          pb-28
          sm:-mt-20
          sm:pb-32
          lg:-mt-24
          lg:pb-40
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-345
            px-6
            sm:px-8
            lg:px-12
          "
        >
          <div
            className="
              grid
              overflow-hidden
              rounded-[36px]
              border
              border-white/80
              bg-white
              shadow-[0_35px_100px_rgba(14,54,32,0.13)]
              lg:grid-cols-[1.12fr_0.88fr]
              lg:rounded-[44px]
            "
          >
            <div
              className="
                px-6
                py-10
                sm:px-10
                sm:py-14
                lg:px-16
                lg:py-18
              "
            >
              <div className="max-w-150">
                <p
                  className="
                    text-[11px]
                    font-extrabold
                    uppercase
                    tracking-[0.22em]
                    text-[#08783F]
                  "
                >
                  Send an enquiry
                </p>

                <h2
                  className="
                    mt-4
                    font-heading
                    text-4xl
                    font-extrabold
                    leading-[1.05]
                    tracking-[-0.045em]
                    text-[#10281B]
                    sm:text-5xl
                  "
                >
                  Tell us what you&apos;re working on.
                </h2>

                <p
                  className="
                    mt-5
                    max-w-130
                    text-[15px]
                    leading-7
                    text-slate-500
                  "
                >
                  Give us a little context about your crop,
                  requirement, product enquiry, or business
                  opportunity. The right team member will
                  take it forward.
                </p>
              </div>

              <ContactForm />
            </div>

            <div
              className="
                relative
                overflow-hidden
                bg-[#0B3D27]
                px-6
                py-10
                text-white
                sm:px-10
                sm:py-14
                lg:px-12
                lg:py-18
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-44
                  -top-44
                  h-120
                  w-120
                  rounded-full
                  bg-emerald-300/12
                  blur-[90px]
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-44
                  -left-44
                  h-120
                  w-120
                  rounded-full
                  bg-[#8BD58D]/8
                  blur-[100px]
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.055]
                "
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)",
                  backgroundSize: "25px 25px",
                }}
              />

              <div className="relative z-10">
                <p
                  className="
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.24em]
                    text-emerald-300
                  "
                >
                  Reach our team
                </p>

                <h2
                  className="
                    mt-4
                    max-w-115
                    font-heading
                    text-4xl
                    font-extrabold
                    leading-[1.05]
                    tracking-[-0.045em]
                    text-white
                    sm:text-[44px]
                  "
                >
                  Real people. Real agricultural expertise.
                </h2>

                <p
                  className="
                    mt-5
                    max-w-120
                    text-[15px]
                    leading-7
                    text-white/58
                  "
                >
                  Connect directly with UNIK BIOTECH
                  RESEARCH. We&apos;ll help route your
                  enquiry to the right team.
                </p>

                <div className="mt-10 space-y-4">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon;

                    return (
                      <a
                        key={detail.eyebrow}
                        href={detail.href}
                        target={
                          detail.eyebrow ===
                          "Visit our office"
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          detail.eyebrow ===
                          "Visit our office"
                            ? "noreferrer"
                            : undefined
                        }
                        className="
                          group
                          block
                          rounded-3xl
                          border
                          border-white/10
                          bg-white/6
                          p-5
                          backdrop-blur-sm
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-white/18
                          hover:bg-white/10
                        "
                      >
                        <div className="flex gap-4">
                          <div
                            className="
                              flex
                              h-12
                              w-12
                              shrink-0
                              items-center
                              justify-center
                              rounded-2xl
                              bg-emerald-400/12
                              text-emerald-300
                              transition-all
                              duration-300
                              group-hover:bg-emerald-400/18
                            "
                          >
                            <Icon
                              aria-hidden="true"
                              size={20}
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p
                              className="
                                text-[9px]
                                font-extrabold
                                uppercase
                                tracking-[0.2em]
                                text-emerald-300/75
                              "
                            >
                              {detail.eyebrow}
                            </p>

                            <h3
                              className="
                                mt-1.5
                                wrap-break-word
                                text-[15px]
                                font-bold
                                leading-6
                                text-white
                              "
                            >
                              {detail.title}
                            </h3>

                            <p
                              className="
                                mt-2
                                text-[13px]
                                leading-6
                                text-white/52
                              "
                            >
                              {detail.description}
                            </p>

                            <span
                              className="
                                mt-4
                                inline-flex
                                items-center
                                gap-2
                                text-[12px]
                                font-bold
                                text-emerald-300
                              "
                            >
                              {detail.action}

                              <ArrowRight
                                aria-hidden="true"
                                size={14}
                                className="
                                  transition-transform
                                  duration-300
                                  group-hover:translate-x-1
                                "
                              />
                            </span>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div
                  className="
                    mt-8
                    rounded-[28px]
                    border
                    border-emerald-300/18
                    bg-[linear-gradient(135deg,rgba(52,211,153,0.16),rgba(34,197,94,0.08))]
                    p-6
                  "
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#25D366]
                        text-white
                        shadow-[0_14px_35px_rgba(37,211,102,0.25)]
                      "
                    >
                      <MessageCircle
                        aria-hidden="true"
                        size={22}
                      />
                    </div>

                    <div>
                      <p
                        className="
                          text-lg
                          font-extrabold
                          text-white
                        "
                      >
                        Need a quicker response?
                      </p>

                      <p
                        className="
                          mt-1.5
                          text-[13px]
                          leading-6
                          text-white/58
                        "
                      >
                        Start a WhatsApp conversation with
                        our team for a direct enquiry.
                      </p>
                    </div>
                  </div>

                  <Link
                    href="https://wa.me/918380017593"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group
                      mt-5
                      flex
                      min-h-13
                      w-full
                      items-center
                      justify-center
                      gap-2.5
                      rounded-full
                      bg-[#25D366]
                      px-5
                      text-sm
                      font-extrabold
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#20BD5A]
                      hover:shadow-[0_16px_35px_rgba(37,211,102,0.25)]
                    "
                  >
                    Chat on WhatsApp

                    <ArrowRight
                      aria-hidden="true"
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="
              mt-8
              grid
              gap-4
              sm:grid-cols-3
            "
          >
            <TrustItem
              number="01"
              title="Share your requirement"
              description="Tell us about your crop, product need, or business enquiry."
            />

            <TrustItem
              number="02"
              title="We route it correctly"
              description="Your enquiry reaches the relevant team instead of a generic inbox."
            />

            <TrustItem
              number="03"
              title="Continue the conversation"
              description="Our team connects with you to understand the requirement further."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

type HeroSignalProps = {
  icon: typeof ShieldCheck;
  text: string;
};

function HeroSignal({
  icon: Icon,
  text,
}: HeroSignalProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-2.5
        text-[13px]
        font-semibold
        text-white/65
      "
    >
      <Icon
        aria-hidden="true"
        size={16}
        className="text-emerald-300"
      />

      <span>{text}</span>
    </div>
  );
}

type TrustItemProps = {
  number: string;
  title: string;
  description: string;
};

function TrustItem({
  number,
  title,
  description,
}: TrustItemProps) {
  return (
    <div
      className="
        rounded-[26px]
        border
        border-[#163D29]/8
        bg-white
        p-6
        shadow-[0_12px_35px_rgba(14,54,32,0.045)]
      "
    >
      <span
        className="
          text-[10px]
          font-extrabold
          uppercase
          tracking-[0.2em]
          text-[#08783F]
        "
      >
        Step {number}
      </span>

      <h3
        className="
          mt-3
          font-heading
          text-xl
          font-extrabold
          tracking-[-0.03em]
          text-[#10281B]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-2
          text-[13px]
          leading-6
          text-slate-500
        "
      >
        {description}
      </p>
    </div>
  );
}