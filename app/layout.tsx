import type { Metadata } from "next"
import { Geist, Geist_Mono, JetBrains_Mono, Roboto } from "next/font/google"
import "./globals.css"

import { hero } from "@/app/_components/hero/hero.data"
import { site } from "@/lib/site"

const geistSans = Geist({
    variable: "--font-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

// Scoped to case-study body content only (see .typeset-docs in globals.css) —
// the rest of the site keeps using Geist via --font-sans/--font-mono above.
const roboto = Roboto({
    subsets: ["latin"],
    variable: "--font-roboto",
})

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
    title: `${site.name} - Mechatronics Engineer`,
    description: hero.subhead,
}

type SiteTheme = "portfolio" | "coursework"

const ACTIVE_THEME: SiteTheme = "coursework"

const RootLayout = ({ children }: LayoutProps<"/">) => {
    return (
        <html
            lang="en"
            className={`dark theme-${ACTIVE_THEME} ${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${jetbrainsMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <span aria-hidden="true" className="background-gradient">
                    <span className="background-gradient-segment background-gradient-segment-top-right" />
                    <span className="background-gradient-segment background-gradient-segment-bottom-right" />
                    <span className="background-gradient-segment background-gradient-segment-top-left" />
                    <span className="background-gradient-segment background-gradient-segment-bottom-left" />
                </span>
                {children}
            </body>
        </html>
    )
}

export default RootLayout
