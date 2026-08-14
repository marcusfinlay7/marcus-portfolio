import { ArrowRight, Download, MapPin } from "lucide-react"

import { Badge } from "@/components/shadcn-ui/badge"
import { buttonVariants } from "@/components/shadcn-ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

import { SocialLinks } from "../social-links/social-links"
import { hero } from "./hero.data"

export const Hero = () => {
    return (
        <section className="mx-auto max-w-6xl px-5 py-24">
            {site.availableForWork && (
                <Badge
                    variant="outline"
                    className="mb-6 animate-in gap-2 rounded-full px-3 py-1.5 fade-in slide-in-from-bottom-2 duration-700"
                >
                    <span className="relative flex size-2">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                    </span>
                    {site.availabilityLabel}
                </Badge>
            )}

            <div className="flex animate-in items-center gap-4 fade-in slide-in-from-bottom-2 duration-700">
                <div className="grid size-14 shrink-0 place-items-center rounded-full bg-muted text-lg font-bold ring-2 ring-border">
                    {site.initials}
                </div>
                <div>
                    <p className="font-semibold">
                        {hero.greeting}{" "}
                        <span className="inline-block origin-bottom-right hover:animate-wave">
                            👋
                        </span>
                    </p>
                    <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="size-3.5" /> {site.location}
                    </p>
                </div>
            </div>

            <h1 className="mt-6 animate-in text-hero leading-[.98] fade-in slide-in-from-bottom-3 duration-700 delay-100 fill-mode-both">
                {hero.headline}
            </h1>
            <p className="mt-5 max-w-xl animate-in text-description text-lg fade-in slide-in-from-bottom-3 duration-700 delay-200 fill-mode-both">
                {hero.subhead}
            </p>

            <div className="mt-8 flex animate-in flex-wrap items-center gap-3 fade-in slide-in-from-bottom-3 duration-700 delay-300 fill-mode-both">
                <a
                    className={cn(buttonVariants({ size: "lg" }), "group")}
                    href={hero.ctaPrimary.href}
                >
                    {hero.ctaPrimary.label}{" "}
                    <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                    className={cn(
                        buttonVariants({ size: "lg", variant: "outline" }),
                    )}
                    href={hero.ctaSecondary.href}
                    download
                >
                    <Download /> {hero.ctaSecondary.label}
                </a>
                <SocialLinks className="ml-1" />
            </div>
        </section>
    )
}
