import styled from 'styled-components';

interface ITextInput {
	id?: string;
	error?: string | boolean;
	placeholder: string;
	type: string;
	value: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	onBlur: React.FocusEventHandler<HTMLInputElement>;
}

const StyledTextInput = styled.div`
	margin-bottom: 16px;
`;

const Input = styled.input<Partial<ITextInput>>`
	border-radius: 3px;
	color: #2d333a;
	border: 1px solid ${({ error }) => (error ? '#ff4d4f' : '#c2c8d0')};
	display: block;
	width: 100%;
	font-size: 20px;
	padding: 12px 16px;
	margin: 5px 0;
`;

const Error = styled.p`
	margin: 4px 0 0 0;
	color: #ff4d4f;
	font-size: 0.9rem;
`;

const TextInput: React.FC<ITextInput> = props => {
	const { id, error, ...rest } = props;
	return (
		<StyledTextInput>
			<Input error={error} name={id} id={id} {...rest} />
			{error && <Error>{error}</Error>}
		</StyledTextInput>
	);
};
export default TextInput;
