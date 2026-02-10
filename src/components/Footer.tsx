export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <span className="text-lg font-bold tracking-tight text-primary-dark">
              Abraza tu Paz
            </span>
            <p className="mt-1 text-sm text-muted">
              Psicologia Integral — Madrid, Espana
            </p>
          </div>

          <nav className="flex gap-6 text-sm text-muted">
            <a
              href="#servicios"
              className="transition-colors hover:text-primary-dark"
            >
              Servicios
            </a>
            <a
              href="#sobre-mi"
              className="transition-colors hover:text-primary-dark"
            >
              Sobre Mi
            </a>
            <a
              href="#contacto"
              className="transition-colors hover:text-primary-dark"
            >
              Contacto
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Abraza tu Paz. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
