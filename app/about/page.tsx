import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Dale Cosgrove',
  description: 'About Dale Cosgrove - A lad from Barnsley',
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="prose prose-gray dark:prose-invert mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12 not-prose">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-border flex-shrink-0 mx-auto md:mx-0">
            <Image
              src="/images/profile.jpg"
              alt="Dale Cosgrove"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Dale Cosgrove
            </p>
          </div>
        </div>

        <h2>Hi, I'm Dale 👋</h2>

        <p>
          I'm a 35-year-old lad from Barnsley, living life in an Edwardian house
          with my wife and our 15-year-old dog, Izzy.
        </p>

        <h3>What I Do</h3>
        <p>
          By day, I work for a biscuit manufacturer. In my spare time, I'm passionate
          about darts and play for my local team, West Green WMC. I'm also a devoted
          Barnsley FC supporter with a season ticket at Oakwell.
        </p>

        <h3>Interests & Hobbies</h3>
        <p>
          I'm a massive gamer with a special love for Final Fantasy and Fallout.
          When I'm not gaming or throwing arrows, I enjoy tinkering and building
          things - I love learning and understanding how things work.
        </p>

        <p>
          I'm also into cars, F1, and rally racing. There's something about the
          engineering and the competition that really appeals to me.
        </p>

        <h3>Why This Blog?</h3>
        <p>
          This is my space to share life updates, talk about darts and the projects
          I'm working on. Currently, I'm diving into AI workflows and exploring
          different AI models to understand which tools work best for different tasks.
        </p>

        <h3>Get in Touch</h3>
        <p>
          Feel free to reach out at{' '}
          <a href="mailto:dale@cgrv.co.uk">dale@cgrv.co.uk</a>
        </p>
      </div>
    </div>
  )
}
