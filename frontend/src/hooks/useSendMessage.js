import {useState} from 'react';
import {useConversationStore} from '../zustandStore/useConversationStore';
import axios from 'axios';
import toast from 'react-hot-toast';

export const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const {messages, setMessages, selectedConversation} = useConversationStore();

	const sendMessage = async (message) => {
		setLoading(true);
		try {
			// send a message to the selected conversation
			const data = JSON.stringify({
				message: message
			});
			const response = await axios.post(`/api/messages/send/${selectedConversation._id}`, data, {
				headers: {
					'Content-Type': 'application/json'
				},
			});
			const responseData = response.data;
			if(responseData.error) {
				throw new Error(responseData.error);
			}
			setMessages([...messages, responseData]);
		} catch(error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	}
	return{loading, sendMessage};
}
