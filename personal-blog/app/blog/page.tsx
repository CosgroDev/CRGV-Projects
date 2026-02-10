import type { Metadata } from 'next'
import { getAllPosts, getAllTags, getAllCategories } from '@/lib/posts'
import { PostCard } from '@/components/post-card'
import { Search } from '@/components/search'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Dale Cosgrove',
  description: 'Blog posts about life, darts, and projects',
}

export default function Blog() {
  const posts = getAllPosts()
  const tags = getAllTags()
  const categories = getAllCategories()

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Thoughts on life, darts, and building things
        </p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <Search posts={posts} />
      </div>

      {/* Categories and Tags */}
      {(categories.length > 0 || tags.length > 0) && (
        <div className="mb-12 space-y-4">
          {categories.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400">
                Categories
              </h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/blog/category/${category}`}
                    className="px-3 py-1 bg-muted rounded hover:bg-border transition-colors text-sm"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {tags.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400">
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag}`}
                    className="px-2 py-1 border border-border rounded hover:bg-muted transition-colors text-xs"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Posts */}
      {posts.length > 0 ? (
        <div className="space-y-12">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-600 dark:text-gray-400">
          <p>No blog posts yet. Check back soon!</p>
        </div>
      )}
    </div>
  )
}
