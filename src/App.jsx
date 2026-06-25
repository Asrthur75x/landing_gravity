import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <NavBar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={setCurrentPage} />
            <Services />
            <Pricing />
            <Projects />
          </>
        ) : (
          <Contact />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
