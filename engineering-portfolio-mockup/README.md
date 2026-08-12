# Marcus Finlay Engineering Portfolio Mockup

This package contains:

- `index.html` — a self-contained visual prototype that opens directly in a browser.
- `app/page.tsx` — a Next.js homepage structured with real shadcn/ui components.
- `app/projects/_components/project-case-study.tsx` — reusable shadcn/ui-style case-study layout.
- `app/projects/*/page.tsx` — example Next.js routes for all four project case studies.
- `preview.png` — a full-page screenshot of the homepage mockup.
- `projects/` — four linked blog-style engineering case-study pages plus shared styling.
- `project-preview.png` — a screenshot of the Angus case-study page.

## Design direction

- Dark, technical, engineering-notebook aesthetic.
- Project work appears before the résumé-style experience section.
- Each project card now leads to a detailed case study with: problem, requirements, design decisions, implementation, testing, results, failures, and next steps.
- Red is used sparingly for status, engineering annotations, borders, and ambient background fades.
- The site includes a light/dark theme toggle and responsive mobile layout.

## shadcn/ui components used

- `Button`
- `Card`
- `Badge`
- `Tabs`
- `Accordion`
- `Separator`

Install them in an existing shadcn/ui Next.js project:

```bash
pnpm dlx shadcn@latest add button card badge tabs accordion separator
pnpm add lucide-react
```

Copy `app/page.tsx` into the project, then replace placeholder links, résumé download, contact email, project visuals, and case-study URLs.

## Suggested project case-study structure

1. Hero image or short demo video
2. Problem and constraints
3. System architecture
4. Mechanical design
5. Electronics and wiring
6. Software/control approach
7. Testing and results
8. Failures and lessons learned
9. Next revision
