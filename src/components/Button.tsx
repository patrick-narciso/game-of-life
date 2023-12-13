import styled from "styled-components"

interface ButtonProps {
	title?: string
	icon: string
	handleClick: React.MouseEventHandler<HTMLSpanElement>
}

const CustomButton = styled.span`
	display: inline-block;
	margin-right: 0.4rem;
	padding: 0.3rem 0.7rem;
	font-size: 0.9rem;
	font-weight: 400;
	line-height: 1.5rem;
	background: blue;
	color: #ffffff;
	cursor: pointer;
	border-radius: 1px solid black;
	&:hover {
		background: #add8e6;
		color: #000000;
	}

	&.fa-pause {
		width: 1em;
		text-align: center;
	}
	&.fa-play {
		width: 1em;
		text-align: center;
	}
	&.fa-step-forward {
		width: 1em;
		text-align: center;
	}
`

const Button = ({ title, icon, handleClick }: ButtonProps) => (
	<CustomButton onClick={handleClick}>
		<i className={icon}></i> {title}
	</CustomButton>
)

export default Button
