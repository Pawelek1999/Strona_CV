import { useEffect, useRef, useState } from 'react'
import { cx, theme } from '../../content/theme'

function Section({ id, title, children, tone = 1 }) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const toneClassName = theme.sectionTones[tone] ?? theme.sectionTones[1]

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.16 }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className={cx('reveal-section relative overflow-hidden', theme.spacing.section, theme.transition.colors, toneClassName, isVisible && 'is-visible')}
      id={id}
      ref={sectionRef}
    >
      <div className={cx('absolute inset-0', theme.colors.background.sectionAmbient)} />
      <div className={cx('absolute inset-x-0 top-0 h-px', theme.colors.border.sectionTop)} />
      <div className={cx('absolute inset-x-0 bottom-0 h-px', theme.colors.border.sectionBottom)} />

      <div className={cx('relative z-[1]', theme.spacing.container)}>
        {title && (
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className={theme.typography.heading2}>
              {title}
            </h2>
            <div className={cx('mx-auto mt-3', theme.divider.sectionAccent)} />
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
