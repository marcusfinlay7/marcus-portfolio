import { ContactSection } from "@/app/_components/contact-section/contact-section"
import { ExperienceSection } from "@/app/_components/experience-section/experience-section"
import { Hero } from "@/app/_components/hero/hero"
import { ProjectsGrid } from "@/app/_components/projects-grid/projects-grid"
import { SiteHeader } from "@/app/_components/site-header/site-header"

const Home = () => {
    return (
        <div className="min-h-screen">
            <SiteHeader />
            <main id="top">
                <Hero />
                <ExperienceSection />
                <ProjectsGrid />
            </main>
            <ContactSection />
        </div>
    )
}

export default Home
