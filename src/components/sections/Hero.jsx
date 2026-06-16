import aboutMeImage from '../../assets/images/About_me.png'

function HeroSidePanel({ panel, className = '' }) {
  return (
    <aside
      aria-label={panel.title}
      className={`hero-side-panel hero-side-panel-${panel.side} rounded-2xl border border-cyan-300/15 bg-white/[0.055] p-4 text-left shadow-[0_0_36px_rgba(34,211,238,0.08)] backdrop-blur-xl 2xl:p-5 ${className}`}
    >
      <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">
        {panel.title}
      </h2>
      <ul className="mt-5 space-y-3 text-sm font-semibold text-zinc-100 xl:text-base">
        {panel.items.map((item) => (
          <li
            className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.045] px-3 py-2.5"
            key={item.label}
          >
            <span aria-hidden="true" className="text-base leading-none">
              {item.icon}
            </span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

function Hero({ content }) {
  return (
    <section
      className="relative flex min-h-screen overflow-hidden bg-[#050a2d] px-6 pb-10 pt-44 text-white sm:pb-12 sm:pt-32 lg:pt-24"
      id="home"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.16),transparent_34%),linear-gradient(180deg,rgba(15,23,42,0)_0%,rgba(8,13,42,0.92)_100%)]" />
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-cyan-300/30" />

      <div className="relative z-[1] mx-auto flex w-full max-w-[90rem] flex-col items-center justify-center text-center">
        <h1 className="max-w-full whitespace-normal text-[clamp(2.25rem,11.5vw,4.5rem)] font-black leading-[0.95] tracking-tight text-zinc-50 sm:whitespace-nowrap sm:text-[clamp(2.65rem,10vw,4.5rem)] lg:text-[clamp(4.75rem,6.3vw,7rem)] xl:text-[clamp(5.25rem,6.7vw,7.75rem)]">
          <span>{content.prefix} </span>
          <span className="relative inline-block whitespace-nowrap px-1 py-2 sm:px-6">
            {content.highlight}
            <svg
              aria-hidden="true"
              className="hero-name-circle pointer-events-none absolute -inset-x-4 -inset-y-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] overflow-visible text-cyan-300 sm:-inset-x-10 sm:-inset-y-7 sm:h-[calc(100%+5.5rem)] sm:w-[calc(100%+6rem)]"
              preserveAspectRatio="none"
              viewBox="0 0 420 170"
            >
              <path
                d="M34 94C44 31 137 13 231 20C344 29 407 72 382 113C351 164 197 159 100 136C43 122 19 103 34 94Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
              />
            </svg>
          </span>
        </h1>

        <div className="mt-5 grid w-full gap-6 text-left md:grid-cols-2 lg:mt-6 xl:grid-cols-[14rem_minmax(0,1fr)_14rem] xl:items-center xl:gap-8 2xl:grid-cols-[15rem_minmax(0,1fr)_15rem] 2xl:gap-10">
          <div className="grid w-full max-w-[66rem] justify-self-center gap-7 md:col-span-2 md:grid-cols-[0.86fr_1.14fr] md:items-center xl:col-span-1 xl:col-start-2 xl:row-start-1 xl:gap-8">
            <div className="relative flex justify-center md:justify-end">
              <div className="absolute bottom-8 h-52 w-80 rounded-[50%] bg-cyan-400/10 blur-2xl sm:h-64 sm:w-[26rem] xl:h-64 xl:w-[28rem]" />
              <div className="absolute bottom-5 h-16 w-64 rounded-[50%] bg-black/35 blur-xl xl:w-80" />
              <img
                alt={content.imageAlt}
                className="relative z-[1] block w-72 max-w-none object-contain drop-shadow-[0_28px_55px_rgba(34,211,238,0.22)] sm:w-[22rem] lg:w-[25rem] xl:w-[25.5rem] 2xl:w-[28rem]"
                src={aboutMeImage}
              />
            </div>

            <div className="mx-auto max-w-[38rem] overflow-hidden px-1 text-center md:mx-0 md:text-left">
              <p className="text-xl font-black leading-tight text-zinc-50 sm:text-3xl lg:text-[2.35rem]">
                {content.headline}
              </p>
              <p className="mt-4 text-sm font-semibold leading-7 text-zinc-200 sm:text-lg sm:leading-8 xl:text-xl xl:leading-9">
                {content.description}
              </p>

              <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row md:items-start">
                <a
                  className="inline-flex items-center justify-center rounded-full border border-cyan-300/50 px-6 py-3 text-sm font-bold text-zinc-50 shadow-[0_0_24px_rgba(56,189,248,0.22)] transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-300/10 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#050a2d] lg:text-base"
                  href="#contact"
                >
                  {content.cta}
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-cyan-300/50 px-6 py-3 text-sm font-bold text-zinc-50 shadow-[0_0_24px_rgba(56,189,248,0.22)] transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-300/10 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#050a2d] lg:text-base"
                  href="#projects"
                >
                  {content.projectsCta}
                </a>
              </div>
            </div>
          </div>

          <HeroSidePanel
            panel={content.sidePanels[0]}
            className="md:col-span-1 xl:col-span-1 xl:col-start-1 xl:row-start-1 xl:self-center xl:translate-y-4"
          />

          <HeroSidePanel
            panel={content.sidePanels[1]}
            className="md:col-span-1 xl:col-span-1 xl:col-start-3 xl:row-start-1 xl:self-center xl:translate-y-4"
          />
        </div>

        <a
          aria-label="Scroll to about section"
          className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 rounded-full border border-cyan-300/30 px-3 py-5 text-cyan-100/80 transition hover:border-cyan-200 xl:block"
          href="#about"
        >
          <span className="block h-6 w-px animate-bounce bg-cyan-200" />
        </a>
      </div>
    </section>
  )
}

export default Hero


