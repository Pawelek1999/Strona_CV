export const cx = (...classes) => classes.filter(Boolean).join(' ')

// Central style tokens for reusable Tailwind classes.
// Example:
// import { theme, cx } from '../content/theme'
// <h2 className={theme.typography.heading2}>Title</h2>
export const theme = {
  colors: {
    background: {
      page: 'bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100',
      sectionPrimary: 'bg-white text-zinc-900 dark:bg-[#07112f] dark:text-zinc-100',
      sectionAlternate: 'bg-zinc-100 text-zinc-900 dark:bg-[#18181b] dark:text-zinc-100',
      hero: 'bg-[#050a2d] text-white',
      sectionAmbient:
        'bg-[radial-gradient(circle_at_14%_18%,rgba(34,211,238,0.08),transparent_34%),radial-gradient(circle_at_86%_12%,rgba(59,130,246,0.07),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.18),transparent_40%)] dark:bg-[radial-gradient(circle_at_14%_18%,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_86%_12%,rgba(59,130,246,0.12),transparent_32%),linear-gradient(180deg,rgba(15,23,42,0.22),transparent_44%)]',
    },
    surface: {
      card: 'border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900',
      cardMuted: 'border-zinc-200 bg-zinc-50/80 dark:border-white/10 dark:bg-white/[0.045]',
      glass: 'border-cyan-200/15 bg-white/[0.055]',
      iconDark: 'border-cyan-700/20 bg-cyan-50 dark:bg-[#0b173c]',
    },
    text: {
      primary: 'text-zinc-950 dark:text-zinc-50',
      body: 'text-zinc-700 dark:text-zinc-300',
    muted: 'text-zinc-500 dark:text-zinc-400',
    inverse: 'text-zinc-50',
    accent: 'text-cyan-700 dark:text-cyan-200/80',
      accentStrong: 'text-cyan-700 dark:text-cyan-300',
    },
    border: {
      default: 'border-zinc-200 dark:border-zinc-800',
      muted: 'border-zinc-300 dark:border-zinc-700',
      accent: 'border-cyan-500/35 dark:border-cyan-200/35',
      sectionTop: 'bg-cyan-900/10 dark:bg-cyan-300/20',
      sectionBottom: 'bg-zinc-900/10 dark:bg-white/10',
    },
    brand: {
      primary: 'cyan',
      success: 'emerald',
      error: 'red',
    },
  },
  typography: {
    fontFamily: {
      sans: 'font-sans',
    },
    heading1: 'text-5xl font-black tracking-tight sm:text-7xl',
    heading2: 'text-3xl font-black tracking-[0.08em] text-cyan-700 sm:text-4xl dark:text-cyan-300',
    heading3: 'text-lg font-semibold text-zinc-950 dark:text-zinc-50',
    sectionTitle: 'text-3xl font-black tracking-[0.08em] text-cyan-700 sm:text-4xl dark:text-cyan-300',
    cvSectionTitle: 'text-3xl font-black tracking-[0.08em] text-cyan-700 sm:text-4xl dark:text-cyan-300',
    cvRoleTitle: 'text-xl font-black leading-tight text-zinc-950 dark:text-zinc-50',
    cvMeta: 'text-sm font-semibold leading-6 text-cyan-700 dark:text-cyan-300',
    subtitle: 'text-sm font-medium leading-7 text-zinc-700 sm:text-base dark:text-zinc-300',
    body: 'leading-7 text-zinc-700 dark:text-zinc-300',
    caption: 'text-sm text-zinc-500 dark:text-zinc-400',
    eyebrow: 'text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400',
    eyebrowAccent: 'text-xs font-bold uppercase tracking-[0.32em] text-cyan-700 dark:text-cyan-200/80',
    labelAccent: 'text-xs font-bold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-200/80',
  },
  radius: {
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    xl: 'rounded-2xl',
    pill: 'rounded-full',
  },
  spacing: {
    section: 'px-6 py-16 sm:px-8 sm:py-20 xl:px-10',
    sectionLarge: 'px-6 py-20 sm:px-8 sm:py-24 xl:px-10',
    container: 'mx-auto max-w-[90rem]',
  },
  shadow: {
    card: 'shadow-sm',
    cardHover: 'hover:shadow-[0_0_18px_rgba(34,211,238,0.16)]',
    educationCard:
      'shadow-[0_24px_70px_rgba(15,23,42,0.11)] dark:shadow-[0_24px_70px_rgba(0,0,0,0.22)]',
    educationCardHover: 'hover:shadow-[0_26px_80px_rgba(8,47,73,0.16)]',
    accent: 'shadow-[0_0_8px_rgba(6,78,59,0.35)]',
  },
  divider: {
    sectionAccent: 'h-0.5 w-14 rounded-full bg-cyan-600 dark:bg-cyan-300',
  },
  transition: {
    colors: 'transition-colors duration-500',
    interactive: 'transition duration-300',
  },
  sectionTones: {
    1: 'bg-white text-zinc-900 dark:bg-[#07112f] dark:text-zinc-100',
    2: 'bg-zinc-100 text-zinc-900 dark:bg-[#18181b] dark:text-zinc-100',
  },
  components: {
    appShell: 'min-h-screen bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100',
    card: 'rounded-lg border border-zinc-200 bg-white shadow-sm transition-colors dark:border-zinc-800 dark:bg-zinc-900',
    buttonBase: 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
    buttonPrimary: 'bg-zinc-900 text-white hover:bg-zinc-700',
    buttonSecondary: 'border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100',
    headerShell: 'fixed left-0 right-0 top-0 z-20 px-4 transition-all duration-500 sm:px-6',
    headerBar:
      'mx-auto mt-3 flex max-w-[90rem] flex-col gap-3 rounded-3xl border px-5 py-3 backdrop-blur-xl transition-all duration-500 lg:flex-row lg:items-center lg:justify-between lg:rounded-full xl:px-7',
    headerBarScrolled: 'border-cyan-300/20 bg-[#071036]/92 shadow-[0_16px_45px_rgba(0,0,0,0.35)]',
    headerBarResting: 'border-white/10 bg-[#071036]/45 shadow-none',
    headerBrand: 'text-sm font-bold uppercase tracking-wide text-zinc-50 transition-colors hover:text-cyan-200',
    headerNav: 'hidden items-center gap-x-5 text-sm font-medium text-zinc-300 lg:flex xl:gap-x-7',
    headerNavLink: 'transition-colors hover:text-white',
    headerMobileToggle:
      'inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-100 transition-colors hover:border-cyan-300/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300 lg:hidden',
    headerMobilePanel:
      'grid gap-2 border-t border-white/10 pt-3 text-sm font-semibold text-zinc-200 lg:hidden',
    headerMobileLink:
      'rounded-xl px-3 py-2 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300',
    headerControl: 'flex rounded-full border border-white/10 bg-white/5 p-1 text-xs font-semibold',
    headerControlActive: 'bg-cyan-300 text-[#050a2d]',
    headerControlInactive: 'text-zinc-300 hover:text-white',
    themeToggle:
      'inline-flex h-9 w-16 items-center rounded-full border border-white/10 bg-white/5 p-1 transition-colors hover:border-cyan-300/70 focus:outline-none focus:ring-2 focus:ring-cyan-300',
    themeToggleThumb: 'grid size-7 place-items-center rounded-full text-xs font-bold shadow-sm transition-transform',
    themeToggleThumbDark: 'translate-x-7 bg-cyan-300 text-[#050a2d]',
    themeToggleThumbLight: 'translate-x-0 bg-white text-[#050a2d]',
    skillsCategoryCard:
      'rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-500 hover:shadow-[0_0_18px_rgba(34,211,238,0.16)] dark:border-zinc-800 dark:bg-zinc-900',
    skillsCategoryHeader:
      'border-b border-cyan-500/30 pb-4 text-lg font-black tracking-[0.06em] text-cyan-700 dark:border-cyan-300/25 dark:text-cyan-300',
    skillsCategoryList: 'mt-5 grid gap-3',
    skillsCategoryItem:
      'rounded-md border border-zinc-200 bg-zinc-50/80 px-3 py-2 text-sm font-semibold text-zinc-700 dark:border-white/10 dark:bg-white/[0.045] dark:text-zinc-200',
    tag: 'rounded-md bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700',
  },
}
