import { useEffect, useState } from 'react'
import { cx, theme as styleTheme } from '../../content/theme'

const languageOptions = [
  { label: 'PL', value: 'pl' },
  { label: 'EN', value: 'en' },
]

function LanguageSwitch({ language, onLanguageChange }) {
  return (
    <div aria-label="Language" className={styleTheme.components.headerControl}>
      {languageOptions.map((option) => {
        const isActive = language === option.value

        return (
          <button
            aria-pressed={isActive}
            className={cx(
              'rounded-full px-3 py-1 transition-colors',
              isActive ? styleTheme.components.headerControlActive : styleTheme.components.headerControlInactive
            )}
            key={option.value}
            onClick={() => onLanguageChange(option.value)}
            type="button"
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

function ThemeSwitch({ isDark, onThemeToggle }) {
  return (
    <button
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={styleTheme.components.themeToggle}
      onClick={onThemeToggle}
      type="button"
    >
      <span
        className={cx(
          styleTheme.components.themeToggleThumb,
          isDark ? styleTheme.components.themeToggleThumbDark : styleTheme.components.themeToggleThumbLight
        )}
      >
        {isDark ? 'D' : 'L'}
      </span>
    </button>
  )
}

function Header({ forceSolid = false, homeHref = '#home', language, navItems, onLanguageChange, onThemeToggle, projectLinks = [], theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [isProjectsPinned, setIsProjectsPinned] = useState(false)
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isDark = theme === 'dark'
  const projectNavItem = navItems.find((item) => item.href.includes('projects'))
  const projectMenuId = 'desktop-project-navigation'
  const projectLinkItems = projectLinks.map((project) => ({
    href: `/projects/${project.slug}`,
    label: project.title,
  }))
  const toggleMobileMenu = () => {
    if (isMenuOpen) {
      setIsMobileProjectsOpen(false)
    }

    setIsMenuOpen((currentValue) => !currentValue)
  }

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 24)
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })

    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return (
    <header className={styleTheme.components.headerShell}>
      <div
        className={cx(
          styleTheme.components.headerBar,
          isScrolled || forceSolid ? styleTheme.components.headerBarScrolled : styleTheme.components.headerBarResting
        )}
      >
        <div className="flex w-full items-center justify-between gap-3 lg:w-auto">
          <a className={styleTheme.components.headerBrand} href={homeHref}>
            Jakub Pawełek
          </a>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitch language={language} onLanguageChange={onLanguageChange} />
            <ThemeSwitch isDark={isDark} onThemeToggle={onThemeToggle} />
            <button
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className={styleTheme.components.headerMobileToggle}
              onClick={toggleMobileMenu}
              type="button"
            >
              <span aria-hidden="true" className="grid gap-1">
                <span className="block h-0.5 w-5 rounded-full bg-current" />
                <span className="block h-0.5 w-5 rounded-full bg-current" />
                <span className="block h-0.5 w-5 rounded-full bg-current" />
              </span>
            </button>
          </div>
        </div>

        <nav aria-label="Primary navigation" className={styleTheme.components.headerNav}>
          {navItems.map((item) => {
            const isProjectsItem = item.href.includes('projects') && projectLinkItems.length > 0

            if (!isProjectsItem) {
              return (
                <a className={styleTheme.components.headerNavLink} href={item.href} key={item.href}>
                  {item.label}
                </a>
              )
            }

            return (
              <div
                className="relative"
                key={item.href}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setIsProjectsOpen(false)
                    setIsProjectsPinned(false)
                  }
                }}
                onMouseEnter={() => setIsProjectsOpen(true)}
                onMouseLeave={() => {
                  if (!isProjectsPinned) {
                    setIsProjectsOpen(false)
                  }
                }}
              >
                <button
                  aria-controls={projectMenuId}
                  aria-expanded={isProjectsOpen}
                  className={cx(styleTheme.components.headerNavLink, 'inline-flex items-center gap-1 focus:outline-none focus:text-white')}
                  onClick={() => {
                    setIsProjectsPinned((currentValue) => !currentValue)
                    setIsProjectsOpen((currentValue) => !currentValue || !isProjectsPinned)
                  }}
                  type="button"
                >
                  {item.label}
                  <span aria-hidden="true" className={cx('text-xs transition-transform', isProjectsOpen && 'rotate-180')}>
                    ˅
                  </span>
                </button>

                <div
                  className={cx(
                    'absolute left-1/2 top-full z-30 w-64 -translate-x-1/2 pt-3 transition',
                    isProjectsOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
                  )}
                  id={projectMenuId}
                >
                  <div className="rounded-2xl border border-white/10 bg-[#071036]/95 p-2 shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                    {projectLinkItems.map((project) => (
                      <a
                        className="block rounded-xl px-3 py-2 text-sm font-semibold text-zinc-200 transition-colors hover:bg-white/10 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        href={project.href}
                        key={project.href}
                        onClick={() => {
                          setIsProjectsOpen(false)
                          setIsProjectsPinned(false)
                        }}
                      >
                        {project.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitch language={language} onLanguageChange={onLanguageChange} />
          <ThemeSwitch isDark={isDark} onThemeToggle={onThemeToggle} />
        </div>

        <nav
          aria-label="Mobile navigation"
          className={cx(styleTheme.components.headerMobilePanel, isMenuOpen ? 'grid' : 'hidden')}
          id="mobile-navigation"
        >
          {navItems.map((item) => {
            const isProjectsItem = item.href.includes('projects') && projectLinkItems.length > 0

            return (
              <div className="grid gap-2" key={item.href}>
                {isProjectsItem ? (
                  <>
                    <button
                      aria-controls="mobile-project-navigation"
                      aria-expanded={isMobileProjectsOpen}
                      className={cx(styleTheme.components.headerMobileLink, 'flex w-full items-center justify-between text-left')}
                      onClick={() => setIsMobileProjectsOpen((currentValue) => !currentValue)}
                      type="button"
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true" className={cx('text-xs transition-transform', isMobileProjectsOpen && 'rotate-180')}>
                        ˅
                      </span>
                    </button>
                    <div
                      aria-label={projectNavItem?.label}
                      className={cx('grid gap-1 pl-3', isMobileProjectsOpen ? 'grid' : 'hidden')}
                      id="mobile-project-navigation"
                    >
                      <a
                        className="rounded-xl px-3 py-2 text-xs font-semibold text-zinc-300 transition-colors hover:bg-white/10 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                        href={item.href}
                        onClick={() => {
                          setIsMenuOpen(false)
                          setIsMobileProjectsOpen(false)
                        }}
                      >
                        {item.label}
                      </a>
                      {projectLinkItems.map((project) => (
                        <a
                          className="rounded-xl px-3 py-2 text-xs font-semibold text-zinc-300 transition-colors hover:bg-white/10 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                          href={project.href}
                          key={project.href}
                          onClick={() => {
                            setIsMenuOpen(false)
                            setIsMobileProjectsOpen(false)
                          }}
                        >
                          {project.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    className={styleTheme.components.headerMobileLink}
                    href={item.href}
                    onClick={() => {
                      setIsMenuOpen(false)
                      setIsMobileProjectsOpen(false)
                    }}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Header
