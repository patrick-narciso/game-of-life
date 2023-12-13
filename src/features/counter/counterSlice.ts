import { RootState } from "@/app/store"
import { createSlice } from "@reduxjs/toolkit"

interface CounterState {
	count: number
}

const initialState: CounterState = {
	count: 0,
}

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		clear: (state) => {
			state.count = 0
		},
		randomise: (state) => {
			state.count = 0
		},
		tick: (state) => {
			state.count += 1
		},
	},
})

export const { clear, randomise, tick } = counterSlice.actions

// Selectors
export const selectCount = (state: RootState) => state.counter.count

export default counterSlice.reducer
