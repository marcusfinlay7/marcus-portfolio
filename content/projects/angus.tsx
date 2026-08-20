import {
    Callout,
    FigurePlaceholder,
    TwoUp,
} from "@/components/project-components/project-components"
import type { ProjectContent } from "@/lib/projects"

export const angus: ProjectContent = {
    slug: "angus",
    title: "Angus - Self-Balancing Robot",
    category: "robotics",
    description:
        "A two-wheel balancing robot built to learn embedded control from the sensor all the way to the motors.",
    tags: ["C++", "PID", "CAD", "ESP32"],
    metric: "Mechanical + electrical + firmware",
    span: "md:col-span-7",
    eyebrow: "Robotics",
    caseStudyTags: [
        "Featured build",
        "C++",
        "ESP32-C3",
        "PID control",
        "Encoders",
    ],
    meta: [
        ["Role", "Independent build"],
        ["Status", "Working prototype"],
        ["Focus", "Controls + embedded"],
    ],
    toc: [
        { id: "overview", title: "Overview" },
        { id: "system-architecture", title: "System architecture" },
        { id: "build-process", title: "Build process" },
        { id: "control-loop", title: "Control loop" },
        { id: "iterations", title: "Iterations" },
        { id: "results-lessons", title: "Results & lessons" },
        { id: "next-steps", title: "Next steps" },
    ],
    Body: () => (
        <>
            <h2 id="overview">Overview</h2>
            <p>
                The self-balancing robot later named Angus by my grandmother
                started as a way to learn the whole robotics stack at once. The
                mechanical design, electronics, sensors, embedded C++, and motor
                control. It eventually developed into the project that inspired
                me to learn more about control systems.
            </p>
            <p>
                Angus uses sensors to measure its tilt and continuously adjusts
                its wheel motors to keep itself upright. For this to work, every
                subsystem must operate together. The sensor data must be
                reliable, the motors must respond quickly, and the controller
                must correct the robot before it tips too far to recover.
            </p>

            <h2 id="system-architecture">System architecture</h2>
            <p>
                The ESP32-C3 reads orientation from the BNO085, computes the
                balance correction, and drives two DC motors through the motor
                driver. Encoder feedback gives the platform a path toward
                velocity and position control.
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Component</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Controller</td>
                        <td>ESP32-C3</td>
                    </tr>
                    <tr>
                        <td>IMU</td>
                        <td>BNO085</td>
                    </tr>
                    <tr>
                        <td>Motor driver</td>
                        <td>TB6612FNG</td>
                    </tr>
                    <tr>
                        <td>Drive</td>
                        <td>2 x 12 V DC motors + encoders</td>
                    </tr>
                    <tr>
                        <td>Battery</td>
                        <td>3S LiPo, 11.1 V</td>
                    </tr>
                    <tr>
                        <td>Control</td>
                        <td>PID balance loop</td>
                    </tr>
                </tbody>
            </table>
            <FigurePlaceholder
                icon="⌁"
                title="Add a wiring / block diagram here"
                description="Battery to regulator to controller and IMU to motor driver to motors. A simple diagram is enough."
                caption="Figure 1 - Recommended system architecture visual."
            />

            <h2 id="build-process">Build process</h2>
            <ol>
                <li>
                    <strong>Make the motors reliable first.</strong> Verify
                    direction, PWM response, encoder wiring, and power delivery
                    before trying to balance.
                </li>
                <li>
                    <strong>Get stable orientation data.</strong> Integrate the
                    IMU and confirm the software axis matches the robot&apos;s
                    physical forward/backward tilt.
                </li>
                <li>
                    <strong>Close the feedback loop.</strong> Turn tilt error
                    into a signed motor command and add fall protection /
                    integral reset logic.
                </li>
                <li>
                    <strong>Tune on the real chassis.</strong> Increase response
                    until it catches itself, then add damping and correction
                    while watching for saturation.
                </li>
            </ol>

            <h2 id="control-loop">Control loop</h2>
            <p>
                The interesting part of PID is not the equation itself but how
                each gain appears physically. Too little proportional gain and
                Angus cannot catch itself; too much produces rapid oscillation.
                Integral can correct a persistent lean but can also wind up
                after a fall, while derivative action helps damp motion but is
                sensitive to noise.
            </p>
            <p>
                A remaining issue is forward drift: angle control can keep the
                chassis upright without keeping wheel velocity at zero.
            </p>
            <pre>
                <code>{`error = target_angle - roll;

integral += error * dt;
derivative = (error - previous_error) / dt;

command = Kp*error + Ki*integral + Kd*derivative;

if (abs(roll) > 45deg) {
  integral = 0;
  motors.stop();
}`}</code>
            </pre>
            <p>
                <em>Figure 2 - Simplified balance-controller structure.</em>
            </p>
            <TwoUp
                items={[
                    {
                        label: "Observed issue",
                        title: "Forward drift",
                        description:
                            "Upright does not necessarily mean stationary; the robot can balance while slowly moving away.",
                    },
                    {
                        label: "Next control layer",
                        title: "Velocity outer loop",
                        description:
                            "Use encoder velocity to shift the balance setpoint and pull the robot back toward zero speed.",
                    },
                ]}
            />

            <h2 id="iterations">Iterations</h2>
            <p>
                Testing made it clear that &quot;bad PID&quot; can actually be a
                mechanical, electrical, or sensor problem. Chassis flex, wheel
                alignment, motor mismatch, axis conventions, and battery
                behavior all change the plant being controlled.
            </p>
            <blockquote>
                A strong case study should show at least one failed version and
                explain what that failure taught you.
            </blockquote>
            <FigurePlaceholder
                icon="↻"
                title="Before / after prototype photos"
                description="Place an early Angus build beside the current one and caption the mechanical or wiring changes."
                caption="Figure 3 - Iteration should be visible in the final page."
            />

            <h2 id="results-lessons">Results & lessons</h2>
            <p>
                The project produced a working platform that ties together
                embedded software, sensing, motor driving, encoders, power
                distribution, and real-time feedback control.
            </p>
            <ul>
                <li>
                    <strong>Controls:</strong> each gain became easier to
                    understand when tied to a visible physical behavior.
                </li>
                <li>
                    <strong>Embedded:</strong> predictable timing and clean
                    sensor data matter as much as the controller equation.
                </li>
                <li>
                    <strong>Mechanical:</strong> stiffness, centre of mass,
                    friction, and wheel alignment directly affect control.
                </li>
                <li>
                    <strong>Debugging:</strong> isolate one subsystem at a time
                    before changing gains.
                </li>
            </ul>

            <h2 id="next-steps">Next steps</h2>
            <p>
                The next version would add an encoder-based velocity/position
                loop, better telemetry for tuning, and a more systematic
                comparison between PID and state-space control such as LQR. I
                would also redesign the chassis around easier battery access and
                more repeatable component mounting.
            </p>
            <Callout label="Best final assets">
                End the real page with a short demo video, GitHub link, CAD
                screenshots, and a concise &quot;what I would change next&quot;
                section.
            </Callout>
        </>
    ),
}
