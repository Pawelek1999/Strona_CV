import Section from '../ui/Section'
import Table from '../ui/Table'

function Experience({ content }) {
  const experienceColumns = [
    {
      key: 'period',
      label: content.columns.period,
      headerClassName: 'w-52',
      cellClassName: 'w-52 align-middle whitespace-nowrap',
    },
    {
      key: 'role',
      label: content.columns.role,
      render: (row) => (
        <div>
          <p>{row.role}</p>
          {row.responsibilities.length > 0 && (
            <ul className="mt-4 list-disc space-y-1 pl-6 text-zinc-800 dark:text-zinc-300">
              {row.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          )}
        </div>
      ),
    },
  ]

  return (
    <Section id="experience" title={content.title}>
      <Table
        columns={experienceColumns}
        getRowKey={(row) => row.period}
        rows={content.rows}
        variant="accent"
      />
    </Section>
  )
}

export default Experience
