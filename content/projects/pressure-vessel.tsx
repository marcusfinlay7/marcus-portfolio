import {
    Callout,
    FigurePlaceholder,
    TwoUp,
} from "@/components/project-components/project-components"
import type { ProjectContent } from "@/lib/projects"

export const pressureVessel: ProjectContent = {
    slug: "pressure-vessel",
    title: "Pressure Vessel Engineering",
    category: "mechanical",
    description:
        "A sanitized look at the CAD, calculation, and design-for-manufacturing work behind industrial pressure equipment.",
    tags: ["Inventor", "COMPRESS", "ASME VIII"],
    metric: "Flanges, saddles, wear plates",
    span: "md:col-span-5",
    eyebrow: "Mechanical",
    caseStudyTags: [
        "Industrial design",
        "Inventor",
        "AutoCAD",
        "COMPRESS",
        "ASME VIII",
    ],
    meta: [
        ["Context", "Engineering co-op"],
        ["Tools", "Inventor + COMPRESS"],
        ["Focus", "Mechanical design"],
    ],
    toc: [
        { id: "overview", title: "Overview" },
        { id: "design-context", title: "Design context" },
        { id: "engineering-process", title: "Engineering process" },
        { id: "example-decision", title: "Example decision" },
        { id: "design-for-manufacturing", title: "Design for manufacturing" },
        { id: "takeaways", title: "Takeaways" },
        { id: "final-portfolio-assets", title: "Final portfolio assets" },
    ],
    Body: () => (
        <>
            <h2 id="overview">Overview</h2>
            <p>
                This case study is less about one finished object and more about
                how design decisions are checked against pressure-vessel code,
                manufacturing constraints, and existing drawings.
            </p>
            <p>
                During my mechanical engineering co-op I worked with Autodesk
                Inventor, AutoCAD, and Codeware COMPRESS on deaerator heater and
                storage-tank design tasks.
            </p>
            <Callout label="Confidentiality">
                Use sanitized screenshots or recreated diagrams. Avoid customer
                names, job numbers, proprietary dimensions, and internal
                drawings unless the company approves them.
            </Callout>

            <h2 id="design-context">Design context</h2>
            <p>
                A change that looks small in CAD - such as a nozzle, flange,
                saddle plate, or wear plate - can affect code compliance,
                material requirements, fabrication, and the rest of the drawing
                package.
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Area</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CAD</td>
                        <td>Autodesk Inventor</td>
                    </tr>
                    <tr>
                        <td>Drawings</td>
                        <td>AutoCAD</td>
                    </tr>
                    <tr>
                        <td>Code calculations</td>
                        <td>Codeware COMPRESS</td>
                    </tr>
                    <tr>
                        <td>Context</td>
                        <td>ASME Section VIII pressure equipment</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="engineering-process">Engineering process</h2>
            <ol>
                <li>
                    <strong>Understand the affected feature.</strong> Identify
                    what is changing and which nearby geometry, connections, and
                    calculation inputs depend on it.
                </li>
                <li>
                    <strong>Update the model and drawing.</strong> Make the CAD
                    change while keeping clearance, weld access, and fabrication
                    practicality in mind.
                </li>
                <li>
                    <strong>Review the calculation model.</strong> Update or
                    inspect COMPRESS inputs and warnings to find the governing
                    limit.
                </li>
                <li>
                    <strong>Resolve the limiting condition.</strong> Compare
                    practical alternatives and keep the CAD, drawing, and
                    calculation model consistent.
                </li>
            </ol>

            <h2 id="example-decision">Example decision</h2>
            <p>
                A useful public example is a nozzle connection where a flange
                rating or local geometry becomes the limiting constraint. The
                portfolio story is the reasoning: identify the limit, compare an
                alternate arrangement, verify it, and document the change.
            </p>
            <FigurePlaceholder
                icon="⌬"
                title="Recreated pressure-vessel detail"
                description="Show a simplified nozzle/head sketch with generic callouts rather than a production drawing."
                caption="Figure 1 - A sanitized diagram can demonstrate engineering judgement without revealing proprietary data."
            />

            <h2 id="design-for-manufacturing">Design for manufacturing</h2>
            <p>
                A calculation can pass while the design is still awkward to
                fabricate. Supports, plate sizing, nozzle access, weld details,
                and shop fit-up all matter.
            </p>
            <TwoUp
                items={[
                    {
                        label: "Calculation view",
                        title: "Does it satisfy code?",
                        description:
                            "Loads, thickness, pressure limits, material properties, radiography, and component ratings.",
                    },
                    {
                        label: "Production view",
                        title: "Can it be built cleanly?",
                        description:
                            "Clearance, fit-up, weld access, plate sizing, drawing clarity, and shop practicality.",
                    },
                ]}
            />

            <h2 id="takeaways">Takeaways</h2>
            <ul>
                <li>
                    I became more comfortable moving between 3D CAD, 2D
                    drawings, and engineering calculations.
                </li>
                <li>
                    I learned to treat software warnings as clues to the
                    governing design constraint rather than errors to simply
                    clear.
                </li>
                <li>
                    I saw how small drafting changes can affect fabrication and
                    compliance.
                </li>
                <li>
                    I learned the value of traceable revisions and clear design
                    intent.
                </li>
            </ul>

            <h2 id="final-portfolio-assets">Final portfolio assets</h2>
            <p>
                The finished page should use one recreated vessel diagram, one
                sanitized CAD screenshot, a small design-decision callout, and a
                short reflection on code-based design and manufacturing
                constraints.
            </p>
        </>
    ),
}
