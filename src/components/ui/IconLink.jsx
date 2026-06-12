function IconLink({ href, icon, label }) {
  return (
    <a
      aria-label={label}
      className="inline-flex size-16 items-center justify-center rounded-lg border border-zinc-300 bg-white p-3 transition-transform hover:-translate-y-1 hover:border-emerald-800 hover:shadow-[0_0_10px_rgba(6,78,59,0.25)] dark:border-zinc-700 dark:bg-zinc-900"
      href={href}
      rel="noreferrer"
      target="_blank"
      title={label}
    >
      <img alt="" className="h-full w-full object-contain" src={icon} />
    </a>
  )
}

export default IconLink
