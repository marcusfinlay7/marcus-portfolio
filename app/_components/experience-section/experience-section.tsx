import { Briefcase, GraduationCap } from "lucide-react"

import { Badge } from "@/components/shadcn-ui/badge"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/shadcn-ui/card"
import { Separator } from "@/components/shadcn-ui/separator"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/shadcn-ui/tabs"
import { site } from "@/lib/site"

import { SectionHeading } from "../section-heading/section-heading"
import {
    about,
    education,
    experienceSection,
    toolbox,
    work,
} from "./experience-section.data"

const TimelineDot = () => {
    return (
        <span className="absolute top-1 -left-[1.85rem] size-3 rounded-full border-2 border-primary bg-background" />
    )
}

const WorkList = () => {
    return (
        <ol className="relative space-y-8 border-l border-border pl-6">
            {work.map((entry) => (
                <li key={entry.title} className="relative">
                    <TimelineDot />
                    <p className="text-eyebrow">{entry.date}</p>
                    <h3 className="mt-1 text-lg font-semibold">
                        {entry.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        {entry.organization}
                    </p>
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                        {entry.points.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ol>
    )
}

const EducationList = () => {
    return (
        <ol className="relative space-y-8 border-l border-border pl-6">
            {education.map((entry) => (
                <li key={entry.school} className="relative">
                    <TimelineDot />
                    <div className="flex items-center gap-2">
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

            <div className="grid gap-6 lg:grid-cols-[.75fr_1.25fr]">
                <Card id="about">
                    <CardContent className="p-6">
                        <div className="grid aspect-[1.15] place-items-center rounded-xl border bg-muted/40 text-7xl font-black tracking-[-.08em]">
                            {site.initials}
                        </div>
                        <p className="mt-5 text-muted-foreground">
                            {about.summary}
                        </p>
                        <Separator className="my-5" />
                        <div className="grid gap-3">
                            {about.quickFacts.map(([label, value]) => (
                                <div
                                    key={label}
                                    className="flex justify-between"
                                >
                                    <span className="text-label">{label}</span>
                                    <strong>{value}</strong>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <div className="space-y-5">
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

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Toolbox</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {toolbox.map((skill) => (
                                <Badge variant="secondary" key={skill}>
                                    {skill}
                                </Badge>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
