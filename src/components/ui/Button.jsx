import { cx, theme } from '../../content/theme'

function Button({ href, children, variant = 'primary' }) {
  const variants = {
    primary: theme.components.buttonPrimary,
    secondary: theme.components.buttonSecondary,
  }
  const className = cx(theme.components.buttonBase, variants[variant])

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className={className} type="button">
      {children}
    </button>
  )
}

export default Button
