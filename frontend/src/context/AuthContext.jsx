import { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const useAuthContext = () => {
	return useContext(AuthContext);
}

export const AuthContextProvider = (props) => {
	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("kcavibes-user")) || null);

	return (
		<AuthContext.Provider value={{ authUser, setAuthUser}}>
			{props.children}
		</AuthContext.Provider>
	)
}