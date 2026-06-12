import { useEffect, useRef, useState } from 'react'

function Section({ id, title, eyebrow, children }) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

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
      className={`reveal-section px-6 py-16 sm:px-8 sm:py-20 xl:px-10 ${isVisible ? 'is-visible' : ''}`}
      id={id}
      ref={sectionRef}
    >
      <div className="mx-auto max-w-[90rem]">
        {(eyebrow || title) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-2 text-3xl font-bold text-zinc-950 sm:text-4xl dark:text-zinc-50">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
