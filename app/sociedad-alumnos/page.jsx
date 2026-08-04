'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MessageCircle, Instagram, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function SociedadAlumnosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        {/* SECCIÓN: SOCIEDAD DE ALUMNOS */}
        <section id="sociedad-alumnos" className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-background">
          
          {/* Botón de regreso */}
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
              <ArrowLeft className="w-4 h-4" /> Volver al inicio
            </Link>
          </div>

          {/* Encabezado y Foto Grupal */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Sociedad de Alumnos</h2>
            <p className="mt-4 text-lg text-muted-foreground">Somos tu puente con la universidad. Fomentamos el liderazgo de acción positiva y organizamos eventos de integración.</p>
          </div>

          <div className="relative w-full h-80 sm:h-96 bg-muted rounded-2xl shadow-lg overflow-hidden mb-12 group">
            <img 
              src="/sociedad-alumnos.jpeg" 
              alt="Mesa Directiva Sociedad de Alumnos" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Conoce a la Mesa Directiva */}
          <h3 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-brand inline-block pb-1">Nuestra Mesa Directiva</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {/* Tarjeta Miembro 1 */}
            <div className="bg-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border text-center">
              <h4 className="text-lg font-bold text-foreground">Juan Pérez</h4>
              <p className="text-brand font-medium text-sm mt-1">Presidente</p>
            </div>
            {/* Tarjeta Miembro 2 */}
            <div className="bg-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border text-center">
              <h4 className="text-lg font-bold text-foreground">María García</h4>
              <p className="text-brand font-medium text-sm mt-1">Vicepresidenta</p>
            </div>
            {/* Tarjeta Miembro 3 */}
            <div className="bg-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border text-center">
              <h4 className="text-lg font-bold text-foreground">Carlos López</h4>
              <p className="text-brand font-medium text-sm mt-1">Coordinador de Eventos</p>
            </div>
            {/* Tarjeta Miembro 4 */}
            <div className="bg-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border text-center">
              <h4 className="text-lg font-bold text-foreground">Ana Ruiz</h4>
              <p className="text-brand font-medium text-sm mt-1">Tesorera</p>
            </div>
          </div>

          {/* Botones de Redes Sociales y Acción */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-md"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
            
            {/* Botón Modal WhatsApp */}
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 bg-brand text-brand-foreground font-semibold rounded-full hover:opacity-90 transition-opacity shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              ¡Únete a la manada!
            </button>
          </div>
        </section>

        {/* MODAL DE WHATSAPP */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
            <div className="bg-card border border-border rounded-2xl shadow-xl w-full max-w-md p-6 text-center transform transition-all">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                <MessageCircle className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">¡Bienvenido a tu generación!</h3>
              <p className="text-muted-foreground mb-6">Estás a un clic de unirte a la comunidad oficial. Resuelve dudas, conoce a tus compañeros y entérate de los eventos.</p>
              
              <div className="flex flex-col gap-3">
                <a 
                  href="https://chat.whatsapp.com/IWSmQFb1sOOGNNADFEzYEy?mode=gi_t" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white font-bold py-3 rounded-full hover:opacity-90 transition-opacity shadow-sm"
                >
                  Unirme al grupo de WhatsApp
                </a>
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="w-full bg-secondary text-secondary-foreground font-bold py-3 rounded-full hover:opacity-80 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}