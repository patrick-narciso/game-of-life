import styled from "styled-components"

interface CellProps {
	alive: boolean
	newBorn: boolean
	handleClick: React.MouseEventHandler
}

const CellData = styled.td`
	border: 1px solid #dddddd;
	height: 1rem;
	width: 1rem;

	&.alive {
		background: red;
	}

	&.new-born {
		background: blue;
	}
`

const Cell = ({ alive, newBorn, handleClick }: CellProps) => {
	return (
		<CellData
			onClick={handleClick}
			className={`${alive ? "alive" : ""} ${newBorn ? "new-born" : ""}`}
		/>
	)
}

export default Cell
