import { ArrowRight, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <img
        src="/hero-campus.png"
        alt="Estudiantes de medicina en el campus de la Universidad Anáhuac Oaxaca"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />

      <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col items-start justify-center px-4 py-24 sm:px-6">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-brand" aria-hidden="true" />
          Manual del Estudiante 2026 &ndash; 2027
        </span>

        <h1 className="max-w-3xl text-balance font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Tu Vida Universitaria, en un Solo Lugar
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/85">
          El manual interactivo para estudiantes de Medicina de la Universidad Anáhuac Oaxaca.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#secciones"
            className="group inline-flex animate-bounce items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-brand-foreground shadow-lg shadow-black/20 transition-all hover:scale-105 hover:shadow-xl"
          >
            Explorar Secciones
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="#sociedad"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15"
          >
            Sociedad de Alumnos
          </a>
        </div>
      </div>
    </section>
  )
}
