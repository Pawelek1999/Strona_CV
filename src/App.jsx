import { useEffect, useMemo, useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Education from './components/sections/Education'
import Experience from './components/sections/Experience'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import ProjectDetails from './pages/ProjectDetails'
import { theme as styleTheme } from './content/theme'
import { siteContent } from './content/siteContent'
import { getProjectBySlug, getProjects } from './content/projects'
import { getRoutePath, getSectionHref, stripBasePath } from './router/routes'
import './index.css'

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const savedTheme = window.localStorage.getItem('theme')

  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const getInitialPathname = () => {
  if (typeof window === 'undefined') {
    return '/'
  }

  const redirectPath = window.sessionStorage.getItem('spa-redirect-path')

  if (!redirectPath) {
    return window.location.pathname
  }

  window.sessionStorage.removeItem('spa-redirect-path')
  window.history.replaceState(null, '', redirectPath)

  return window.location.pathname
}

function App() {
  const [language, setLanguage] = useState('pl')
  const [theme, setTheme] = useState(getInitialTheme)
  const [pathname, setPathname] = useState(getInitialPathname)
  const content = useMemo(() => siteContent[language], [language])
  const projectItems = useMemo(() => getProjects(language), [language])
  const isDark = theme === 'dark'
  const routePath = stripBasePath(pathname)
  const projectSlug = routePath.match(/^\/projects\/([^/]+)\/?$/)?.[1]
  const project = projectSlug ? getProjectBySlug(projectSlug, language) : null
  const navItems = projectSlug
    ? content.nav.map((item) => ({ ...item, href: item.href === '#home' ? getRoutePath('/') : getSectionHref(item.href) }))
    : content.nav

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const updatePathname = () => {
      setPathname(window.location.pathname)
    }

    window.addEventListener('popstate', updatePathname)

    return () => window.removeEventListener('popstate', updatePathname)
  }, [])

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className={styleTheme.components.appShell}>
        <Header
          forceSolid={Boolean(projectSlug)}
          homeHref={projectSlug ? getRoutePath('/') : '#home'}
          language={language}
          navItems={navItems}
          onLanguageChange={setLanguage}
          onThemeToggle={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
          projectLinks={projectItems}
          theme={theme}
        />
        {projectSlug ? (
          <ProjectDetails content={content.projects} project={project} />
        ) : (
          <main>
            <Hero content={content.hero} />
            <About content={content.about} tone={2} />
            <Experience content={content.experience} tone={1} />
            <Education content={content.education} tone={2} />
            <Skills content={content.skills} tone={1} />
            <Projects content={content.projects} items={projectItems} tone={2} />
            <Contact content={content.contact} tone={1} />
          </main>
        )}
        <Footer content={content.footer} />
      </div>
    </div>
  )
}

export default App
