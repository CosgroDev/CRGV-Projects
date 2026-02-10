import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/projects'
import { ExternalLink, Github, Calendar } from 'lucide-react'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border border-border rounded-lg overflow-hidden hover:border-foreground transition-colors">
      {project.image && (
        <div className="relative w-full h-48 bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {!project.image && (
        <div className="relative w-full h-48 bg-muted flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-600 text-sm">Screenshot coming soon</p>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold">{project.title}</h3>
          {project.featured && (
            <span className="px-2 py-1 text-xs bg-foreground text-background rounded">
              Featured
            </span>
          )}
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        {project.longDescription && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {project.longDescription}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-muted rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={project.launchDate}>
              {new Date(project.launchDate).toLocaleDateString('en-GB', {
                month: 'short',
                year: 'numeric',
              })}
            </time>
          </div>
          <span className="px-2 py-1 bg-muted rounded text-xs capitalize">
            {project.status}
          </span>
        </div>

        <div className="flex gap-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              Visit Site
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors text-sm"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
