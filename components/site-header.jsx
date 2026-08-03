import { GraduationCap } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-brand-foreground">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-sm font-bold text-foreground">Anáhuac Oaxaca</span>
            <span className="text-xs text-muted-foreground">Manual del Estudiante</span>
          </span>
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-7 md:flex">
          <a href="#secciones" className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand">
            Secciones
          </a>
          <a href="#sociedad" className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand">
            Sociedad de Alumnos
          </a>
          <a href="#contacto" className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand">
            Contacto
          </a>
        </nav>

        <a
          href="#secciones"
          className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-sm transition-all hover:scale-105 hover:shadow-md"
        >
          Explorar
        </a>
      </div>
    </header>
  )
}
