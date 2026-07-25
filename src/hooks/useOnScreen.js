import { useEffect, useRef, useState } from 'react'

const shouldShowImmediately = () =>
  typeof window === 'undefined' ||
  !('IntersectionObserver' in window) ||
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const useOnScreen = (threshold = 0.15) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(shouldShowImmediately)

  useEffect(() => {
    const element = ref.current
    if (!element || visible) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, visible])

  return [ref, visible]
}

export const useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window === 'undefined'
      ? false
      : window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = (event) => setReducedMotion(event.matches)

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return reducedMotion
}
