import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { SectionHeading } from "@/app/_components/section-heading/section-heading"
import { Badge } from "@/components/shadcn-ui/badge"
import { buttonVariants } from "@/components/shadcn-ui/button"
import { Card, CardContent } from "@/components/shadcn-ui/card"
import { Separator } from "@/components/shadcn-ui/separator"
import type { ProjectContent, ProjectSummary } from "@/lib/projects"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

type ProjectCaseStudyProps = {
    project: ProjectContent
    previous: ProjectSummary
    next: ProjectSummary
}

export const ProjectCaseStudy = ({
    project,
    previous,
    next,
}: ProjectCaseStudyProps) => {
    const { title, description, eyebrow, caseStudyTags, meta, toc, Body } =
        project

    return (
        <main className="min-h-screen text-foreground">
            <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-xl">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
                    <Link
                        href="/"
                        className="flex items-center gap-3 font-semibold"
                    >
                        <span className="grid size-9 place-items-center rounded-lg bg-foreground text-xs font-black text-background">
                            {site.initials}
                        </span>
                        {site.name}
                    </Link>
                    <Link
                        href="/#projects"
                        className={cn(buttonVariants({ variant: "outline" }))}
                    >
                        <ArrowLeft /> All projects
                    </Link>
                </div>
            </header>

            <div className="mx-auto max-w-6xl px-5">
                <nav
                    aria-label="Breadcrumb"
                    className="flex items-center gap-2 pt-8 text-sm text-muted-foreground"
                >
                    <Link href="/" className="hover:text-foreground">
                        Portfolio
                    </Link>
                    <span>/</span>
                    <Link href="/#projects" className="hover:text-foreground">
                        Projects
                    </Link>
                    <span>/</span>
                    <span className="text-foreground">{title}</span>
                </nav>

                <section className="grid animate-in gap-10 py-16 fade-in slide-in-from-bottom-2 duration-700 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
                    <div>
                        <SectionHeading
                            className="mb-0 max-w-4xl"
                            size="lg"
                            badge={eyebrow}
                            title={title}
                            description={description}
                            descriptionClassName="max-w-3xl"
                        />
                        <div className="mt-6 flex flex-wrap gap-2">
                            {caseStudyTags.map((tag, i) => (
                                <Badge
                                    key={tag}
                                    variant={i === 0 ? "default" : "outline"}
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-3">
                        {meta.map(([label, value]) => (
                            <div
                                key={label}
                                className="flex justify-between border-t pt-3"
                            >
                                <span className="text-label">{label}</span>
                                <strong>{value}</strong>
                            </div>
                        ))}
                    </div>
                </section>

                <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-card via-card to-primary/10">
                    <CardContent className="grid min-h-[420px] place-items-center p-10 text-center">
                        <div>
                            <div className="mx-auto mb-5 grid size-20 place-items-center rounded-2xl border border-dashed border-primary/50 text-3xl text-primary">
                                ◎
                            </div>
                            <h2 className="text-xl font-semibold">
                                Hero build photo / video
                            </h2>
                            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                                Replace this with a finished-project photo,
                                short demo loop, CAD render, or annotated
                                engineering image.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <div className="mx-auto grid max-w-6xl gap-14 py-20 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
                    <aside className="space-y-2 text-sm text-muted-foreground lg:sticky lg:top-24 lg:min-w-0 lg:self-start lg:justify-self-end">
                        <p className="mb-3 text-eyebrow">On this page</p>
                        {toc.map((entry) => (
                            <a
                                key={entry.id}
                                className="block border-l pl-3 transition-colors hover:border-primary hover:text-foreground"
                                href={`#${entry.id}`}
                            >
                                {entry.title}
                            </a>
                        ))}
                    </aside>
                    <article className="typeset typeset-docs mx-auto max-w-[75ch]">
                        <Body />
                    </article>
                </div>

                <Separator />
                <section className="grid gap-6 py-16 sm:grid-cols-2">
                    <Card className="relative bg-gradient-to-br from-card to-primary/10 transition hover:border-primary/40">
                        <Link
                            href={`/projects/${previous.slug}`}
                            aria-label={`View previous project: ${previous.title}`}
                            className="absolute inset-0 z-10"
                        />
                        <CardContent className="flex h-full flex-col justify-between gap-6 p-8 sm:flex-row sm:items-center">
                            <div>
                                <p className="text-eyebrow">Previous project</p>
                                <h2 className="mt-2 text-2xl font-bold">
                                    {previous.title}
                                </h2>
                            </div>
                            <span
                                aria-hidden="true"
                                className={cn(
                                    buttonVariants({ variant: "outline" }),
                                    "pointer-events-none",
                                )}
                            >
                                <ArrowLeft className="transition-transform group-hover/card:-translate-x-0.5" />
                                View project
                            </span>
                        </CardContent>
                    </Card>
                    <Card className="relative bg-gradient-to-br from-card to-primary/10 transition hover:border-primary/40">
                        <Link
                            href={`/projects/${next.slug}`}
                            aria-label={`View next project: ${next.title}`}
                            className="absolute inset-0 z-10"
                        />
                        <CardContent className="flex h-full flex-col justify-between gap-6 p-8 sm:flex-row sm:items-center">
                            <div>
                                <p className="text-eyebrow">Next project</p>
                                <h2 className="mt-2 text-2xl font-bold">
                                    {next.title}
                                </h2>
                            </div>
                            <span
                                aria-hidden="true"
                                className={cn(
                                    buttonVariants(),
                                    "pointer-events-none",
                                )}
                            >
                                View project{" "}
                                <ArrowRight className="transition-transform group-hover/card:translate-x-0.5" />
                            </span>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </main>
    )
}
