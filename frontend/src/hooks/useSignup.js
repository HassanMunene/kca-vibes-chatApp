import { useAuthContext } from '../context/AuthContext';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

export const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const { authUser, setAuthUser } = useAuthContext()

	const signup = async ({fullname, username, password, confirmPassword, gender}) => {
		const success = handleInputErrors({fullname, username, password, confirmPassword, gender});
		if(!success) return;

		setLoading(true);
		try {
			const dataToSend = JSON.stringify({fullname, username, password, confirmPassword, gender})
			const response = await axios.post('/api/auth/signup', dataToSend, { headers: {'Content-Type': 'application/json'}});
			const responseData = response.data;

			if(responseData.error) {
				throw new Error(responseData.error);
			}

			//localstorage.
			localStorage.setItem("kcavibes-user", JSON.stringify(responseData));
			// after setting the user in local storage lets now update the context.
			setAuthUser(responseData);

		} catch(error) {
			toast.error(error.message)
		} finally {
			setLoading(false);
		}
	}
	return {loading, signup};
};

function handleInputErrors({fullname, username, password, confirmPassword, gender}) {
	if(!fullname || !username || !password || !confirmPassword || !gender) {
		toast.error('Please fill in all the fields')
		return false;
	}
	if(password !== confirmPassword) {
		toast.error('Passwords do not match')
		return false;
	}
	if(password.length < 6) {
		toast.error('Password must be atleast 6 characters')
		return false;
	}
	return true;
}