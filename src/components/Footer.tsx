export default function Footer() {
  return (
    <footer className="w-full border-t border-black/[.08] dark:border-white/[.145]">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-6 py-6 text-sm text-zinc-500 dark:text-zinc-400">
        &copy; {new Date().getFullYear()} Abraza tu Paz. All rights reserved.
      </div>
    </footer>
  );
}
