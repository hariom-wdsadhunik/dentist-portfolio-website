export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Dentist Portfolio Website
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Sample portfolio demo application for a fictional dental clinic.
        </p>
        <div className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-800 dark:bg-blue-950 dark:text-blue-200">
          Phase 0 — Project Initialization Baseline
        </div>
      </div>
    </main>
  );
}
