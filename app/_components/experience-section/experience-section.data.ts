import { site } from "@/lib/site"

export type WorkEntry = {
    title: string
    organization: string
    date: string
    points: string[]
}

export type EducationEntry = {
    school: string
    program: string
    status: "in-progress" | "completed"
    date: string
    summary: string
}

export const experienceSection = {
    title: "Experience",
    description: "Internships, coursework, and hands-on projects.",
}

export const about = {
    summary:
        "Third-year Mechatronics Engineering student interested in robotics, controls, embedded systems, and mechanical design.",
    quickFacts: [
        ["Education", site.university],
        ["Location", site.location],
        ["Focus", site.focus],
    ] as [string, string][],
}

export const toolbox: string[] = [
    "C++",
    "Python",
    "ESP32",
    "PID control",
    "Autodesk Inventor",
    "AutoCAD",
    "COMPRESS",
    "MATLAB",
    "Git",
    "Electronics",
]

export const work: WorkEntry[] = [
    {
        title: "Mechanical Engineering Intern",
        organization: "Superior Boilerworks & Welding Ltd.",
        date: "May–Aug 2025",
        points: [
            "Updated pressure-vessel and tank designs, reviewed ASME design details in COMPRESS, and worked through changes with engineers and production constraints in mind.",
        ],
    },
    {
        title: "Independent Robotics Projects",
        organization: "Personal lab",
        date: "Ongoing",
        points: [
            "Embedded C++, sensor integration, motor control, power distribution, and mechanical assembly with documented testing and iteration.",
        ],
    },
]

export const education: EducationEntry[] = [
    {
        school: "McMaster University",
        program: "Mechatronics Engineering",
        status: "in-progress",
        date: "2023–Present",
        summary:
            "Coursework across signals, controls, mechanics, electronics, statistics, and software, plus multidisciplinary design projects.",
    },
]
