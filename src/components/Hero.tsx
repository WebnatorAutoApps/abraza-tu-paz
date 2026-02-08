export default function Hero() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
        Abraza tu Paz
      </h1>
      <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Find your inner calm. A space dedicated to mindfulness, well-being, and
        personal growth.
      </p>
      <div className="mt-10 flex gap-4">
        <a
          href="#about"
          className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Learn More
        </a>
        <a
          href="#contact"
          className="rounded-full border border-black/[.08] px-6 py-3 text-sm font-medium transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
