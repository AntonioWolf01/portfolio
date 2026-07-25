import { About, BackgroundCode, Footer, Hero, Navbar } from './components/SiteChrome'
import { Experience, Skills } from './components/ResumeSections'
import { Projects } from './components/Projects'

const App = () => (
  <div className="min-h-screen bg-slate-950 font-dm-sans text-slate-300 selection:bg-blue-500/30 selection:text-blue-200">
    <BackgroundCode />
    <Navbar />

    <main className="flex flex-col">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </main>

    <Footer />
  </div>
)

export default App
