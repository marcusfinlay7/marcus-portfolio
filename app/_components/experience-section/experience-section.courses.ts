export type Course = {
    code: string
    name: string
    description: string
    courseId: number
}

export type CourseTerm = {
    label: string
    status: "completed" | "upcoming"
    courses: Course[]
}

export type CourseLevel = {
    level: string
    terms: CourseTerm[]
}

export const mcmasterCourseDescriptionUrl = (courseId: number) =>
    `https://academiccalendars.romcmaster.ca/preview_course_nopop.php?catoid=65&coid=${courseId}`

export const courseLevels: CourseLevel[] = [
    {
        level: "Level I",
        terms: [
            {
                label: "Fall 2024",
                status: "completed",
                courses: [
                    {
                        code: "ECON 1B03",
                        name: "Introductory Microeconomics",
                        description:
                            "Supply, demand, markets, incentives, and consumer and producer decision-making.",
                        courseId: 320935,
                    },
                    {
                        code: "ENGINEER 1EE0",
                        name: "Introduction to Career Planning & Employment",
                        description:
                            "Career planning, job-search skills, professional communication, and workplace readiness.",
                        courseId: 321000,
                    },
                    {
                        code: "ENGINEER 1P13A",
                        name: "Integrated Cornerstone Design Projects in Engineering",
                        description:
                            "Team-based engineering design, prototyping, programming, modelling, and communication.",
                        courseId: 322754,
                    },
                    {
                        code: "MATH 1ZA3",
                        name: "Engineering Mathematics I",
                        description:
                            "Differential calculus, limits, vectors, and mathematical modelling for engineering.",
                        courseId: 320291,
                    },
                    {
                        code: "MATH 1ZC3",
                        name: "Engineering Mathematics II-B",
                        description:
                            "Linear algebra, matrices, vector spaces, eigenvalues, and multivariable calculus.",
                        courseId: 320293,
                    },
                    {
                        code: "PHYSICS 1D03",
                        name: "Introductory Mechanics",
                        description:
                            "Motion, forces, energy, momentum, rotation, and foundational mechanics.",
                        courseId: 321331,
                    },
                    {
                        code: "WHMIS 1A00",
                        name: "Introduction to Health and Safety",
                        description:
                            "Workplace hazard recognition, safe material handling, labels, and safety data sheets.",
                        courseId: 321677,
                    },
                ],
            },
            {
                label: "Winter 2025",
                status: "completed",
                courses: [
                    {
                        code: "CHEM 1E03",
                        name: "General Chemistry for Engineering I",
                        description:
                            "Chemical structure, reactions, thermodynamics, materials, and engineering applications.",
                        courseId: 321696,
                    },
                    {
                        code: "ECON 1BB3",
                        name: "Introductory Macroeconomics",
                        description:
                            "Inflation, economic growth, employment, interest rates, and public policy.",
                        courseId: 320936,
                    },
                    {
                        code: "ENGINEER 1P13B",
                        name: "Integrated Cornerstone Design Projects in Engineering",
                        description:
                            "Team-based engineering design, prototyping, programming, modelling, and communication.",
                        courseId: 322754,
                    },
                    {
                        code: "MATH 1ZB3",
                        name: "Engineering Mathematics II-A",
                        description:
                            "Integral calculus, sequences, series, and introductory differential equations.",
                        courseId: 320292,
                    },
                    {
                        code: "PHYSICS 1E03",
                        name: "Waves, Electricity and Magnetic Fields",
                        description:
                            "Oscillations, waves, electric and magnetic fields, and circuit fundamentals.",
                        courseId: 321332,
                    },
                ],
            },
            {
                label: "Spring/Summer 2025",
                status: "completed",
                courses: [
                    {
                        code: "ENGINEER 2EC0",
                        name: "Engineering Work Term",
                        description:
                            "Practical engineering experience, professional development, and workplace application.",
                        courseId: 321884,
                    },
                ],
            },
        ],
    },
    {
        level: "Level II",
        terms: [
            {
                label: "Fall 2025",
                status: "completed",
                courses: [
                    {
                        code: "ENGPHYS 2CD4",
                        name: "Computational Mechanics: Dynamics",
                        description:
                            "Particle and rigid-body dynamics solved through analytical and computational methods.",
                        courseId: 322965,
                    },
                    {
                        code: "ENGPHYS 2E04",
                        name: "Analog and Digital Circuits",
                        description:
                            "Circuit analysis, semiconductor devices, operational amplifiers, and digital logic.",
                        courseId: 321707,
                    },
                    {
                        code: "ENGPHYS 2P04",
                        name: "Computational Mechanics: Statics",
                        description:
                            "Forces, moments, equilibrium, structures, and computational approaches to statics.",
                        courseId: 319822,
                    },
                    {
                        code: "MATH 2Z03",
                        name: "Engineering Mathematics III",
                        description:
                            "Differential equations, Laplace transforms, and mathematical models of systems.",
                        courseId: 320297,
                    },
                    {
                        code: "MECHTRON 2MP3",
                        name: "Programming for Mechatronics",
                        description:
                            "C programming, memory management, data structures, and CPU and memory architecture.",
                        courseId: 322790,
                    },
                    {
                        code: "SUSTAIN 1S03",
                        name: "Introduction to Sustainability",
                        description:
                            "Environmental, social, and economic sustainability through systems-level thinking.",
                        courseId: 321811,
                    },
                ],
            },
            {
                label: "Winter 2026",
                status: "completed",
                courses: [
                    {
                        code: "ENGINEER 2PX3",
                        name: "Engineering: Communications and Social Impact",
                        description:
                            "Technical writing, presentations, teamwork, and engineering's impact on society.",
                        courseId: 322787,
                    },
                    {
                        code: "ENGPHYS 2A04",
                        name: "Electricity and Magnetism",
                        description:
                            "Electrostatics, magnetic fields, induction, and electromagnetic applications.",
                        courseId: 321015,
                    },
                    {
                        code: "MATH 2ZZ3",
                        name: "Engineering Mathematics IV",
                        description:
                            "Multivariable calculus, Fourier methods, and partial differential equations.",
                        courseId: 320298,
                    },
                    {
                        code: "MECHENG 2BA3",
                        name: "Mechanical Engineering Measurements",
                        description:
                            "Sensors, instrumentation, uncertainty, data acquisition, and experimental analysis.",
                        courseId: 322165,
                    },
                    {
                        code: "MECHTRON 2MD3",
                        name: "Data Structures and Algorithms for Mechatronics",
                        description:
                            "Data structures, algorithm design, complexity analysis, and efficient implementation.",
                        courseId: 322789,
                    },
                    {
                        code: "MECHTRON 2TA4",
                        name: "Embedded Systems Design I",
                        description:
                            "Microcontrollers, peripherals, real-time programming, interfacing, and embedded design.",
                        courseId: 322791,
                    },
                ],
            },
            {
                label: "Spring/Summer 2026",
                status: "completed",
                courses: [
                    {
                        code: "MUSIC 2MT3",
                        name: "Introduction to the Practice of Music Therapy",
                        description:
                            "Music therapy practices, clinical applications, and music in care and rehabilitation.",
                        courseId: 321158,
                    },
                    {
                        code: "STATS 3Y03",
                        name: "Probability and Statistics for Engineering",
                        description:
                            "Probability, random variables, estimation, confidence intervals, and hypothesis testing.",
                        courseId: 321643,
                    },
                ],
            },
        ],
    },
    {
        level: "Level III",
        terms: [
            {
                label: "Fall 2026",
                status: "upcoming",
                courses: [
                    {
                        code: "ELECENG 3N03",
                        name: "Analog Electronics for Measuring Systems",
                        description:
                            "Analog circuit design, signal conditioning, amplification, and measurement systems.",
                        courseId: 322801,
                    },
                    {
                        code: "ENGPHYS 2NE3",
                        name: "Thermal Systems Design",
                        description:
                            "Thermodynamics, heat transfer, energy conversion, and thermal-system design.",
                        courseId: 319821,
                    },
                    {
                        code: "MECHENG 2DA3",
                        name: "Mechanical Engineering Design Elements",
                        description:
                            "Mechanical components, stress and failure analysis, material selection, and design.",
                        courseId: 322283,
                    },
                    {
                        code: "MECHTRON 3K04",
                        name: "Software Development",
                        description:
                            "Software architecture, design practices, testing, version control, and team development.",
                        courseId: 322626,
                    },
                    {
                        code: "MECHTRON 3MX3",
                        name: "Signals and Systems",
                        description:
                            "Continuous and discrete signals, transforms, frequency response, and system analysis.",
                        courseId: 322627,
                    },
                    {
                        code: "MECHTRON 3X03",
                        name: "Scientific Computation",
                        description:
                            "Numerical methods, computational modelling, approximation, and engineering analysis.",
                        courseId: 322956,
                    },
                ],
            },
            {
                label: "Winter 2027",
                status: "upcoming",
                courses: [
                    {
                        code: "ENGINEER 3PX3",
                        name: "Engineering Economics",
                        description:
                            "Cost estimation, project valuation, risk, and economic decision-making for engineers.",
                        courseId: 322788,
                    },
                    {
                        code: "MECHTRON 3DX4",
                        name: "Dynamic Models and Control of Physical Systems",
                        description:
                            "Dynamic modelling, feedback, stability, and control-system analysis and design.",
                        courseId: 321034,
                    },
                    {
                        code: "MECHTRON 3TB4",
                        name: "Embedded Systems Design II",
                        description:
                            "Advanced embedded architectures, real-time systems, communication, and integration.",
                        courseId: 321035,
                    },
                    {
                        code: "SFWRENG 3SH3",
                        name: "Operating Systems",
                        description:
                            "Processes, threads, memory management, file systems, and operating-system concurrency.",
                        courseId: 321614,
                    },
                ],
            },
        ],
    },
]
