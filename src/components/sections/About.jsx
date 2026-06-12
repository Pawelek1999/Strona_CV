import Card from '../ui/Card'
import Section from '../ui/Section'
import portrait from '../../assets/images/Portret.png'

function About({ content }) {
  return (
    <Section id="about" eyebrow={content.eyebrow} title={content.title}>
      <Card title={content.cardTitle}>
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_22rem] xl:items-start">
          <img
            alt={content.imageAlt}
            className="mx-auto aspect-[4/5] w-full max-w-64 rounded-lg border border-zinc-200 object-cover object-center shadow-sm xl:col-start-2 xl:row-start-1 xl:max-w-none dark:border-zinc-700"
            src={portrait}
          />

          <p className="max-w-4xl whitespace-pre-line leading-7 text-zinc-700 xl:col-start-1 xl:row-start-1 dark:text-zinc-300">
            {content.text}
          </p>
        </div>
      </Card>
    </Section>
  )
}

export default About
