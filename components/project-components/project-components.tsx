import type { ReactNode } from "react"

type CalloutProps = {
    label: string
    children: ReactNode
}

export const Callout = ({ label, children }: CalloutProps) => {
    return (
        <div className="not-typeset my-6 rounded-lg border border-primary/30 bg-primary/5 p-5">
            <p className="text-eyebrow mb-2">{label}</p>
            <div className="text-sm text-muted-foreground [&>p]:m-0">
                {children}
            </div>
        </div>
    )
}

type FigurePlaceholderProps = {
    icon?: string
    title: string
    description: string
    caption?: string
}

export const FigurePlaceholder = ({
    icon = "◎",
    title,
    description,
    caption,
}: FigurePlaceholderProps) => {
    return (
        <figure className="not-typeset my-6">
            <div className="grid min-h-64 place-items-center rounded-xl border border-dashed border-primary/40 bg-muted/20 p-8 text-center">
                <div>
                    <div className="mx-auto mb-4 grid size-14 place-items-center rounded-xl border border-dashed border-primary/50 text-2xl text-primary">
                        {icon}
                    </div>
                    <strong className="block text-foreground">{title}</strong>
                    <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
                        {description}
                    </p>
                </div>
            </div>
            {caption ? (
                <figcaption className="mt-2 text-center text-xs text-muted-foreground">
                    {caption}
                </figcaption>
            ) : null}
        </figure>
    )
}

type TwoUpItem = {
    label: string
    title: string
    description: string
}

type TwoUpProps = {
    items: [TwoUpItem, TwoUpItem]
}

export const TwoUp = ({ items }: TwoUpProps) => {
    return (
        <div className="not-typeset my-6 grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
                <div
                    key={item.title}
                    className="rounded-lg border border-border bg-card p-5"
                >
                    <p className="text-eyebrow mb-2">{item.label}</p>
                    <h3 className="font-semibold text-foreground">
                        {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    )
}
