"use client";

import React, { useState } from "react";
import { useSocket } from "../context/SocketProvider";
import classes from "./page.module.css";

const Home: React.FC = () => {
  const { sendMessage, messages } = useSocket();
  const [message, setMessage] = useState<string>("");

  console.log({ messages });

  return (
    <div>
      <div className={classes["container"]}>
        <div className={classes["body"]}>
          <h2 className={classes["title"]}>All message will appear here.</h2>
          <div>
            {messages.map((msg: string, i: number) => (
              <li style={{ color: "black" }} key={i}>
                {msg}
              </li>
            ))}
          </div>
        </div>
        <div className={classes["control"]}>
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className={classes["input"]}
            type="text"
          />
          <button
            onClick={() => sendMessage(message)}
            className={classes["send"]}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
