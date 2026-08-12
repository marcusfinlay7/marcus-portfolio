import { ProjectCaseStudy } from "../_components/project-case-study"

export default function Page() {
  return <ProjectCaseStudy
    eyebrow='Project case study / Software + mechanism'
    title='Airport Baggage System'
    description='A Python decision system paired with a physical baggage-transfer mechanism and iterative prototype testing.'
    tags={['Python', 'Algorithms', 'Data parsing', 'Prototyping']}
    meta={[['Type', 'Engineering design project'], ['Software', 'Python'], ['Focus', 'Software + mechanism']]}
    sections={[
{ title: 'Overview', paragraphs: ['The project combined passenger/fleet data processing with a physical mechanism for moving baggage between levels.'] },
{ title: 'Software', paragraphs: ['The program parsed input files, applied project rules, and produced traceable outcomes such as boarded, oversold, bumped, overweight, delayed, and layovers.'] },
{ title: 'Mechanism', paragraphs: ['An early rotary/string approach was replaced by a more constrained linear-actuator bridge with guides and side walls.'] },
{ title: 'Documentation', paragraphs: ['The best case-study layout places software output beside hardware evidence so the two deliverables read as one system.'] },
{ title: 'Lessons', paragraphs: ['Constrained motion reduces failure modes, and software is easier to debug when parsing, decision logic, and output are separated.'] },
{ title: 'Next steps', paragraphs: ['I would add cleaner data models, unit tests, CAD-first mechanism design, and quantitative repeatability measurements.'] }
]}
    next={{ title: 'Angus — Self-Balancing Robot', href: '/projects/angus' }}
  />
}
