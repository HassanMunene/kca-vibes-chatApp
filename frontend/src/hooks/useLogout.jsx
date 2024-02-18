import {useState} from 'react';
import axios from 'axios';
import {useAuthContext} from '../context/AuthContext';
import toast from 'react-hot-toast';

export const useLogout = () => {
    const [loading, setLoading] = useState(false);
    //the authContext keeps the user currently logged in
    const{authUser, setAuthUser} = useAuthContext();

    const logout = async () => {
        setLoading(true)
        try {
            const response = await axios.post('/api/auth/logout');
            const responseData = response.data;

            if (responseData.error) {
                throw new Error(responseData.error);
            }
            localStorage.removeItem("kcavibes-user");
            setAuthUser(null)

        } catch(error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }
    return {loading, logout};
}
