import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Now - Dale Cosgrove',
  description: 'What Dale is currently working on',
}

export default function Now() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="prose prose-gray dark:prose-invert mx-auto">
        <h1>What I'm Up To Now</h1>

        <p className="text-gray-600 dark:text-gray-400 italic">
          Last updated: February 2026
        </p>

        <h2>Learning & Exploring</h2>
        <p>
          I'm currently deep into learning about AI workflows and trying to
          understand the differences between various AI models. It's fascinating
          to see which tools excel at different tasks and how they can be
          combined to create powerful workflows.
        </p>

        <h2>Building</h2>
        <p>
          I've built a web app for my darts team, West Green WMC, to help us
          manage games and track stats. It's been a great learning experience
          combining my love for darts with my passion for building things.
        </p>

        <h2>Playing</h2>
        <p>
          Still throwing arrows for West Green WMC and watching Barnsley FC
          whenever I can get to Oakwell. Also been diving back into some classic
          Final Fantasy games - there's something about those old JRPGs that
          never gets old.
        </p>

        <hr />

        <p className="text-sm text-gray-600 dark:text-gray-400">
          This is a "now page" - a concept from{' '}
          <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">
            Derek Sivers
          </a>
          . It's a place to share what I'm currently focused on.
        </p>
      </div>
    </div>
  )
}
