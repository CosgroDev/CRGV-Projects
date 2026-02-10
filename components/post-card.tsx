import Link from 'next/link'
import { Post } from '@/lib/posts'
import { Calendar, Clock } from 'lucide-react'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="border-b border-border pb-8 last:border-b-0">
      <Link href={`/blog/${post.slug}`} className="group">
        <h2 className="text-2xl font-bold mb-2 group-hover:opacity-70 transition-opacity">
          {post.title}
        </h2>
      </Link>

      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{post.readingTime}</span>
        </div>
        <span className="px-2 py-1 bg-muted rounded text-xs">
          {post.category}
        </span>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {post.description}
      </p>

      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag}`}
              className="text-xs px-2 py-1 border border-border rounded hover:bg-muted transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}
    </article>
  )
}
