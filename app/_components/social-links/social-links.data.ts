export type SocialLink = {
    label: string
    icon: "mail" | "github" | "linkedin" | "resume"
    href: string
    description: string
}

// TODO: replace with Marcus's real contact links.
export const socialLinks: SocialLink[] = [
    {
        label: "Email",
        icon: "mail",
        href: "mailto:marcus@example.com",
        description: "The fastest way to reach me directly.",
    },
    {
        label: "GitHub",
        icon: "github",
        href: "https://github.com/marcusfinlay",
        description: "Code, experiments, and project source.",
    },
    {
        label: "LinkedIn",
        icon: "linkedin",
        href: "https://linkedin.com/in/marcusfinlay",
        description: "Professional background and updates.",
    },
    {
        label: "Resume",
        icon: "resume",
        href: "/resume/marcus-finlay-resume.pdf",
        description: "Full work history and education.",
    },
]
