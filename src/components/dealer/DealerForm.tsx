"use client";

import { Building2, Send } from "lucide-react";

export default function DealerForm() {
  return (
    <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-xl">

      {/* Header */}

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">

          <Building2 size={24} />

        </div>

        <div>

          <h3 className="text-2xl font-black text-slate-900">
            Dealer Application
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Fill in your details and we&apos;ll contact you.
          </p>

        </div>

      </div>

      {/* Form */}

      <form className="mt-8 space-y-5">

        {/* Business */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Business Name
          </label>

          <input
            type="text"
            placeholder="ABC Agro Centre"
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
          />

        </div>

        {/* Owner */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Owner Name
          </label>

          <input
            type="text"
            placeholder="John Doe"
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
          />

        </div>

        {/* Contact */}

        <div className="grid gap-5 md:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="+91 9876543210"
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="example@email.com"
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
            />

          </div>

        </div>

        {/* Location */}

        <div className="grid gap-5 md:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              State
            </label>

            <input
              type="text"
              placeholder="Maharashtra"
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              District
            </label>

            <input
              type="text"
              placeholder="Nashik"
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
            />

          </div>

        </div>

        {/* Business Experience */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Years in Business
          </label>

          <select
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
          >
            <option>Less than 1 year</option>
            <option>1 – 3 Years</option>
            <option>3 – 5 Years</option>
            <option>5 – 10 Years</option>
            <option>10+ Years</option>
          </select>

        </div>

        {/* Message */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Message
          </label>

          <textarea
            rows={5}
            placeholder="Tell us about your business..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 outline-none transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
          />

        </div>

        {/* Terms */}

        <label className="flex items-start gap-3 text-sm text-slate-600">

          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
          />

          <span>
            I agree to be contacted by UNIK BIOTECH
            regarding my dealer application.
          </span>

        </label>

        {/* Submit */}

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-emerald-700 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-emerald-600"
        >

          Submit Application

          <Send size={18} />

        </button>

      </form>

    </div>
  );
}