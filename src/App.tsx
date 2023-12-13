import "./App.css"
import { Board } from "./features/board/layouts/board-container"
import { Control } from "./features/status/layouts/control-container"
import { Counter } from "./features/counter/layouts/counter-container"

function App() {
	return (
		<div className="wrapper">
			<h1>Conway's Game of Life</h1>
			<Board />
			<Control />
			<Counter />
		</div>
	)
}

export default App
