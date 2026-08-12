import { ProjectCaseStudy } from "../_components/project-case-study"

export default function Page() {
  return <ProjectCaseStudy
    eyebrow='Project case study / Human-centred design'
    title='Wearable Obstacle Detector'
    description='A haptic wearable concept using angled distance sensors to warn the user about obstacles ahead.'
    tags={['Human-centred design', 'Distance sensing', 'Haptics', 'Prototype']}
    meta={[['Type', 'Team design project'], ['Output', 'Working prototype'], ['Focus', 'Sensing + haptics']]}
    sections={[
{ title: 'Overview', paragraphs: ['The device uses haptic rather than audio or visual feedback, so sensor placement and vibration behavior become part of the core engineering problem.'] },
{ title: 'Requirements', paragraphs: ['The prototype used angled sensing zones and an approximately 50 cm activation distance.'] },
{ title: 'Sensor selection', paragraphs: ['Ultrasonic, infrared, and compact LiDAR options have different tradeoffs in field of view, target response, update rate, cost, and packaging.'] },
{ title: 'Prototype process', paragraphs: ['Build a fast proof of concept, test the sensing geometry, refine the threshold, and evaluate wearability.'] },
{ title: 'Iteration', paragraphs: ['Bench performance is not enough for a wearable; body movement, clothing, and the ground can all create unwanted detections.'] },
{ title: 'Results', paragraphs: ['The project showed how human factors can dominate sensor selection and system architecture.'] },
{ title: 'Next steps', paragraphs: ['Smaller packaging, structured obstacle tests, and richer haptic patterns would be the next revision.'] }
]}
    next={{ title: 'Airport Baggage System', href: '/projects/airport-baggage' }}
  />
}
