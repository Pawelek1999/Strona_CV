import { cx, theme } from '../../content/theme'

function Card({ title, subtitle, children }) {
  return (
    <article className={cx(theme.components.card, 'p-6 lg:p-8')}>
      <div>
        <h3 className={theme.typography.heading3}>{title}</h3>
        {subtitle && <p className={cx('mt-1', theme.typography.caption)}>{subtitle}</p>}
      </div>
      {children && <div className="mt-4">{children}</div>}
    </article>
  )
}

export default Card
