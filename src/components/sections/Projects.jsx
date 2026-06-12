import Section from '../ui/Section'

function Projects({ content }) {
  return (
    <Section id="projects" eyebrow={content.eyebrow} title={content.title}>
      <div className="grid gap-6 md:grid-cols-3">
        {content.items.map((project) => (
          <article
            className="rounded-lg border border-zinc-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-500 hover:shadow-[0_0_18px_rgba(34,211,238,0.16)] dark:border-zinc-800 dark:bg-zinc-900"
            key={project.title}
          >
            <div className="mb-5 h-24 rounded-lg border border-cyan-400/20 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.22),transparent_38%),linear-gradient(135deg,rgba(8,13,42,0.92),rgba(15,23,42,0.98))]" />
            <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{project.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Projects
