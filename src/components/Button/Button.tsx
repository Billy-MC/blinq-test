import styled, { css } from 'styled-components';

import { color } from '@/styles/variables';

const { primaryColor, whiteColor } = color;

interface ButtonProps {
	width?: string;
	height?: string;
	fontSize?: string;
	theme?: 'primary' | 'ghost' | 'second' | 'black';
	children: string;
	onClick?: React.MouseEventHandler;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
}

const buttonTheme = (theme: string) => {
	switch (theme) {
		case 'primary':
			return css`
				background-color: ${primaryColor};
				color: ${whiteColor};
			`;
		case 'ghost':
			return css`
				background-color: ${whiteColor};
				color: ${primaryColor};
			`;
		default:
			return css`
				background-color: ${primaryColor};
				color: ${whiteColor};
			`;
	}
};

const StyledButton = styled.button<ButtonProps>`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	border-radius: 80px;
	text-align: center;
	padding: 13px 32px;
	font-size: ${({ fontSize }) => fontSize};
	font-weight: 600;
	outline: none;
	border: none;
	cursor: pointer;
	${({ theme }) => buttonTheme(theme)}

	&:hover {
		opacity: 0.8;
	}
	&:disabled {
		cursor: not-allowed;
		color: #00000040;
		border-color: #f5f5f5;
		background: #f5f5f5;
	}
`;

const Button: React.FC<ButtonProps> = props => {
	const {
		fontSize = '16px',
		onClick,
		children,
		width = '100px',
		height = '45px',
		theme = 'primary',
		type = 'button',
		disabled
	} = props;
	return (
		<StyledButton
			width={width}
			height={height}
			fontSize={fontSize}
			theme={theme}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{children}
		</StyledButton>
	);
};

export default Button;
