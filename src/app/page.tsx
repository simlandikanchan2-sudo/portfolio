import { Navbar } from "@/components/ui/navbar"
import { AnimatedCursor } from "@/components/ui/animated-cursor"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { CaseStudy } from "@/components/sections/case-study"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Resume } from "@/components/sections/resume"
import { Education } from "@/components/sections/education"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <AnimatedCursor />
      <Navbar />
      <ScrollIndicator />
      <main>
        <Hero />
        <About />
        <Experience />
        <CaseStudy />
        <Skills />
        <Projects />
        <Resume />
        <Education />
        <Contact />
      </main>
    </>
  )
}
