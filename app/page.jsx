import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { QuickAccess } from '@/components/quick-access'
import { FeaturedSociety } from '@/components/featured-society'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <QuickAccess />
      <FeaturedSociety />
      <SiteFooter />
    </main>
  )
}


