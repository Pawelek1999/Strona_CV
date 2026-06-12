function Footer({ content }) {
  return (
    <footer className="border-t border-zinc-200 px-6 py-8 transition-colors dark:border-zinc-800">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-2 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:text-zinc-400">
        <p>{content.copyright}</p>
        <p>{content.stack}</p>
      </div>
    </footer>
  )
}

export default Footer
