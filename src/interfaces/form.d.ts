interface IFormField {
	key: string;
	placeholder: string;
	type: string;
	getErrorMessage: (data: Partial<ISignUp>) => string;
}

export default IFormField;
