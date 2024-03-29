/*
this hooks get us all the user that we can chat with. or rather all the
users that have regsitered with the application and therefore we can
render them on the sidebar of our application.
*/

import {useState, useEffect} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const response = await axios.get('/api/users');
                const responseData = response.data;
                if(responseData.error) {
                    throw new Error(responseData.error);
                }
                setConversations(responseData);
            } catch(error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }
        getConversations();
    }, []);

    return {loading, conversations};
}
