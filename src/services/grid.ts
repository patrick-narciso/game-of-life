import { makeGrid } from "@/helpers/grid"
import { Grid } from "@/helpers/grid.types"

export function fetchRandomGrid(
	width: number,
	height: number,
	makeRandom: boolean,
) {
	return new Promise<{ data: Grid[][] }>((resolve) =>
		setTimeout(
			() => resolve({ data: makeGrid({ width, height, makeRandom }) }),
			500,
		),
	)
}

export function fetchNewGrid(width: number, height: number) {
	return new Promise<{ data: Grid[][] }>((resolve) =>
		setTimeout(() => resolve({ data: makeGrid({ width, height }) }), 500),
	)
}
