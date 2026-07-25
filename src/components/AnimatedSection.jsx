import { useOnScreen } from '../hooks/useOnScreen'

const AnimatedSection = ({ children, className = '', delay = 0, as = 'div' }) => {
  const [ref, visible] = useOnScreen()
  const Element = as

  return (
    <Element
      ref={ref}
      className={`reveal-section transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Element>
  )
}

export default AnimatedSection
