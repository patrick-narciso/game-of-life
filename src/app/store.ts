import boardSlice from "@/features/board/boardSlice"
import counterSlice from "@/features/counter/counterSlice"
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"

export const store = configureStore({
	reducer: {
		board: boardSlice,
		counter: counterSlice,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
