import { ProjectCaseStudy } from "../_components/project-case-study"

export default function Page() {
  return <ProjectCaseStudy
    eyebrow='Project case study / Robotics'
    title='Angus — Self-Balancing Robot'
    description='A two-wheel balancing robot built to learn embedded control from the sensor all the way to the motors.'
    tags={['Featured build', 'ESP32-C3', 'BNO085', 'PID control', 'Encoders']}
    meta={[['Role', 'Independent build'], ['Status', 'Working prototype'], ['Focus', 'Controls + embedded']]}
    sections={[
{ title: 'Overview', paragraphs: ['Angus started as a way to learn the complete robotics stack: mechanical design, power electronics, sensing, embedded C++, motor control, and feedback control.'] },
{ title: 'System architecture', paragraphs: ['An ESP32-C3 reads orientation from the BNO085 and drives two DC motors through a TB6612FNG. Encoder feedback supports the next step: velocity and position control.'] },
{ title: 'Build process', paragraphs: ['I verified motors and encoders first, integrated the IMU, closed the feedback loop, then tuned the real chassis.'] },
{ title: 'Control loop', paragraphs: ['PID keeps the robot upright, but balance alone does not guarantee zero wheel velocity; the remaining drift motivates an outer velocity loop.'] },
{ title: 'Iterations', paragraphs: ['Mechanical stiffness, axis conventions, motor mismatch, and power behavior can all look like controller problems at first.'] },
{ title: 'Results & lessons', paragraphs: ['The project connected sensing, embedded code, motor driving, power distribution, and control into one working platform.'] },
{ title: 'Next steps', paragraphs: ['Add velocity/position control, better telemetry, and compare PID with a state-space approach such as LQR.'] }
]}
    next={{ title: 'Pressure Vessel Engineering', href: '/projects/pressure-vessel' }}
  />
}
