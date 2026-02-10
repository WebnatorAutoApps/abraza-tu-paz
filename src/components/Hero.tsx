export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-warm px-6 py-20 sm:py-28 lg:py-36">
      {/* Decorative blobs */}
      <div
        className="blob-1 absolute -top-20 right-0 h-72 w-72 bg-primary-light/40 sm:-top-10 sm:right-10 sm:h-96 sm:w-96"
        aria-hidden="true"
      />
      <div
        className="blob-2 absolute -bottom-16 -left-16 h-64 w-64 bg-accent/30"
        aria-hidden="true"
      />
      <div
        className="blob-1 absolute top-1/2 left-1/3 hidden h-40 w-40 bg-secondary/20 lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="animate-fade-up text-sm font-semibold uppercase tracking-widest text-primary-dark">
          Psicologia Integral en Madrid
        </p>
        <h1 className="animate-fade-up mt-4 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Abraza tu Paz
        </h1>
        <p className="animate-fade-up-delay mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Un espacio calido y seguro donde acompanarte en tu camino hacia el
          bienestar emocional, el equilibrio y la paz interior.
        </p>
        <div className="animate-fade-up-delay-2 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contacto"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl"
          >
            Agenda tu Consulta
          </a>
          <a
            href="#servicios"
            className="rounded-full border-2 border-border bg-surface px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:bg-primary-light/20"
          >
            Conoce los Servicios
          </a>
        </div>
      </div>
    </section>
  );
}
