import { useEffect, useState } from 'react'

const languageOptions = [
  { label: 'PL', value: 'pl' },
  { label: 'EN', value: 'en' },
]

function Header({ language, navItems, onLanguageChange, onThemeToggle, theme }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const isDark = theme === 'dark'

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 24)
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })

    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return (
    <header
      className="fixed left-0 right-0 top-0 z-20 px-4 transition-all duration-500 sm:px-6"
    >
      <div
        className={`mx-auto mt-3 flex max-w-[90rem] flex-col gap-4 rounded-3xl border px-5 py-3 backdrop-blur-xl transition-all duration-500 sm:flex-row sm:items-center sm:justify-between lg:rounded-full xl:px-7 ${
          isScrolled
            ? 'border-cyan-300/20 bg-[#071036]/92 shadow-[0_16px_45px_rgba(0,0,0,0.35)]'
            : 'border-white/10 bg-[#071036]/45 shadow-none'
        }`}
      >
        <a
          className="text-sm font-bold uppercase tracking-wide text-zinc-50 transition-colors hover:text-cyan-200"
          href="#home"
        >
          Jakub Pawełek
        </a>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center xl:gap-8">
          <nav
            aria-label="Primary navigation"
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-zinc-300 xl:gap-x-7"
          >
            {navItems.map((item) => (
              <a className="transition-colors hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div
              aria-label="Language"
              className="flex rounded-full border border-white/10 bg-white/5 p-1 text-xs font-semibold"
            >
              {languageOptions.map((option) => {
                const isActive = language === option.value

                return (
                  <button
                    aria-pressed={isActive}
                    className={`rounded-full px-3 py-1 transition-colors ${
                      isActive ? 'bg-cyan-300 text-[#050a2d]' : 'text-zinc-300 hover:text-white'
                    }`}
                    key={option.value}
                    onClick={() => onLanguageChange(option.value)}
                    type="button"
                  >
                    {option.label}
                  </button>
                )
              })}
            </div>

            <button
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex h-9 w-16 items-center rounded-full border border-white/10 bg-white/5 p-1 transition-colors hover:border-cyan-300/70 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              onClick={onThemeToggle}
              type="button"
            >
              <span
                className={`grid size-7 place-items-center rounded-full text-xs font-bold shadow-sm transition-transform ${
                  isDark ? 'translate-x-7 bg-cyan-300 text-[#050a2d]' : 'translate-x-0 bg-white text-[#050a2d]'
                }`}
              >
                {isDark ? 'D' : 'L'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
