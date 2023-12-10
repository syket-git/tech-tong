"use client";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { io } from "socket.io-client";

interface ISocketProviderProps {
  children: React.ReactNode;
}

interface ISocketContext {
  sendMessage: (msg: string) => any;
}

export const SocketContext = createContext<ISocketContext | null>(null);

export const useSocket = () => {
  const state = useContext(SocketContext);
  if (!state) throw new Error(`State is undefined`);
  return state;
};

const SocketProvider: React.FC<ISocketProviderProps> = ({ children }) => {
  const sendMessage: ISocketContext["sendMessage"] = useCallback(
    (msg: string) => {
      console.log("Send Message", msg);
    },
    []
  );

  useEffect(() => {
    const _socket = io("http://localhost:8000");

    // cleanup function
    return () => {
      _socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ sendMessage }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
