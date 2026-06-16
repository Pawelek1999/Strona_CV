import { cx, theme } from '../../content/theme'
import Section from '../ui/Section'

const presentLabels = {
  en: 'present',
  pl: 'obecnie',
}

function getLanguage(content) {
  return content.columns?.period === 'Okres' ? 'pl' : 'en'
}

function parseMonth(value, language) {
  const normalizedValue = value.trim().toLowerCase()

  if (normalizedValue === presentLabels[language]) {
    const now = new Date()

    return { year: now.getFullYear(), month: now.getMonth() + 1 }
  }

  const [year, month] = normalizedValue.split('-').map(Number)

  if (!year || !month) {
    return null
  }

  return { year, month }
}

function getMonthsBetween(start, end) {
  return (end.year - start.year) * 12 + end.month - start.month
}

function formatDuration(totalMonths, language) {
  if (totalMonths <= 0) {
    return ''
  }

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  if (language === 'en') {
    const parts = []

    if (years) {
      parts.push(`${years} ${years === 1 ? 'year' : 'years'}`)
    }

    if (months) {
      parts.push(`${months} ${months === 1 ? 'month' : 'months'}`)
    }

    return parts.join(' ')
  }

  const parts = []

  if (years) {
    parts.push(`${years} ${years === 1 ? 'rok' : years < 5 ? 'lata' : 'lat'}`)
  }

  if (months) {
    parts.push(`${months} ${months === 1 ? 'mies.' : 'mies.'}`)
  }

  return parts.join(' ')
}

function getDuration(period, language) {
  const [startValue, endValue] = period.split(' - ')

  if (!startValue || !endValue) {
    return ''
  }

  const start = parseMonth(startValue, language)
  const end = parseMonth(endValue, language)

  if (!start || !end) {
    return ''
  }

  return formatDuration(getMonthsBetween(start, end), language)
}

function parseRole(role) {
  const [title, ...companyParts] = role.split(' - ')

  return {
    company: companyParts.join(' - '),
    title,
  }
}

function Experience({ content, tone }) {
  const language = getLanguage(content)

  return (
    <Section id="experience" title={content.title} tone={tone}>
      <div className="mx-auto max-w-4xl">
        <div className="space-y-12">
          {content.rows.map((row) => {
            const { company, title } = parseRole(row.role)
            const duration = getDuration(row.period, language)
            const meta = [company, row.period, duration].filter(Boolean).join(' • ')

            return (
              <article key={`${row.period}-${row.role}`}>
                <h3 className={theme.typography.cvRoleTitle}>{title}</h3>
                {meta && <p className={cx('mt-1', theme.typography.cvMeta)}>{meta}</p>}

                {row.responsibilities.length > 0 && (
                  <ul className={cx('mt-4 list-disc space-y-2.5 pl-5 text-base leading-8 lg:text-lg lg:leading-9', theme.colors.text.body)}>
                    {row.responsibilities.map((responsibility) => (
                      <li className="pl-1" key={responsibility}>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default Experience
