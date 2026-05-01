import Hero from './components/Hero'
import Program from './components/Program'
import About from './components/About'
import Contact from './components/Contact'
import Testimonial from './components/Testimonial'
import concertBg from './assets/concert-bg.jpg'
import './App.css'

function App() {
  return (
    <>
      {/* ── Global Background for Continuity ── */}
      <div className="global-bg">
        <img src={concertBg} alt="" className="global-bg-img" draggable={false} />
        <div className="global-bg-overlay" />
      </div>

      <main className="app-main">
        {/* ── Single Global Glass Border spanning whole site ── */}
        <div className="global-glass-border" />
        
        <Hero />
        <Program />
        <About />
        <Testimonial />
        <Contact />
      </main>
    </>
  )
}

export default App
