import {
  Package,
  FlaskConical,
  Leaf,
  ShieldCheck,
} from "lucide-react";

type Props = {
  totalProducts: number;
  totalCategories: number;
};

export default function ProductStats({
  totalProducts,
  totalCategories,
}: Props) {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-4">

        <StatCard
          icon={<Package size={28} />}
          value={totalProducts}
          label="Products"
        />

        <StatCard
          icon={<FlaskConical size={28} />}
          value={totalCategories}
          label="Categories"
        />

        <StatCard
          icon={<Leaf size={28} />}
          value="20+"
          label="Years Experience"
        />

        <StatCard
          icon={<ShieldCheck size={28} />}
          value="100%"
          label="Quality Assured"
        />

      </div>
    </section>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: number | string;
  label: string;
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 text-center transition hover:-translate-y-1 hover:shadow-xl">

      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        {icon}
      </div>

      <h3 className="text-4xl font-black">
        {value}
      </h3>

      <p className="mt-2 text-muted-foreground">
        {label}
      </p>

    </div>
  );
}