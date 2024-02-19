import SingleMessage from "./SingleMessage";
import {useGetMessages} from '../../hooks/useGetMessages';
import LoadingMessageSkeleton from '../loadingSkeleton/LoadingMessageSkeleton';

const Messages = () => {
    const {loading, messages} = useGetMessages();
    console.log(messages);
    return (
        <div className="px-4 flex-1 overflow-auto">
            {loading && [...Array(3)].map((_, index) => <LoadingMessageSkeleton key={index}/>)}
        </div>
    )
}
export default Messages;
