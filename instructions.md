# Portfolio Project Instructions

## Project Overview

This is a **Next.js 15** portfolio website built with TypeScript, Tailwind CSS 4, and Framer Motion. The project follows a modern, premium design system outlined in `COMPLETE_REDESIGN_SPEC.md`.

### Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.3.2 | React framework with App Router |
| React | 19.0.0 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling |
| Framer Motion | 12.x | Animations |
| next-themes | 0.4.6 | Dark/light mode theming |

---

## Directory Structure

```
portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with ThemeProvider
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles & CSS variables
│   ├── ThemeProvider.tsx    # Theme context provider
│   └── components/          # Page-specific components
│       ├── Hero/            # Hero section components
│       ├── Projects/        # Project showcase components
│       ├── Skills/          # Skills section components
│       ├── Experience/      # Experience/timeline components
│       ├── Section/         # Reusable section containers
│       ├── ContactForm/     # Contact form components
│       ├── ui/              # UI primitives (backgrounds, effects)
│       ├── accessibility/   # A11y utilities
│       └── feedback/        # Loading states, success animations
├── components/
│   └── ui/                  # shadcn/ui components
├── data/                    # JSON data files
│   ├── projects.json        # Project entries
│   ├── skills.json          # Skills list
│   ├── experiences.json     # Work experience
│   └── contactInfo.json     # Contact information
├── lib/
│   ├── utils.ts             # Utility functions (cn, etc.)
│   └── hooks/               # Custom React hooks
├── public/                  # Static assets
└── COMPLETE_REDESIGN_SPEC.md # Design system specification
```

---

## Development

### Getting Started

```bash
# Install dependencies
npm install

# Start development server (with Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Environment

- Node.js 18+ required
- Development server runs at `http://localhost:3000`

---

## Code Conventions

### File Naming

- **Components**: PascalCase (`Hero.tsx`, `ProjectCard.tsx`)
- **Utilities/hooks**: camelCase (`usePerformance.ts`, `utils.ts`)
- **Data files**: camelCase (`projects.json`)

### Component Structure

```tsx
// Standard component pattern
'use client'; // Only if using client-side features

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ComponentProps {
  // Props interface
}

export function Component({ prop }: ComponentProps) {
  return (
    // JSX
  );
}
```

### Imports Order

1. React/Next.js imports
2. Third-party libraries
3. Local components
4. Utilities and hooks
5. Types
6. Styles (if any)

### TypeScript

- Always define prop interfaces
- Use strict mode
- Avoid `any` - use `unknown` if type is truly unknown
- Export types when they may be reused

---

## Styling Guidelines

### Tailwind CSS

- Use utility classes directly in JSX
- Use `cn()` utility from `lib/utils.ts` for conditional classes
- Follow the design system colors defined in `tailwind.config.ts`

```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  "bg-background text-foreground",
  isActive && "border-primary"
)} />
```

### CSS Variables

Defined in `globals.css`:

```css
--background      /* Main background */
--foreground      /* Primary text */
--primary         /* Accent color (coral/red) */
--card            /* Card backgrounds */
```

### Design System Reference

See `COMPLETE_REDESIGN_SPEC.md` for:
- Color palette (Primary Red: `#E54D4D`, neutrals, accents)
- Typography (Playfair Display for headings, Inter for body)
- Spacing scale
- Border radius system
- Animation guidelines

---

## Component Patterns

### Section Components

All major sections should use consistent structure:

```tsx
<SectionContainer id="section-name">
  <SectionHeader 
    title="Section Title"
    subtitle="Optional subtitle"
  />
  {/* Section content */}
</SectionContainer>
```

### Animations

Use Framer Motion for all animations:

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  {/* Content */}
</motion.div>
```

### Data-Driven Components

Components should read from JSON files in `/data`:

```tsx
import projects from '@/data/projects.json';

export function Projects() {
  return projects.map(project => (
    <ProjectCard key={project.id} {...project} />
  ));
}
```

---

## Accessibility

### Requirements

- Semantic HTML elements
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- Adequate color contrast (4.5:1 minimum)
- Keyboard navigation support
- Focus states on interactive elements

### Utilities

Use components from `app/components/accessibility/`:
- `SkipLink` - Skip to main content
- `VisuallyHidden` - Screen reader only text

---

## Performance

### Best Practices

- Use Next.js `Image` component for images
- Lazy load below-fold content
- Use `viewport={{ once: true }}` on scroll animations
- Minimize client components (`'use client'`)
- Use React Server Components where possible

### Custom Hooks

- `usePerformance` - Performance monitoring
- `useAccessibility` - A11y utilities

---

## Data Files

### projects.json

```json
{
  "id": "unique-id",
  "title": "Project Name",
  "description": "Brief description",
  "image": "/path/to/image.png",
  "technologies": ["React", "TypeScript"],
  "liveUrl": "https://...",
  "githubUrl": "https://..."
}
```

### skills.json

```json
{
  "category": "Frontend",
  "skills": ["React", "TypeScript", "Next.js"]
}
```

### experiences.json

```json
{
  "company": "Company Name",
  "role": "Job Title",
  "period": "2024 - Present",
  "description": "Role description",
  "highlights": ["Achievement 1", "Achievement 2"]
}
```

---

## Git Workflow

### Branch Naming

- `feature/` - New features
- `fix/` - Bug fixes
- `refactor/` - Code improvements
- `docs/` - Documentation updates

### Commit Messages

Follow conventional commits:

```
feat: add new hero section animation
fix: resolve mobile navigation bug
refactor: simplify skills grid layout
docs: update README with setup instructions
```

---

## Deployment

### Vercel (Recommended)

1. Connect repository to Vercel
2. Configure build settings (auto-detected for Next.js)
3. Deploy

### Manual Build

```bash
npm run build
npm start
```

---

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Hydration mismatch | Ensure `'use client'` on components using browser APIs |
| Styles not applying | Check Tailwind content paths in `tailwind.config.ts` |
| Animation jank | Use `will-change` or reduce animation complexity |
| Build errors | Run `npm run lint` and fix TypeScript errors |

### Development Tips

- Use React DevTools for component debugging
- Use Framer Motion DevTools for animation debugging
- Check browser console for runtime errors
- Test responsive design with DevTools device emulation

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
