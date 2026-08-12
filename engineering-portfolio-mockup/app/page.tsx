"use client"

import { useState } from "react"
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Sun,
} from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projects = [
  {
    title: "Angus — Self-Balancing Robot",
    href: "/projects/angus",
    category: "robotics",
    description: "A two-wheel robot built around an ESP32-C3, BNO085 IMU, motor encoders, and a custom PID control loop.",
    tags: ["ESP32-C3", "C++", "PID", "BNO085", "CAD"],
    metric: "Mechanical + electrical + firmware",
    className: "md:col-span-7",
  },
  {
    title: "Pressure Vessel Engineering",
    href: "/projects/pressure-vessel",
    category: "mechanical",
    description: "Deaerator heater and storage tank design work using Autodesk Inventor, AutoCAD, and Codeware COMPRESS.",
    tags: ["Inventor", "COMPRESS", "ASME VIII"],
    metric: "Flanges, saddles, wear plates",
    className: "md:col-span-5",
  },
  {
    title: "Wearable Obstacle Detector",
    href: "/projects/wearable-obstacle-detector",
    category: "robotics",
    description: "A haptic necklace concept using angled distance sensors to identify upper-body obstacles.",
    tags: ["HC-SR04", "TF-Luna", "Haptics"],
    metric: "50 cm sensing threshold",
    className: "md:col-span-5",
  },
  {
    title: "Airport Baggage System",
    href: "/projects/airport-baggage",
    category: "software",
    description: "A Python tool that processes passenger and fleet data, determines assignment outcomes, and visualizes the mechanism.",
    tags: ["Python", "Algorithms", "Data parsing"],
    metric: "Software + physical mechanism",
    className: "md:col-span-7",
  },
]

