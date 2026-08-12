import { ProjectCaseStudy } from "../_components/project-case-study"

export default function Page() {
  return <ProjectCaseStudy
    eyebrow='Project case study / Mechanical'
    title='Pressure Vessel Engineering'
    description='A sanitized look at CAD, calculations, and design-for-manufacturing work for industrial pressure equipment.'
    tags={['Industrial design', 'Inventor', 'AutoCAD', 'COMPRESS', 'ASME VIII']}
    meta={[['Context', 'Engineering co-op'], ['Tools', 'Inventor + COMPRESS'], ['Focus', 'Mechanical design']]}
    sections={[
{ title: 'Overview', paragraphs: ['This case study focuses on how design changes are checked against code requirements, manufacturing constraints, and existing drawings.'] },
{ title: 'Design context', paragraphs: ['Small changes to a nozzle, flange, support, or plate can affect calculations, drawings, fabrication, and adjacent geometry.'] },
{ title: 'Engineering process', paragraphs: ['Understand the feature, update the model and drawing, review the calculation model, and resolve the limiting condition.'] },
{ title: 'Example decision', paragraphs: ['A useful public example is a sanitized nozzle/flange decision that shows the reasoning without exposing proprietary dimensions.'] },
{ title: 'Design for manufacturing', paragraphs: ['A design can pass a calculation and still be awkward to fabricate; access, fit-up, plate sizing, and drawing clarity matter.'] },
{ title: 'Takeaways', paragraphs: ['The experience connected 3D CAD, 2D drawings, code calculations, and production reality.'] }
]}
    next={{ title: 'Wearable Obstacle Detector', href: '/projects/wearable-obstacle-detector' }}
  />
}
