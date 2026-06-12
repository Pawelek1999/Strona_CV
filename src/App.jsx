import { useEffect, useMemo, useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Experience from './components/sections/Experience'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import { siteContent } from './content/siteContent'
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

function App() {
  const [language, setLanguage] = useState('pl')
  const [theme, setTheme] = useState(getInitialTheme)
  const content = useMemo(() => siteContent[language], [language])
  const isDark = theme === 'dark'

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
        <Header
          language={language}
          navItems={content.nav}
          onLanguageChange={setLanguage}
          onThemeToggle={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
          theme={theme}
        />
        <main>
          <Hero content={content.hero} />
          <About content={content.about} />
          <Experience content={content.experience} />
          <Skills content={content.skills} />
          <Projects content={content.projects} />
          <Contact content={content.contact} />
        </main>
        <Footer content={content.footer} />
      </div>
    </div>
  )
}

export default App
