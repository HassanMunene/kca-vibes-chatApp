import SingleConversation from "./SingleConversation";

const ConversationsSection = () => {
    return (
        <div className="py-2 flex flex-col overflow-auto">
            <SingleConversation/>
            <SingleConversation/>
            <SingleConversation/>
            <SingleConversation/>
            <SingleConversation/>
            <SingleConversation/>            
        </div>
    )
}
export default ConversationsSection;
