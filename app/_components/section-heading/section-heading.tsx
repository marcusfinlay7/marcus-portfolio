import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionHeadingProps = {
    title: ReactNode
    description?: ReactNode
    /** Small bordered chip rendered above the title — a number for case-study sections, a category label for the page title. */
    badge?: ReactNode
    /** "lg" is for a page-level title (bigger heading, bigger badge chip); "default" is for in-page section headings. */
    size?: "default" | "lg"
    children?: ReactNode
    className?: string
    descriptionClassName?: string
}

export const SectionHeading = ({
    title,
    description,
    badge,
    size = "default",
    children,
    className,
    descriptionClassName,
}: SectionHeadingProps) => {
    return (
        <div className={cn("mb-10 max-w-2xl", className)}>
            {badge ? (
                <span
                    className={cn(
                        "mb-3 inline-flex items-center justify-center rounded-md border border-primary/40 text-eyebrow",
                        size === "lg" ? "px-3 py-1.5" : "px-2 py-0.5",
                    )}
                >
                    {badge}
                </span>
            ) : null}
            <h2
                className={
                    size === "lg" ? "text-hero leading-[.98]" : "text-heading"
                }
            >
                {title}
            </h2>
            {description ? (
                <p
                    className={cn(
                        "text-description",
                        size === "lg" && "max-w-3xl text-lg",
                        descriptionClassName,
                    )}
                >
                    {description}
                </p>
            ) : null}
            {children}
        </div>
    )
}
