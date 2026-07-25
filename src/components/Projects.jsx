import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  BarChart3,
  BrainCircuit,
  Calculator,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Gamepad2,
  Github,
  Globe,
  Image as ImageIcon,
  Linkedin,
  Presentation,
  Twitter,
  X,
} from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { galleryItems, projects } from '../data/portfolio'

const projectIconMap = {
  brain: BrainCircuit,
  calculator: Calculator,
  chart: BarChart3,
  game: Gamepad2,
  globe: Globe,
  image: ImageIcon,
  twitter: Twitter,
}

const actionIconMap = {
  file: FileText,
  github: Github,
  linkedin: Linkedin,
  presentation: Presentation,
}

const ActionIcon = ({ action, size = 22 }) => {
  if (action.type === 'gallery') return <ImageIcon size={size} />
  const Icon = actionIconMap[action.icon] ?? ExternalLink
  return <Icon size={size} />
}

const ActionControl = ({ action, onOpenGallery, className = '', children }) => {
  if (action.type === 'gallery') {
    return (
      <button type="button" onClick={onOpenGallery} className={className}>
        {children}
      </button>
    )
  }

  return (
    <a
      href={action.href}
      download={action.type === 'download' ? true : undefined}
      target={action.type === 'external' ? '_blank' : undefined}
      rel={action.type === 'external' ? 'noreferrer' : undefined}
      className={className}
    >
      {children}
    </a>
  )
}

const DesktopCurtain = ({ actions, onOpenGallery }) => {
  if (actions.length === 1 && actions[0].type === 'gallery') {
    const action = actions[0]
    return (
      <div className="project-curtain pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        <ActionControl
          action={action}
          onOpenGallery={onOpenGallery}
          className="flex h-full w-full flex-col items-center justify-center bg-slate-950/90 px-4 text-center backdrop-blur-sm"
        >
          <ImageIcon
            size={48}
            className="mb-3 text-blue-400 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-lg font-bold text-white">{action.label}</span>
        </ActionControl>
      </div>
    )
  }

  return (
    <div className="project-curtain pointer-events-none absolute inset-0 z-20 group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
      {actions.map((action, index) => (
        <ActionControl
          key={`${action.type}-${action.href ?? action.label}`}
          action={action}
          onOpenGallery={onOpenGallery}
          className={`flex flex-1 transform flex-col items-center justify-center bg-slate-950/95 px-4 text-center transition-all duration-500 hover:bg-slate-800 focus-visible:bg-slate-800 ${
            index === 0
              ? '-translate-x-full border-r border-slate-700 group-hover:translate-x-0 group-focus-within:translate-x-0'
              : 'translate-x-full group-hover:translate-x-0 group-focus-within:translate-x-0'
          }`}
        >
          <span className="mb-4 text-blue-400">
            <ActionIcon action={action} size={48} />
          </span>
          <span className="text-lg font-bold text-white">{action.label}</span>
          <span className="mt-2 text-sm text-slate-400">
            {action.type === 'download' ? 'PDF' : action.shortLabel}
          </span>
        </ActionControl>
      ))}
    </div>
  )
}

const TouchActionRow = ({ actions, onOpenGallery }) => (
  <div className="project-action-row mt-5 gap-2 border-t border-slate-700/80 pt-4">
    {actions.map((action) => (
      <ActionControl
        key={`${action.type}-${action.href ?? action.label}`}
        action={action}
        onOpenGallery={onOpenGallery}
        className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-slate-600 bg-slate-900/70 px-3 py-2 text-sm font-medium text-blue-300 transition-colors hover:border-blue-500 hover:bg-blue-500/10"
      >
        <ActionIcon action={action} size={18} />
        <span>{action.shortLabel}</span>
      </ActionControl>
    ))}
  </div>
)

const ProjectCard = ({ project, onOpenGallery }) => {
  const ProjectIcon = projectIconMap[project.icon]

  return (
    <article className="project-card group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-800 font-dm-sans shadow-lg transition-[transform,border-color] duration-300 md:hover:-translate-y-2 md:hover:border-slate-600">
      <DesktopCurtain actions={project.actions} onOpenGallery={onOpenGallery} />

      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-slate-700 sm:h-48">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-40"
        />
        <span className="absolute right-3 top-3 rounded-full border border-slate-600/70 bg-slate-950/85 px-2.5 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm">
          {project.status}
        </span>
      </div>

      <div className="flex flex-grow flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-start space-x-3">
          <ProjectIcon className={`mt-0.5 flex-none ${project.iconColor}`} />
          <h3 className="text-lg font-bold leading-snug text-slate-100 sm:text-xl">
            {project.title}
          </h3>
        </div>

        <p className="mb-5 flex-grow text-sm leading-relaxed text-slate-400">{project.desc}</p>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-blue-500/10 px-2 py-1 text-xs text-blue-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <TouchActionRow actions={project.actions} onOpenGallery={onOpenGallery} />
      </div>
    </article>
  )
}

