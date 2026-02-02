# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # Start development server at localhost:3000
bun run build    # Production build
bun start        # Run production server
bun run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 portfolio website using the App Router, TypeScript, and TailwindCSS 4.

### Project Structure

- `src/app/` - Next.js App Router (layout.tsx, page.tsx, globals.css)
- `src/components/sections/` - Page sections (hero, about, experience, education, skills, projects, contact)
- `src/components/ui/` - Reusable UI components including 3D Earth visualization
- `src/components/` - Layout components (navbar, footer, theme-provider)
- `src/lib/utils.ts` - Utility functions (cn for class merging)

### Key Patterns

**Page Composition**: The home page (`src/app/page.tsx`) composes section components. Each section is self-contained with its own data and styling.

**3D Visualization**: The hero section features an interactive Three.js Earth (`src/components/ui/earth.tsx`) using React Three Fiber with textures loaded from unpkg CDN.

**Styling**: TailwindCSS with dark theme forced via next-themes. Custom CSS variables in globals.css define the color scheme (deep space blue background, neon cyan accents).

**Path Aliases**: Use `@/` to import from `src/` (e.g., `@/components/ui/button`).
