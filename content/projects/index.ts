import type { ProjectContent } from "@/lib/projects"

import { airportBaggage } from "./airport-baggage"
import { angus } from "./angus"
import { pressureVessel } from "./pressure-vessel"
import { wearableObstacleDetector } from "./wearable-obstacle-detector"

// Order matters here: it drives both the "Projects" grid order and each
// case study's "next project" link. angus(7) + pressureVessel(5) and
// wearableObstacleDetector(5) + airportBaggage(7) each sum to a full
// 12-column row in the bento grid (see projects-grid.tsx).
export const projects: ProjectContent[] = [
    angus,
    pressureVessel,
    wearableObstacleDetector,
    airportBaggage,
]
