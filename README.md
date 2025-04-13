# Tennis App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Setup Process

1. Download & install [Node.js](https://nodejs.org/)

2. Run the following command in terminal:
```bash
npx create-next-app@latest your_ project_name --typescript --eslint --app
```

3. When prompted, select the following options:
```
√ Would you like to use Tailwind CSS? ... Yes
# --> yes (in line custom css styling)

√ Would you like your code inside a `src/` directory? ... Yes
# --> yes (better organization)

√ Would you like to use Turbopack for `next dev`? ... Yes
# --> yes (this allows for faster compile in dev env)

√ Would you like to customize the import alias (`@/*` by default)? ... Yes
# --> yes (simplifies import lines)

√ What import alias would you like configured? ... @/*
# --> just hit enter (default config)
```

## Tech Stack

### Production
- **React** - Frontend UI library
- **Tailwind CSS** - Utility-first styling framework
- **Next.js** - Full-stack React framework for the backend and routing

### Staging / Potential
- **Framer Motion** - Custom animations and transitions
- **NodeMailer** - Email notifications system
- **Go (Language)** - Fleshed out faster backend (this is the spice)

## Getting Started

Run the development server:

```bash
npm run dev
# --> starts the Next.js development server with hot reloading
# --> runs on http://localhost:3000 by default
# --> automatically recompiles and refreshes when files change
# --> uses Turbopack for faster compile times in development
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses:
- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [ESLint](https://eslint.org/) - Code linting

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.