import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import WhatIDo from './components/WhatIDo.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Credentials from './components/Credentials.jsx'
import Statement from './components/Statement.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Nav />
      <main>
        <Hero />
        <WhatIDo />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Credentials />
        <Statement />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}