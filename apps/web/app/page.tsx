"use client";

import React, { useState } from "react";
import { useSocket } from "../context/SocketProvider";
import classes from "./page.module.css";

const Home: React.FC = () => {
  const { sendMessage } = useSocket();
  const [message, setMessage] = useState<string>("");

  return (
    <div>
      <div className={classes["container"]}>
        <div className={classes["body"]}>
          <h2 className={classes["title"]}>All message will appear here.</h2>
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
