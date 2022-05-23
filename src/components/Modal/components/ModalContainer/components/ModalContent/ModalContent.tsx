import { useState } from 'react';
import TextInput from '@/components/TextInput';

import FORM_FIELDS from '@/constants/form';
import ISignUp from '@/interfaces/signUp';

interface IModalContent {
	isCompleted: boolean;
	data: ISignUp;
	setData: React.Dispatch<React.SetStateAction<ISignUp>>;
}

const ModalContent: React.FC<IModalContent> = props => {
	const { isCompleted, data, setData } = props;
	const [touched, setTouched] = useState({
		fullName: false,
		email: false,
		confirmEmail: false
	});
	return isCompleted ? (
		<p>You will be one of the people who hears from Broccoli & Co.</p>
	) : (
		<>
			{FORM_FIELDS.map(field => (
				<TextInput
					key={field.key}
					id={field.key}
					placeholder={field.placeholder}
					type={field.type}
					error={touched[field.key as keyof ISignUp] && field.getErrorMessage(data)}
					value={data[field.key as keyof ISignUp] as string}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setData(prevData => ({
							...prevData,
							[field.key]: event.target.value
						}))
					}
					onBlur={() =>
						setTouched(prevTouched => ({
							...prevTouched,
							[field.key]: true
						}))
					}
				/>
			))}
		</>
	);
};

export default ModalContent;
