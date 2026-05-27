const navItems = [
  { label: 'O mnie', href: '#about' },
  { label: 'Doswiadczenie', href: '#experience' },
  { label: 'Projekty', href: '#projects' },
  { label: 'Kontakt', href: '#contact' },
]

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 px-6 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between py-4">
        <a className="text-sm font-bold uppercase tracking-wide text-zinc-950" href="#">
          Twoje CV
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 sm:flex">
          {navItems.map((item) => (
            <a className="transition-colors hover:text-zinc-950" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
