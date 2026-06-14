import { useEffect, useMemo, useState } from 'react'
import Section from '../ui/Section'
import { cx, theme } from '../../content/theme'

const autoplayDelay = 4200

const getVisibleCount = () => {
  if (typeof window === 'undefined') {
    return 3
  }

  if (window.innerWidth >= 1024) {
    return 3
  }

  if (window.innerWidth >= 768) {
    return 2
  }

  return 1
}

function ProjectVisual({ className, project }) {
  if (project.image) {
    return (
      <div className={cx('mb-5 h-28 overflow-hidden rounded-lg border border-cyan-400/20', className)}>
        <img alt={project.alt} className="h-full w-full object-cover" src={project.image} />
      </div>
    )
  }

  return (
    <div
      className={cx(
        'mb-5 grid h-28 place-items-center overflow-hidden rounded-lg border border-cyan-400/20',
        className,
        project.visualClass
      )}
      aria-label={project.alt}
      role="img"
    >
      <span className="h-12 w-12 rounded-full border border-cyan-200/30 bg-cyan-300/10 shadow-[0_0_22px_rgba(34,211,238,0.18)]" />
    </div>
  )
}

function Projects({ content, items, tone }) {
  const projectCount = items.length
  const [currentIndex, setCurrentIndex] = useState(projectCount)
  const [visibleCount, setVisibleCount] = useState(getVisibleCount)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true)
  const canSlide = projectCount > visibleCount
  const slideWidth = `${100 / visibleCount}%`
  const carouselItems = useMemo(() => [...items, ...items, ...items], [items])

  const trackStyle = useMemo(
    () => ({
      transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
    }),
    [currentIndex, visibleCount]
  )
  const jumpWithoutTransition = (index) => {
    setIsTransitionEnabled(false)
    setCurrentIndex(index)
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsTransitionEnabled(true)
      })
    })
  }
  const goToPrevious = () => {
    setIsTransitionEnabled(true)
    setCurrentIndex((index) => index - 1)
  }
  const goToNext = () => {
    setIsTransitionEnabled(true)
    setCurrentIndex((index) => index + 1)
  }
  const handleTransitionEnd = () => {
    if (currentIndex >= projectCount * 2) {
      jumpWithoutTransition(projectCount)
      return
    }

    if (currentIndex < projectCount) {
      jumpWithoutTransition(projectCount * 2 - 1)
    }
  }

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(getVisibleCount())
    }

    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)

    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  useEffect(() => {
    if (isPaused || !canSlide) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setIsTransitionEnabled(true)
      setCurrentIndex((index) => index + 1)
    }, autoplayDelay)

    return () => window.clearInterval(intervalId)
  }, [canSlide, isPaused])

  return (
    <Section id="projects" eyebrow={content.eyebrow} title={content.title} tone={tone}>
      <div
        className="relative px-10 sm:px-12"
        onBlur={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          aria-label={content.previousLabel}
          className={cx(
            'absolute left-0 top-1/2 z-[2] grid size-9 -translate-y-1/2 place-items-center rounded-full border text-xl font-black transition hover:-translate-y-[55%] hover:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:cursor-not-allowed disabled:opacity-40 sm:size-10',
            theme.colors.border.accent,
            theme.colors.text.accentStrong,
            theme.colors.surface.cardMuted
          )}
          disabled={!canSlide}
          onClick={goToPrevious}
          type="button"
        >
          <span aria-hidden="true">‹</span>
        </button>

        <div className="overflow-hidden">
          <div
            className={cx('flex', isTransitionEnabled && 'projects-carousel-track')}
            onTransitionEnd={handleTransitionEnd}
            style={trackStyle}
          >
            {carouselItems.map((project, index) => (
              <div className="shrink-0 px-3" key={`${project.slug}-${index}`} style={{ width: slideWidth }}>
                <a
                  className={cx(
                    theme.components.card,
                    theme.shadow.cardHover,
                    'block h-full cursor-pointer p-7 transition hover:-translate-y-1 hover:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-transparent'
                  )}
                  href={`/projects/${project.slug}`}
                >
                  <ProjectVisual project={project} />
                  <h3 className={theme.typography.heading3}>{project.title}</h3>
                  <p className={cx('mt-3 text-sm leading-6', theme.colors.text.muted)}>{project.shortDescription}</p>
                </a>
              </div>
            ))}
          </div>
        </div>

        <button
          aria-label={content.nextLabel}
          className={cx(
            'absolute right-0 top-1/2 z-[2] grid size-9 -translate-y-1/2 place-items-center rounded-full border text-xl font-black transition hover:-translate-y-[55%] hover:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:cursor-not-allowed disabled:opacity-40 sm:size-10',
            theme.colors.border.accent,
            theme.colors.text.accentStrong,
            theme.colors.surface.cardMuted
          )}
          disabled={!canSlide}
          onClick={goToNext}
          type="button"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </Section>
  )
}

export { ProjectVisual }
export default Projects
