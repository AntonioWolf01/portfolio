import {
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  FileText,
  Gamepad2,
  GitGraph,
  Globe,
  LineChart,
  Server,
  Terminal,
} from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { experiences, skillGroups } from '../data/portfolio'

const iconMap = {
  brain: BrainCircuit,
  chart: BarChart3,
  code: Code2,
  database: Database,
  file: FileText,
  game: Gamepad2,
  git: GitGraph,
  globe: Globe,
  lineChart: LineChart,
  server: Server,
  terminal: Terminal,
}

const SkillCard = ({ group, delay }) => {
  const GroupIcon = iconMap[group.icon]

  return (
    <AnimatedSection delay={delay} className="h-full">
      <div className="group h-full rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition-all duration-300 hover:border-blue-500/30 sm:p-8">
        <div className="mb-6 flex items-center space-x-3 border-b border-slate-700 pb-4">
          <GroupIcon className="text-blue-400" size={24} />
          <h3 className="font-dm-sans text-xl font-bold text-slate-200">{group.title}</h3>
        </div>

        <div className="grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          {group.items.map((item) => {
            const ItemIcon = iconMap[item.icon]
            return (
              <div
                key={item.name}
                className="flex items-center space-x-3 font-dm-sans text-slate-400 transition-colors group-hover:text-slate-200"
              >
                <ItemIcon size={16} className={item.color} />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}

export const Skills = () => (
  <section
    id="skills"
    className="relative z-10 scroll-mt-20 px-5 py-20 sm:px-6 sm:py-24"
  >
    <div className="mx-auto max-w-6xl">
      <AnimatedSection>
        <h2 className="mb-12 text-center font-dm-sans text-3xl font-bold text-blue-500 sm:mb-16 md:text-4xl">
          Skills
        </h2>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
        {skillGroups.map((group, index) => (
          <SkillCard key={group.title} group={group} delay={100 + index * 140} />
        ))}
      </div>
    </div>
  </section>
)

const ExperienceCard = ({ experience }) => (
  <div className="relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800 p-5 font-dm-sans shadow-xl sm:p-8">
    <div className={`absolute left-0 top-0 h-full w-1.5 sm:w-2 ${experience.accent}`} />

    <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <div className="flex min-w-0 items-center gap-4">
        <div className="h-12 w-12 flex-none overflow-hidden rounded bg-white p-1">
          <img
            src={experience.logo}
            alt={experience.company}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-white sm:text-xl">{experience.role}</h3>
          <p className="text-sm text-blue-400 sm:text-base">
            {experience.company} <span className="text-slate-500">({experience.location})</span>
          </p>
        </div>
      </div>
      <div className="pl-16 text-sm font-normal text-slate-400 sm:pl-0">
        {experience.dates}
      </div>
    </div>

    <ul className="space-y-4">
      {experience.bullets.map((bullet) => (
        <li
          key={bullet}
          className="flex items-start space-x-3 text-sm leading-relaxed text-slate-400"
        >
          <span aria-hidden="true" className="mt-1 text-blue-500">
            ▹
          </span>
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  </div>
)

export const Experience = () => (
  <section
    id="experience"
    className="relative z-10 scroll-mt-20 bg-slate-900/50 px-5 py-20 sm:px-6 sm:py-24"
  >
    <div className="mx-auto max-w-4xl">
      <AnimatedSection>
        <h2 className="mb-12 text-center font-dm-sans text-3xl font-bold text-blue-500 sm:mb-16 md:text-4xl">
          Experience
        </h2>
      </AnimatedSection>

      <div className="space-y-6 sm:space-y-8">
        {experiences.map((experience, index) => (
          <AnimatedSection key={`${experience.company}-${experience.dates}`} delay={140 + index * 140}>
            <ExperienceCard experience={experience} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
)
