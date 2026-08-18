import { Briefcase, ExternalLink, GraduationCap } from "lucide-react"
import Image from "next/image"

import { buttonVariants } from "@/components/shadcn-ui/button"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/shadcn-ui/tabs"
import { cn } from "@/lib/utils"

import { SectionHeading } from "../section-heading/section-heading"
import { CourseExplorer } from "./experience-section.course-explorer"
import { education, experienceSection, work } from "./experience-section.data"

const TimelineLogo = ({
    src,
    alt,
    imageClassName,
}: {
    src: string
    alt: string
    imageClassName?: string
}) => {
    return (
        <div className="relative flex self-stretch justify-center">
            <span
                aria-hidden="true"
                className="absolute top-14 -bottom-8 w-px rounded-full bg-linear-to-b from-primary/80 via-primary/25 to-transparent sm:top-18"
            />
            <div className="relative z-10 grid size-14 shrink-0 place-items-center rounded-2xl border border-primary/60 bg-primary/10 p-1.5 shadow-[0_0_24px_var(--timeline-glow)] sm:size-18">
                <div className="relative size-full overflow-hidden rounded-xl border border-primary/30 bg-white">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(min-width: 640px) 60px, 44px"
                        className={cn(
                            "object-contain",
                            imageClassName ?? "p-1.5",
                        )}
                    />
                </div>
            </div>
        </div>
    )
}

const WorkList = () => {
    return (
        <ol>
            {work.map((entry) => (
                <li
                    key={entry.title}
                    className="relative grid grid-cols-[3.5rem_1fr] items-start gap-4 pb-8 last:pb-10 sm:grid-cols-[4.5rem_1fr] sm:gap-5"
                >
                    <TimelineLogo
                        src={entry.logo}
                        alt={`${entry.organization} logo`}
                    />
                    <article className="min-w-0 rounded-xl border border-border/80 bg-card p-5 ring-1 ring-foreground/5 transition">
                        <div className="flex items-baseline justify-between gap-4">
                            <div className="min-w-0">
                                <h3 className="text-lg font-semibold">
                                    {entry.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {entry.organization} · {entry.location}
                                </p>
                            </div>
                            <p className="shrink-0 text-right text-eyebrow">
                                {entry.date}
                            </p>
                        </div>
                        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                            {entry.points.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </article>
                </li>
            ))}
        </ol>
    )
}

const EducationList = () => {
    return (
        <ol>
            {education.map((entry) => (
                <li
                    key={entry.school}
                    className="relative grid grid-cols-[3.5rem_1fr] items-start gap-4 pb-10 sm:grid-cols-[4.5rem_1fr] sm:gap-5"
                >
                    <TimelineLogo
                        src={entry.logo}
                        alt={`${entry.school} logo`}
                        imageClassName={entry.logoClassName}
                    />
                    <div className="min-w-0">
                        <article className="rounded-xl border border-border/80 bg-card p-5 ring-1 ring-foreground/5 transition">
                            <div className="flex items-baseline justify-between gap-4">
                                <div className="min-w-0">
                                    <h3 className="text-lg font-semibold">
                                        {entry.school}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {entry.program}
                                    </p>
                                </div>
                                <div className="flex shrink-0 flex-col items-end gap-1.5">
                                    <p className="text-right text-eyebrow">
                                        {entry.date}
                                    </p>
                                </div>
                            </div>
                            <p className="mt-3 text-sm text-muted-foreground">
                                {entry.summary}
                            </p>
                            <a
                                href={entry.programUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    buttonVariants({
                                        variant: "outline",
                                        size: "sm",
                                    }),
                                    "mt-3",
                                )}
                            >
                                Program
                                <ExternalLink data-icon="inline-end" />
                            </a>
                        </article>
                        <CourseList />
                    </div>
                </li>
            ))}
        </ol>
    )
}

const CourseList = () => {
    return (
        <section className="mt-6 border-t border-border pt-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                    <p className="text-eyebrow">Academic history</p>
                    <h3 className="mt-1 text-2xl font-semibold">Coursework</h3>
                    <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                        Select a course to open its description in the McMaster
                        Academic Calendar.
                    </p>
                </div>
            </div>

            <div className="mt-6">
                <CourseExplorer />
            </div>
        </section>
    )
}

export const ExperienceSection = () => {
    return (
        <section id="experience" className="mx-auto max-w-6xl px-5 py-20">
            <SectionHeading
                title={experienceSection.title}
                description={experienceSection.description}
            />

            <Tabs defaultValue="work">
                <TabsList className="mb-8 p-1 group-data-horizontal/tabs:h-12">
                    <TabsTrigger
                        value="work"
                        className="cursor-pointer px-7 text-base"
                    >
                        <Briefcase className="size-5" /> Work
                    </TabsTrigger>
                    <TabsTrigger
                        value="education"
                        className="cursor-pointer px-7 text-base"
                    >
                        <GraduationCap className="size-5" /> Education
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="work">
                    <WorkList />
                </TabsContent>
                <TabsContent value="education">
                    <EducationList />
                </TabsContent>
            </Tabs>
        </section>
    )
}
