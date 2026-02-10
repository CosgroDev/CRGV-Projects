'use client'

import { useState, useMemo } from 'react'
import { Search as SearchIcon } from 'lucide-react'
import Fuse from 'fuse.js'
import { Post } from '@/lib/posts'
import { PostCard } from './post-card'

interface SearchProps {
  posts: Post[]
}

export function Search({ posts }: SearchProps) {
  const [query, setQuery] = useState('')

  const fuse = useMemo(
    () =>
      new Fuse(posts, {
        keys: ['title', 'description', 'tags', 'category'],
        threshold: 0.3,
      }),
    [posts]
  )

  const results = useMemo(() => {
    if (!query) return []
    return fuse.search(query).map((result) => result.item)
  }, [query, fuse])

  return (
    <div>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-opacity-50"
        />
      </div>

      {query && (
        <div className="mt-8">
          {results.length > 0 ? (
            <>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Found {results.length} {results.length === 1 ? 'result' : 'results'}
              </p>
              <div className="space-y-8">
                {results.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          ) : (
            <p className="text-gray-600 dark:text-gray-400">No results found for "{query}"</p>
          )}
        </div>
      )}
    </div>
  )
}
