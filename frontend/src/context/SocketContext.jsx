import {createContext, useState, useEffect, useContext} from 'react';
import {useAuthContext} from './AuthContext';
import io from 'socket.io-client';

const SocketContext = createContext();

//create a hook that we will consume to determine who is online and not online
export const useSocketContext = () => {
    return useContext(SocketContext);
};

export const SocketContextProvider = ({children}) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(() => {
        if(authUser) {
            // const socketConn = io("http://localhost:5000", {
            //     query: {
            //         userId: authUser._id,
            //     }
            // });
            const socketConn = io("https://kcavibes.onrender.com/", {
                query: {
                    userId: authUser._id,
                }
            });
            setSocket(socketConn);

            socketConn.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });

            // clean up function when unmonted
            return () => socketConn.close();
        } else {
            if(socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser])
    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}
