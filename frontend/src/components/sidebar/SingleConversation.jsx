import { useConversationStore } from '../../zustandStore/useConversationStore';
import {useSocketContext} from '../../context/SocketContext';

const SingleConversation = ({singleConversation, emoji, lastIndex}) => {
    const {selectedConversation, setSelectedConversation} = useConversationStore();
    const {onlineUsers} = useSocketContext();

    const isOnline = onlineUsers.includes(singleConversation._id);

    const isSelected = selectedConversation?._id === singleConversation._id;
    return (
        <>
            <div 
                className={`flex gap-2 items-center cursor-pointer hover:bg-sky-500 rounded p-2 py-1 ${isSelected ? "bg-sky-500": ""}`} 
                onClick={() => setSelectedConversation(singleConversation)}
            >
                <div className={`avatar ${isOnline ? 'online' : ''}`}>
                    <div className="w-12 rounded-full">
                        <img src={singleConversation.profilePic} />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold text-gray-200">{singleConversation.fullname}</p>
                        <span className="text-sm">{emoji}</span>
                    </div>
                </div>
            </div>
            {!lastIndex && <div className="divider my-0 py-0 h-1"></div>}
        </>
    )
}
export default SingleConversation;
