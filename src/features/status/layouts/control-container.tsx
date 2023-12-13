import { useCallback, useEffect } from "react"
import { useAppSelector, useAppDispatch } from "@/app/hooks"
import { Button } from "@/components"
import {
	getNewGrid,
	getRandomGrid,
	nextStep,
	selectBoard,
} from "@/features/board/boardSlice"
import { clear, randomise, tick } from "@/features/counter/counterSlice"
import { advanceGrid } from "@/helpers/grid"

export function Control() {
	const board = useAppSelector(selectBoard)
	const dispatch = useAppDispatch()

	const newGame = useCallback(() => {
		dispatch(getNewGrid())
		dispatch(clear())
	}, [dispatch])

	useEffect(() => {
		dispatch(getRandomGrid())
	}, [dispatch])

	const handleNextStep = () => {
		dispatch(nextStep(advanceGrid(board.grid.slice(0))))
		dispatch(tick())
	}

	const handleRandomise = () => {
		dispatch(getRandomGrid())
		dispatch(randomise())
	}

	return (
		<div>
			<Button
				handleClick={handleRandomise}
				title={"Randomise"}
				icon={"fa fa-random"}
			/>
			<Button
				handleClick={() => newGame()}
				title={"Clear"}
				icon={"fa fa-undo"}
			/>
			<Button handleClick={handleNextStep} icon={"fa fa-step-forward"} />
		</div>
	)
}
