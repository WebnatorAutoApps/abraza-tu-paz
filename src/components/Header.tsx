export default function Header() {
  return (
    <header className="w-full border-b border-black/[.08] dark:border-white/[.145]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="text-lg font-semibold tracking-tight">
          Abraza tu Paz
        </span>
        <nav className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
