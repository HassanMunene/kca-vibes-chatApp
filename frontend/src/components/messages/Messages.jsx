import SingleMessage from "./SingleMessage";
import {useGetMessages} from '../../hooks/useGetMessages';
import LoadingMessageSkeleton from '../loadingSkeleton/LoadingMessageSkeleton';

const Messages = () => {
    const {loading, messages} = useGetMessages();
    console.log(messages);
    return (
        <div className="px-4 flex-1 overflow-auto">
            {loading && [...Array(3)].map((_, index) => <LoadingMessageSkeleton key={index}/>)}
            
            {!loading && messages.length === 0 && (
                <p className="text-center text-sm text-yellow-500">Send a message to start a conversation</p>
            )}
            
            {!loading && messages.length > 0 && (
                messages.map((message) => <SingleMessage key={message._id} message={message}/>)
            )}
        </div>
    )
}
export default Messages;
