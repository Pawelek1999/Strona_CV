import Section from '../ui/Section'

function Skills({ content }) {
  return (
    <Section id="skills" eyebrow={content.eyebrow} title={content.title}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
        {content.items.map((skill) => (
          <div
            className="rounded-lg border border-zinc-200 bg-white p-6 text-sm font-semibold text-zinc-800 shadow-sm transition hover:-translate-y-1 hover:border-cyan-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
            key={skill}
          >
            <span className="mb-4 block h-1 w-10 rounded-full bg-cyan-400" />
            {skill}
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Skills
