import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <main>
        <Hero />
        <Services />
        <Pricing />
      </main>
    </div>
  )
}

export default App
