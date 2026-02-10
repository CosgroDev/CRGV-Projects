import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-4xl">
        <Link href="/" className="text-xl font-bold hover:opacity-70 transition-opacity">
          CRGV
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/about" className="hover:opacity-70 transition-opacity">
            About
          </Link>
          <Link href="/now" className="hover:opacity-70 transition-opacity">
            Now
          </Link>
          <Link href="/blog" className="hover:opacity-70 transition-opacity">
            Blog
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
