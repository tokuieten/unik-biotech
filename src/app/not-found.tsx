import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F8FAF7] px-6 text-center">
      <h1 className="text-7xl font-black text-emerald-700">404</h1>

      <h2 className="mt-6 text-3xl font-bold text-slate-900">
        Page not found
      </h2>

      <p className="mt-4 max-w-md text-slate-600">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-full bg-emerald-700 px-8 py-4 font-semibold text-white transition hover:bg-emerald-800"
      >
        Back to Home
      </Link>
    </main>
  );
}