import {
    Callout,
    FigurePlaceholder,
    TwoUp,
} from "@/components/project-components/project-components"
import type { ProjectContent } from "@/lib/projects"

export const wearableObstacleDetector: ProjectContent = {
    slug: "wearable-obstacle-detector",
    title: "Wearable Obstacle Detector",
    category: "robotics",
    description:
        "A haptic wearable concept that uses angled distance sensors to warn the user about obstacles ahead.",
    tags: ["HC-SR04", "TF-Luna", "Haptics"],
    metric: "50 cm sensing threshold",
    span: "md:col-span-5",
    eyebrow: "Human-centred design",
    caseStudyTags: [
        "Human-centred design",
        "Distance sensing",
        "Haptics",
        "Prototype",
    ],
    meta: [
        ["Type", "Team design project"],
        ["Output", "Working prototype"],
        ["Focus", "Sensing + haptics"],
    ],
    toc: [
        { id: "overview", title: "Overview" },
        { id: "requirements", title: "Requirements" },
        { id: "sensor-selection", title: "Sensor selection" },
        { id: "prototype-process", title: "Prototype process" },
        { id: "iteration", title: "Iteration" },
        { id: "results", title: "Results" },
        { id: "next-steps", title: "Next steps" },
    ],
    Body: () => (
        <>
            <h2 id="overview">Overview</h2>
            <p>
                The goal was to create a wearable obstacle-detection concept for
                a client with combined hearing and vision loss, using haptic
                feedback instead of audio or visual alerts.
            </p>
            <p>
                The technical problem was not simply to measure distance. The
                device had to detect relevant obstacles, avoid constant false
                triggers, communicate information through vibration, and remain
                wearable.
            </p>

            <h2 id="requirements">Requirements</h2>
            <p>
                Two distance sensors were angled to cover the useful space in
                front of the wearer rather than pointing straight ahead. The
                activation threshold was refined during testing so the warning
                arrived early enough to help without vibrating continuously.
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Aspect</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Feedback</td>
                        <td>Haptic only</td>
                    </tr>
                    <tr>
                        <td>Prototype threshold</td>
                        <td>~50 cm</td>
                    </tr>
                    <tr>
                        <td>Sensor geometry</td>
                        <td>Angled sensing zones</td>
                    </tr>
                    <tr>
                        <td>Form factor</td>
                        <td>Wearable necklace concept</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="sensor-selection">Sensor selection</h2>
            <p>
                Ultrasonic, infrared, and compact LiDAR-style sensors each bring
                different tradeoffs in field of view, target response, update
                rate, cost, and packaging.
            </p>
            <TwoUp
                items={[
                    {
                        label: "Simple prototype",
                        title: "Ultrasonic",
                        description:
                            "Low cost and easy to integrate, but the sensing cone and environmental behavior need testing.",
                    },
                    {
                        label: "Higher precision",
                        title: "Compact LiDAR",
                        description:
                            "Cleaner ranging and a narrower measurement direction, with different cost and packaging tradeoffs.",
                    },
                ]}
            />
            <FigurePlaceholder
                icon="◁"
                title="Add the sensor field-of-view diagram"
                description="Show the necklace from above with two sensing cones and the intended detection zone."
                caption="Figure 1 - Placement and field of view matter as much as nominal sensor range."
            />

            <h2 id="prototype-process">Prototype process</h2>
            <ol>
                <li>
                    <strong>Build a fast proof of concept.</strong> Verify that
                    a sensor can trigger a vibration motor at a useful distance.
                </li>
                <li>
                    <strong>Test sensing geometry.</strong> Change sensor angle
                    and placement to cover obstacles while reducing unwanted
                    detections.
                </li>
                <li>
                    <strong>Refine the threshold.</strong> Adjust activation
                    distance based on how early the warning needs to arrive.
                </li>
                <li>
                    <strong>Evaluate wearability.</strong> Consider weight,
                    cable routing, comfort, and whether the feedback is
                    understandable without demanding attention.
                </li>
            </ol>

            <h2 id="iteration">Iteration</h2>
            <p>
                A sensor can perform well on a bench and still fail as a
                wearable because the body moves, clothing blocks the sensor, and
                the ground can enter the field of view. The main iteration was
                therefore geometric: where should the sensors point so the
                device responds to meaningful obstacles?
            </p>
            <Callout label="Strong visual">
                Show the first sensor angle, what it detected incorrectly, and
                the revised angle. One before/after diagram communicates the
                process very clearly.
            </Callout>

            <h2 id="results">Results</h2>
            <p>
                The prototype demonstrated a working sensing-and-haptic concept
                and reinforced a key human-centred design lesson: the
                &quot;best&quot; sensor on a datasheet is not automatically the
                best sensor for a wearable system. Placement, feedback, comfort,
                and user context can dominate the design.
            </p>

            <h2 id="next-steps">Next steps</h2>
            <ul>
                <li>Build a smaller enclosure and improve cable management.</li>
                <li>
                    Run structured tests across multiple obstacle sizes and
                    approach angles.
                </li>
                <li>
                    Map distance to vibration intensity or pattern instead of a
                    single on/off threshold.
                </li>
                <li>
                    Compare sensor types on the same test course and record
                    false-positive / false-negative rates.
                </li>
            </ul>
        </>
    ),
}
