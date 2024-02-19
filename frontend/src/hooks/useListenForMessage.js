import {useEffect} from 'react';
import {useSocketContext} from '../context/SocketContext';
import {useConversationStore} from '../zustandStore/useConversationStore';
import notificationSound from '../assets/sounds/notification.mp3';

export const useListenForMessage = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversationStore();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage]);
        })

        return () => socket?.off("newMessage");
    }, [socket, setMessages, messages]);
}
