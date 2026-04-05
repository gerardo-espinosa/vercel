import { SpeedInsights } from '@vercel/speed-insights/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import About from './sections/About'
import Terms from './sections/Terms'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Terms />
        <Contact />
      </main>
      <Footer />
      <SpeedInsights />
    </>
  )
}
