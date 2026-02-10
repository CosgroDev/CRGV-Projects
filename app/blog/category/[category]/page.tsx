import type { Metadata } from 'next'
import Link from 'next/link'
import { getPostsByCategory, getAllCategories } from '@/lib/posts'
import { PostCard } from '@/components/post-card'
import { ArrowLeft } from 'lucide-react'

interface PageProps {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({
    category: category,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params
  return {
    title: `${category} - Dale Cosgrove`,
    description: `Blog posts in ${category}`,
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params
  const posts = getPostsByCategory(category)

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
        <h1 className="text-4xl font-bold mb-4">{category}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'}
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
