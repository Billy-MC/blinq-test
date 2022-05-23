import validateEmail from '@/utils/validator';
import ISignUp from '@/interfaces/signUp';
import IFormField from '@/interfaces/form';

const FORM_FIELDS: IFormField[] = [
	{
		key: 'fullName',
		placeholder: 'Full Name',
		type: 'text',
		getErrorMessage: (data: Partial<ISignUp>) => {
			if (!data.fullName || data.fullName.trim().length < 3) {
				return 'Please input valid name (at least 3 characters)';
			}
			return '';
		}
	},
	{
		key: 'email',
		placeholder: 'Email',
		type: 'text',
		getErrorMessage: (data: Partial<ISignUp>) => {
			if (!data.email) {
				return 'Please input your email';
			}
			if (!validateEmail(data.email)) {
				return 'Please input valid email';
			}
			return '';
		}
	},
	{
		key: 'confirmEmail',
		placeholder: 'Confirm email',
		type: 'text',
		getErrorMessage: (data: Partial<ISignUp>) => {
			if (!data.confirmEmail || data.email !== data.confirmEmail) {
				return 'your emails are not match';
			}
			if (!validateEmail(data.confirmEmail)) {
				return 'Please input valid email';
			}
			return '';
		}
	}
];

export default FORM_FIELDS;
