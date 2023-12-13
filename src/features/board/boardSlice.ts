import * as grid from "@/helpers/grid"
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Grid } from "@/helpers/grid.types"
import { RootState } from "@/app/store"
import { fetchNewGrid, fetchRandomGrid } from "@/services/grid"

interface AlivePayloadAction {
	x: number
	y: number
}

interface NextStepPayloadAction {
	status: number
	newBorn?: boolean
}

interface BoardState {
	grid: Grid[][]
	status: "idle" | "loading" | "failed"
}

const { makeGrid } = grid

const height = 25
const width = 40

const initialState: BoardState = {
	grid: makeGrid({ height, width }),
	status: "idle",
}

export const getRandomGrid = createAsyncThunk(
	"board/fetchRandomGrid",
	async () => {
		const response = await fetchRandomGrid(width, height, true)

		return response.data
	},
)

export const getNewGrid = createAsyncThunk("board/fetchNewGrid", async () => {
	const response = await fetchNewGrid(width, height)

	return response.data
})

export const boardSlice = createSlice({
	name: "board",
	initialState,
	reducers: {
		toggleAlive: (state, action: PayloadAction<AlivePayloadAction>) => {
			const board = state.grid.slice(0)
			const cell = board[action.payload.x][action.payload.y]
			cell.status = !cell.status
			cell.newBorn = !cell.newBorn
		},
		nextStep: (state, action: PayloadAction<NextStepPayloadAction[][]>) => {
			state.grid = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getRandomGrid.pending, (state) => {
				state.status = "loading"
			})
			.addCase(getRandomGrid.fulfilled, (state, action) => {
				state.status = "idle"
				state.grid = action.payload
			})
			.addCase(getRandomGrid.rejected, (state) => {
				state.status = "failed"
			})
			.addCase(getNewGrid.pending, (state) => {
				state.status = "loading"
			})
			.addCase(getNewGrid.fulfilled, (state, action) => {
				state.status = "idle"
				state.grid = action.payload
			})
			.addCase(getNewGrid.rejected, (state) => {
				state.status = "failed"
			})
	},
})

export const { toggleAlive, nextStep } = boardSlice.actions

// Selectors
export const selectBoard = (state: RootState) => state.board

export default boardSlice.reducer
