const testimonials = [
  {
    quote:
      "Gabriela es todo un lujo como companera: alguien que va mas alla de todo lo que se podria esperar. Es una persona organizada, resolutiva, sabe gestionar y trabajar en equipo.",
    name: "Recomendacion Profesional",
    role: "Colega de profesion",
  },
  {
    quote:
      "El espacio que crea Gabriela es calido y seguro. Sus herramientas practicas me ayudaron a manejar la ansiedad desde la primera sesion. Recomiendo Abraza tu Paz a cualquier persona que busque bienestar real.",
    name: "Paciente Anonimo/a",
    role: "Terapia individual",
  },
  {
    quote:
      "Los talleres de ansiedad laboral fueron transformadores. Aprendi tecnicas que ahora aplico cada dia en mi trabajo. La profesionalidad y cercania de Maria hacen la diferencia.",
    name: "Participante de Taller",
    role: "Taller de ansiedad laboral",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark">
            Testimonios
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Lo que dicen quienes han confiado en este espacio
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-2xl border border-border bg-surface p-8"
            >
              {/* Quote mark */}
              <svg
                className="absolute top-6 left-6 h-8 w-8 text-primary-light"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>

              <blockquote className="mt-8 text-sm leading-relaxed text-muted">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
