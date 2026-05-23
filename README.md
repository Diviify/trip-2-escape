# Wanderlust Travel

A Next.js 14 travel website built with the App Router, Tailwind CSS, shadcn/ui, and Framer Motion.

## Stack

- **Next.js 14** — App Router, TypeScript, `src/` directory
- **Tailwind CSS** — utility-first styling with shadcn design tokens
- **shadcn/ui** — accessible UI components (`components.json` configured)
- **Framer Motion** — animations via `MotionProvider` and client components
- **ESLint** — `next/core-web-vitals` + Prettier compatibility
- **Prettier** — formatting with `prettier-plugin-tailwindcss`

## Getting started

```bash
npm install
cp .env.example .env.local   # if .env.local is missing
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable                    | Description                      |
| --------------------------- | -------------------------------- |
| `NEXT_PUBLIC_SITE_NAME`     | Public site name shown in the UI |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email for mailto links   |

Copy `.env.example` to `.env.local` and update the values for your environment.

## Scripts

| Command                | Description               |
| ---------------------- | ------------------------- |
| `npm run dev`          | Start development server  |
| `npm run build`        | Production build          |
| `npm run start`        | Start production server   |
| `npm run lint`         | Run ESLint                |
| `npm run lint:fix`     | Run ESLint with auto-fix  |
| `npm run format`       | Format with Prettier      |
| `npm run format:check` | Check Prettier formatting |

## Add shadcn components

```bash
npx shadcn@latest add card
```

Components are installed to `src/components/ui/`.
