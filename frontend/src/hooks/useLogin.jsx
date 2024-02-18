import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import axios from 'axios';

export const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const {authUser, setAuthUser} = useAuthContext();

	const login = async (username, password) => {
		const succes = handleInputErrors(username, password);

		if(!succes) return;

		setLoading(true);
		try {
			const dataToSend = JSON.stringify({
				username: username,
				password: password
			});

			const response = await axios.post('/api/auth/login', dataToSend, {
				headers: {
					'Content-Type': 'application/json'
				},
			})
			const responseData = response.data;
			console.log(responseData);
			if (responseData.error) {
				throw new Error(responseData.error);
			}
			//save the user data to localStorage and then set the user in the context
			localStorage.setItem("kcavibes-user", JSON.stringify(responseData));
			setAuthUser(responseData);
		} catch(error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	return {loading, login};
}

function handleInputErrors(username, password) {
	if(username === "" || password === "") {
		toast.error('Please provide all the fields');
		return false;
	} else {
		return true;
	}
}