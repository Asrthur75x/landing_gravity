import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
