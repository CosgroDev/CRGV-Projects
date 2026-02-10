import RSS from 'rss'
import { getAllPosts } from '@/lib/posts'

export async function GET() {
  const feed = new RSS({
    title: 'Dale Cosgrove',
    description: 'Personal blog of Dale Cosgrove - Life updates, darts, and projects',
    site_url: 'https://www.cgrv.co.uk',
    feed_url: 'https://www.cgrv.co.uk/feed.xml',
    language: 'en',
    pubDate: new Date().toUTCString(),
  })

  const posts = getAllPosts()

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `https://www.cgrv.co.uk/blog/${post.slug}`,
      date: post.date,
      categories: [post.category, ...post.tags],
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
