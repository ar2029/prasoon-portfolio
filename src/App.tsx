import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import WhatIDo from './components/WhatIDo'
import Projects from './components/Projects/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-bg-primary min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <WhatIDo />
        <Projects />
        <Certifications />
        <Achievements />
      </main>
      <Footer />
    </div>
  )
}

export default App
