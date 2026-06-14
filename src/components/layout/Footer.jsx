import { cx, theme } from '../../content/theme'

function Footer({ content }) {
  return (
    <footer className={cx('border-t px-6 py-8 transition-colors', theme.colors.border.default)}>
      <div className={cx('flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between', theme.spacing.container, theme.typography.caption)}>
        <p>{content.copyright}</p>
        <p>{content.stack}</p>
      </div>
    </footer>
  )
}

export default Footer
