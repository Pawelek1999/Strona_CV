function Button({ href, children, variant = 'primary' }) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors'

  const variants = {
    primary: 'bg-zinc-900 text-white hover:bg-zinc-700',
    secondary: 'border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100',
  }

  if (href) {
    return (
      <a className={`${baseClasses} ${variants[variant]}`} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className={`${baseClasses} ${variants[variant]}`} type="button">
      {children}
    </button>
  )
}

export default Button
