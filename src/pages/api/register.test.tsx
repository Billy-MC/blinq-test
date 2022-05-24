import axios from 'axios';
import signUp from './register';

jest.mock('axios');

describe('Register', () => {
	describe('when API call is successful', () => {
		it('should return Registered', async () => {
			const data = { email: 'test@example.com' };
			(axios.post as jest.Mock).mockResolvedValue(data);
			const result = await signUp(data);
			expect(axios.post).toHaveBeenCalledWith(
				'https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth',
				data
			);
			expect(result).toEqual({ email: 'test@example.com' });
		});
	});

	describe('when Email is already existed', () => {
		it('should return This email address is already in use', async () => {
			const data = { email: 'usedemail@blinq.app' };
			(axios.post as jest.Mock).mockResolvedValue(data);
			const result = await signUp(data);
			expect(axios.post).toHaveBeenCalledWith(
				'https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth',
				data
			);
			expect(result).toEqual({ email: 'usedemail@blinq.app' });
		});
	});
});

// describe('Test Apis', () => {
// 	describe('Register', () => {
// 		describe('with success', () => {
// 			const url = 'https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth';
// 			const onComplete = jest.fn();

// 			it('fetches successfully data from an API', async () => {
// 				const data = { name: 'Billy', email: 'billy@example.com' };

// 				axios.post.mockImplementationOnce(() => Promise.resolve(data));

// 				await expect(fetchData('react')).resolves.toEqual(data);
// 			});

// 			// beforeEach(() => {
// 			// 	axios.get.mockResolvedValue(data);
// 			// });

// 			// it('should call axios get with given url', () => {
// 			// 	getResource(url, onComplete);
// 			// 	expect(axios.get).toBeCalledWith(url);
// 			// });

// 			// it('should call onComplete callback with response', async () => {
// 			// 	// do not forget 'async'
// 			// 	await getResource(url, onComplete); // notice the 'await' because onComplete callback is called in '.then'
// 			// 	expect(onComplete).toBeCalledWith(data);
// 			// });
// 		});
// 	});
// });
