function Card({ title, subtitle, children }) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
      <div>
        <h3 className="text-lg font-semibold text-zinc-950">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-zinc-500">{subtitle}</p>}
      </div>
      {children && <div className="mt-4">{children}</div>}
    </article>
  )
}

export default Card
