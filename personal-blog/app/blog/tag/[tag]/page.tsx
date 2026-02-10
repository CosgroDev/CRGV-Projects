import type { Metadata } from 'next'
import Link from 'next/link'
import { getPostsByTag, getAllTags } from '@/lib/posts'
import { PostCard } from '@/components/post-card'
import { ArrowLeft } from 'lucide-react'

interface PageProps {
  params: Promise<{ tag: string }>
}

export async function generateStaticParams() {
  const tags = getAllTags()
  return tags.map((tag) => ({
    tag: tag,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag } = await params
  return {
    title: `Posts tagged "${tag}" - Dale Cosgrove`,
    description: `Blog posts tagged with ${tag}`,
  }
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params
  const posts = getPostsByTag(tag)

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm hover:opacity-70 transition-opacity mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to blog
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Posts tagged #{tag}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'} found
        </p>
      </div>

      <div className="space-y-12">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
