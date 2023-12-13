import { useAppSelector } from "../../../app/hooks"
import { selectCount } from "../counterSlice"

export function Counter() {
	const count = useAppSelector(selectCount)

	return <div className="counter">Generations: {count}</div>
}
