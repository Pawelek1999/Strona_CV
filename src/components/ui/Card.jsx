function Card({ title, subtitle, children }) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-colors lg:p-8 dark:border-zinc-800 dark:bg-zinc-900">
      <div>
        <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{subtitle}</p>}
      </div>
      {children && <div className="mt-4">{children}</div>}
    </article>
  )
}

export default Card
