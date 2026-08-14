import { ArrowUpRight } from "lucide-react"

import { Separator } from "@/components/shadcn-ui/separator"
import { site } from "@/lib/site"

import { SectionHeading } from "../section-heading/section-heading"
import { socialIcons } from "../social-links/social-links"
import { socialLinks } from "../social-links/social-links.data"
import { contactSection } from "./contact-section.data"

export const ContactSection = () => {
    const primary = socialLinks.find((link) => link.icon === "mail")
    const secondary = socialLinks.filter((link) => link.icon !== "mail")
    const year = new Date().getFullYear()
    const PrimaryIcon = primary ? socialIcons[primary.icon] : null

    return (
        <footer id="contact" className="mx-auto max-w-6xl px-5 pt-20 pb-10">
            <SectionHeading
                title={contactSection.title}
                description={contactSection.description}
            />

            <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
                {primary && PrimaryIcon && (
                    <a
                        href={primary.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex min-h-72 flex-col justify-between rounded-xl border border-border bg-gradient-to-br from-card to-primary/10 p-8 ring-1 ring-foreground/10 transition hover:border-primary/40"
                    >
                        <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                            <PrimaryIcon className="size-5" />
                        </span>
                        <div>
                            <h3 className="text-xl font-semibold">
                                Start a conversation
                            </h3>
                            <p className="mt-2 text-muted-foreground">
                                {primary.description}
                            </p>
                        </div>
                        <div className="flex items-center justify-between border-t border-border pt-5 text-sm">
                            <span className="font-mono text-muted-foreground">
                                {primary.href.replace("mailto:", "")}
                            </span>
                            <span className="flex items-center gap-1 font-medium text-primary transition group-hover:translate-x-0.5">
                                Send email <ArrowUpRight className="size-4" />
                            </span>
                        </div>
                    </a>
                )}

                <div className="space-y-5">
                    {secondary.map((link) => {
                        const Icon = socialIcons[link.icon]

                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                target={
                                    link.icon === "resume"
                                        ? undefined
                                        : "_blank"
                                }
                                rel="noreferrer"
                                className="group grid grid-cols-[2.75rem_1fr_auto] items-center gap-4 rounded-xl border border-border bg-card p-5 ring-1 ring-foreground/10 transition hover:-translate-y-0.5 hover:border-primary/40"
                            >
                                <span className="grid size-11 place-items-center rounded-xl bg-muted text-foreground">
                                    <Icon className="size-5" />
                                </span>
                                <span>
                                    <span className="block font-medium">
                                        {link.label}
                                    </span>
                                    <span className="block text-sm text-muted-foreground">
                                        {link.description}
                                    </span>
                                </span>
                                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                            </a>
                        )
                    })}
                </div>
            </div>

            <Separator className="mt-16 mb-6" />
            <p className="text-sm text-muted-foreground">
                © {year} {site.name}
            </p>
        </footer>
    )
}
