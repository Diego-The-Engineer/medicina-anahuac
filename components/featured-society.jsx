import { ArrowRight, Heart, Megaphone, Users } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const highlights = [
  { icon: Megaphone, label: 'Tu puente con la universidad' },
  { icon: Users, label: 'Liderazgo de acción positiva' },
  { icon: Heart, label: 'Eventos e integración' },
]

export function FeaturedSociety() {
  return (
    <section id="sociedad" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/sociedad-alumnos.png"
              alt="Mesa directiva de la Sociedad de Alumnos de Medicina Anáhuac Oaxaca"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Conócenos</span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Sociedad de Alumnos
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Somos tu puente con la universidad. Fomentamos el liderazgo de acción positiva, resolvemos tus dudas y
            organizamos eventos académicos y de integración.{' '}
            <span className="font-semibold text-foreground">¡Únete a la manada!</span>
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {highlights.map((h) => {
              const Icon = h.icon
              return (
                <li key={h.label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-medium text-foreground">{h.label}</span>
                </li>
              )
            })}
          </ul>

          <a
            href="#contacto"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-brand-foreground shadow-md transition-all hover:scale-105 hover:shadow-lg"
          >
            Únete a la manada
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
