import cameraSystem from './projects/cameraSystem'
import cvCreator from './projects/cvCreator'
import ragModel from './projects/ragModel'
import weatherApp from './projects/weatherApp'

// Jak dodać nowy projekt:
// 1. Dodaj obrazki do src/assets/images/projects/[nazwa-projektu].
// 2. Utwórz osobny plik w src/content/projects, np. myProject.js.
// 3. Dodaj projekt do tablicy projects poniżej.
// 4. Projekt pojawi się automatycznie w karuzeli, navbarze i pod /projects/[slug].

const projectStatusLabels = {
  en: {
    comingSoon: 'Coming soon',
  },
  pl: {
    comingSoon: 'Coming soon',
  },
}

export const projects = [cvCreator, ragModel, weatherApp, cameraSystem]

export const getProjects = (language = 'pl') =>
  projects.map((project) => {
    const localizedProject = project.content[language] ?? project.content.pl

    return {
      slug: project.slug,
      image: project.image,
      imageFit: project.imageFit ?? 'cover',
      gallery: project.gallery ?? [],
      visualClass: project.visualClass,
      status: project.status,
      statusLabel: projectStatusLabels[language]?.[project.status] ?? projectStatusLabels.pl[project.status],
      tags: project.tags ?? [],
      links: project.links ?? {},
      title: localizedProject.title,
      shortDescription: localizedProject.shortDescription,
      description: localizedProject.description,
      alt: localizedProject.alt,
      galleryAlt: localizedProject.galleryAlt ?? [],
    }
  })

export const getProjectBySlug = (slug, language = 'pl') => getProjects(language).find((project) => project.slug === slug)
