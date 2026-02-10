# Personal Blog - Dale Cosgrove

A clean, minimal personal blog built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ✅ Dark/Light mode toggle (defaults to dark)
- ✅ MDX blog posts with frontmatter
- ✅ Reading time estimates
- ✅ Categories and tags
- ✅ Search functionality
- ✅ RSS feed
- ✅ Fully responsive design
- ✅ Clean, minimal black/white/grey design

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your profile image:
   - Place a square profile photo at `public/images/profile.jpg`
   - Recommended: 400x400px or larger
   - Format: JPG

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Writing Blog Posts

Blog posts are written in MDX (Markdown with JSX) and stored in the `content/posts/` directory.

### Creating a New Post

1. Create a new `.mdx` file in `content/posts/`
2. Add frontmatter at the top:

```mdx
---
title: Your Post Title
date: '2026-02-10'
description: A brief description of your post
category: Life Updates
tags: ['tag1', 'tag2']
---

# Your Content Here

Write your post content in Markdown...
```

### Frontmatter Fields

- `title` (required): The post title
- `date` (required): Publication date in YYYY-MM-DD format
- `description` (required): Brief description for post cards and SEO
- `category` (required): One of: "Life Updates", "Darts & Projects"
- `tags` (optional): Array of tag strings

### File Naming

Name your MDX files using lowercase and hyphens:
- ✅ `my-first-post.mdx`
- ❌ `My First Post.mdx`

The filename becomes the URL slug: `/blog/my-first-post`

## Project Structure

```
personal-blog/
├── app/                  # Next.js app directory
│   ├── blog/            # Blog pages
│   ├── about/           # About page
│   ├── now/             # Now page
│   └── layout.tsx       # Root layout
├── components/          # React components
├── content/
│   └── posts/          # MDX blog posts
├── lib/                # Utilities
│   └── posts.ts        # Post parsing & utilities
└── public/
    └── images/         # Static images
```

## Customization

### Update Personal Info

- **Header logo**: Edit `components/header.tsx` (line 7)
- **Footer**: Edit `components/footer.tsx`
- **About page**: Edit `app/about/page.tsx`
- **Now page**: Edit `app/now/page.tsx`
- **Homepage**: Edit `app/page.tsx`

### Styling

The site uses Tailwind CSS with a custom color palette defined in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global styles and CSS variables

### Domain

Update the domain in these files:
- `app/feed.xml/route.ts` (RSS feed URLs)

## RSS Feed

The RSS feed is available at `/feed.xml`

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [MDX](https://mdxjs.com/) - Markdown for blog posts
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode
- [Fuse.js](https://fusejs.io/) - Search functionality
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Frontmatter parsing
- [reading-time](https://github.com/ngryman/reading-time) - Reading time estimates

## Deployment

This blog can be deployed to:
- [Vercel](https://vercel.com) (recommended for Next.js)
- [Netlify](https://www.netlify.com/)
- Any Node.js hosting platform

### Deploying to Vercel

1. Push your code to GitHub
2. Import your repo in Vercel
3. Deploy!

## License

MIT License - Feel free to use this as a template for your own blog!
