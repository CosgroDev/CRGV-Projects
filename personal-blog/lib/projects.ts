export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  tech: string[]
  image?: string
  link?: string
  github?: string
  status: 'launched' | 'in-progress' | 'archived'
  featured: boolean
  launchDate: string
}

export const projects: Project[] = [
  {
    id: 'darts-team-manager',
    title: 'Darts Team Manager',
    description: 'A web app for managing my darts team at West Green WMC - track games, stats, and player performance.',
    longDescription: 'Built this to help manage our darts team more efficiently. Features include game tracking, player statistics, match history, and performance analytics. Makes it easy to see who\'s on form and plan our lineups.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    status: 'launched',
    featured: true,
    launchDate: '2026-01-15',
    // image: '/images/projects/darts-app.jpg', // Add your screenshot here
    // link: 'https://your-darts-app.com',
    // github: 'https://github.com/yourusername/darts-app',
  },
  // Add more projects here as you build them
]

export function getAllProjects(): Project[] {
  return projects.sort((a, b) => {
    // Sort by launch date, newest first
    if (a.launchDate > b.launchDate) return -1
    if (a.launchDate < b.launchDate) return 1
    return 0
  })
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured).sort((a, b) => {
    if (a.launchDate > b.launchDate) return -1
    if (a.launchDate < b.launchDate) return 1
    return 0
  })
}

export function getLaunchedProjects(): Project[] {
  return projects.filter(p => p.status === 'launched').sort((a, b) => {
    if (a.launchDate > b.launchDate) return -1
    if (a.launchDate < b.launchDate) return 1
    return 0
  })
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id)
}