export default function PortfolioPage() {
  const [dark, setDark] = useState(true)

  return (
    <div className={dark ? "dark min-h-screen bg-background text-foreground" : "min-h-screen bg-background text-foreground"}>
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="grid size-9 place-items-center rounded-lg bg-foreground text-xs font-extrabold text-background">MF</span>
            Marcus Finlay
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {[
              ["Projects", "#projects"],
              ["Experience", "#experience"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <Button key={href} variant="ghost" size="sm" asChild><a href={href}>{label}</a></Button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => setDark(!dark)} aria-label="Toggle theme">
              {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>
            <Button variant="outline" className="hidden sm:inline-flex" asChild><a href="#contact">Let&apos;s talk <ArrowUpRight /></a></Button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <Badge variant="outline" className="mb-6 rounded-full px-3 py-1.5">● Open to engineering co-op opportunities</Badge>
            <h1 className="max-w-4xl text-5xl font-bold leading-[.98] tracking-[-.06em] sm:text-7xl">
              Mechatronics engineer <span className="text-muted-foreground">building systems that move.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg text-muted-foreground">
              I combine mechanical design, embedded software, electronics, and controls to turn ideas into working prototypes—from self-balancing robots to industrial pressure equipment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild><a href="#projects">View selected work <ArrowDown /></a></Button>
              <Button size="lg" variant="outline"><Download /> Download résumé</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><MapPin className="size-4" /> Hamilton, Ontario</span>
              <span>McMaster University</span><span>Mechatronics Engineering</span>
            </div>
          </div>

          <Card className="overflow-hidden shadow-2xl">
            <CardHeader className="border-b py-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground"><span>angus_control_loop.cpp</span><Badge variant="secondary">Live</Badge></div>
            </CardHeader>
            <CardContent className="min-h-[380px] bg-muted/30 p-8">
              <div className="grid h-full place-items-center rounded-xl border border-dashed">
                <div className="text-center">
                  <div className="mx-auto h-48 w-24 rotate-[-3deg] rounded-2xl border-2 bg-red-600/10" />
                  <div className="mt-6 font-mono text-xs text-muted-foreground">θ = −3.2° · PID loop @ 100 Hz</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-10 grid gap-5 md:grid-cols-2 md:items-end">
            <div><p className="font-mono text-xs uppercase tracking-[.18em] text-red-600">01 / Selected work</p><h2 className="mt-3 text-4xl font-bold tracking-[-.045em] sm:text-5xl">Projects with proof,<br />not just descriptions.</h2></div>
            <p className="max-w-lg text-muted-foreground md:justify-self-end">Each case study should show the problem, constraints, design decisions, implementation, testing, and what you would improve next.</p>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All</TabsTrigger><TabsTrigger value="robotics">Robotics</TabsTrigger><TabsTrigger value="mechanical">Mechanical</TabsTrigger><TabsTrigger value="software">Software</TabsTrigger>
            </TabsList>
            {["all", "robotics", "mechanical", "software"].map(tab => (
              <TabsContent value={tab} key={tab}>
                <div className="grid gap-5 md:grid-cols-12">
                  {projects.filter(project => tab === "all" || project.category === tab).map(project => (
                    <Card key={project.title} className={`${project.className} group overflow-hidden transition hover:-translate-y-1 hover:border-red-600/40`}>
                      <div className="grid min-h-56 place-items-center border-b bg-muted/35">
                        <span className="font-mono text-sm text-muted-foreground">{project.title} / visual</span>
                      </div>
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4"><div><CardTitle className="text-2xl tracking-tight"><a href={project.href}>{project.title}</a></CardTitle><CardDescription className="mt-2 max-w-xl leading-relaxed">{project.description}</CardDescription></div><Badge variant="outline">{project.category}</Badge></div>
                      </CardHeader>
                      <CardContent className="flex flex-wrap gap-2">{project.tags.map(tag => <Badge key={tag} variant="secondary" className="font-mono font-normal">{tag}</Badge>)}</CardContent>
                      <CardFooter className="justify-between"><span className="text-sm text-muted-foreground">{project.metric}</span><Button variant="outline" size="icon" asChild><a href={project.href} aria-label={`Open ${project.title}`}><ArrowUpRight /></a></Button></CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-10"><p className="font-mono text-xs uppercase tracking-[.18em] text-red-600">02 / Experience</p><h2 className="mt-3 text-4xl font-bold tracking-[-.045em] sm:text-5xl">From calculations to<br />fabrication-ready work.</h2></div>
          <div className="grid gap-6 lg:grid-cols-[.75fr_1.25fr]">
            <Card id="about">
              <CardContent className="p-6"><div className="grid aspect-[1.15] place-items-center rounded-xl border bg-muted/40 text-7xl font-black tracking-[-.08em]">MF</div><p className="mt-5 text-muted-foreground">Third-year Mechatronics Engineering student interested in robotics, controls, embedded systems, and mechanical design.</p><Separator className="my-5" /><div className="grid gap-3 text-sm"><div className="flex justify-between"><span className="text-muted-foreground">Education</span><strong>McMaster University</strong></div><div className="flex justify-between"><span className="text-muted-foreground">Location</span><strong>Hamilton, ON</strong></div><div className="flex justify-between"><span className="text-muted-foreground">Focus</span><strong>Robotics + Controls</strong></div></div></CardContent>
            </Card>
            <div className="space-y-5">
              <Card><CardContent className="p-2"><Accordion type="single" collapsible defaultValue="internship">
                <AccordionItem value="internship"><AccordionTrigger className="px-4"><span><strong>Mechanical Engineering Intern</strong><small className="block text-left text-muted-foreground">Superior Boilerworks & Welding Ltd. · May–Aug 2025</small></span></AccordionTrigger><AccordionContent className="px-4 text-muted-foreground">Updated pressure-vessel and tank designs, reviewed ASME design details in COMPRESS, and worked through changes with engineers and production constraints in mind.</AccordionContent></AccordionItem>
                <AccordionItem value="university"><AccordionTrigger className="px-4"><span><strong>Mechatronics Engineering</strong><small className="block text-left text-muted-foreground">McMaster University · 2023–Present</small></span></AccordionTrigger><AccordionContent className="px-4 text-muted-foreground">Coursework across signals, controls, mechanics, electronics, statistics, and software, plus multidisciplinary design projects.</AccordionContent></AccordionItem>
                <AccordionItem value="personal"><AccordionTrigger className="px-4"><span><strong>Independent Robotics Projects</strong><small className="block text-left text-muted-foreground">Personal lab · Ongoing</small></span></AccordionTrigger><AccordionContent className="px-4 text-muted-foreground">Embedded C++, sensor integration, motor control, power distribution, and mechanical assembly with documented testing and iteration.</AccordionContent></AccordionItem>
              </Accordion></CardContent></Card>
              <Card><CardHeader><CardTitle className="text-base">Toolbox</CardTitle></CardHeader><CardContent className="flex flex-wrap gap-2">{["C++", "Python", "ESP32", "PID control", "Autodesk Inventor", "AutoCAD", "COMPRESS", "MATLAB", "Git", "Electronics"].map(skill => <Badge variant="secondary" key={skill}>{skill}</Badge>)}</CardContent></Card>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
          <Card className="overflow-hidden bg-gradient-to-br from-card to-red-600/10">
            <CardContent className="grid gap-8 p-8 sm:p-12 md:grid-cols-[1fr_auto] md:items-center">
              <div><p className="font-mono text-xs uppercase tracking-[.18em] text-red-600">03 / Contact</p><h2 className="mt-3 text-4xl font-bold tracking-[-.045em]">Have a project that needs both CAD and code?</h2><p className="mt-4 max-w-2xl text-muted-foreground">I’m interested in robotics, automation, controls, embedded systems, and mechanical product-development opportunities.</p></div>
              <div className="flex flex-wrap gap-2"><Button size="lg"><Mail /> Email me</Button><Button size="lg" variant="outline"><Linkedin /> LinkedIn</Button><Button size="lg" variant="outline"><Github /> GitHub</Button></div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-5 pb-12"><Separator className="mb-6" /><div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:justify-between"><span>© 2026 Marcus Finlay.</span><span>Built with shadcn/ui components.</span></div></footer>
    </div>
  )
}
