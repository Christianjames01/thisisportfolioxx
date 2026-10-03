import { useEffect } from 'react'
import { projects } from './data/projects'
import { useProjectRoute, useReveal } from './hooks/hooks'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useReveal()
  const route = useProjectRoute()

  // Links like /#contact arrive before React renders, so jump once mounted.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (id && !id.startsWith('project/')) document.getElementById(id)?.scrollIntoView()
  }, [])
  const active = projects.find((p) => p.slug === route.slug)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects onOpen={route.open} />
        <Skills />
        <Experience />
        <Education onOpen={route.open} />
        <Contact />
      </main>
      <Footer />
      {active && <ProjectDetail key={active.slug} project={active} onClose={route.close} />}
    </>
  )
}
