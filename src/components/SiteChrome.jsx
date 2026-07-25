import { useEffect, useState } from 'react'
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { useReducedMotion } from '../hooks/useOnScreen'
import { navLinks } from '../data/portfolio'

const HERO_WORDS = ['data', 'stats', 'machine learning', 'football']

export const BackgroundCode = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden font-dm-sans text-sm text-slate-800/30"
  >
    <div className="absolute right-10 top-20 hidden opacity-20 lg:block">
      <pre>{`const antonio = {
  role: "Data Scientist",
  focus: "Sports Analytics",
  stack: ["Python", "R", "SQL"]
};`}</pre>
    </div>
    <div className="absolute bottom-20 left-10 hidden opacity-20 lg:block">
      <pre>{`while (match_ongoing) {
  predict_outcome();
  optimize_odds();
}`}</pre>
    </div>
  </div>
)

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32)
    const handleEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    handleScroll()
    const desktopQuery = window.matchMedia('(min-width: 768px)')
    const handleViewportChange = (event) => {
      if (event.matches) setMenuOpen(false)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('keydown', handleEscape)
    desktopQuery.addEventListener('change', handleViewportChange)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleEscape)
      desktopQuery.removeEventListener('change', handleViewportChange)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const hasBackground = scrolled || menuOpen

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        hasBackground
          ? 'border-b border-slate-800/80 bg-slate-950/95 py-3 shadow-xl shadow-black/10 backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6">
        <a
          href="#top"
          onClick={closeMenu}
          className="font-dm-sans text-lg font-medium tracking-wide text-blue-500 transition-colors hover:text-blue-400 sm:text-xl"
        >
          Antonio Lupo
        </a>

        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-dm-sans text-sm font-medium text-slate-300 transition-colors hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
          <a
            href="Resume.pdf"
            download
            className="rounded-md border border-blue-500 px-5 py-2 font-dm-sans text-sm font-medium text-blue-400 transition-all hover:bg-blue-500/10"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg border border-slate-700 bg-slate-900/80 p-2.5 text-slate-200 transition-colors hover:border-blue-500 hover:text-blue-400 md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        inert={!menuOpen}
        className={`grid overflow-hidden px-5 transition-[grid-template-rows,opacity] duration-300 md:hidden ${
          menuOpen ? 'grid-rows-[1fr] opacity-100' : 'pointer-events-none grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <div className="mt-3 space-y-1 border-t border-slate-800 pb-3 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="flex min-h-12 items-center rounded-lg px-4 font-dm-sans font-medium text-slate-200 transition-colors hover:bg-slate-900 hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
            <a
              href="Resume.pdf"
              download
              onClick={closeMenu}
              className="mt-3 flex min-h-12 items-center justify-center rounded-lg border border-blue-500/70 px-4 font-dm-sans font-medium text-blue-300 transition-colors hover:bg-blue-500/10"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export const Hero = () => {
  const [index, setIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return undefined

    let timeoutId
    const intervalId = window.setInterval(() => {
      setIsAnimating(true)
      timeoutId = window.setTimeout(() => {
        setIndex((currentIndex) => (currentIndex + 1) % HERO_WORDS.length)
        setIsAnimating(false)
      }, 250)
    }, 2200)

    return () => {
      window.clearInterval(intervalId)
      window.clearTimeout(timeoutId)
    }
  }, [reducedMotion])

  return (
    <section
      id="top"
      className="relative z-10 flex min-h-[100svh] scroll-mt-20 flex-col items-center justify-center px-5 pb-20 pt-28 text-center sm:px-6 sm:pt-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <AnimatedSection delay={80}>
          <h1 className="mb-7 font-dm-sans text-[clamp(2.5rem,11vw,4.5rem)] font-medium leading-[1.08] text-slate-100">
            Hi, I&apos;m <span className="font-black text-blue-100">Antonio Lupo</span>,
            <span className="mt-2 block sm:mt-0">
              and I love{' '}
              <span className="relative mt-2 inline-flex h-[1.2em] max-w-full flex-col overflow-hidden align-bottom sm:mt-0">
                <span
                  className={`transform transition-all duration-300 ease-in-out ${
                    isAnimating ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                  }`}
                >
                  <span className="whitespace-nowrap px-1 font-black text-blue-100 sm:px-2">
                    {HERO_WORDS[index]}
                  </span>
                </span>
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-3 w-full text-blue-500 opacity-80"
                  viewBox="0 0 200 9"
                  fill="none"
                >
                  <path
                    d="M2.00025 6.99997C25.7485 5.56708 72.8596 0.963496 113.911 2.29297C146.591 3.3514 180.994 4.88219 197.986 6.99997"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={220}>
          <p className="mx-auto mb-10 max-w-2xl font-dm-sans text-base font-light leading-relaxed text-slate-400 sm:text-lg md:text-xl">
            Data Scientist &amp; Analyst specialized in{' '}
            <span className="text-blue-400">Football Analytics</span> &amp;{' '}
            <span className="text-blue-400">Predictive Modeling</span>.
            <br className="hidden sm:block" /> I see data as the{' '}
            <span className="font-bold text-slate-200">language of the pitch</span>, and data
            science as the tool to <span className="font-bold text-slate-200">interpret it</span>.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={360}>
          <a href="Resume.pdf" download className="group relative inline-block font-dm-sans">
            <span className="absolute inset-0 rounded-[60%_40%_70%_30%_/_50%_40%_60%_50%] border-2 border-blue-500 transition-transform duration-300 group-hover:rotate-2" />
            <span className="absolute inset-0 rotate-3 rounded-[40%_60%_30%_70%_/_60%_30%_70%_40%] border-2 border-blue-400 opacity-60 transition-transform duration-300 group-hover:-rotate-1" />
            <span className="relative block px-8 py-4 text-sm font-bold uppercase tracking-wide text-blue-100 transition-colors group-hover:text-white sm:px-12 sm:text-base">
              Have a look at my CV
            </span>
          </a>
        </AnimatedSection>
      </div>

      <AnimatedSection
        delay={500}
        className="absolute bottom-7 left-1/2 w-auto -translate-x-1/2"
      >
        <ArrowDown className="text-slate-500 motion-safe:animate-bounce" size={24} />
      </AnimatedSection>
    </section>
  )
}

export const About = () => (
  <section
    id="about"
    className="relative z-10 scroll-mt-20 px-5 py-20 sm:px-6 sm:py-24"
  >
    <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
      <AnimatedSection className="group relative mx-auto w-full max-w-sm md:max-w-none">
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-25 blur transition duration-700 group-hover:opacity-50" />
        <div className="relative rounded-xl bg-slate-800 p-2 ring-1 ring-slate-700/50">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-700">
            <img
              src="https://i.postimg.cc/L4rMfZrQ/Gemini-Generated-Image-1qmx0s1qmx0s1qmx.png"
              alt="Profile"
              className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={160} className="space-y-4 text-left">
        <div className="mb-1 inline-flex items-center space-x-2 font-dm-sans text-lg font-medium text-blue-400">
          <span>Welcome to my Portfolio!</span>
          <span aria-hidden="true" className="inline-block origin-bottom-right animate-wave">
            👋
          </span>
        </div>
        <p className="font-dm-sans text-lg leading-relaxed text-slate-400">
          I&apos;m a <strong>Data Scientist</strong> who loves finding the story behind the
          numbers—especially when they belong to the <strong>football world</strong>.
        </p>
        <p className="font-dm-sans leading-relaxed text-slate-400">
          At <strong>Football Benchmark</strong>, I build end-to-end solutions that turn raw
          public data into clear insights. I write Python scripts to collect and integrate data
          into cloud environments, optimize{' '}
          <span className="text-blue-400">machine learning workflows</span>, and design
          visualizations for media and broadcast use. Ultimately, my goal is to connect the dots
          between the sporting, financial, and socio-economic trends happening across the
          industry.
        </p>
        <p className="font-dm-sans leading-relaxed text-slate-400">
          My focus on <span className="text-blue-400">Sports Analytics</span> really took shape
          during my <strong>Master&apos;s degree</strong>. I collaborated with{' '}
          <strong>Soccerment</strong> in a Football Analytics lab, using complex event and
          tracking data to build a regression model that predicted corner kicks. For my thesis,
          I took things a step further by developing a <strong>deep learning model</strong> to
          forecast shot dominance in matches, which cemented my love for predictive modeling and
          statistical analysis.
        </p>
        <p className="font-dm-sans leading-relaxed text-slate-400">
          Off the pitch, I&apos;ve gained solid technical experience as a{' '}
          <strong>Data Analyst at Aesys Srl</strong>, building Power BI dashboards and helping
          optimize Azure pipelines.
        </p>
        <p className="font-dm-sans leading-relaxed text-slate-400">
          My journey started in business and economics. I earned my BSc at the{' '}
          <span className="text-white">University of Bologna</span> (including an exchange
          semester at Dickinson College in the US) and spent time at Banca Mediolanum and the
          Riot Investment Society before fully shifting my sights to data science.
        </p>

        <div className="flex space-x-2 pt-3">
          <a
            href="https://github.com/AntonioWolf01"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="rounded-lg p-3 text-slate-400 transition-colors hover:bg-slate-900 hover:text-blue-400"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/antonio-lupo-64227920b/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-lg p-3 text-slate-400 transition-colors hover:bg-slate-900 hover:text-blue-400"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:antoniolupuz@gmail.com"
            aria-label="Send an email"
            className="rounded-lg p-3 text-slate-400 transition-colors hover:bg-slate-900 hover:text-blue-400"
          >
            <Mail size={24} />
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
)

export const Footer = () => (
  <footer className="relative z-10 border-t border-slate-800 bg-slate-900 py-8 text-center font-dm-sans text-sm text-slate-500">
    <p>Antonio Lupo ©</p>
    <div className="mt-4 flex justify-center space-x-2">
      <a
        href="https://github.com/AntonioWolf01"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub profile"
        className="rounded-lg p-2 transition-colors hover:text-blue-400"
      >
        <Github size={18} />
      </a>
      <a
        href="https://www.linkedin.com/in/antonio-lupo-64227920b/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn profile"
        className="rounded-lg p-2 transition-colors hover:text-blue-400"
      >
        <Linkedin size={18} />
      </a>
    </div>
  </footer>
)
