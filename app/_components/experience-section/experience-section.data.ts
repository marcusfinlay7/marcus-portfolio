export type WorkEntry = {
    title: string
    organization: string
    location: string
    date: string
    logo: string
    points: string[]
}

export type EducationEntry = {
    school: string
    program: string
    status: "in-progress" | "completed"
    date: string
    logo: string
    logoClassName?: string
    summary: string
    programUrl: string
}

export const experienceSection = {
    title: "Experience",
    description: "Internships, coursework, and hands-on projects.",
}

export const work: WorkEntry[] = [
    {
        title: "Mechanical Engineering Intern",
        organization: "Superior Boilerworks & Welding Ltd.",
        location: "Stoney Creek, ON",
        date: "May–Aug 2025",
        logo: "/work-logos/superior-boilerworks.jpg",
        points: [
            "Used Autodesk Inventor to review pressure-vessel models and drawings, verify dimensions and component interfaces, and support design revisions for fabrication.",
            "Helped create and update 3D designs and production drawings for pressure vessels and storage tanks based on engineering and shop-floor feedback.",
            "Reviewed pressure-vessel designs in COMPRESS, checking design inputs and results against applicable ASME code requirements.",
            "Performed supporting tank calculations, including stress and thickness checks, to confirm components could withstand their design loads and operating conditions.",
        ],
    },
    {
        title: "Warehouse Assistant",
        organization: "Stoney Creek Furniture",
        location: "Hamilton, ON",
        date: "Jun 2022–Aug 2024",
        logo: "/work-logos/stoney-creek-furniture.png",
        points: [
            "Coordinated with warehouse and sales teams to streamline customer pickups and deliver an efficient customer experience.",
            "Assembled and disassembled furniture for pickup while maintaining product quality and company handling standards.",
            "Earned Class 2 forklift certification and safely retrieved inventory from high-bay storage racks.",
            "Operated compactors and followed waste-management procedures to maintain a safe, organized warehouse.",
        ],
    },
]

export const education: EducationEntry[] = [
    {
        school: "McMaster University",
        program: "Bachelor of Engineering, Mechatronics Engineering",
        status: "in-progress",
        date: "2023–Present",
        logo: "/education-logos/mcmaster-university.png",
        logoClassName: "scale-[1.20]",
        summary:
            "Mechatronics Engineering at McMaster with coursework in embedded systems, controls, signals, mechanics, electronics, software, mathematics, and multidisciplinary engineering design.",
        programUrl:
            "https://www.eng.mcmaster.ca/cas/degree-options/mechatronics/",
    },
]
