import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/shadcn-ui/badge"
import { buttonVariants } from "@/components/shadcn-ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/shadcn-ui/card"
import { getAllProjects } from "@/lib/projects"
import { cn } from "@/lib/utils"

import { SectionHeading } from "../section-heading/section-heading"
import { projectsSection } from "./projects-grid.data"

export const ProjectsGrid = () => {
    const projects = getAllProjects()

    return (
        <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
            <SectionHeading
                title={projectsSection.title}
                description={projectsSection.description}
            />

            <div className="grid gap-5 md:grid-cols-12">
                {projects.map((project) => (
                    <Card
                        key={project.slug}
                        className={cn(
                            project.span,
                            "group relative overflow-hidden pt-0 transition hover:-translate-y-1 hover:border-primary/40",
                        )}
                    >
                        <Link
                            href={`/projects/${project.slug}`}
                            aria-label={`Open ${project.title}`}
                            className="absolute inset-0 z-10"
                        />
                        <div className="grid min-h-56 place-items-center border-b bg-muted/35">
                            <span className="font-mono text-sm text-muted-foreground">
                                {project.title} / visual
                            </span>
                        </div>
                        <CardHeader>
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <CardTitle className="text-2xl tracking-tight">
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription className="mt-2 max-w-xl leading-relaxed">
                                        {project.description}
                                    </CardDescription>
                                </div>
                                <Badge variant="outline">
                                    {project.category}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="flex flex-1 flex-wrap content-start gap-2">
                            {project.tags.map((tag) => (
                                <Badge
                                    key={tag}
                                    variant="secondary"
                                    className="font-mono font-normal"
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </CardContent>
                        <CardFooter className="justify-between">
                            <span className="text-sm text-muted-foreground">
                                {project.metric}
                            </span>
                            <span
                                aria-hidden="true"
                                className={cn(
                                    buttonVariants({
                                        variant: "outline",
                                        size: "icon",
                                    }),
                                    "pointer-events-none transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                                )}
                            >
                                <ArrowUpRight />
                            </span>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}
