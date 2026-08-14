import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ProjectCaseStudy } from "@/app/projects/[slug]/_components/project-case-study/project-case-study"
import { getAllProjects, getProjectContent } from "@/lib/projects"
import { site } from "@/lib/site"

type ProjectPageProps = {
    params: Promise<{ slug: string }>
}

export function generateStaticParams() {
    return getAllProjects().map((project) => ({ slug: project.slug }))
}

// Every valid slug is listed in generateStaticParams above (from content/projects),
// so an unmatched slug should 404 rather than rendering with missing content.
export const dynamicParams = false

export const generateMetadata = async ({
    params,
}: ProjectPageProps): Promise<Metadata> => {
    const { slug } = await params
    const project = getProjectContent(slug)

    if (!project) return {}

    return {
        title: `${project.title} - ${site.name}`,
        description: project.description,
    }
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
    const { slug } = await params
    const project = getProjectContent(slug)

    if (!project) notFound()

    const allProjects = getAllProjects()
    const index = allProjects.findIndex((p) => p.slug === slug)
    const previous =
        allProjects[(index - 1 + allProjects.length) % allProjects.length]
    const next = allProjects[(index + 1) % allProjects.length]

    return (
        <ProjectCaseStudy project={project} previous={previous} next={next} />
    )
}

export default ProjectPage
