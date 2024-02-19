/*
This component is the one placed at the top of the sidebar section that
we can use to search the people we wanna chat with
*/
import {useState} from 'react';
import { IoSearchSharp } from "react-icons/io5";
import {useConversationStore} from '../../zustandStore/useConversationStore';
import {useGetConversations} from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInputSection = () => {
	const [search, setSearch] = useState("");
	const {setSelectedConversation} = useConversationStore();
	const {conversations} = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();

		if(!search) return;
		if(search.length < 3) {
			toast.error('search term must be at least 3 characters long');
			return;
		}
		const conversation = conversations.find((convo) => (
			convo.fullname.toLowerCase().includes(search.toLowerCase())
		))
		if(conversation) {
			setSelectedConversation(conversation);
			setSearch('');
		} else {
			toast.error('No such user found');
		}
	}
	return (
		<form className="flex items-center gap-2" onSubmit={handleSubmit}>
			<input type="text" placeholder="Search..." 
				className="input input-bordered rounded-full" 
				value={search} 
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button type="submit" className="btn btn-circle bg-sky-500 text-white">
				<IoSearchSharp className="w-6 h-5 outline-none"/>
			</button>
		</form>
	)
}
export default SearchInputSection;