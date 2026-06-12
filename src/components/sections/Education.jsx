import Section from '../ui/Section'
import Table from '../ui/Table'

function Education({ content }) {
  const educationColumns = [
    { key: 'period', label: content.columns.period },
    { key: 'degree', label: content.columns.degree },
    { key: 'institution', label: content.columns.institution },
  ]

  return (
    <Section id="education" title={content.title}>
      <Table
        columns={educationColumns}
        getRowKey={(row) => row.period}
        rows={content.rows}
        variant="accent"
      />
    </Section>
  )
}

export default Education
