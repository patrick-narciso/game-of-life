import { useAppSelector, useAppDispatch } from "@/app/hooks"
import { selectBoard, toggleAlive } from "@/features/board/boardSlice"
import { Cell } from "@/components"

export function Board() {
	const board = useAppSelector(selectBoard)
	const dispatch = useAppDispatch()

	return (
		<div>
			<table>
				<tbody>
					{board.grid.map((row, x) => (
						<tr key={x}>
							{row.map((cell, y) => (
								<Cell
									key={y}
									alive={Boolean(cell.status)}
									newBorn={Boolean(cell.newBorn)}
									handleClick={() => dispatch(toggleAlive({ x, y }))}
								/>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
