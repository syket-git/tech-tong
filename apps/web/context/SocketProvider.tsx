"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Socket, io } from "socket.io-client";

interface ISocketProviderProps {
  children: React.ReactNode;
}

interface ISocketContext {
  sendMessage: (msg: string) => any;
  messages: string[];
}

export const SocketContext = createContext<ISocketContext | null>(null);

export const useSocket = () => {
  const state = useContext(SocketContext);
  if (!state) throw new Error(`State is undefined`);
  return state;
};

const SocketProvider: React.FC<ISocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<Socket>();
  const [messages, setMessages] = useState<string[]>(
    JSON.parse(window.localStorage.getItem("messages") || "[]")
  );

  const onMessageRec = useCallback((msg: string) => {
    if (msg) {
      const { message } = JSON.parse(msg) as { message: string };
      setMessages((prevM) => [...prevM, message]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage: ISocketContext["sendMessage"] = useCallback(
    (msg: string) => {
      if (socket) {
        socket.emit("emit:message", { message: msg });
      }
    },
    [socket]
  );

  useEffect(() => {
    const _socket = io("http://localhost:8000");
    _socket.on("message", onMessageRec);
    setSocket(_socket);

    // cleanup function
    return () => {
      _socket.disconnect();
      _socket.off("message", onMessageRec);
      setSocket(undefined);
      // localStorage.removeItem("messages");
    };
  }, []);

  return (
    <SocketContext.Provider value={{ sendMessage, messages }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