const GalleryModal = ({ isOpen, onClose }) => {
  const [currentPost, setCurrentPost] = useState(0)
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const touchStartRef = useRef(null)
  const touchEndRef = useRef(null)
  const titleId = useId()

  const nextPost = useCallback(() => {
    setCurrentPost((current) => (current + 1) % galleryItems.length)
  }, [])

  const prevPost = useCallback(() => {
    setCurrentPost(
      (current) => (current - 1 + galleryItems.length) % galleryItems.length,
    )
  }, [])

  useEffect(() => {
    if (!isOpen) return undefined

    const previousFocus = document.activeElement
    const root = document.getElementById('root')
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    if (root) root.inert = true

    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus())

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') nextPost()
      if (event.key === 'ArrowLeft') prevPost()
      if (event.key === 'Escape') onClose()

      if (event.key === 'Tab' && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        )
        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault()
          lastElement?.focus()
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault()
          firstElement?.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.cancelAnimationFrame(focusFrame)
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      if (root) root.inert = false
      previousFocus?.focus()
    }
  }, [isOpen, nextPost, onClose, prevPost])

  if (!isOpen) return null

  const item = galleryItems[currentPost]

  return createPortal(
    <div
      className="modal-enter fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/90 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="flex max-h-[94svh] w-full max-w-4xl flex-col overflow-hidden rounded-t-2xl border border-slate-700 bg-slate-900 shadow-2xl sm:max-h-[90vh] sm:rounded-2xl"
      >
        <div className="flex items-center justify-between border-b border-slate-800 px-4 py-4 sm:px-6">
          <div>
            <h3 id={titleId} className="font-dm-sans text-xl font-bold text-white sm:text-2xl">
              Visualization Gallery
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              {currentPost + 1} of {galleryItems.length}
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close visualization gallery"
            className="rounded-full p-2.5 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <div
          className="overflow-y-auto p-4 sm:p-6"
          onTouchStart={(event) => {
            touchEndRef.current = null
            touchStartRef.current = event.targetTouches[0].clientX
          }}
          onTouchMove={(event) => {
            touchEndRef.current = event.targetTouches[0].clientX
          }}
          onTouchEnd={() => {
            if (touchStartRef.current === null || touchEndRef.current === null) return
            const distance = touchStartRef.current - touchEndRef.current
            if (distance > 50) nextPost()
            if (distance < -50) prevPost()
          }}
        >
          <div className="relative">
            <button
              type="button"
              onClick={prevPost}
              aria-label="Previous visualization"
              className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-slate-950/80 p-3 text-white backdrop-blur-sm transition-colors hover:bg-slate-700 md:flex"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={nextPost}
              aria-label="Next visualization"
              className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-slate-950/80 p-3 text-white backdrop-blur-sm transition-colors hover:bg-slate-700 md:flex"
            >
              <ChevronRight size={24} />
            </button>

            <div className="mb-5 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-lg">
              <img
                src={item.image}
                alt={item.desc}
                className="max-h-[52svh] w-full object-contain sm:max-h-[58vh]"
              />
            </div>
          </div>

          <div className="mb-5 flex items-center justify-center gap-4 md:hidden">
            <button
              type="button"
              onClick={prevPost}
              aria-label="Previous visualization"
              className="rounded-full bg-slate-800 p-3 text-white"
            >
              <ChevronLeft />
            </button>
            <span className="text-sm text-slate-400">
              {currentPost + 1} / {galleryItems.length}
            </span>
            <button
              type="button"
              onClick={nextPost}
              aria-label="Next visualization"
              className="rounded-full bg-slate-800 p-3 text-white"
            >
              <ChevronRight />
            </button>
          </div>

          <div className="space-y-4 text-left">
            <p className="font-dm-sans text-base leading-relaxed text-slate-300 sm:text-lg">
              {item.desc}
            </p>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center space-x-2 font-dm-sans font-medium text-blue-400 transition-colors hover:text-blue-300"
            >
              <Linkedin size={20} />
              <span>View Original Post on LinkedIn</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export const Projects = () => {
  const [showGallery, setShowGallery] = useState(false)
  const closeGallery = useCallback(() => setShowGallery(false), [])
  const openGallery = useCallback(() => setShowGallery(true), [])

  return (
    <section
      id="projects"
      className="relative z-10 scroll-mt-20 px-5 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="mb-12 text-center font-dm-sans text-3xl font-bold text-blue-500 sm:mb-16 md:text-4xl">
            Key Projects
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={(index % 3) * 120} className="h-full">
              <ProjectCard project={project} onOpenGallery={openGallery} />
            </AnimatedSection>
          ))}
        </div>
      </div>

      <GalleryModal isOpen={showGallery} onClose={closeGallery} />
    </section>
  )
}
