import axios from 'axios';
import ISignup from '@/interfaces/signUp';

const signup = async (data: Partial<ISignup>) =>
	axios.post('https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth', {
		name: data.fullName,
		email: data.email
	});

export default signup;
