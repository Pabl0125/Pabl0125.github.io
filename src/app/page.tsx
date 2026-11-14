export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 py-24 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="w-full max-w-lg rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-mono text-xs font-medium text-amber-800 dark:border-amber-900/60 dark:bg-amber-950/60 dark:text-amber-300">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          Under Maintenance
        </span>

        <h1 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
          Pablo Araújo Rodríguez
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:text-base">
          This site is currently under maintenance while I build my new
          portfolio. Check back soon—or reach me directly below.
        </p>

        <div className="mt-7 flex flex-wrap gap-3 text-sm font-medium">
          <a
            href="https://github.com/Pabl0125"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-zinc-900 px-4 py-2 text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pablo-araujo-252163423/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-300 px-4 py-2 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            LinkedIn
          </a>
          <a
            href="mailto:pabloarro2005@gmail.com"
            className="rounded-lg border border-zinc-300 px-4 py-2 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            Email
          </a>
        </div>
      </div>
    </main>
  );
}
