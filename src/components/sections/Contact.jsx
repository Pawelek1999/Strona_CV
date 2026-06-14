import emailIcon from '../../assets/images/email.png'
import githubIcon from '../../assets/images/github.png'
import linkedinIcon from '../../assets/images/linkedin.png'
import { cx, theme } from '../../content/theme'
import Section from '../ui/Section'

const contactLinks = [
  {
    key: 'github',
    href: 'https://github.com/Pawelek1999',
    icon: githubIcon,
  },
  {
    key: 'linkedin',
    href: 'https://www.linkedin.com/in/jakub-pawe%C5%82ek-b56966242/',
    icon: linkedinIcon,
  },
]

function Contact({ content, tone }) {
  const links = contactLinks.map((link) => ({
    ...link,
    ...content.links[link.key],
  }))

  return (
    <Section id="contact" eyebrow={content.eyebrow} title={content.title} tone={tone}>
      <div className="grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_1.3fr] xl:items-stretch">
        <div className={cx(theme.components.card, 'p-7 transition hover:-translate-y-1 hover:border-cyan-500', theme.shadow.cardHover)}>
          <p className={theme.typography.heading3}>{content.heading}</p>
          <p className={cx('mt-4', theme.typography.body)}>{content.text}</p>

          <div className={cx('mt-6 grid gap-3 text-sm', theme.colors.text.body)}>
            <div className="flex items-center gap-3">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-zinc-200 bg-zinc-50 p-1.5 dark:border-zinc-700 dark:bg-white">
                <img alt="" className="h-full w-full object-contain" src={emailIcon} />
              </span>
              <a className="font-semibold transition-colors hover:text-cyan-700 dark:hover:text-cyan-300" href={`mailto:${content.emailNote}`}>
                {content.emailNote}
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {links.map((link) => (
            <a
              className={cx(theme.components.card, theme.shadow.cardHover, 'group p-7 transition hover:-translate-y-1 hover:border-cyan-500')}
              href={link.href}
              key={link.key}
              rel="noreferrer"
              target="_blank"
            >
              <div className="flex size-14 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-white">
                <img alt="" className="h-full w-full object-contain" src={link.icon} />
              </div>
              <p className={cx('mt-5', theme.typography.heading3)}>{link.label}</p>
              <p className={cx('mt-2 text-sm leading-6', theme.colors.text.muted)}>{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Contact
