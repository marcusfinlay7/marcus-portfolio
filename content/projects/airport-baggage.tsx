import {
    FigurePlaceholder,
    TwoUp,
} from "@/components/project-components/project-components"
import type { ProjectContent } from "@/lib/projects"

export const airportBaggage: ProjectContent = {
    slug: "airport-baggage",
    title: "Airport Baggage System",
    category: "software",
    description:
        "A Python decision system paired with a physical baggage-transfer mechanism and iterative prototype testing.",
    tags: ["Python", "Algorithms", "Data parsing"],
    metric: "Software + physical mechanism",
    span: "md:col-span-7",
    eyebrow: "Software + mechanism",
    caseStudyTags: ["Python", "Algorithms", "Data parsing", "Prototyping"],
    meta: [
        ["Type", "Engineering design project"],
        ["Software", "Python"],
        ["Focus", "Software + mechanism"],
    ],
    toc: [
        { id: "overview", title: "Overview" },
        { id: "software", title: "Software" },
        { id: "mechanism", title: "Mechanism" },
        { id: "documentation", title: "Documentation" },
        { id: "lessons", title: "Lessons" },
        { id: "next-steps", title: "Next steps" },
    ],
    Body: () => (
        <>
            <h2 id="overview">Overview</h2>
            <p>
                This engineering project combined Python data processing with
                the design of a physical mechanism for moving baggage between
                levels.
            </p>
            <p>
                The software read passenger and fleet information and determined
                outcomes such as boarded, oversold, bumped, overweight, delayed,
                and layovers. In parallel, the team had to build and test a real
                baggage-transfer concept.
            </p>

            <h2 id="software">Software</h2>
            <p>
                The first challenge was converting input text files into
                consistent internal structures. From there the program could
                apply the project rules and record each passenger&apos;s outcome
                in a traceable way.
            </p>
            <pre>
                <code>{`load passenger_data.txt
load fleet_data.txt

parse -> validate -> classify -> assign

outputs:
  boarded
  oversold / bumped
  overweight
  delayed
  layovers`}</code>
            </pre>
            <p>
                <em>Figure 1 - Simplified software data flow.</em>
            </p>
            <TwoUp
                items={[
                    {
                        label: "Programming focus",
                        title: "Data handling",
                        description:
                            "Parsing, conditions, data structures, validation, and repeatable outputs.",
                    },
                    {
                        label: "Engineering focus",
                        title: "Traceable decisions",
                        description:
                            "Make it clear why each passenger receives an outcome rather than reporting only final counts.",
                    },
                ]}
            />

            <h2 id="mechanism">Mechanism</h2>
            <p>
                An early rotary concept used string to move the baggage
                platform, but slack and alignment made the motion difficult to
                control reliably. The later design used a linear-actuator bridge
                with a hinge, slider rails, and side walls to constrain the bag
                more predictably.
            </p>
            <ol>
                <li>
                    <strong>Rotary / string concept.</strong> Simple in theory,
                    but the string introduced slack, inconsistent motion, and
                    alignment problems.
                </li>
                <li>
                    <strong>Linear-actuator bridge.</strong> A more constrained
                    mechanism made the motion easier to predict and integrate.
                </li>
                <li>
                    <strong>Rails and side walls.</strong> Mechanical guidance
                    reduced the number of ways the baggage could leave the
                    intended path.
                </li>
            </ol>

            <h2 id="documentation">Documentation</h2>
            <p>
                The strongest version of this page should connect the software
                and hardware visually rather than presenting them as separate
                assignments.
            </p>
            <FigurePlaceholder
                icon="▣"
                title="Split visual: program output + mechanism"
                description="Put a terminal/output screenshot beside a prototype photo, CAD sketch, or mechanism diagram."
                caption="Figure 2 - Pairing software evidence with hardware evidence makes the project easy to understand."
            />

            <h2 id="lessons">Lessons</h2>
            <ul>
                <li>
                    Constrained motion reduces failure modes in physical
                    prototypes.
                </li>
                <li>
                    Software is easier to debug when parsing, decision logic,
                    and output are separated.
                </li>
                <li>
                    Testing an early idea quickly is more valuable than
                    polishing a mechanism that is fundamentally unreliable.
                </li>
                <li>
                    Good documentation explains why the final design differs
                    from the first sketch.
                </li>
            </ul>

            <h2 id="next-steps">Next steps</h2>
            <p>
                Today I would structure the Python portion around clearer data
                models and unit tests, model the mechanism in CAD before
                fabrication, and record throughput, repeatability, and
                failure-rate measurements so the final concept could be compared
                quantitatively with the earlier one.
            </p>
        </>
    ),
}
