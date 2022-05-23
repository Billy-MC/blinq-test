import styled from 'styled-components';
import { useState } from 'react';

import { color, devices } from '@/styles/variables';
import signUp from '@/pages/api/register';
import ButtonSection from './components/ButtonSection';
import FORM_FIELDS from '@/constants/form';
import ISignUp from '@/interfaces/signUp';
import IFormField from '@/interfaces/form';
import ModalContent from './components/ModalContent';

const { primaryColor, errorColor } = color;

interface ModalContainerProps {
	onClose: () => void;
}

const CloseButton = styled.div`
	cursor: pointer;
	align-self: flex-end;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 300px;

	@media ${devices.laptop} {
		width: 500px;
	}
`;

const Title = styled.h3`
	font-size: 24px;
	&::after {
		content: '';
		width: 50px;
		border-bottom: 3px solid ${primaryColor};
		border-radius: 10px;
		margin: auto;
		margin-top: 8px;
		display: block;
		transition: width 0.3s ease-in-out;
	}
`;

const Error = styled.p`
	margin: 4px 0;
	color: ${errorColor};
	font-size: 14px;
`;

const ModalContainer: React.FC<ModalContainerProps> = props => {
	const { onClose } = props;
	const [isCompleted, setIsCompleted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [data, setData] = useState<ISignUp>({
		fullName: '',
		email: '',
		confirmEmail: ''
	});

	const validate = (values: ISignUp) =>
		Object.keys(FORM_FIELDS).every((_, key: number) => {
			const field: IFormField = FORM_FIELDS[key];
			return !field.getErrorMessage(values);
		});

	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!validate(data)) {
			return;
		}
		setIsLoading(true);
		signUp(data)
			.then(() => {
				setErrorMessage('');
				setIsCompleted(true);
			})
			.catch(error => setErrorMessage(error.response.data.errorMessage))
			.finally(() => setIsLoading(false));
	};

	const isDisabled = !validate(data) || isLoading;

	return (
		<>
			<CloseButton onClick={onClose}>X</CloseButton>
			<Form onSubmit={onSubmitHandler}>
				<Title>{isCompleted ? 'All Done!' : 'Request an invite'}</Title>
				<ModalContent isCompleted={isCompleted} data={data} setData={setData} />
				<ButtonSection
					isCompleted={isCompleted}
					onClose={onClose}
					isDisabled={isDisabled}
					isLoading={isLoading}
				/>
				{errorMessage && <Error>{errorMessage}</Error>}
			</Form>
		</>
	);
};

export default ModalContainer;
