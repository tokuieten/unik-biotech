"use client";

interface CategoryTabsProps {
  activeCategory: string;
  onChange: (category: string) => void;
}

const categories = [
  "All",
  "Bio Fertilizers",
  "Micronutrients",
  "Speciality Inputs",
  "Seed Treatments",
  "Growth Promoters",
];

export default function CategoryTabs({
  activeCategory,
  onChange,
}: CategoryTabsProps) {
  return (
    <div className="mb-14 flex flex-wrap justify-center gap-3">

      {categories.map((category) => {

        const active = activeCategory === category;

        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`
              rounded-full
              px-6
              py-3
              text-sm
              font-semibold
              transition-all
              duration-300

              ${
                active
                  ? "bg-linear-to-r from-emerald-700 to-green-600 text-white shadow-lg shadow-emerald-700/25 scale-105"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
              }
            `}
          >
            {category}
          </button>
        );

      })}

    </div>
  );
}