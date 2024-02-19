import {useState, useEffect} from 'react';
import {useConversationStore} from '../zustandStore/useConversationStore';
import toast from 'react-hot-toast';
import axios from 'axios';

export const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const {messages, setMessages, selectedConversation} = useConversationStore();

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				const response = await axios.get(`/api/messages/${selectedConversation._id}`);
				const responseData = response.data;
				//console.log(responseData);

				if(responseData.error) {
					throw new Error(responseData.error);
				}
				setMessages(responseData);
				//console.log(messages);
			} catch(error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		}
		if(selectedConversation?._id) getMessages();
	}, [selectedConversation?._id, setMessages]);

	return{loading, messages};
}