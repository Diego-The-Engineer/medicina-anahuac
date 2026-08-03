import { Analytics } from '@vercel/analytics/next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: 'Manual del Estudiante de Medicina 2026-2027 | Anáhuac Oaxaca',
  description:
    'El manual interactivo para estudiantes de Medicina de la Universidad Anáhuac Oaxaca. Tu vida universitaria, en un solo lugar.',
  generator: 'v0.app',
}

export const viewport = {
  colorScheme: 'light',
  themeColor: '#FF5900',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
