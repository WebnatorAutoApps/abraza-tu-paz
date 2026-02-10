export default function About() {
  return (
    <section id="sobre-mi" className="bg-surface-warm px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Decorative avatar area */}
          <div className="relative flex items-center justify-center">
            <div
              className="blob-1 absolute h-72 w-72 bg-primary-light/40 sm:h-80 sm:w-80"
              aria-hidden="true"
            />
            <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-surface bg-accent/30 shadow-xl sm:h-72 sm:w-72">
              {/* Placeholder illustration */}
              <svg
                className="h-32 w-32 text-primary-dark/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
          </div>

          {/* Text content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark">
              Sobre Mi
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Maria Gabriela Laurentin
            </h2>
            <p className="mt-1 text-lg font-medium text-primary">
              Psicologa Integral
            </p>

            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                Soy psicologa integral formada en el Instituto Superior de
                Estudios Psicologicos (ISEP), con experiencia clinica en el
                acompanamiento de personas en procesos de bienestar emocional,
                manejo de adicciones y desarrollo de habilidades sociales.
              </p>
              <p>
                Mi enfoque combina una mirada holistica del ser humano con
                herramientas practicas de aplicacion inmediata. Creo firmemente
                que cada persona tiene la capacidad de encontrar su equilibrio y
                paz interior cuando cuenta con el acompanamiento adecuado.
              </p>
              <p>
                Con experiencia internacional — incluyendo formacion clinica en
                Daytop, Nueva York — ofrezco un espacio bilingue (espanol e
                ingles) donde sentirte escuchado/a y apoyado/a en tu proceso de
                crecimiento personal.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "ISEP — Psicologia Integral",
                "Daytop NY — Clinica de Adicciones",
                "Bilingue ES/EN",
                "Madrid, Espana",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary-light/30 px-4 py-1.5 text-xs font-medium text-primary-dark"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
