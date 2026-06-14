import politechnikaImage from '../../assets/images/politechnika.png'
import zslImage from '../../assets/images/zsl.png'
import { cx, theme } from '../../content/theme'

function Education({ content, tone = 1 }) {
  const educationImages = {
    politechnika: politechnikaImage,
    zsl: zslImage,
  }
  const educationImageClasses = {
    politechnika: 'h-full w-full rounded-full bg-white object-contain p-1 dark:bg-cyan-50',
    zsl: 'h-full w-full rounded-full bg-white object-contain p-1 dark:bg-cyan-50',
  }
  const toneClassName = theme.sectionTones[tone] ?? theme.sectionTones[1]

  return (
    <section
      className={cx('relative overflow-hidden', theme.spacing.sectionLarge, theme.transition.colors, toneClassName)}
      id="education"
    >
      <div className={cx('absolute inset-0', theme.colors.background.sectionAmbient)} />
      <div className={cx('absolute inset-x-0 top-0 h-px', theme.colors.border.sectionTop)} />
      <div className={cx('absolute inset-x-0 bottom-0 h-px', theme.colors.border.sectionBottom)} />

      <div className={cx('relative z-[1]', theme.spacing.container)}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={theme.typography.sectionTitle}>
            {content.title}
          </h2>
          <div className={cx('mx-auto mt-3', theme.divider.sectionAccent)} />
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          {content.items.map((item) => (
            <article
              className={cx(
                'group relative overflow-hidden rounded-lg border border-cyan-900/10 bg-white px-6 pb-8 pt-10 text-center hover:-translate-y-1 hover:border-cyan-500/35 sm:px-8 dark:border-cyan-200/15 dark:bg-white/[0.055] dark:backdrop-blur-xl dark:hover:border-cyan-200/35 dark:hover:bg-white/[0.075]',
                theme.transition.interactive,
                theme.shadow.educationCard,
                theme.shadow.educationCardHover
              )}
              key={item.title}
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/45 to-transparent dark:via-cyan-200/60" />

              <div className={cx('mx-auto flex h-24 w-24 items-center justify-center rounded-full p-2 shadow-[0_0_30px_rgba(8,145,178,0.22)] ring-8 ring-cyan-950/[0.04] dark:border-cyan-200/35 dark:shadow-[0_0_32px_rgba(34,211,238,0.16)] dark:ring-white/[0.035]', theme.colors.surface.iconDark)}>
                <img
                  alt={item.imageAlt}
                  className={educationImageClasses[item.image]}
                  src={educationImages[item.image]}
                />
              </div>

              <h3 className={cx('mx-auto mt-7 max-w-sm text-2xl font-black leading-tight', theme.colors.text.primary)}>
                {item.title}
              </h3>
              <div className="mx-auto mt-5 h-px w-full max-w-xs bg-cyan-500/65 dark:bg-cyan-300/70" />

              <div className="mt-6 space-y-4 text-left">
                {item.entries.map((entry) => (
                  <dl
                    className={cx('rounded-lg border p-4', theme.colors.surface.cardMuted)}
                    key={`${entry.period}-${entry.degree}`}
                  >
                    <div>
                      <dt className={theme.typography.labelAccent}>
                        {content.labels.degree}
                      </dt>
                      <dd className="mt-1 text-base font-bold text-zinc-900 dark:text-zinc-100">{entry.degree}</dd>
                    </div>
                    <div className="mt-4">
                      <dt className={theme.typography.labelAccent}>
                        {content.labels.period}
                      </dt>
                      <dd className={cx('mt-1 text-sm font-semibold', theme.colors.text.body)}>{entry.period}</dd>
                    </div>
                    <div className="mt-4">
                      <dt className={theme.typography.labelAccent}>
                        {content.labels.institution}
                      </dt>
                      <dd className={cx('mt-1 text-sm font-semibold leading-6', theme.colors.text.body)}>
                        {entry.institution}
                      </dd>
                    </div>
                  </dl>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
