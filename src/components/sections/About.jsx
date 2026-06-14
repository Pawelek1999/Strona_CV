import Card from '../ui/Card'
import Section from '../ui/Section'
import portrait from '../../assets/images/Portret.png'
import { cx, theme } from '../../content/theme'

function About({ content, tone }) {
  return (
    <Section id="about" eyebrow={content.eyebrow} title={content.title} tone={tone}>
      <Card title={content.cardTitle}>
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_22rem] xl:items-start">
          <img
            alt={content.imageAlt}
            className="mx-auto aspect-[4/5] w-full max-w-64 rounded-lg border border-zinc-200 object-cover object-center shadow-sm xl:col-start-2 xl:row-start-1 xl:max-w-none dark:border-zinc-700"
            src={portrait}
          />

          <p className={cx('max-w-4xl whitespace-pre-line xl:col-start-1 xl:row-start-1', theme.typography.body)}>
            {content.text}
          </p>
        </div>
      </Card>
    </Section>
  )
}

export default About
