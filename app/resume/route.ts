import { readFile } from "node:fs/promises"
import path from "node:path"

export async function GET() {
    const resume = await readFile(
        path.join(process.cwd(), "public", "resume.pdf"),
    )

    return new Response(resume, {
        headers: {
            "Content-Disposition":
                'inline; filename="Marcus-Finlay-Resume.pdf"',
            "Content-Type": "application/pdf",
        },
    })
}
