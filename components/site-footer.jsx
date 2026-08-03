import { GraduationCap, Phone, Mail, MapPin } from 'lucide-react'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '@/components/social-icons'

const universityLinks = [
  { label: 'Portal Anáhuac', href: '#' },
  { label: 'Blackboard', href: '#' },
  { label: 'Biblioteca Digital', href: '#' },
  { label: 'Calendario Escolar', href: '#' },
  { label: 'Reglamentos', href: '#secciones' },
]

const emergencyContacts = [
  { label: 'Seguridad Campus', value: '951 502 9200', icon: Phone },
  { label: 'Servicios Médicos', value: '951 502 9210', icon: Phone },
  { label: 'contacto@anahuacoaxaca.mx', value: '', icon: Mail },
  { label: 'Blvd. Guadalupe Hinojosa, Oaxaca', value: '', icon: MapPin },
]

const socials = [
  { label: 'Facebook', href: '#', icon: FacebookIcon },
  { label: 'Instagram', href: '#', icon: InstagramIcon },
  { label: 'YouTube', href: '#', icon: YoutubeIcon },
]

export function SiteFooter() {
  return (
    <footer id="contacto" className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-heading text-base font-bold">Anáhuac Oaxaca</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Manual del Estudiante de Medicina 2026 &ndash; 2027. Tu vida universitaria, en un solo lugar.
            </p>
          </div>

          <nav aria-label="Enlaces universitarios">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">Universidad</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {universityLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/60 transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
              Contactos de Emergencia
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {emergencyContacts.map((c) => {
                const Icon = c.icon
                return (
                  <li key={c.label} className="flex items-start gap-2.5 text-sm text-white/60">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <span>
                      {c.label}
                      {c.value ? <span className="block font-medium text-white/80">{c.value}</span> : null}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">Síguenos</h3>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-all hover:scale-110 hover:bg-brand"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>© 2026 Universidad Anáhuac Oaxaca. Todos los derechos reservados.</p>
          <p>Hecho por la Sociedad de Alumnos de Medicina.</p>
        </div>
      </div>
    </footer>
  )
}
