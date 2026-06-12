import emailIcon from '../../assets/images/email.png'
import githubIcon from '../../assets/images/github.png'
import linkedinIcon from '../../assets/images/linkedin.png'
import phoneIcon from '../../assets/images/phone.png'
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

function Contact({ content }) {
  const links = contactLinks.map((link) => ({
    ...link,
    ...content.links[link.key],
  }))

  return (
    <Section id="contact" eyebrow={content.eyebrow} title={content.title}>
      <div className="grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_1.3fr] xl:items-stretch">
        <div className="rounded-lg border border-emerald-800 bg-white p-7 shadow-[0_0_8px_rgba(6,78,59,0.25)] transition-colors dark:border-emerald-600 dark:bg-zinc-900">
          <p className="text-lg font-semibold text-slate-900 dark:text-white">{content.heading}</p>
          <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">{content.text}</p>

          <div className="mt-6 grid gap-3 text-sm text-zinc-700 dark:text-zinc-300">
            <div className="flex items-center gap-3">
              <img alt="" className="size-5 object-contain" src={emailIcon} />
              <span>{content.emailNote}</span>
            </div>
            <div className="flex items-center gap-3">
              <img alt="" className="size-5 object-contain" src={phoneIcon} />
              <span>{content.phoneNote}</span>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {links.map((link) => (
            <a
              className="group rounded-lg border border-zinc-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-emerald-800 hover:shadow-[0_0_12px_rgba(6,78,59,0.2)] dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-500"
              href={link.href}
              key={link.key}
              rel="noreferrer"
              target="_blank"
            >
              <div className="flex size-14 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-zinc-950">
                <img alt="" className="h-full w-full object-contain" src={link.icon} />
              </div>
              <p className="mt-5 text-lg font-semibold text-zinc-950 dark:text-zinc-50">{link.label}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Contact
