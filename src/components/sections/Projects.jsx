import { useEffect, useMemo, useState } from 'react'
import Section from '../ui/Section'
import { cx, theme } from '../../content/theme'
import { getProjectHref } from '../../router/routes'

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
    const isContained = project.imageFit === 'contain'

    return (
      <div
        className={cx(
          'mb-5 overflow-hidden rounded-lg border border-cyan-400/20',
          isContained && 'bg-zinc-100 p-2 dark:bg-zinc-950',
          !className && 'h-28',
          className
        )}
      >
        <img
          alt={project.alt}
          className={cx('h-full w-full object-top', isContained ? 'object-contain' : 'object-cover')}
          src={project.image}
        />
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

function CarouselButton({ direction, label, disabled, onClick }) {
  const isPrevious = direction === 'previous'

  return (
    <button
      aria-label={label}
      className={cx(
        'group absolute top-1/2 z-[3] grid size-11 -translate-y-1/2 place-items-center rounded-full border border-cyan-500/25 bg-white/85 text-cyan-700 shadow-[0_14px_34px_rgba(8,47,73,0.12)] backdrop-blur transition duration-300 hover:scale-105 hover:border-cyan-500/55 hover:bg-cyan-50 hover:text-cyan-900 hover:shadow-[0_18px_44px_rgba(8,145,178,0.18)] focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 disabled:hover:border-cyan-500/25 disabled:hover:bg-white/85 sm:size-12 dark:border-cyan-200/25 dark:bg-white/[0.075] dark:text-cyan-200 dark:shadow-[0_18px_42px_rgba(0,0,0,0.24)] dark:hover:border-cyan-200/55 dark:hover:bg-cyan-300/10 dark:hover:text-white',
        isPrevious ? '-left-1 sm:left-0' : '-right-1 sm:right-0'
      )}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <span
        aria-hidden="true"
        className={cx(
          'block size-3 rotate-45 border-current transition-transform duration-300',
          isPrevious
            ? 'border-b-2 border-l-2 group-hover:-translate-x-0.5'
            : 'border-r-2 border-t-2 group-hover:translate-x-0.5'
        )}
      />
    </button>
  )
}

function Projects({ content, items, tone }) {
  const projectCount = items.length
  const [currentIndex, setCurrentIndex] = useState(projectCount)
  const [visibleCount, setVisibleCount] = useState(getVisibleCount)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true)
  const [isSliding, setIsSliding] = useState(false)
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
    setIsSliding(true)
    setCurrentIndex((index) => index - 1)
  }
  const goToNext = () => {
    setIsTransitionEnabled(true)
    setIsSliding(true)
    setCurrentIndex((index) => index + 1)
  }
  const handleTransitionEnd = () => {
    setIsSliding(false)

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
      setIsSliding(true)
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
        <CarouselButton
          disabled={!canSlide}
          direction="previous"
          label={content.previousLabel}
          onClick={goToPrevious}
        />

        <div className="-my-5 overflow-hidden py-5">
          <div
            className={cx('flex', isTransitionEnabled && 'projects-carousel-track', isSliding && 'pointer-events-none')}
            onTransitionEnd={handleTransitionEnd}
            style={trackStyle}
          >
            {carouselItems.map((project, index) => (
              <div className="shrink-0 px-3" key={`${project.slug}-${index}`} style={{ width: slideWidth }}>
                <a
                  className={cx(
                    theme.components.card,
                    theme.shadow.cardHover,
                    'block h-full cursor-pointer p-7 transition hover:relative hover:z-[1] hover:-translate-y-1 hover:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-transparent'
                  )}
                  href={getProjectHref(project.slug)}
                >
                  <ProjectVisual project={project} />
                  {project.statusLabel && (
                    <span className={cx('mb-3 inline-flex rounded-full border border-cyan-500/30 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-cyan-700 dark:border-cyan-300/25 dark:text-cyan-300')}>
                      {project.statusLabel}
                    </span>
                  )}
                  <h3 className={theme.typography.heading3}>{project.title}</h3>
                  <p className={cx('mt-3 text-sm leading-6 lg:text-base lg:leading-7', theme.colors.text.muted)}>{project.shortDescription}</p>
                </a>
              </div>
            ))}
          </div>
        </div>

        <CarouselButton
          disabled={!canSlide}
          direction="next"
          label={content.nextLabel}
          onClick={goToNext}
        />
      </div>
    </Section>
  )
}

export { ProjectVisual }
export default Projects
