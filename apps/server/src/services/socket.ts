import Redis from "ioredis";
import { Server } from "socket.io";

const pub = new Redis({
  host: "redis-37454548-syketb-f062.a.aivencloud.com",
  port: 25949,
  username: "default",
  password: "AVNS_mI6MWp4v2YpjH8AFBaU",
});
const sub = new Redis({
  host: "redis-37454548-syketb-f062.a.aivencloud.com",
  port: 25949,
  username: "default",
  password: "AVNS_mI6MWp4v2YpjH8AFBaU",
});

class SocketService {
  private _io: Server;

  constructor() {
    console.log(`Init socket server...`);
    this._io = new Server({
      cors: {
        allowedHeaders: ["*"],
        origin: "*",
      },
    });
    sub.subscribe("MESSAGES");
  }

  public initListeners() {
    const io = this.io;
    console.log(`Init socket listener.`);
    io.on("connect", (socket) => {
      console.log(`New socket connected: `, socket.id);

      socket.on("emit:message", ({ message }: { message: string }) => {
        console.log(`New Message Rec.`, message);
        pub.publish("MESSAGES", JSON.stringify({ message }));
        // we have to publish new message to the redis
      });
    });
    sub.on("message", (channel, message) => {
      if (channel === "MESSAGES") {
        io.emit("message", message);
      }
    });
  }

  get io() {
    return this._io;
  }
}

export default SocketService;
