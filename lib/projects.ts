import type { ComponentType } from "react"

import { projects } from "@/content/projects"

export type ProjectCategory = "robotics" | "mechanical" | "software"

export type TocEntry = { id: string; title: string }

export type ProjectContent = {
    slug: string
    title: string
    category: ProjectCategory
    description: string
    tags: string[]
    metric: string
    /** Tailwind grid column span for the bento layout, e.g. "md:col-span-7" */
    span: string
    /** Short label shown in the badge chip above the case-study title, e.g. "Robotics" */
    eyebrow: string
    caseStudyTags: string[]
    meta: [string, string][]
    toc: TocEntry[]
    Body: ComponentType
}

export type ProjectSummary = Omit<ProjectContent, "toc" | "Body">

export function getAllProjects(): ProjectSummary[] {
    return projects.map(({ toc: _toc, Body: _body, ...summary }) => summary)
}

export function getProjectContent(slug: string): ProjectContent | undefined {
    return projects.find((project) => project.slug === slug)
}
