import { ProjectVisual } from '../components/sections/Projects'
import { cx, theme } from '../content/theme'
import { getSectionHref } from '../router/routes'

function ProjectDetails({ content, project }) {
  if (!project) {
    return (
      <main className={cx('min-h-screen pt-32', theme.spacing.section, theme.sectionTones[1])}>
        <section className={cx('mx-auto max-w-3xl text-center', theme.transition.colors)}>
          <h1 className={theme.typography.heading2}>{content.notFoundTitle}</h1>
          <div className={cx('mx-auto mt-3', theme.divider.sectionAccent)} />
          <p className={cx('mt-6', theme.typography.body)}>{content.notFoundText}</p>
          <a
            className={cx(
              'mt-8 inline-flex rounded-full border px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 lg:text-base',
              theme.colors.border.accent,
              theme.colors.text.accentStrong
            )}
            href={getSectionHref('#projects')}
          >
            {content.backLabel}
          </a>
        </section>
      </main>
    )
  }

  return (
    <main className={cx('min-h-screen pt-28', theme.sectionTones[1], theme.transition.colors)}>
      <section className={cx('relative overflow-hidden', theme.spacing.sectionLarge)}>
        <div className={cx('absolute inset-0', theme.colors.background.sectionAmbient)} />
        <div className={cx('relative z-[1] grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center', theme.spacing.container)}>
          <div>
            <ProjectVisual className="h-64 sm:h-80" project={project} />
          </div>

          <div>
            <p className={theme.typography.eyebrowAccent}>{content.title}</p>
            {project.statusLabel && (
              <span className="mt-4 inline-flex rounded-full border border-cyan-500/30 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-cyan-700 dark:border-cyan-300/25 dark:text-cyan-300">
                {project.statusLabel}
              </span>
            )}
            <h1 className={cx('mt-3', theme.typography.heading2)}>{project.title}</h1>
            <div className={cx('mt-4', theme.divider.sectionAccent)} />
            <p className={cx('mt-7 text-lg leading-8 lg:text-xl lg:leading-9', theme.colors.text.body)}>{project.shortDescription}</p>
            {project.description && <p className={cx('mt-5', theme.typography.body)}>{project.description}</p>}
            {project.tags?.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span className={cx(theme.components.tag, 'dark:bg-white/[0.055] dark:text-zinc-200')} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <a
              className={cx(
                'mt-8 inline-flex rounded-full border px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 lg:text-base',
                theme.colors.border.accent,
                theme.colors.text.accentStrong
              )}
              href={getSectionHref('#projects')}
            >
              {content.backLabel}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProjectDetails
