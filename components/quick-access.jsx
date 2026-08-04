import {
  Users,
  Building2,
  ScrollText,
  Sparkles,
  GraduationCap,
  BookOpenCheck,
  Library,
  LifeBuoy,
  ArrowUpRight,
  Book,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const items = [
  {
    title: 'Sociedad de Alumnos',
    description: '¡Tu voz y representación estudiantil!',
    icon: Users,
    href: '#sociedad',
  },
  {
    title: 'Recursos esenciales',
    description: 'Aquí encontrarás los documentos y recursos más importantes para tu vida universitaria.',
    icon: Book,
    href: '#recursos',
  },
  {
    title: 'Directorio academico',
    description: 'Estructura, autoridades y procesos.',
    icon: Building2,
    href: '#directorio',
  },
  {
    title: 'Comunidad Universitaria',
    description: 'Todo lo que el campus ofrece.',
    icon: Sparkles,
    href: '#comunidad',
  },
  {
    title: 'Becas',
    description: 'Apoyos financieros y requisitos.',
    icon: GraduationCap,
    href: 'https://oaxaca.anahuac.mx/licenciaturas/becas',
  },
  {
    title: 'Carga de materias',
    description: 'Inscripción y plan de estudios.',
    icon: BookOpenCheck,
    href: '#secciones',
  },
  {
    title: 'Recursos para estudiar',
    description: 'Herramientas y material de apoyo.',
    icon: Library,
    href: 'https://biblioteca-anahuac.vercel.app/',
  },
  {
    title: 'Ayuda y Contacto',
    description: 'Resuelve tus dudas al instante.',
    icon: LifeBuoy,
    href: '#contacto',
  },
  
]
export function QuickAccess() {
  return (
    <section id="secciones" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Acceso Rápido</span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Todo lo que necesitas saber
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Explora las secciones clave de tu vida universitaria. Un clic y listo.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal as="article" key={item.title} delay={(index % 4) * 80}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' :'_self'}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl sm:p-6"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <ArrowUpRight
                      className="h-5 w-5 text-muted-foreground/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-heading text-base font-semibold leading-snug text-foreground text-balance">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
