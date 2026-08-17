import { Briefcase, ExternalLink, GraduationCap } from "lucide-react"
import Image from "next/image"

import { Badge } from "@/components/shadcn-ui/badge"
import { buttonVariants } from "@/components/shadcn-ui/button"
import { Card, CardContent } from "@/components/shadcn-ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/shadcn-ui/tabs"
import { cn } from "@/lib/utils"

import { SectionHeading } from "../section-heading/section-heading"
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
                className="absolute top-14 -bottom-8 w-px rounded-full bg-gradient-to-b from-primary/80 via-primary/25 to-transparent sm:top-18"
            />
            <div className="relative z-10 grid size-14 shrink-0 place-items-center rounded-2xl border border-primary/60 bg-primary/10 p-1.5 shadow-[0_0_24px_rgba(220,38,38,0.18)] sm:size-18">
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
                    <div className="min-w-0">
                        <p className="text-eyebrow">{entry.date}</p>
                        <h3 className="mt-1 text-lg font-semibold">
                            {entry.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {entry.organization} · {entry.location}
                        </p>
                        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                            {entry.points.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </div>
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
                        <div className="flex flex-wrap items-center gap-2">
                            <p className="text-eyebrow">{entry.date}</p>
                            <Badge variant="secondary" className="text-[10px]">
                                {entry.status === "in-progress"
                                    ? "In progress"
                                    : "Completed"}
                            </Badge>
                        </div>
                        <h3 className="mt-1 text-lg font-semibold">
                            {entry.school}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {entry.program}
                        </p>
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
                                "mt-4",
                            )}
                        >
                            Program
                            <ExternalLink data-icon="inline-end" />
                        </a>
                    </div>
                </li>
            ))}
        </ol>
    )
}

export const ExperienceSection = () => {
    return (
        <section id="experience" className="mx-auto max-w-6xl px-5 py-20">
            <SectionHeading
                title={experienceSection.title}
                description={experienceSection.description}
            />

            <Card>
                <CardContent className="p-6">
                    <Tabs defaultValue="work">
                        <TabsList className="mb-6">
                            <TabsTrigger value="work">
                                <Briefcase /> Work
                            </TabsTrigger>
                            <TabsTrigger value="education">
                                <GraduationCap /> Education
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="work">
                            <WorkList />
                        </TabsContent>
                        <TabsContent value="education">
                            <EducationList />
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </section>
    )
}
