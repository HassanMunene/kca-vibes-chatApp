import {useAuthContext} from '../../context/AuthContext';
import {useConversationStore} from '../../zustandStore/useConversationStore';
import {extractTime} from '../../utils/extractTime';

const SingleMessage = ({message}) => {
    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversationStore();

    const isFromMe = message.senderId === authUser._id;
    const chatClassName = isFromMe ? 'chat-end' : 'chat-start';
    const profilePic = isFromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = isFromMe ? 'bg-yellow-500' : 'bg-black';
    const textColor = bubbleBgColor === 'bg-yellow-500' ? 'text-black' : 'text-white';
    const formatedTime = extractTime(message.createdAt);


    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble ${textColor} ${bubbleBgColor}`}>{message.message}</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formatedTime}</div>
        </div>
    )
}

export default SingleMessage;
