import { Hero } from '@/components/Hero'
import { TechStack } from '@/components/TechStack'
import { Projects } from '@/components/Projects' 
import { GitHubNotes } from '@/components/GitHubNotes'
import { BottomDock } from '@/components/BottomDock'

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack />
      <Projects />
      <GitHubNotes />
      <BottomDock />
    </main>
  )
}
