"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"

import {
    type Course,
    courseLevels,
    mcmasterCourseDescriptionUrl,
} from "./experience-section.courses"

const terms = courseLevels.flatMap((level) =>
    level.terms.map((term) => ({ ...term, level: level.level })),
)

const defaultTerm =
    terms.find((term) => term.label === "Fall 2026") ?? terms.at(-1)

const getCourseUnits = (course: Course) => {
    if (/ENGINEER 1P13[AB]/.test(course.code)) return 6.5

    const courseNumber = course.code.split(" ").at(-1)
    const units = courseNumber?.match(/(\d)(?:[A-Z])?$/)?.[1]

    return Number(units ?? 0)
}

export const CourseExplorer = () => {
    const [activeTermLabel, setActiveTermLabel] = useState(
        defaultTerm?.label ?? "",
    )
    const activeTerm =
        terms.find((term) => term.label === activeTermLabel) ?? defaultTerm
    const [selectedCourseCode, setSelectedCourseCode] = useState(
        activeTerm?.courses[0]?.code ?? "",
    )
    const selectedCourse =
        activeTerm?.courses.find(
            (course) => course.code === selectedCourseCode,
        ) ?? activeTerm?.courses[0]
    const totalUnits =
        activeTerm?.courses.reduce(
            (total, course) => total + getCourseUnits(course),
            0,
        ) ?? 0

    const selectTerm = (termLabel: string) => {
        const term = terms.find((item) => item.label === termLabel)

        setActiveTermLabel(termLabel)
        setSelectedCourseCode(term?.courses[0]?.code ?? "")
    }

    return (
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="grid md:grid-cols-[15.5rem_1fr]">
                <aside className="border-b border-border px-3.5 py-5 md:border-r md:border-b-0">
                    <p className="px-2 pb-2 font-mono text-[10px] tracking-[0.16em] text-muted-foreground/70">
                        SEMESTERS
                    </p>
                    <div className="grid gap-[5px] sm:grid-cols-2 md:grid-cols-1">
                        {terms.map((term) => {
                            const isActive = term.label === activeTerm?.label

                            return (
                                <button
                                    key={term.label}
                                    type="button"
                                    onClick={() => selectTerm(term.label)}
                                    aria-pressed={isActive}
                                    className={cn(
                                        "flex cursor-pointer items-center justify-between gap-2.5 rounded-[10px] border px-3.5 py-3 text-left transition hover:border-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                        isActive
                                            ? "border-primary/50 bg-primary/10"
                                            : "border-border bg-transparent",
                                    )}
                                >
                                    <span className="flex min-w-0 flex-col gap-[3px]">
                                        <span
                                            className={cn(
                                                "text-sm font-semibold",
                                                isActive
                                                    ? "text-primary"
                                                    : "text-card-foreground/80",
                                            )}
                                        >
                                            {term.label}
                                        </span>
                                        <span className="font-mono text-[10px] text-muted-foreground">
                                            {term.level} ·{" "}
                                            {term.status === "completed"
                                                ? "Completed"
                                                : "Upcoming"}
                                        </span>
                                    </span>
                                    <span className="font-mono text-[11px] text-muted-foreground/70">
                                        {term.courses.length}
                                    </span>
                                </button>
                            )
                        })}
                    </div>
                </aside>

                <div className="px-4 py-5 sm:px-6 md:py-[22px]">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="text-[17px] font-semibold text-card-foreground">
                            {activeTerm?.label}
                        </h4>
                        <p className="font-mono text-[10.5px] text-muted-foreground/70">
                            {activeTerm?.courses.length ?? 0} COURSES ·{" "}
                            {totalUnits} UNITS
                        </p>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {activeTerm?.courses.map((course) => {
                            const isSelected =
                                course.code === selectedCourse?.code

                            return (
                                <button
                                    key={course.code}
                                    type="button"
                                    onClick={() =>
                                        setSelectedCourseCode(course.code)
                                    }
                                    aria-pressed={isSelected}
                                    className={cn(
                                        "flex min-h-21 cursor-pointer flex-col items-start gap-[7px] rounded-[11px] border p-[15px] text-left transition hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                        isSelected
                                            ? "border-primary/50 bg-primary/10"
                                            : "border-border bg-popover",
                                    )}
                                >
                                    <span className="font-mono text-[10.5px] text-primary">
                                        {course.code}
                                    </span>
                                    <span className="text-[13.5px] leading-[1.3] text-card-foreground">
                                        {course.name}
                                    </span>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>

            {selectedCourse ? (
                <div className="grid gap-7 border-t border-border bg-background/60 px-5 py-6 sm:px-7 md:grid-cols-[1fr_13.125rem] md:items-center">
                    <div className="flex flex-col gap-[7px]">
                        <p className="font-mono text-[11px] tracking-[0.06em] text-primary">
                            {selectedCourse.code} ·{" "}
                            {getCourseUnits(selectedCourse)} UNITS
                        </p>
                        <p className="text-[19px] text-foreground">
                            {selectedCourse.name}
                        </p>
                        <p className="max-w-[74ch] text-[13.5px] leading-[1.6] text-muted-foreground">
                            {selectedCourse.description}
                        </p>
                    </div>
                    <a
                        href={mcmasterCourseDescriptionUrl(
                            selectedCourse.courseId,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-[9px] bg-primary px-4 py-[13px] text-center font-mono text-[11px] tracking-[0.06em] text-primary-foreground transition hover:bg-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                        COURSE PAGE ↗
                    </a>
                </div>
            ) : null}
        </div>
    )
}
