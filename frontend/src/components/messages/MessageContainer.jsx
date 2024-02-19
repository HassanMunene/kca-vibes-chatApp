import {useEffect} from 'react';
import { useConversationStore } from '../../zustandStore/useConversationStore';
import {useAuthContext} from '../../context/AuthContext';
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessage } from "react-icons/ti";

const MessageContainer = () => {
    const {selectedConversation, setSelectedConversation} = useConversationStore();

    useEffect(() => {
        //cleanup function when user logs out we want to discard the
        // selectedConversation.
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);

    return (
        <div className="md:min-w-[450px] flex flex-col">
            {!selectedConversation ? <NoChatSelected/> : (
                <>
                    <div className="bg-slate-500 px-4 py-2 mb-2">
                        <span className="label-text">To:</span>{" "}
                        <span className="text-gray-900 font-bold">{selectedConversation.fullname}</span>
                    </div>
                    <Messages/>
                    <MessageInput/>
                </>
            )}
        </div>
    )
}

const NoChatSelected = () => {
    const {authUser} = useAuthContext();
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome{" "}to{" "}<span className="text-yellow-500">KcaVibes</span>{" "}{authUser.fullname}</p>
                <p>Select a chat to start messaging</p>
                <TiMessage className="text-3xl md:text-6xl text-center"/>
            </div>
        </div>
    )
}
export default MessageContainer;
