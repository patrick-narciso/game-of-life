import { Grid, GridParams } from "./grid.types"

export const makeGrid = ({
	height,
	width,
	makeRandom = false,
}: GridParams): Grid[][] => {
	const grid = []
	for (let i = 0; i < height; i++) {
		const row = []
		for (let j = 0; j < width; j++) {
			let value
			if (makeRandom) {
				value = Math.random() > 0.85
			}
			row.push({
				status: value,
				newBorn: value,
			})
		}
		grid.push(row)
	}
	return grid
}

export const advanceGrid = function (grid: Grid[][]) {
	const gridHeight = grid.length
	const gridWidth = grid[0].length

	const calculateNeighbours = function (x: number, y: number) {
		//since the world is toroidal: if the cell is at the edge of the grid we
		//will reference the cell on the opposite edge
		const topRow = x - 1 < 0 ? gridHeight - 1 : x - 1
		const bottomRow = x + 1 === gridHeight ? 0 : x + 1
		const leftColumn = y - 1 < 0 ? gridWidth - 1 : y - 1
		const rightColumn = y + 1 === gridWidth ? 0 : y + 1

		let total = 0
		total += Number(grid[topRow][leftColumn].status)
		total += Number(grid[topRow][y].status)
		total += Number(grid[topRow][rightColumn].status)
		total += Number(grid[x][leftColumn].status)
		total += Number(grid[x][rightColumn].status)
		total += Number(grid[bottomRow][leftColumn].status)
		total += Number(grid[bottomRow][y].status)
		total += Number(grid[bottomRow][rightColumn].status)

		return total
	}
	//apply the rules of the game by comparing with the existing grid to build
	//a new array
	const gameState = []
	for (let i = 0; i < gridHeight; i++) {
		const row = []
		for (let j = 0; j < gridWidth; j++) {
			const cellIsAlive = grid[i][j].status
			const neighbours = calculateNeighbours(i, j)
			if (cellIsAlive) {
				if (neighbours < 2) {
					row.push({ status: 0 })
				} else if (neighbours > 3) {
					row.push({ status: 0 })
				} else {
					row.push({ status: 1 })
				}
			}
			if (!cellIsAlive) {
				if (neighbours === 3) {
					row.push({
						status: 1,
						newBorn: true,
					})
				} else {
					row.push({ status: 0 })
				}
			}
		}
		gameState.push(row)
	}
	return gameState
}
