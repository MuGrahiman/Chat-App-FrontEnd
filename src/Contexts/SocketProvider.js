import React, { useContext, useEffect, useState } from "react";
import io from 'socket.io-client'
const socketContext = React.createContext();
const SocketProvider = ({ id, children }) => {
  const [socket, setSocket] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const newSocket = io("http://localhost:5000", { query: { id } });
    newSocket.on("connect", () => {
      setSocket(newSocket);
      setLoading(false);
    });
    return()=> newSocket.close()
  }, [id]);

  useEffect(()=>console.log(socket),[socket])
  if (loading) return <div>Loading...</div>;
  
  
  return (
    <socketContext.Provider value={socket}>{children}</socketContext.Provider>
  );
};
 
export default SocketProvider;

export const useSocket = () => useContext(socketContext);
