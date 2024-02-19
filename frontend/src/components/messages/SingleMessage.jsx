import {useAuthContext} from '../../context/AuthContext';
import {useConversationStore} from '../../zustandStore/useConversationStore';

const SingleMessage = ({message}) => {
    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversationStore();

    const isFromMe = message.senderId === authUser._id;
    const chatClassName = isFromMe ? 'chat-end' : 'chat-start';
    const profilePic = isFromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = isFromMe ? 'bg-yellow-500' : '';


    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble text-black ${bubbleBgColor}`}>{message.message}</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
        </div>
    )
}

export default SingleMessage;
