import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/posts'
import { PostCard } from '@/components/post-card'

export default function Home() {
  const posts = getAllPosts().slice(0, 3) // Get latest 3 posts

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-border flex-shrink-0">
            <Image
              src="/images/profile.jpg"
              alt="Dale Cosgrove"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm Dale
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              A lad from Barnsley sharing thoughts on life, darts, and building things
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                href="/about"
                className="px-6 py-2 border border-border rounded-md hover:bg-muted transition-colors"
              >
                About me
              </Link>
              <Link
                href="/blog"
                className="px-6 py-2 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity"
              >
                Read the blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      {posts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Recent Posts</h2>
            <Link
              href="/blog"
              className="text-sm hover:opacity-70 transition-opacity"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-8">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
