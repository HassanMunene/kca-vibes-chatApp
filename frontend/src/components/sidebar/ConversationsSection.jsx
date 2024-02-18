import { useGetConversations } from '../../hooks/useGetConversations';
import SingleConversation from "./SingleConversation";
import { getRandomEmoji } from '../../utils/emojis';

const ConversationsSection = () => {
    const {loading, conversations} = useGetConversations();
    return (
        <div className="py-2 flex flex-col overflow-auto">
            {loading ? <span className="loading loading-spinner text-warning"></span> : null}
            {conversations.map((singleConversation, index) => (
                <SingleConversation 
                    key={singleConversation._id} 
                    singleConversation={singleConversation} 
                    emoji={getRandomEmoji()} 
                    lastIndex={index === conversations.length - 1}
                />
            ))}        
        </div>
    )
}
export default ConversationsSection;
