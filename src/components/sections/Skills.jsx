import { cx, theme } from '../../content/theme'
import Section from '../ui/Section'

function Skills({ content, tone }) {
  return (
    <Section id="skills" title={content.title} tone={tone}>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {content.categories.map((category) => (
          <article className={theme.components.skillsCategoryCard} key={category.title}>
            <h3 className={theme.components.skillsCategoryHeader}>{category.title}</h3>
            <ul className={theme.components.skillsCategoryList}>
              {category.items.map((skill) => (
                <li className={cx(theme.components.skillsCategoryItem, 'list-none')} key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Skills
