const normalizedBasePath = import.meta.env.BASE_URL.replace(/\/$/, '')

export const appBasePath = normalizedBasePath === '' ? '' : normalizedBasePath

export const stripBasePath = (pathname) => {
  if (!appBasePath || !pathname.startsWith(appBasePath)) {
    return pathname
  }

  return pathname.slice(appBasePath.length) || '/'
}

export const getRoutePath = (path = '/') => {
  if (path === '/') {
    return `${appBasePath}/`
  }

  return `${appBasePath}${path.startsWith('/') ? path : `/${path}`}`
}

export const getSectionHref = (hash) => `${getRoutePath('/')}${hash}`

export const getProjectHref = (slug) => getRoutePath(`/projects/${slug}`)
