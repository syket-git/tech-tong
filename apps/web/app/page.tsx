/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { useSocket } from "../context/SocketProvider";
import MessageHeader from "./components/MessageHeader";

const Home: React.FC = () => {
  const { sendMessage, messages } = useSocket();
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (message) {
      sendMessage(message);
      setMessage("");
    }
  };

  useEffect(() => {
    // Get the scroll height of the messages container
    const messagesContainer: any = document.getElementById("messages");
    const scrollHeight: number = messagesContainer.scrollHeight;

    // Check if the user is already scrolled to the bottom
    const isScrolledToBottom =
      messagesContainer.scrollTop + messagesContainer.clientHeight >=
      scrollHeight;

    // Scroll to the bottom only if not already there
    if (!isScrolledToBottom) {
      messagesContainer.scrollTo({
        top: scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div>
      <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
        <MessageHeader />
        <div
          id="messages"
          className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        >
          {messages?.map((msg, i) => (
            <div key={i} className="chat-message">
              <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span className="px-4 py-2 break-all rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                      {msg}
                    </span>
                  </div>
                </div>
                <img
                  src="/techTong.png"
                  alt="My profile"
                  className="w-6 h-6 rounded-full order-1"
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0"
          >
            <div className="relative flex">
              <input
                type="text"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Write your message!"
                className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 p-5 bg-gray-200 rounded-md py-3"
              />
              <div className="items-center inset-y-0 hidden sm:flex">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
                >
                  <span className="font-bold">Send</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-6 w-6 ml-2 transform rotate-90"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
