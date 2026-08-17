import { ArrowRight, Download, MapPin } from "lucide-react"
import Image from "next/image"

import { Badge } from "@/components/shadcn-ui/badge"
import { buttonVariants } from "@/components/shadcn-ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

import { SocialLinks } from "../social-links/social-links"
import { hero } from "./hero.data"

export const Hero = () => {
    return (
        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,.85fr)] lg:items-center">
            <div className="flex flex-col justify-center">
                {site.availableForWork && (
                    <Badge
                        variant="outline"
                        className="mb-6 w-fit animate-in gap-2 rounded-full px-3 py-1.5 fade-in slide-in-from-bottom-2 duration-700"
                    >
                        <span className="relative flex size-2">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                        </span>
                        {site.availabilityLabel}
                    </Badge>
                )}

                <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
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
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Download /> {hero.ctaSecondary.label}
                    </a>
                    <SocialLinks className="ml-1" />
                </div>
            </div>

            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border bg-muted shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-700 delay-200 fill-mode-both">
                <Image
                    src={hero.headshot.src}
                    alt={hero.headshot.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) calc(100vw - 2.5rem), 40vw"
                    preload
                />
            </div>
        </section>
    )
}
