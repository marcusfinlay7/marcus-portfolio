import { ArrowLeft, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

type Section = { title: string; paragraphs: string[]; bullets?: string[] }
type Props = {
  eyebrow: string
  title: string
  description: string
  tags: string[]
  meta: [string, string][]
  sections: Section[]
  next: { title: string; href: string }
}

export function ProjectCaseStudy({ eyebrow, title, description, tags, meta, sections, next }: Props) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="/" className="flex items-center gap-3 font-semibold"><span className="grid size-9 place-items-center rounded-lg bg-foreground text-xs font-black text-background">MF</span>Marcus Finlay</a>
          <Button variant="outline" asChild><a href="/#projects"><ArrowLeft /> All projects</a></Button>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5">
        <section className="grid gap-10 py-16 lg:grid-cols-[1fr_320px] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.18em] text-red-600">{eyebrow}</p>
            <h1 className="mt-3 max-w-4xl text-5xl font-bold leading-[.98] tracking-[-.06em] sm:text-7xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{description}</p>
            <div className="mt-6 flex flex-wrap gap-2">{tags.map((tag, i) => <Badge key={tag} variant={i === 0 ? "default" : "outline"}>{tag}</Badge>)}</div>
          </div>
          <div className="space-y-3">{meta.map(([label, value]) => <div key={label} className="flex justify-between border-t pt-3 text-sm"><span className="text-muted-foreground">{label}</span><strong>{value}</strong></div>)}</div>
        </section>

        <Card className="overflow-hidden border-red-600/20 bg-gradient-to-br from-card via-card to-red-600/10">
          <CardContent className="grid min-h-[420px] place-items-center p-10 text-center">
            <div><div className="mx-auto mb-5 grid size-20 place-items-center rounded-2xl border border-dashed border-red-500/50 text-3xl text-red-500">◎</div><h2 className="text-xl font-semibold">Hero build photo / video</h2><p className="mt-2 max-w-xl text-sm text-muted-foreground">Replace this with a finished-project photo, short demo loop, CAD render, or annotated engineering image.</p></div>
          </CardContent>
        </Card>

        <div className="mx-auto grid max-w-5xl gap-14 py-20 lg:grid-cols-[190px_1fr]">
          <aside className="space-y-2 text-sm text-muted-foreground lg:sticky lg:top-24 lg:self-start">
            <p className="mb-3 font-mono text-xs uppercase tracking-[.16em]">On this page</p>
            {sections.map((s, i) => <a key={s.title} className="block border-l pl-3 hover:border-red-600 hover:text-foreground" href={`#section-${i}`}>{s.title}</a>)}
          </aside>
          <article className="space-y-16">
            {sections.map((section, i) => (
              <section key={section.title} id={`section-${i}`} className="scroll-mt-24">
                <p className="font-mono text-xs uppercase tracking-[.16em] text-red-600">{String(i + 1).padStart(2, "0")} / {section.title}</p>
                <h2 className="mt-3 text-3xl font-bold tracking-[-.04em]">{section.title}</h2>
                <div className="mt-5 space-y-4 text-muted-foreground">{section.paragraphs.map(p => <p key={p}>{p}</p>)}</div>
                {section.bullets && <ul className="mt-5 list-disc space-y-2 pl-5 text-muted-foreground">{section.bullets.map(x => <li key={x}>{x}</li>)}</ul>}
                {i === 1 && <Card className="mt-7 border-dashed"><CardContent className="grid min-h-64 place-items-center p-8 text-center text-sm text-muted-foreground">Diagram / CAD / wiring / test-data image goes here</CardContent></Card>}
              </section>
            ))}
          </article>
        </div>

        <Separator />
        <section className="py-16"><Card className="bg-gradient-to-br from-card to-red-600/10"><CardContent className="flex flex-col justify-between gap-6 p-8 sm:flex-row sm:items-center"><div><p className="font-mono text-xs uppercase tracking-[.16em] text-red-600">Next project</p><h2 className="mt-2 text-2xl font-bold">{next.title}</h2></div><Button asChild><a href={next.href}>Read case study <ArrowRight /></a></Button></CardContent></Card></section>
      </div>
    </main>
  )
}
