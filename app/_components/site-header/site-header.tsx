import { ArrowUpRight } from "lucide-react"

import { buttonVariants } from "@/components/shadcn-ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

import { navItems } from "./site-header.data"

export const SiteHeader = () => {
    return (
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
                <a
                    href="#top"
                    className="flex items-center gap-3 text-nav tracking-tight"
                >
                    <span className="grid size-9 place-items-center rounded-lg bg-foreground text-xs font-extrabold text-background">
                        {site.initials}
                    </span>
                    {site.name}
                </a>
                <nav className="hidden items-center gap-1 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={cn(
                                buttonVariants({
                                    variant: "ghost",
                                    size: "sm",
                                }),
                                "text-nav",
                            )}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
                <a
                    href="#contact"
                    className={cn(
                        buttonVariants({ variant: "outline" }),
                        "group hidden text-nav sm:inline-flex",
                    )}
                >
                    {site.headerCta}{" "}
                    <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
            </div>
        </header>
    )
}
