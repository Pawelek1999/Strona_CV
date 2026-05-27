function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        {(eyebrow || title) && (
          <div className="mb-8 max-w-2xl">
            {eyebrow && (
              <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-2 text-3xl font-bold text-zinc-950 sm:text-4xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
