import { About } from '@/components/About'
import { ContactSection } from '@/components/ContactSection'
import { GitHubNotes } from '@/components/GitHubNotes'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { TechStack } from '@/components/TechStack'
import { Testimonials } from '@/components/Testimonials'
import { BottomDock } from '@/components/BottomDock'

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Testimonials />
      <GitHubNotes />
      <ContactSection />
      <BottomDock />
    </main>
  )
}
