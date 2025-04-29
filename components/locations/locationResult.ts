import { Location } from "./locationType"

export type LocationResult = {
    info: {
        count: number,
        pages: number,
        next: string | null,
        prev: string | null,
    }
    results: Location[]
}