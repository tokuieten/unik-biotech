import { SearchX } from "lucide-react";

type Props = {
  search: string;
};

export default function ProductEmpty({
  search,
}: Props) {
  return (
    <section className="py-16">

      <div className="mx-auto max-w-xl rounded-[28px] border border-slate-200 bg-white px-8 py-14 text-center shadow-sm">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">

          <SearchX size={28} />

        </div>

        <h2 className="mt-6 text-2xl font-bold text-slate-900">
          No Products Found
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-600">
          We couldn&apos;t find any products matching
          {search && (
            <>
              <span className="font-semibold text-slate-900">
                {" "}
                &quot;{search}&quot;
              </span>
            </>
          )}
          .
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Try another keyword or choose a different category.
        </p>

      </div>

    </section>
  );
}